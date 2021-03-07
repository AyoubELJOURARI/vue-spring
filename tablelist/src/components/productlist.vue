<template>
  <h2>Table of Products</h2>
  <div v-for="prod in AllProducts" :key="prod.id">
    <Proditem :prod="prod" />
  </div>
</template>

<script>
import Proditem from "@/components/productItem";
import { mapGetters } from "vuex";

export default {
  name: "productlist",
  component: {
    Proditem
  },
  computed: {
    ...mapGetters(["AllProducts"])
  },
  mounted() {
    this.$store.dispatch("getPosts");
  },

  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
