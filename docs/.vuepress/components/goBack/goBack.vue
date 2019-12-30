<template>
  <div class="custom-component-goback">
    <span
      class="goback-btn"
      @click="gobackClick"
    >
      返回上一级
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    gobackClick() {
      const url = window.location.href;
      const lastSlash = url.lastIndexOf("/");
      let backUrl = url;
      if (lastSlash !== -1) {
        backUrl = url.substring(0, lastSlash);
      }

      console.log(backUrl);

      //window.history.back();
    }
  }
};
</script>

<style>
.custom-component-goback {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin-left: 1.3rem;
  margin-top: 10px;
  margin-bottom: -20px;
}

.goback-btn {
  user-select: none;
  cursor: pointer;
  color: #3eaf7c;
  font-size: 1.25em;
  font-weight: 700;
  line-height: 1.7;
}

.goback-btn:hover {
  color: #72cda4;
}
</style>