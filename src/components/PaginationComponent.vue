<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination m-0">
      <li class="page-item" :class="{ disabled: !pagination.has_pre }">
        <a
          class="page-link"
          style="cursor: pointer"
          aria-label="Previous"
          @click="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="index in pagination.total_pages" :key="index" class="page-item">
        <span v-if="index === pagination.current_page" class="page-link active">{{ index }}</span>
        <span v-else class="page-link" style="cursor: pointer" @click="changePage(index)">{{
          index
        }}</span>
      </li>

      <li class="page-item" :class="{ disabled: !pagination.has_next }">
        <a
          class="page-link"
          style="cursor: pointer"
          aria-label="Next"
          @click="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  methods: {
    changePage(page) {
      this.$emit('current-page', page);
    },
  },
};
</script>
