<template>
  <div class="home vw-100 vh-100 position-absolute top-0">
    <div class="home-banner vh-100 d-flex">
      <router-link to="#info" class="m-auto btn btn-warning">遇見吉卜力</router-link>
    </div>
    <div class="vh-100" id="info">123</div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
.home-banner {
  background-image: url('https://www.ghibli.jp/gallery/chihiro008.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
}
</style>
