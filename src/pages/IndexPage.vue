<template>
  <main class="landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          Combine PDF files
          <span class="hero__title-accent">quickly and easily</span>
        </h1>
        <p class="hero__subtitle">
          Powerful online tool for merging PDF documents.
          Upload, merge, and download in just a few clicks.
        </p>
        <div class="hero__actions">
          <a href="https://chromewebstore.google.com" target="_blank" rel="noopener" class="btn btn--primary btn--large">
            <svg class="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7,10 12,15 17,10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Install Extension
          </a>
          <button class="btn btn--secondary btn--large" @click="scrollToHowItWorks">
            How it works
          </button>
        </div>
      </div>
      <div class="hero__visual">
        <div class="hero__image">
          <div class="pdf-preview">
            <div class="pdf-drop-zone">
              <div class="pdf-page pdf-page--1">
                <span class="pdf-text">PDF</span>
              </div>
              <div class="pdf-page pdf-page--2">
                <span class="pdf-text">PDF</span>
              </div>
              <div class="pdf-page pdf-page--3">
                <span class="pdf-text">PDF</span>
              </div>
            </div>
            <div class="pdf-arrow"></div>
            <div class="pdf-result">
              <span class="pdf-text">PDF</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">Why choose us</h2>
        <div class="features__grid">
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Fast & Simple</h3>
            <p class="feature-card__description">
              Combine PDF files in seconds with our optimized algorithm and intuitive interface - no complex settings required
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Secure</h3>
            <p class="feature-card__description">
              Your files are processed locally in the browser and never uploaded to our servers
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Quality</h3>
            <p class="feature-card__description">
              Preserve original PDF quality without any data loss
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <h2 class="section-title">How it works</h2>
        <div class="steps">
          <div class="step">
            <div class="step__number">1</div>
            <div class="step__content">
              <h3 class="step__title">Upload files</h3>
              <p class="step__description">
                Drag and drop PDF files into the browser or select them through the upload dialog
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step__number">2</div>
            <div class="step__content">
              <h3 class="step__title">Arrange order</h3>
              <p class="step__description">
                Use drag & drop to rearrange page order. Add new files, remove unwanted pages
              </p>
            </div>
          </div>

          <div class="step">
            <div class="step__number">3</div>
            <div class="step__content">
              <h3 class="step__title">Download result</h3>
              <p class="step__description">
                Get your merged PDF file with one click
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta__content">
          <h2 class="cta__title">Ready to Combine PDF files?</h2>
          <p class="cta__description">
            Start combining your PDF files today
          </p>
          <a href="https://chromewebstore.google.com" target="_blank" rel="noopener" class="btn btn--primary btn--large">
            Get Started
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const scrollToHowItWorks = () => {
  const element = document.getElementById('how-it-works')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.landing {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  padding: 64px;
  min-height: 80vh;
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 100%);
  position: relative;
  margin-bottom: 16px;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border);
}

.hero__content {
  max-width: 650px;
}

.hero__title {
  font-size: 36px;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--color-text-primary);
}

.hero__title-accent {
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 18px;
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image {
  position: relative;
  width: 100%;
}

/* PDF Preview Animation */
.pdf-preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  animation: fadeInUp 1s ease-out 0.5s both;
}

.pdf-drop-zone {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 32px;
  border: 3px dashed rgba(59, 130, 246, 0.4);
  border-radius: 16px;
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.05) 0%,
    rgba(59, 130, 246, 0.02) 100%);
  backdrop-filter: blur(10px);
  box-shadow:
    0 8px 25px rgba(59, 130, 246, 0.1),
    0 4px 12px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: dropZoneGlow 2s ease-in-out infinite alternate;
}

