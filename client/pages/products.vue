<template>
  <div class="root-block">
    <h1>there are your products</h1>
    <div class="products-row" style="display: flex; gap: 20px; flex-wrap: wrap;">
      <div class="product" v-for="product in products">
        <img :src="product.image" alt="" style="width: 200px; height: 250px;">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
  export default {
    name: 'ProductsPage',

    computed: {
      ...mapState('products.service', ['products'])
    },

    mounted() {
      this.getProducts();
      console.log(this.products)
    },

    methods: {
      ...mapActions('products.service', [
        'getProducts'
      ])
    }
  }
</script>
