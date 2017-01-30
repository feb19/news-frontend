<template>
  <main-layout>
    <div class="section-header">特別なお知らせ</div>
    <div class="section-header">最新のお知らせ</div>
    <news-list></news-list>
    <!-- <p>これ以前のお知らせを見る</p> -->
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

<style scoped>
  .section-header {
    font-size: 15px;
    color: #616161;
    margin: 0;
    padding: 32px 8px 4px 8px;
  }
</style>
