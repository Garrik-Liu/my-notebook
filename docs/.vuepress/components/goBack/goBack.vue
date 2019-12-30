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
      const pathname = window.location.pathname;
      pathname.split("/").forEach(name => {
        console.log(name);
        console.log("\n");
      });

      //window.history.go(backUrl);
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