.pdf-drop-zone:hover {
  border-color: rgba(59, 130, 246, 0.6);
  background: linear-gradient(135deg,
    rgba(59, 130, 246, 0.08) 0%,
    rgba(59, 130, 246, 0.04) 100%);
  box-shadow:
    0 12px 35px rgba(59, 130, 246, 0.15),
    0 6px 18px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

@keyframes dropZoneGlow {
  0% {
    border-color: rgba(59, 130, 246, 0.4);
    box-shadow:
      0 8px 25px rgba(59, 130, 246, 0.1),
      0 4px 12px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  100% {
    border-color: rgba(59, 130, 246, 0.6);
    box-shadow:
      0 12px 35px rgba(59, 130, 246, 0.15),
      0 6px 18px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pdf-page {
  width: 90px;
  height: 110px;
  background: linear-gradient(135deg, var(--pdf-page-bg) 0%, var(--pdf-page-bg-secondary) 100%);
  border: 2px solid var(--pdf-page-border);
  border-radius: 12px;
  box-shadow:
    0 8px 25px var(--pdf-page-shadow),
    0 4px 12px var(--pdf-page-shadow-secondary),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 20px rgba(255, 59, 48, 0.2);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: float 3s ease-in-out infinite, fadeInScale 0.8s ease-out both;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.pdf-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(0, 0, 0, 0.1) 100%);
  border-radius: 10px;
  pointer-events: none;
}

.pdf-page--1 {
  transform: rotate(-8deg) translateY(-4px) translateZ(20px);
  z-index: 3;
  animation-delay: 0s, 0.8s;
  box-shadow:
    0 12px 30px var(--pdf-page-shadow),
    0 6px 15px var(--pdf-page-shadow-secondary),
    0 3px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.pdf-page--2 {
  transform: rotate(4deg) translateY(-2px) translateZ(10px);
  z-index: 2;
  animation-delay: 0.5s, 1s;
  box-shadow:
    0 10px 25px var(--pdf-page-shadow),
    0 5px 12px var(--pdf-page-shadow-secondary),
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
.pdf-page--3 {
  transform: rotate(-6deg) translateY(2px) translateZ(5px);
  z-index: 1;
  animation-delay: 1s, 1.2s;
  box-shadow:
    0 8px 20px var(--pdf-page-shadow),
    0 4px 10px var(--pdf-page-shadow-secondary),
    0 2px 6px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(var(--pdf-rotation)) translateZ(var(--pdf-z));
  }
  50% {
    transform: translateY(-6px) rotate(var(--pdf-rotation)) translateZ(var(--pdf-z));
  }
}

.pdf-page--1 {
  --pdf-rotation: -8deg;
  --pdf-z: 20px;
}
.pdf-page--2 {
  --pdf-rotation: 4deg;
  --pdf-z: 10px;
}
.pdf-page--3 {
  --pdf-rotation: -6deg;
  --pdf-z: 5px;
}

.pdf-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateZ(15px);
  font-family: 'Arial', sans-serif;
  font-weight: 900;
  font-size: 20px;
  color: var(--pdf-text-color);
  text-shadow:
    0 3px 6px var(--pdf-text-shadow),
    0 6px 12px rgba(0, 0, 0, 0.3);
  user-select: none;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.2));
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
}

.pdf-arrow {
  font-size: 28px;
  color: var(--color-accent);
  font-weight: bold;
  animation: slideRight 1.5s ease-in-out infinite;
  margin: 0 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.pdf-arrow::before {
  content: '→';
  animation: slideRight 1.5s ease-in-out infinite;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

@keyframes slideRight {
  0%, 100% {
    transform: translateX(0px);
    opacity: 1;
  }
  50% {
    transform: translateX(4px);
    opacity: 0.9;
  }
}

.pdf-result {
  width: 100px;
  height: 120px;
  background: linear-gradient(135deg, var(--pdf-result-bg) 0%, var(--pdf-result-bg-secondary) 100%);
  border: 2px solid var(--pdf-result-border);
  border-radius: 12px;
  box-shadow:
    0 12px 30px var(--pdf-result-shadow),
    0 6px 15px var(--pdf-result-shadow-secondary),
    0 3px 10px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 25px rgba(255, 59, 48, 0.3);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: resultGlow 2s ease-in-out infinite alternate, fadeInScale 0.8s ease-out 1.5s both;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(15px);
}

.pdf-result::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(0, 0, 0, 0.1) 100%);
  border-radius: 10px;
  pointer-events: none;
}

.pdf-result:hover {
  transform: translateY(-8px) scale(1.05) rotateY(-3deg) rotateX(3deg) translateZ(25px);
  box-shadow:
    0 20px 40px var(--pdf-result-shadow-hover),
    0 10px 25px var(--pdf-result-shadow-secondary-hover),
    0 5px 15px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 0 40px rgba(255, 59, 48, 0.5);
  animation-play-state: paused;
}

@keyframes resultGlow {
  0% {
    box-shadow:
      0 12px 30px var(--pdf-result-shadow),
      0 6px 15px var(--pdf-result-shadow-secondary),
      0 3px 10px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.1),
      0 0 25px rgba(255, 59, 48, 0.3);
  }
  100% {
    box-shadow:
      0 15px 35px var(--pdf-result-shadow-hover),
      0 8px 20px var(--pdf-result-shadow-secondary-hover),
      0 4px 12px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.15),
      0 0 35px rgba(255, 59, 48, 0.4);
  }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.8) rotate(var(--pdf-rotation)) translateZ(var(--pdf-z));
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(var(--pdf-rotation)) translateZ(var(--pdf-z));
  }
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: all 0.15s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn--primary {
  background: var(--color-button-primary);
  color: var(--color-text-inverted);
  box-shadow: var(--shadow-md);
}

