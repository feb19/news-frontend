<template>
  <div class="container">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </li>
    </ul>

    <slot></slot>
  </div>
</template>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background: #f9f7f5;
  }
</style> 
