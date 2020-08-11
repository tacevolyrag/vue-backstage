<template>
  <div id="app">
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">首頁</router-link>|
      <router-link to="/about">關於我們</router-link>|
      <router-link to="/products">產品列表</router-link>|
      <router-link to="/cart">購物車</router-link>|
      <router-link to="/paybill">結帳頁面</router-link>|
      <router-link to="/payedbill">結帳完成</router-link>|
    </div>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
<style lang="scss">
@import "./assets/main";

#app {
  font-family: 微軟正黑體;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
