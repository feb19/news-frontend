<template>
  <div class="list">

    <router-link class="list-item" to="/news20170130">
      <div class="list-image"><img src="../assets/icon_error.svg"></div>
      <div>
        <div class="list-title">title</div>
        <div class="list-date">2017年1月30日 12;00</div>
      </div>
    </router-link>

    <router-link class="list-item" to="/news20170130">
      <div class="list-image"><img src="../assets/icon_info.svg"></div>
      <div>
        <div class="list-title">title</div>
        <div class="list-date">2017年1月30日 12;00</div>
      </div>
    </router-link>

    <router-link class="list-item list-single" to="/news20170130">過去のお知らせを見る</router-link>

  </div>
</template>

<style scoped>
  .list {
    background-color: white;
  }
  .list-item {
    display: flex;
    padding: 8px;
    text-decoration: none;
    border-bottom: 1px solid #f9f7f5;
    background-image: url('../assets/arrow.svg');
    background-position: 98% 50%;
    background-size: 6px 10px;
    background-repeat: no-repeat;
  }
  .list-single {
    font-size: 16px;
    color: black;
    height: 50px;
  }
  .list-item img {
    margin: 0 auto;
  }
  .list-image {
    width: 32px;
  }
  .list-title {
    color: black;
    font-size: 16px;
  }
  .list-date {
    color: #616161;
    font-size: 12px;
  }
</style>
