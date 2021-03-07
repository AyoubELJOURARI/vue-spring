<template>
  <div class="container">
    <div class="row">
      <input
        @change="prodNameChange"
        v-bind:value="prodName"
        type="text"
        name="prodName"
        class="col form-control mr-2"
        placeholder="Name..."
      />
      <input
        @change="prodDescriptionChange"
        v-bind:value="prodDescription"
        type="text"
        name="prodDesc"
        class="col form-control mr-2"
        placeholder="Description..."
      />
      <input
        @change="prodPriceChange"
        v-bind:value="prodPrice"
        type="text"
        name="prodprice"
        class="col form-control mr-2"
        placeholder="Price..."
      />
      <button @click="addProdV" class="col btn btn-primary">
        Add Product
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "input",
  data() {
    return {
      prodName: "",
      prodDescription: "",
      prodPrice: 0
    };
  },
  methods: {
    ...mapActions(["addProd"]),
    prodDescriptionChange(e) {
      this.prodDescription = e.target.value;
    },
    prodNameChange(e) {
      this.prodName = e.target.value;
    },
    prodPriceChange(e) {
      this.prodPrice = e.target.value;
    },
    addProdV() {
      if (
        this.prodDescription != "" &&
        this.prodName != "" &&
        this.prodPrice != ""
      ) {
        let data = JSON.stringify({
          name: this.prodName,
          description: this.prodDescription,
          price: this.prodPrice
        });
        console.log(data);
        this.addProd(data);
      }
    }
  }
};
</script>

<style></style>
