<template>
  <div class="welcome-page">
    <header class="welcome-header">
      <h1 class="title">🎉 Welcome to Combine PDF</h1>
      <p class="subtitle">
        Your extension has been installed successfully! Follow these steps to get started.
      </p>
    </header>

    <main class="steps">
      <section class="step-row">
        <div class="step-row-visual">
          <div class="step-image-container">
            <img 
              src="@/assets/first_step.webp" 
              alt="Pin the extension to browser toolbar" 
              class="step-image"
            />
          </div>
        </div>
        <div class="step-row-text">
          <h2>📌 Pin the Extension</h2>
          <p>
            Click the puzzle icon in your browser toolbar, then pin <strong>Combine PDF</strong> to keep it visible and easily accessible.
          </p>
        </div>
      </section>

      <section class="step-row">
        <div class="step-row-visual">
          <div class="step-image-container">
            <img 
              src="@/assets/second_step.webp" 
              alt="Start using the extension" 
              class="step-image"
            />
          </div>
        </div>
        <div class="step-row-text">
          <h2>▶️ Start Using</h2>
          <p>
            Click the <strong>Combine PDF</strong> icon in your toolbar to start merging your first PDF files.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useConfetti } from '@/composables/useConfetti'

const { launchConfetti } = useConfetti()

onMounted(launchConfetti)
</script>

<style scoped>
.welcome-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 120px 32px;
  color: var(--color-text-primary);
  background: var(--color-background);
}

.welcome-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 800px;
}

.title {
  font-size: 48px;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
  letter-spacing: -0.01em;
  word-break: break-word;
  margin-bottom: 16px;
}

.subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }
  
  .subtitle {
    font-size: 16px;
  }
}

.steps {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 1080px;
}

/* === Step Row Layout === */
.step-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-background-secondary);
  padding: 32px 24px;
  border-radius: 20px;
  gap: 32px;
  width: 100%;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.step-row:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-accent);
}

/* === Visual Elements === */
.step-row-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

/* Step Images */
.step-image-container {
  width: 100%;
  max-width: 500px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

.step-image {
  width: 100%;
  height: auto;
  max-height: 400px;
}





/* === Text === */
.step-row-text {
  text-align: center;
  max-width: 640px;
}

.step-row-text h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.step-row-text p {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* === Desktop Layout === */
@media (min-width: 768px) {
  .step-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
  }

  .step-row-visual {
    width: 45%;
    min-height: 250px;
  }

  .step-row-text {
    width: 55%;
    text-align: left;
  }
}

/* === Large screens === */
@media (min-width: 1280px) {
  .step-row-text h2 {
    font-size: 28px;
  }

  .step-row-text p {
    font-size: 18px;
  }
}
</style>
