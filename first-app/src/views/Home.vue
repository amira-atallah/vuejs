<template>
  <div>
    <h1>Items List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
        <button @click="editItem(item.id)">Edit</button>
        <button @click="deleteItem(item.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../services/api.js";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const items = ref([]);
    const router = useRouter();

    const fetchItems = () => {
      api.getAll().then((res) => (items.value = res.data));
    };

    const editItem = (id) => {
      router.push(`/edit/${id}`);
    };

    const deleteItem = (id) => {
      api.delete(id).then(() => fetchItems());
    };

    onMounted(fetchItems);

    return { items, editItem, deleteItem };
  }
};
</script>
