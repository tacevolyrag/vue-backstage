<template>
  <div>
    <router-link to="/admin/boardproducts">後台產品列表</router-link>|
    <router-link to="/admin/order">訂單列表</router-link>|
    <router-link to="/admin/coupons">優惠券列表</router-link>|
    <router-link to="/admin/depositimage">後台儲存圖片</router-link>|
    <router-link to="/admin/login">登入</router-link>|
    <router-view :token="token" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      authSuccess: false,
    };
  },
  methods: {
    checkAuth() {
      this.token = document.cookie.replace(
        /(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
      const apiUrl = `${process.env.VUE_APP_PATH}api/auth/check`;
      this.$http
        .post(apiUrl, {
          api_token: this.token,
        })
        .then(() => {
          this.authSuccess = true;
        })
        .catch(() => {
          this.$router.push('/admin/login');
        });
    },
  },

  created() {
    this.checkAuth();
  },
};
</script>
