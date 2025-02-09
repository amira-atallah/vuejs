<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/create">Create</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>


<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  text-align: center;
  font-family: Arial, sans-serif;
}
</style>

