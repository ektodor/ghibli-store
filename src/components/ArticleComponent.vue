<template>
  <v-form @submit="isCreateArticle ? createArticle() : updateArticle()" v-slot="{ errors }">
    <div
      ref="modal"
      class="modal fade"
      id="articleModal"
      tabindex="-1"
      aria-labelledby="articleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-secondary">
            <h1 class="modal-title fs-5" id="articleModalLabel">
              {{ isCreateArticle ? '新增文章' : '編輯文章' }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card mb-3 m-auto" style="max-width: 540px">
              <div class="row g-0">
                <div class="col-4">
                  <img :src="article.image" class="img-fluid rounded-start h-100" alt="photo" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <label for="imageUrl" class="form-label card-text"
                      ><small class="text-muted">輸入圖片網址</small></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      placeholder="請輸入圖片連結"
                      v-model="article.image"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mb-3 row">
              <div class="col-6">
                <label for="title" class="form-label">標題</label>
                <v-field
                  id="title"
                  :class="{ 'is-invalid': errors['標題'] }"
                  name="標題"
                  rules="required"
                  type="text"
                  class="form-control"
                  :value="article.title"
                  v-model="article.title"
                />
                <error-message name="標題" class="invalid-feedback"></error-message>
              </div>
              <div class="col-6">
                <label for="author" class="form-label">作者</label>
                <v-field
                  id="author"
                  :class="{ 'is-invalid': errors['作者'] }"
                  name="作者"
                  rules="required"
                  type="text"
                  class="form-control"
                  :value="article.author"
                  v-model="article.author"
                />
                <error-message name="作者" class="invalid-feedback"></error-message>
              </div>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">簡介</label>
              <v-field
                as="textarea"
                id="description"
                :class="{ 'is-invalid': errors['簡介'] }"
                rules="required"
                name="簡介"
                type="text"
                class="form-control"
                :value="article.description"
                v-model="article.description"
              ></v-field>
              <error-message name="簡介" class="invalid-feedback"></error-message>
            </div>
            <!-- <div class="mb-3">
              <label class="form-label" for="content">內容</label>
              <v-field
                as="textarea"
                v-model="article.content"
                :class="{ 'is-invalid': errors['內容'] }"
                rules="required"
                type="text"
                class="form-control me-2 border-3 border"
                id="content"
                name="內容"
              ></v-field>
              <error-message name="內容" class="invalid-feedback"></error-message>
            </div> -->
            <div class="mb-3">
              <label class="form-label" for="tag">標籤</label>
              <div class="d-flex">
                <input
                  v-model="tag"
                  type="text"
                  class="form-control me-2 border-3 border"
                  id="tag"
                />
                <a @click.prevent="addTag" class="btn border border-2 w-50 btn-secondary"
                  >新增標籤</a
                >
              </div>
              <div class="mt-2 d-flex gap-2 flex-wrap">
                <span
                  v-for="item in tags"
                  :key="item"
                  class="p-2 badge text-bg-warning justify-content-center align-items-center d-flex"
                  >{{ item
                  }}<a
                    class="btn-close btn-close-black ms-1 btn"
                    style="height: 5px"
                    @click.prevent="deleteTag(item)"
                  ></a
                ></span>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label" for="coupons">優惠卷</label>
              <select v-model="coupon" class="form-control me-2 border-3 border" id="coupons">
                <option selected value="無優惠卷">請選擇搭配優惠卷</option>
                <option v-for="item in coupons" :key="item.due_date" :value="item.code">
                  {{ item.title }}
                </option>
              </select>
              <input type="text" class="mt-3" :value="coupon" disabled />
            </div>
            <div class="mb-3">
              <input
                v-model="article.isPublic"
                :true-value="true"
                :false-value="false"
                type="checkbox"
                class="form-check-input me-2 border-3 border"
                id="is_enabled"
              />
              <label class="form-label" for="is_enabled">是否公開</label>
            </div>
          </div>
          <div class="modal-footer">
            <a type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</a>
            <button type="submit" class="btn btn-primary">儲存</button>
          </div>
        </div>
      </div>
    </div>
  </v-form>
</template>

<script>
import { Modal } from 'bootstrap';
import { timestampToTwTime, twTimeToTimestamp } from '@/plugin/utils';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env;
export default {
  data() {
    return {
      article: {},
      tag: '',
      tags: [],
      coupon: '無優惠卷',
      isCreateArticle: false,
      modal: null,
    };
  },
  props: ['tempArticle', 'coupons'],
  emits: ['article-modal', 'read-articles'],
  watch: {
    tempArticle() {
      this.article = this.tempArticle;
      this.isCreateArticle = !(Object.keys(this.article).length > 0);
      this.article.isPublic = this.isCreateArticle ? false : this.article.isPublic;
      // 新增或更新需要但是取得資料不會有?!
      this.article.content = '內容';
      if (!this.isCreateArticle) {
        this.tags = this.article.tags[0].tags;
        this.coupon = this.article.tags[0].coupon;
      } else {
        this.tags = [];
        this.coupon = '無優惠卷';
      }
    },
  },
  methods: {
    timestampToTwTime,
    twTimeToTimestamp,
    createArticle() {
      const tags = [
        {
          tags: this.tags,
          coupon: this.coupon,
        },
      ];
      this.article.tags = tags;
      this.article.create_at = Math.floor(new Date().getTime() / 1000);
      // console.log(this.article);
      this.$http
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article`, {
          data: this.article,
        })
        .then(() => {
          this.$emit('read-articles');
          this.modal.hide();
        })
        .catch((err) => {
          console.dir(err.message);
        });
    },
    updateArticle() {
      const tags = [
        {
          tags: this.tags,
          coupon: this.coupon,
        },
      ];
      this.article.tags = tags;
      // console.log(this.article);
      this.$http
        .put(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article/${this.article.id}`, {
          data: this.article,
        })
        .then(() => {
          this.$emit('read-articles');
          this.modal.hide();
        })
        .catch((err) => {
          console.dir(err.message);
        });
    },
    addTag() {
      if (this.tags === undefined) {
        this.tags = [];
      }
      this.tags.push(this.tag);
      this.tag = '';
    },
    deleteTag(value) {
      this.tags = this.tags.filter((item) => item !== value);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.$emit('article-modal', this.modal);
  },
};
</script>
