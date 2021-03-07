<template>
  <div class="container">
    <h1>Hello test</h1>
    <div class="row my-3 justify-content-between">
      <h3 v-if="!editing" class="col">{{ prod.name }}</h3>
      <input
        v-bind:value="prodName"
        @change="prodNameChange"
        v-else
        type="text"
        class="col form-control"
      />
      <h3 v-if="!editing" class="col">{{ prod.description }}</h3>
      <input
        v-bind:value="prodDesc"
        @change="prodDescChange"
        v-else
        type="text"
        class="col form-control"
      />
      <h3 v-if="!editing" class="col">{{ prod.price }}</h3>
      <input
        v-bind:value="prodPrice"
        @change="todocomChange"
        v-else
        type="text"
        class="col form-control"
      />
      <button @click="updatetodo(prod)" class="col btn btn-primary mx-2">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button @click="deleteTodo(prod.id)" class="col btn btn-danger">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    prod: {}
  },
  data() {
    return {
      prodDesc: "",
      prodName: "",
      prodPrice: 0,
      editing: false
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    prodDescChange(e) {
      this.prodDesc = e.target.value;
    },
    prodNameChange(e) {
      this.prodName = e.target.value;
    },
    todocomChange(e) {
      this.prodPrice = e.target.value;
    },
    updatetodo(prod) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.prodDesc = prod.description;
        this.prodName = prod.name;
        this.prodPrice = prod.price;
        this.updateTodo(prod);
      } else {
        prod.description = this.prodDesc;
        prod.name = this.prodName;
        prod.price = this.prodPrice;
      }
    }
  }
};
</script>

<style></style>
