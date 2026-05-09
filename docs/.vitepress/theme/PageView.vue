<template>
  <div class="page-view" v-if="!isIndex">
    <span id="busuanzi_container_page_pv">
      <span class="page-view-label">页面浏览量：</span>
      <span id="busuanzi_value_page_pv" class="page-view-value"></span>
      <span class="page-view-unit">次</span>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isIndex = computed(() => route.path === '/' || route.path.endsWith('/index.html'))
</script>

<style scoped>
.page-view {
  display: inline-flex;
  align-items: center;
  margin-left: 16px;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.page-view-label {
  font-size: 12px;
}

.page-view-value {
  font-weight: 500;
  color: var(--vp-c-text-1);
  margin: 0 2px;
}

.page-view-unit {
  font-size: 12px;
}
</style>
