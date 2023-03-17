<template>
  <div class="v-top">
    <p>横坐标 {{ x }}</p>
    <p>纵坐标 {{ y }}</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useMouse } from '@vueuse/core'
// import request from '@/utils/axios'

const { x, y } = useMouse()
onMounted(() => {
  // request({ url: '', method: 'get' })
})
</script>

<style lang="less">
:root {
  --margin-24: 24px;
}
.v-top {
  margin-top: var(--margin-24);
}
</style>
