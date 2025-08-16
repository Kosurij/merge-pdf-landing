<template>
  <div class="welcome-page">
    <header class="welcome-header">
      <h1 class="title">🎉 Welcome to Merge PDF</h1>
      <p class="subtitle">
        Your extension has been installed successfully! Follow these steps to get started.
      </p>
    </header>

    <main class="steps">
      <section class="step-row">
        <div class="step-row-visual">
          <div class="extension-pin">
            <div class="browser-toolbar">
              <div class="toolbar-item">🔍</div>
              <div class="toolbar-item">📚</div>
              <div class="toolbar-item extension-icon">📄</div>
              <div class="toolbar-item">⚙️</div>
            </div>
          </div>
        </div>
        <div class="step-row-text">
          <h2>📌 Pin the Extension</h2>
          <p>
            Click the puzzle icon in your browser toolbar, then pin <strong>Merge PDF</strong> to keep it visible and easily accessible.
          </p>
        </div>
      </section>

      <section class="step-row">
        <div class="step-row-visual">
          <div class="extension-usage">
            <div class="extension-popup">
              <div class="popup-header">Merge PDF</div>
              <div class="popup-content">
                <div class="upload-area">📁 Drop PDF files here</div>
                <div class="action-button">Merge Files</div>
              </div>
            </div>
          </div>
        </div>
        <div class="step-row-text">
          <h2>▶️ Start Using</h2>
          <p>
            Click the <strong>Merge PDF</strong> icon in your toolbar to start merging your first PDF files.
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

/* Extension Pin */
.extension-pin {
  background: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--shadow-md);
}

.browser-toolbar {
  display: flex;
  gap: 8px;
  align-items: center;
}

.toolbar-item {
  width: 40px;
  height: 40px;
  background: var(--color-background-tertiary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.extension-icon {
  background: var(--color-accent-light);
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Extension Usage */
.extension-usage {
  background: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--shadow-md);
}

.extension-popup {
  width: 300px;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
}

.popup-header {
  background: var(--color-accent);
  color: var(--color-text-inverted);
  padding: 12px 16px;
  font-weight: 600;
  text-align: center;
}

.popup-content {
  padding: 20px;
}

.upload-area {
  background: var(--color-background-tertiary);
  border: 2px dashed var(--color-border);
  border-radius: 8px;
  padding: 40px 20px;
  text-align: center;
  color: var(--color-text-secondary);
  margin-bottom: 16px;
  font-size: 16px;
}

.action-button {
  background: var(--color-accent);
  color: var(--color-text-inverted);
  padding: 12px 24px;
  border-radius: 6px;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.action-button:hover {
  background: var(--color-accent-hover);
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
