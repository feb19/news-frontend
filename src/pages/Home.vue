<template>
  <main-layout>
    <p>特別なお知らせ</p>
    <p>最新のお知らせ</p>
    <news-list></news-list>
    <p>これ以前のお知らせを見る</p>
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

