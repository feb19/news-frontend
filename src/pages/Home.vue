<template>
  <main-layout>
    <p>Welcome home</p>
    <news-list></news-list>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/MainLayout.vue'
  import NewsList from '../components/NewsList.vue'
  export default {
    components: {
      MainLayout,
      NewsList
    }
  }
</script>

