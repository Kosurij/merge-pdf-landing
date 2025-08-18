<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import { RouterView } from 'vue-router'
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const TITLES: Record<string, string> = {
  '/welcome': 'Welcome | Combine PDF',
  '/faq': 'FAQ | Combine PDF',
  '/': 'Combine PDF - Merge PDF Files Online',
}

const getTitleFromPath = (path: string): string => TITLES[path] || 'Combine PDF'

watch(
    () => route.path,
    (newPath) => {
      document.title = getTitleFromPath(newPath)
    },
    { immediate: true }
)
</script>

<template>
  <div class="layout">
    <NavigationBar />
    <RouterView />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text-primary);
}
</style>
