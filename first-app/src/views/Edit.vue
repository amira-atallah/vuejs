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
      console.log("Fetching item with ID:", route.params.id); // Debugging log

      if (!route.params.id) {
        console.error("❌ No ID found in route params!");
        return;
      }

      api.getById(route.params.id)
        .then((res) => {
          console.log("✅ Item fetched:", res.data);
          item.value = res.data;
        })
        .catch((error) => {
          console.error("❌ Error fetching item:", error);
        });
    });

    const updateItem = () => {
      console.log("Updating item with ID:", route.params.id, item.value); // Debugging log

      if (!route.params.id) {
        console.error("❌ No ID provided for update!");
        return;
      }

      api.update(route.params.id, item.value)
        .then(() => {
          console.log("✅ Update successful!");
          router.push("/");
        })
        .catch((error) => {
          console.error("❌ Update failed:", error);
        });
    };

    return { item, updateItem };
  }
};
</script>
