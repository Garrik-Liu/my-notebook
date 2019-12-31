import Vue from "vue";
import goBack from './goBack.vue';

export default {
    data() {
        return {
            currentUrl: '',
            previousUrl: '',
        };
    },
    updated() {
        if (this.currentUrl !== '') this.previousUrl = this.currentUrl;
        this.currentUrl = window.location.href;

        // 等待 dom 加载完成之后执行
        this.$nextTick(() => {
            this.update();
        });
    },
    methods: {
        update() {
            let exist = false;

            // 获取 sidebar
            const sidebar = document.getElementsByClassName('sidebar')[0];

            // 判断 goBack 组件是否已经存在，如果存在就删除
            const gobackBtn = document.getElementsByClassName('custom-component-goback')[0];
            if (gobackBtn) {
                gobackBtn.parentNode.removeChild(gobackBtn);
            }

            // 创建 go-back 组件
            const goBackTemp = Vue.extend(goBack);
            const goBackIns = new goBackTemp();
            goBackIns.previousUrl = this.previousUrl;
            console.log('this.previousUrl: ', this.previousUrl)
            console.log('goBackIns.previousUrl: ', goBackIns.previousUrl)
                // 挂载组件
            goBackIns.$mount();
            // 插入组件到侧边栏之前
            sidebar.insertBefore(goBackIns.$el, sidebar.firstChild);
        }
    }
}