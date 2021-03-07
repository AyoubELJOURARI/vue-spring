<template>
  <productinput />
  <productlist />
</template>

<script>
// @ is an alias to /src
import productlist from "../components/productlist";
import productinput from "../components/productinput";

export default {
  name: "List",
  components: {
    productlist,
    productinput
  }
};
</script>
<style></style>
