<template>
  <div class="container-lg h-100 d-flex justify-content-center align-items-center">
    <div class="bg-success bg-opacity-50 p-5 rounded-3 my-3">
      <div>
        <h2 class="mb-3"><i class="bi bi-feather me-2"></i>關於本站</h2>
        <hr />
        <p>
          這個網站設計主軸為吉卜力動畫作品的影片租賃服務，為吉卜力工作室的影迷們提供了一個獨特的平台。
        </p>
        <p>
          無論是《龍貓》、《魔法公主》、《天空之城》還是其他經典作品，我們都致力於為用戶提供方便、快捷的租賃體驗。
        </p>
        <p>
          通過這個網站，您可以輕鬆地租賃和欣賞您最喜愛的吉卜力動畫電影，無論您身在何處，都能隨時隨地沉浸在這些令人驚嘆的故事和精彩的動畫世界中。
        </p>
        <p>
          與此同時，我們也不斷努力擴展和更新我們的影片庫，以確保您能夠總是發現新的、令人振奮的吉卜力作品。
        </p>
        <p>立即加入我們，一同探索吉卜力動畫的奇妙世界吧！</p>
        <div class="text-end">
          <router-link
            to="/login"
            v-if="!loginState"
            class="link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            >後台管理<i class="bi bi-box-arrow-up-right ms-2"></i
          ></router-link>
          <router-link
            to="/admin/products"
            class="link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            v-else
            >前往後台<i class="bi bi-box-arrow-up-right ms-2"></i
          ></router-link>
        </div>
      </div>
      <div>
        <h2 class="mb-3"><i class="bi bi-feather me-2"></i>圖片版權說明</h2>
        <hr />
        <p>對於吉普力工作室釋出的圖片，我們確認這些圖片僅用於本網站的非商業個人練習目的。</p>
        <p>在此，我們對使用這些圖片的方式做以下聲明：</p>
        <ol>
          <li>本網站僅將這些圖片用於個人練習，不涉及任何商業用途。</li>
          <li>我們確保在使用吉普力工作室釋出的圖片時，尊重其版權所有者的權利。</li>
          <li>這些圖片僅用於「在常識範圍內」的用途，不會超出允許的範圍。</li>
        </ol>
        <p>
          我們重申，本網站僅將這些圖片用於非商業個人練習，並確保尊重吉普力工作室的版權和使用條款。
        </p>
        <p class="text-end">
          <a
            href="https://www.ghibli.jp/"
            target="_blank"
            class="link-offset-3 link-underline-opacity-25 link-underline-opacity-100-hover"
            >前往吉卜力工作室<i class="bi bi-box-arrow-up-right ms-2"></i
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_API_URL } = import.meta.env;
export default {
  data() {
    return {
      loginState: false,
    };
  },
  mounted() {
    const loading = this.$loading.show();

    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
      this.loginState = false;
      setTimeout(() => {
        loading.hide();
      }, 500);
      return;
    }

    this.$http.defaults.headers.common.Authorization = token;
    this.$http
      .post(`${VITE_APP_API_URL}/api/user/check`, {})
      .then(() => {
        this.loginState = true;
        loading.hide();
      })
      .catch(() => {
        this.loginState = false;
        loading.hide();
      });
  },
};
</script>

<style scoped></style>
