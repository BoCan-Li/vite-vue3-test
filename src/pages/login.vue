<script setup lang="ts">
import { NInput, NDatePicker, NSpace, NCard, NEl } from 'naive-ui'
// import Api from '@/api'
// Api.login('li', '123')
</script>

<template>
  <div>
    <n-space vertical>
      <n-input />
      <n-date-picker />
    </n-space>
    <n-card>
      <n-el
        tag="span"
        style="
          color: var(--primary-color);
          transition: 0.3s var(--cubic-bezier-ease-in-out);
        "
      >
        我是个 span 标签
      </n-el>
    </n-card>
  </div>
</template>

<style></style>
