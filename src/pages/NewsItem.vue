<template>
  <main-layout>
    <p>About page</p>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue'
  export default {
    components: {
      MainLayout
    }
  }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
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
