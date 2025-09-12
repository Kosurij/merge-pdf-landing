<template>
  <div class="welcome-page">
    <!-- Большая заметная подсказка к пазлу -->
    <div class="puzzle-hint">
      <div class="hint-content">
        <div class="hint-icon-container">
          <PuzzleIcon alt="Puzzle icon" class="puzzle-icon" />
        </div>
        <div class="hint-text-container">
          <div class="hint-title">Click the puzzle icon</div>
          <div class="hint-subtitle">in your browser toolbar</div>
        </div>
      </div>
      <div class="big-arrow">
        <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" style="transform: rotate(180deg);">
          <path d="M20 5L20 60" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
          <path d="M8 50L20 60L32 50" stroke="#3b82f6" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <header class="welcome-header">
      <h1 class="welcome-title">🎉 Welcome to Combine PDF</h1>
      <p class="welcome-subtitle">
        Your extension has been installed successfully! Follow these steps to get started.
      </p>
    </header>

    <main class="welcome-steps">
      <section class="welcome-step-row">
        <div class="welcome-step-row-visual">
          <div class="welcome-step-image-container">
            <img 
              src="@/assets/first_step.webp" 
              alt="Pin the extension to browser toolbar" 
              class="welcome-step-image"
            />
          </div>
        </div>
        <div class="welcome-step-row-text">
          <h2>📌 Pin the Extension</h2>
          <p>
            Click the puzzle icon in your browser toolbar, then pin <strong>Combine PDF</strong> to keep it visible and easily accessible.
          </p>
        </div>
      </section>

      <section class="welcome-step-row">
        <div class="welcome-step-row-visual">
          <div class="welcome-step-image-container">
            <img 
              src="@/assets/second_step.webp" 
              alt="Start using the extension" 
              class="welcome-step-image"
            />
          </div>
        </div>
        <div class="welcome-step-row-text">
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

onMounted(() => {
  launchConfetti()
  
  // Добавляем мета-теги для предотвращения индексации
  document.title = 'Welcome - Combine PDF'
  
  // Удаляем существующий robots meta если есть
  const existingRobots = document.querySelector('meta[name="robots"]')
  if (existingRobots) {
    existingRobots.remove()
  }
  
  // Добавляем noindex
  const robotsMeta = document.createElement('meta')
  robotsMeta.name = 'robots'
  robotsMeta.content = 'noindex, nofollow'
  document.head.appendChild(robotsMeta)
})
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

/* === Большая заметная подсказка к пазлу === */
.puzzle-hint {
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 24px 28px;
  border-radius: 20px;
  box-shadow: 0 12px 40px rgba(59, 130, 246, 0.5), 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: fadeIn 0.6s ease-out, bounceUpDown 2s ease-in-out infinite 0.6s;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  min-width: 280px;
}

.hint-content {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.hint-icon-container {
  background: rgba(255, 255, 255, 0.2);
  padding: 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.puzzle-icon {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
  flex-shrink: 0;
}

.hint-text-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hint-title {
  font-size: 18px;
  font-weight: 800;
  line-height: 1.2;
  white-space: nowrap;
}

.hint-subtitle {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
  line-height: 1.2;
  white-space: nowrap;
}

.big-arrow {
  position: absolute;
  top: -90px;
  right: 25%;
  transform: translateX(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: arrowBounce 2s ease-in-out infinite 0.6s;
  filter: drop-shadow(0 6px 16px rgba(59, 130, 246, 0.5));
}

.big-arrow svg {
  width: 40px;
  height: 80px;
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
    transform: translateY(-6px);
  }
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateX(50%) translateY(0);
  }
  50% {
    transform: translateX(50%) translateY(-6px);
  }
}

/* Адаптивность для мобильных устройств */
@media (max-width: 768px) {
  .puzzle-hint {
    top: 80px;
    right: 15px;
    padding: 20px 24px;
    min-width: 240px;
  }
  
  .hint-content {
    gap: 12px;
  }
  
  .hint-icon-container {
    padding: 10px;
  }
  
  .puzzle-icon {
    width: 24px;
    height: 24px;
  }
  
  .hint-title {
    font-size: 16px;
  }
  
  .hint-subtitle {
    font-size: 13px;
  }
  
  .big-arrow {
    top: -70px;
    right: 50%;
    transform: translateX(50%);
  }
  
  .big-arrow svg {
    width: 36px;
    height: 70px;
  }
}

.welcome-header {
  text-align: center;
  margin-bottom: 48px;
  max-width: 800px;
}

.welcome-title {
  font-size: 48px;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
  letter-spacing: -0.01em;
  word-break: break-word;
  margin-bottom: 16px;
}

.welcome-subtitle {
  font-size: 20px;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 28px;
  }
  
  .welcome-subtitle {
    font-size: 16px;
  }
}

.welcome-steps {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 1080px;
}

/* === Step Row Layout === */
.welcome-step-row {
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
.welcome-step-row-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

/* Step Images */
.welcome-step-image-container {
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-step-image {
  width: 100%;
  height: auto;
  max-height: 700px;
}


/* === Text === */
.welcome-step-row-text {
  text-align: center;
  max-width: 640px;
}

.welcome-step-row-text h2 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.welcome-step-row-text p {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* === Desktop Layout === */
@media (min-width: 768px) {
  .welcome-step-row {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
  }

  .welcome-step-row-visual {
    width: 60%;
    min-height: 250px;
  }

  .welcome-step-row-text {
    width: 40%;
    text-align: left;
  }
}

/* === Large screens === */
@media (min-width: 1280px) {
  .welcome-step-row-visual {
    width: 65%;
    min-height: 300px;
  }

  .welcome-step-row-text {
    width: 35%;
  }

  .welcome-step-image-container {
    max-width: 900px;
  }

  .welcome-step-image {
    max-height: 800px;
  }

  .welcome-step-row-text h2 {
    font-size: 28px;
  }

  .welcome-step-row-text p {
    font-size: 18px;
  }
}
</style>
