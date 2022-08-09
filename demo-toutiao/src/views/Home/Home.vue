<template>
  <div class="home-container">
    <van-nav-bar
      title="Akokko"
      fixed
      tabber
    />
    <van-pull-refresh v-model="isLoading" :disabled="finished" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <ArticleInfo
          v-for="item in artList"
          :key="item.art_id"
          :title="item.title"
          :author="item.aut_name"
          :comment-count="item.comm_count"
          :pubdate="item.pubdate"
          :cover="item.cover">
        </ArticleInfo>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
// 按需导入API接口
import { getArticleListAPI } from '@/api/articleAPI'
import ArticleInfo from '@/components/Article/ArticleInfo'

export default {
  name: 'Home',
  components: { ArticleInfo },
  created() {
    this.initArticleList()
  },
  data() {
    return {
      page: 1,
      limit: 10,
      artList: [],
      loading: true,
      finished: false,
      isLoading: false
    }
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起GET请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      if (isRefresh) {
        // 证明是下拉刷新
        this.artList = [...res, ...this.artList]
        this.isLoading = false
      } else {
        // 证明是上拉加载
        this.artList = [...this.artList, ...res]
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    onLoad() {
      // console.log('触发了onload事件')
      this.page++
      this.initArticleList()
    },
    onRefresh() {
      // console.log('触发了下拉刷新')
      this.page++
      this.initArticleList(true)
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  padding: 46px 0 50px 0;
}
</style>
