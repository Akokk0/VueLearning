<template>
  <div class="number-container d-flex justify-content-center align-items-center">
    <!-- 减 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="sub">-</button>
    <!-- 购买的数量 -->
    <span class="number-box">{{ count }}</span>
    <!-- 加 1 的按钮 -->
    <button type="button" class="btn btn-light btn-sm" @click="add">+</button>
  </div>
</template>

<script>
import eventBus from "@/components/eventBus";

export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 1
    }
  },
  methods: {
    add() {
      eventBus.$emit('goods-count-change', {id: this.id, value: this.count + 1})
    },
    sub() {
      if (this.count - 1 === 0) return
      eventBus.$emit('goods-count-change', {id: this.id, value: this.count - 1})
    }
  }
}
</script>

<style lang="less" scoped>
.number-box {
  min-width: 30px;
  text-align: center;
  margin: 0 5px;
  font-size: 12px;
}

.btn-sm {
  width: 30px;
}
</style>
