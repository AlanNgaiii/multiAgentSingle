<template>
  <div></div>
</template>

<script>
export default {
  name: "index",
  methods: {
    isMobile() {
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        return true; // 手机端
      } else {
        return false; // PC端
      }
    },
  },
  mounted() {
    if (this.isMobile()) {
      this.$router.replace({
        path: "/h5",
      });
    } else {
      this.$router.replace({
        path: "/pc",
      });
    }
  },
};
</script>