.btn--primary:hover {
  background: var(--color-button-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn--secondary {
  background: var(--color-button-secondary);
  color: var(--color-button-primary);
  border-color: var(--color-button-primary);
}

.btn--secondary:hover {
  background: var(--color-button-secondary-hover);
  transform: translateY(-2px);
}

.btn--large {
  padding: 20px 32px;
  font-size: 18px;
}

.btn__icon {
  width: 20px;
  height: 20px;
}

/* Features Section */
.features {
  padding: 64px 0;
  background: var(--color-background);
  position: relative;
  margin-top: 16px;
}

.features::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--color-border);
}

.section-title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 48px;
  color: var(--color-text-primary);
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.feature-card {
  padding: 32px;
  background: var(--color-background-secondary);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  text-align: center;
  transition: all 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-accent);
}

.feature-card__icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  background: var(--color-accent-ghost);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
}

.feature-card__icon svg {
  width: 32px;
  height: 32px;
}

.feature-card__title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.feature-card__description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* How It Works Section */
.how-it-works {
  padding: 64px 0;
  background: var(--color-background-secondary);
  border-bottom: 1px solid var(--color-border);
  margin-top: 16px;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.step {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
}

.step__number {
  width: 48px;
  height: 48px;
  background: var(--color-accent);
  color: var(--color-text-inverted);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.step__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--color-text-primary);
}

.step__description {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

/* CTA Section */
.cta {
  padding: 64px 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  position: relative;
  margin-top: 16px;
}

.cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: var(--color-accent);
  border-radius: 2px;
}

.cta__content {
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
}

.cta__title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--color-text-primary);
}

.cta__description {
  font-size: 18px;
  margin-bottom: 32px;
  color: var(--color-text-secondary);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 32px;
    padding: 32px 16px;
  }

  .hero__title {
    font-size: 30px;
  }

  .hero__actions {
    justify-content: center;
  }

  .features__grid {
    grid-template-columns: 1fr;
  }

  .steps {
    grid-template-columns: 1fr;
  }

  .btn--large {
    padding: 16px 24px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}

/* Responsive PDF Preview */
@media (max-width: 768px) {
  .pdf-preview {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pdf-drop-zone {
    gap: 10px;
    padding: 16px;
    border-width: 2px;
  }

  .pdf-page {
    width: 65px;
    height: 80px;
  }

  .pdf-result {
    width: 65px;
    height: 80px;
  }

  .pdf-text {
    font-size: 14px;
  }

  .pdf-arrow {
    width: 28px;
    height: 28px;
    font-size: 18px;
    margin: 0 8px;
  }

  .pdf-page--1 {
    transform: rotate(-6deg) translateY(-2px) translateZ(15px);
  }
  .pdf-page--2 {
    transform: rotate(3deg) translateY(-1px) translateZ(8px);
  }
  .pdf-page--3 {
    transform: rotate(-4deg) translateY(1px) translateZ(4px);
  }

  .pdf-page--1 { --pdf-rotation: -6deg; --pdf-z: 15px; }
  .pdf-page--2 { --pdf-rotation: 3deg; --pdf-z: 8px; }
  .pdf-page--3 { --pdf-rotation: -4deg; --pdf-z: 4px; }
}

@media (max-width: 480px) {
  .pdf-preview {
    gap: 6px;
  }

  .pdf-drop-zone {
    gap: 4px;
    padding: 12px;
    border-width: 2px;
  }

  .pdf-page {
    width: 55px;
    height: 70px;
  }

  .pdf-result {
    width: 55px;
    height: 70px;
  }

  .pdf-text {
    font-size: 12px;
  }

  .pdf-arrow {
    width: 24px;
    height: 24px;
    font-size: 14px;
    margin: 0 6px;
  }

  .pdf-page--1 {
    transform: rotate(-5deg) translateY(-1px) translateZ(12px);
  }
  .pdf-page--2 {
    transform: rotate(2deg) translateY(0px) translateZ(6px);
  }
  .pdf-page--3 {
    transform: rotate(-3deg) translateY(1px) translateZ(3px);
  }

  .pdf-page--1 { --pdf-rotation: -5deg; --pdf-z: 12px; }
  .pdf-page--2 { --pdf-rotation: 2deg; --pdf-z: 6px; }
  .pdf-page--3 { --pdf-rotation: -3deg; --pdf-z: 3px; }
}
</style>
