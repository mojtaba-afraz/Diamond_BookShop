const BaseURL = 'https://6102a09f79ed680017482214.mockapi.io/api/v1/Books'
export const state = () => ({
  products:null,
})

export const getters = {
  GET_PRODUCT(state){
    return state.products
  }
}

export const mutations = {
  SET_PRODUCTS(state,data){
    state.products = data
  },
}

export const actions = {
  async GetBooks({commit, state }) {
    const books = await this.$axios.get(`${BaseURL}`)
    commit("SET_PRODUCTS", books.data);
  },

}
