<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="card text-center">
      <div class="card-header h2 product-title">{{ product.title }}</div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <img :src="product.imageUrl" class="img-fluid" alt />
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <blockquote class="blockquote">
                <p class="h4 text-center py-3 product-title">{{ product.content }}</p>
                <span class="h5">{{ product.description }}</span>
              </blockquote>
              <div class="d-flex justify-content-around my-5 product-price">
                <div class="h6 product-origin" v-if="product.price">
                  原價 ${{ product.origin_price}} 元</div>
                <div class="h5 product-off" v-if="product.price">
                  特價 ${{ product.price}} 元</div>
              </div>
              <select v-model="product.num" class="form-control mt-3" name>
                <option value="0" disabled selected>請選擇數量</option>
                <option
                  v-for="productNum in 10"
                  :key="productNum"
                  :value="productNum"
                >數量 {{ productNum }} {{ product.unit }}</option>
              </select>
              <div class="card-footer modal-footer mt-3">
                <div class="mr-3 product-off h5" v-if="product.num">
                  總計
                  <strong class="product-off">${{ product.price * product.num }} 元</strong>
                </div>
                <button
                  type="button"
                  class="btn"
                  @click="detailAddToCart(product,product.num)"
                  v-if="product.num"
                >加到購物車</button>
                <button
                  type="button"
                  class="btn"
                  @click="detailAddToCart(detailProduct,detailProduct.num)"
                  v-else
                  disabled
                >加到購物車</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      this.isLoading = true;
      const { id } = this.$route.params;
      const getProductApi = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.$http.get(getProductApi).then((res) => {
        this.product = res.data.data;
        console.log(this.product);
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style>
.product-title {
  color: #2a1a07;
  font-weight: bolder;
}

.product-origin {
  position: relative;
  color: #000;
  font-weight: bolder;
}
.product-origin::after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  height: 55%;
  border-bottom: 2px solid #f00;
}
.product-off {
  color: #2a1a07;
  font-weight: bolder;
}
.card-footer button {
  background-color: #2a1a07;
  color: #fff;
}
</style>
