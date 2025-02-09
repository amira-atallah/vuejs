<template>
  <div>
    <h1>Create Item</h1>
    <input v-model="newItem" placeholder="Enter item name" />
    <button @click="addItem">Add</button>
  </div>
</template>


<script>
import api from "../services/api.js";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const newItem = ref("");
    const router = useRouter();

    const addItem = () => {
      if (newItem.value) {
        api.create({ name: newItem.value }).then(() => {
          router.push("/");
        });
      }
    };

    return { newItem, addItem };
  }
};
</script>
