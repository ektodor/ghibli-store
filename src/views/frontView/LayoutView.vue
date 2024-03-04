<template>
  AdminArticleView
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/admin/products">products</RouterLink>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
};
</script>
