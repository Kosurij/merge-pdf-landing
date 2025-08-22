<template>
  <div class="welcome-page">
    <!-- Простая подпись к пазлу -->
    <div class="puzzle-hint">
      <span class="hint-text">
       <PuzzleIcon alt="Puzzle icon" class="puzzle-icon" />
        Click the puzzle icon
      </span>
      <div class="arrow-up"></div>
    </div>

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
import PuzzleIcon from '/src/assets/puzzle.svg'

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

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(-20deg);
  }
  40% {
    transform: translateY(-5px) rotate(-20deg);
  }
  60% {
    transform: translateY(-2px) rotate(-20deg);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.9;
  }
}

/* === Простая подпись к пазлу === */
.puzzle-hint {
  position: fixed;
  top: 15px;
  right: 25px;
  z-index: 1000;
  background: #3b82f6;
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
  animation: fadeIn 0.5s ease-out, bounceUpDown 1.5s ease-in-out infinite;
}

.hint-text {
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}

.puzzle-icon {
  width: 18px;
  height: 18px;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}

.arrow-up {
  position: absolute;
  top: -8px;
  left: 50%;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #3b82f6;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounceUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .puzzle-hint {
    top: 10px;
    right: 15px;
    padding: 14px 18px;
  }
  
  .hint-text {
    font-size: 15px;
  }
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
