<template>
  <div>
    <h1>Edit Item</h1>
    <input v-model="item.name" placeholder="Enter new name" />
    <button @click="updateItem">Update</button>
  </div>
</template>

<script>
import api from "../services/api.js";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const item = ref({ name: "" });
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      api.getOne(route.params.id).then((res) => (item.value = res.data));
    });

    const updateItem = () => {
      api.update(route.params.id, item.value).then(() => {
        router.push("/");
      });
    };

    return { item, updateItem };
  }
};
</script>
