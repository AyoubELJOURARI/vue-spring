import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: []
  },
  getters: {
    AllProducts: state => state.products
  },
  mutations: {
    SET_Prod(state, Products) {
      state.products = Products;
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
        commit("SET_Prod", response.data);
      });
    },
    addProd(mta) {
      console.log(mta);
      axios.post("http://localhost:8080/product", mta).then(function(response) {
        console.log(response);
      });
    }
  },
  modules: {}
});
