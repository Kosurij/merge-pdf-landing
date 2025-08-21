<template>
  <div class="uninstall-page">
    <div class="form-container">
      <iframe 
        src="https://docs.google.com/forms/d/1uE42s-LnmE18981SZrnWyVM24yCt8CFB77kp3mGf7TM/viewform?embedded=true"
        class="iframe"
        frameborder="0"
        marginwidth="0"
        marginheight="0"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'light')
})
</script>

<style scoped>
.iframe {
  width: 100%;
  height: 95vh;
  min-height: 650px;
}

.uninstall-page {
  min-height: 100vh;
  padding: 2rem 1rem;
}

.form-container {
  border-radius: 12px;
  overflow: hidden;
}

@media (max-width: 768px) {
  .uninstall-page {
    padding: 1rem;
  }
}
</style>
