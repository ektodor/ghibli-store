<!-- eslint-disable max-len -->
<template>
  <div class="home w-100 vh-100 position-absolute top-0">
    <div class="home-banner vh-100 d-flex">
      <router-link
        to="#topic"
        style="--bs-icon-link-transform: translate3d(0, 0.2rem, 0); min-width: 300px"
        class="icon-link icon-link-hover m-auto btn p-4 bg-white bg-opacity-25 d-flex flex-column"
        ><h3 class="m-0">遇見吉卜力</h3>
        <i class="bi bi-caret-down fs-1"></i
      ></router-link>
    </div>
    <div
      class="vh-100 container-lg py-3"
      id="topic"
      style="
        background-image: url('https://www.ghibli.jp/img/totoro.png');
        background-position: center;
      "
    >
      <div
        class="d-flex justify-content-around align-items-center h-100 flex-column flex-lg-row gap-5"
      >
        <router-link
          to="/products"
          class="icon-link w-50 h-50 icon-link-hover d-flex flex-column rounded-circle justify-content-center btn btn-warning d-flex align-items-center shadow"
          style="
            /* min-width: 300px;
            height: 300px; */
            --bs-icon-link-transform: translate3d(0, -0.5rem, 0);
          "
        >
          <h3>強檔片單</h3>
          <i class="bi bi-hand-index-thumb fs-3"></i>
        </router-link>

        <router-link
          to="/news"
          class="icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-circle justify-content-center btn btn-warning d-flex align-items-center shadow"
          style="--bs-icon-link-transform: translate3d(0, -0.5rem, 0)"
        >
          <h3>活動消息</h3>
          <i class="bi bi-hand-index-thumb fs-3"></i>
        </router-link>

        <router-link
          to="/about"
          class="icon-link icon-link-hover w-50 h-50 d-flex flex-column rounded-circle justify-content-center btn btn-warning d-flex align-items-center shadow"
          style="--bs-icon-link-transform: translate3d(0, -0.5rem, 0)"
        >
          <h3>關於我們</h3>
          <i class="bi bi-hand-index-thumb fs-3"></i>
        </router-link>
      </div>
    </div>
    <div class="vh-100 bg-success py-3" id="video">
      <div class="container-lg">
        <h2>最新片單</h2>
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1661174585122-83a2909163ad?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block img-fluid w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="d-block img-fluid w-100 object-fit-cover"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100 img-fluid" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div class="vh-100 py-3" id="news"></div>
    <footer class="bg-secondary bg-opacity-75 z-1 d-flex" style="height: 50px">
      <span class="m-auto"
        >Copyright<i class="bi bi-c-circle fs-6 mx-2"></i>{{ new Date().getFullYear() }} Tippy
        Wang</span
      >
      <!-- <div class="text-center">
        <router-link to="/login" v-if="!loginState" class="btn btn-success me-lg-1"
          >後台管理</router-link
        >
        <router-link to="/admin/products" class="btn btn-success me-lg-1" v-else
          >前往後台</router-link
        >
      </div> -->
    </footer>
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
  background-image: url('https://www.ghibli.jp/gallery/chihiro043.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.75;
}
</style>
