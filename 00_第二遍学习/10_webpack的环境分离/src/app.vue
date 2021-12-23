<template>
  <div>
    {{ message }}
    <button @click="xiugai()">修改message</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '啊啊啊啊',
    };
  },
  methods: {
    xiugai() {
      console.log('点击修改了按钮----');
      this.message = '鹅鹅鹅鹅鹅鹅饿';
    },
  },
};
</script>

<style></style>
