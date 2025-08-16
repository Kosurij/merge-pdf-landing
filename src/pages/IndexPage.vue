<template>
  <main class="landing">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          Merge PDF files
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
            <div class="pdf-page pdf-page--1"></div>
            <div class="pdf-page pdf-page--2"></div>
            <div class="pdf-page pdf-page--3"></div>
            <div class="pdf-arrow">→</div>
            <div class="pdf-result"></div>
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
            <h3 class="feature-card__title">Fast</h3>
            <p class="feature-card__description">
              Merge PDF files in seconds with our optimized algorithm
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
          
          <div class="feature-card">
            <div class="feature-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="feature-card__title">Simple</h3>
            <p class="feature-card__description">
              Intuitive interface - no complex settings required
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
          <h2 class="cta__title">Ready to merge PDF files?</h2>
          <p class="cta__description">
            Join thousands of users who already use our tool
          </p>
          <a href="https://chromewebstore.google.com" target="_blank" rel="noopener" class="btn btn--primary btn--large">
            Get Started Free
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
  padding: 64px 16px;
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
  max-width: 600px;
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
  max-width: 400px;
}

/* PDF Preview Animation */
.pdf-preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.pdf-page {
  width: 80px;
  height: 100px;
  background: var(--color-background-tertiary);
  border: 2px solid var(--color-border);
  border-radius: 6px;
  box-shadow: var(--shadow-md);
  position: relative;
}

.pdf-page--1 { transform: rotate(-5deg); }
.pdf-page--2 { transform: rotate(2deg); }
.pdf-page--3 { transform: rotate(-3deg); }

.pdf-arrow {
  font-size: 24px;
  color: var(--color-accent);
  font-weight: bold;
  animation: pulse 2s infinite;
}

.pdf-result {
  width: 80px;
  height: 100px;
  background: var(--color-accent-light);
  border: 2px solid var(--color-accent);
  border-radius: 6px;
  box-shadow: var(--shadow-lg);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
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
  max-width: 600px;
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
</style>
