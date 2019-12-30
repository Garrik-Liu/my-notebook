import Vue from "vue";
import goBack from './goBack.vue';

export default {
    updated() {
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

            // 判断 goBack 组件是否已经存在
            sidebar.childNodes.forEach(el => {
                if (el.className === 'custom-component-goback') {
                    exist = true;
                }
            });
            if (exist) return;

            // 创建 go-back 组件
            const goBackTemp = Vue.extend(goBack);
            const goBackIns = new goBackTemp();
            // 挂载组件
            goBackIns.$mount();
            // 插入组件到侧边栏之前
            sidebar.insertBefore(goBackIns.$el, sidebar.firstChild);
        }
    }
}