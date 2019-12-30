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
            // 获取 sidebar
            const sidebar = document.getElementsByClassName('sidebar')[0];
            // 创建 go-back 组件
            const goBack = Vue.extend(goBack);
            sidebar.insertBefore(goBack, sidebar.firstChild);
        }
    }
};