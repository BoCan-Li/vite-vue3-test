<script setup lang="ts">
import { ref } from 'vue'
import {
  NConfigProvider,
  NGlobalStyle,
  NButton,
  darkTheme,
  zhCN,
  dateZhCN,
} from 'naive-ui'

const theme = ref<any>(null)
</script>

<template>
  <n-button @click="theme = darkTheme">深色</n-button>
  <n-button @click="theme = null">浅色</n-button>
  <n-config-provider
    :theme="theme"
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme-overrides="{ common: { fontWeightStrong: '600' } }"
  >
    <n-global-style />
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
