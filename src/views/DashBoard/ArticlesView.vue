<template>
  <div>
    <VueLoading :active="isLoading" :z-index="1060" />
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        建立新的頁面
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm"
              type="button" @click="getArticle(article.id)">
                編輯
              </button>
              <button class="btn btn-outline-danger btn-sm"
              type="button" @click="openDelArticleModal(article)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ArticleModal ref="articleModal" :article="tempArticle"
    :is-new="isNew" @update-article="updateArticle">
    </ArticleModal>
    <DelModal :item="tempArticle" ref="delModal" @del-item="delArticle" />
  </div>
</template>

<script>
// import { mapActions } from 'pinia';
// import { useToastMessageStore } from "@/stores/toastMessage";
import axios from 'axios';
import ArticleModal from '@/components/ArticleModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      articles: [],
      isLoading: false,
      isNew: false,
      tempArticle: {},
      currentPage: 1,
    };
  },
  components: {
    ArticleModal,
    DelModal,
  },
  methods: {
    // ...mapActions(useToastMessageStore, ['pushMessage']),
    getArticles(page = 1) {
      this.currentPage = page;
      const api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/articles?page=${page}`;
      this.isLoading = true;
      axios.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.articles = response.data.articles;
          this.pagination = response.data.pagination;
        }
      }).catch(() => {
        // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
        // console.log('error', error.response, error.request, error.message);
        this.isLoading = false;
        // this.pushMessage({
        //   title: '取得文章資訊失敗',
        //   style: 'danger',
        //   content: error.response.data.message,
        // });
      });
    },
    getArticle(id) {
      const api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${id}`;
      this.isLoading = true;
      axios.get(api).then((response) => {
        this.isLoading = false;
        this.openModal(false, response.data.article);
        this.isNew = false;
      }).catch(() => {
        // axios 的錯誤狀態，可參考：https://github.com/axios/axios#handling-errors
        // console.log('error', error.response, error.request, error.message);
        this.isLoading = false;
        // this.pushMessage({
        //   title: '取得文章資訊失敗',
        //   style: 'danger',
        //   content: error.response.data.message,
        // });
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: new Date().getTime() / 1000,
          tag: [],
        };
        this.isNew = true;
      } else {
        this.tempArticle = { ...item };
        this.isNew = false;
      }
      this.$refs.articleModal.openModal();
    },
    updateArticle(item) {
      this.tempArticle = item;
      let api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article`;
      let httpMethod = 'post';
      // let status = '新增貼文';
      this.isLoading = true;
      if (!this.isNew) {
        api = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${this.tempArticle.id}`;
        httpMethod = 'put';
        // status = '更新貼文';
      }
      const articleComponent = this.$refs.articleModal;
      axios[httpMethod](api, { data: this.tempArticle }).then(() => {
        this.isLoading = false;
        // this.pushMessage({
        //   style: 'success',
        //   title: status,
        //   content: response.data.message,
        // });
        articleComponent.hideModal();
        this.getArticles(this.currentPage);
      }).catch(() => {
        this.isLoading = false;
        // this.pushMessage({
        //   style: 'danger',
        //   title: status,
        //   content: error.response.data.message,
        // });
      });
    },
    openDelArticleModal(item) {
      this.tempArticle = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
    delArticle() {
      const url = `${import.meta.env.VITE_URL}/api/${import.meta.env.VITE_PATH}/admin/article/${this.tempArticle.id}`;
      this.isLoading = true;
      axios.delete(url).then(() => {
        this.isLoading = false;
        // this.pushMessage({
        //   style: 'success',
        //   title: '刪除貼文',
        //   content: response.data.message,
        // });
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getArticles(this.currentPage);
      }).catch(() => {
        this.isLoading = false;
        // this.pushMessage({
        //   style: 'danger',
        //   title: '刪除貼文',
        //   content: error.response.data.message,
        // });
      });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>
