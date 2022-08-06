<template>
  <div class="app-container">
    <!--Header头部区域-->
    <Header title="购物车案例"></Header>

<!--  循环渲染每一个商品的信息  -->
    <Goods v-for="item in list" :key="item.id" :item="item" @state-change="getNewState"></Goods>
<!--    Footer区域-->
    <Footer :is-full="fullState" :total-price="totalPrice" :total-count="totalCount" @fullstate-change="getNewFullState"></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import Header from "@/components/Header/Header";
import Goods from "@/components/Goods/Goods";
import Footer from "@/components/Footer/Footer";
import eventBus from "@/components/eventBus";

export default {
  created() {
    this.initCartList()

    eventBus.$on('goods-count-change', val => {
      console.log('goods-count-change')
      this.list.some(item => {
        if (item.id == val.id) {
          item.goods_count = val.value
          return true
        }
      })
    })
  },
  components: {
    Header,
    Goods,
    Footer
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    //动态计算出全选的状态是true还是false
    fullState() {
      return this.list.every(item => item.goods_state)
    },
    totalPrice() {
      return this.list.filter(item => item.goods_state).reduce((total, item) => total += item.goods_price * item.goods_count, 0)
    },
    totalCount() {
      return this.list.filter(item => item.goods_state).reduce((total, item) => total += item.goods_count, 0)
    }
  },
  methods: {
    async initCartList() {
      try {
        const {data : res} = await axios.get('https://www.escook.cn/api/cart')
        if (res.status >= 200 && res.status < 300) {
          this.list = res.list
          console.log(this.list[0])
        }
      } catch (e) {
        console.log(e)
      }
    },
    //事件接收函数
    getNewState(e) {
      this.list.some(item => {
        if (item.id === e.id) {
          item.goods_state = e.value
          return true
        }
      })
    },
    getNewFullState(e) {
      this.list.forEach(item => {
        item.goods_state = e
      })
    }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
