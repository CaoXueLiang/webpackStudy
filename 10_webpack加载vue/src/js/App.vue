<template>
  <div class="textCss">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      message: "我是vue页面",
    };
  },
};
</script>

<style scoped>
.textCss {
  color: #ff0000;
  font-size: 14px;
}
</style>
