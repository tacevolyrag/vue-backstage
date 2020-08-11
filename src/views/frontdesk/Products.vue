<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="content">
        <div class="d-flex flex-wrap justify-content-between">
          <div
            class="products-list shadow-sm bg-white rounded"
            v-for="product in products"
            :key="product.id"
          >
            <div class="card" style="width: 22rem; height: 450px">
              <div
                :style="{backgroundImage: `url(${product.imageUrl})`}"
                style="height: 200px; background-size: cover; background-position: center;"
              ></div>
              <div class="card-body">
                <span class="badge badge-light float-right">{{ product.category }}</span>
                <h5 class="card-title product-title">
                  <a href="#" @click="getProductDetail(product.id)">{{ product.title }}</a>
                </h5>
                <p class="card-text">{{ product.content }}</p>
              </div>
              <div class="d-flex justify-content-around">
                <div class="h5" v-if="!product.price">原價 ${{ product.origin_price }} 元</div>
                <div v-else class="product-price">
                  <div class="h6 product-origin">原價 ${{ product.origin_price }} 元</div>
                </div>
                <div class="h5 product-off">特價 ${{ product.price }} 元</div>
              </div>
              <div class="modal-footer card-footer mt-3">
                <button
                  type="button"
                  class="btn product-detail"
                  @click="getProductDetail(product.id)"
                >商品資訊</button>
                <button type="button" class="btn ml-auto" @click="addToCart(product)">加入購物車</button>
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
      isLoading: false,
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const getProductsApi = `${process.env.VUE_APP_PATH}api/${process.env.VUE_APP_UUID}/ec/products`;
      this.$http.get(getProductsApi).then((response) => {
        this.products = response.data.data;
        this.isLoading = false;
      });
    },
    getProductDetail(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style>
.product-title a {
  color: #2a1a07;
  text-decoration: none;
  font-weight: bolder;
}
.products-list {
  margin-bottom: 25px;
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
.card-footer button{
  background-color: #2a1a07;
  color: #fff;
  transition: 0.3s;
}
.card-footer button:hover{
  background-color: #2a1a07;
  color: #fff;
}
.card-footer .product-detail {
  background-color: #fff;
  color: #2a1a07;
  border-color: #2a1a07;
  transition: 0.3s;
}
.card-footer .product-detail:hover {
  color: #fff;
}
</style>
