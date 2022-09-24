export const state = () => {
  products: null;
}

export const mutations = {
  SET_PRODUCTS: (state, products) => state.products = products,
}

export const actions = {
  async getProducts({ commit }) {
    const products = await this.$axios.$get('http://localhost:3000/api/v1/product')

    commit('SET_PRODUCTS', products)
  }
}
