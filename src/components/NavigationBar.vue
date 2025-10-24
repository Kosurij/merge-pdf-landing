<template>
  <header :class="['navbar', { 'transparent': true, 'scrolled': isScrolled }]">
    <div class="left">
      <RouterLink to="/" class="logoBlock">
        <div class="logo">
          <!-- Логотип отображается через CSS background-image -->
        </div>
        <span class="name">Combine PDF</span>
      </RouterLink>

      <nav class="desktop-nav">
        <a href="#features" class="nav-link" @click="scrollToSection('features')">Features</a>
        <a href="#how-it-works" class="nav-link" @click="scrollToSection('how-it-works')">How it works</a>
        <a href="#faq" class="nav-link" @click="scrollToSection('faq')">FAQ</a>
      </nav>
    </div>

    <div class="right">
      <div class="theme-toggle">
        <button
          @click="toggleTheme"
          class="theme-toggle__button"
          :aria-label="currentTheme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'"
        >
          <svg v-if="currentTheme === 'dark'" class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg v-else class="theme-toggle__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>
      </div>
      
      <button
          class="burger-button"
          :class="{ open: isMenuOpen }"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </div>

    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-menu">
        <a href="#features" class="mobile-link" @click="scrollToSection('features'); isMenuOpen = false">Features</a>
        <a href="#how-it-works" class="mobile-link" @click="scrollToSection('how-it-works'); isMenuOpen = false">How it works</a>
        <a href="#faq" class="mobile-link" @click="scrollToSection('faq'); isMenuOpen = false">FAQ</a>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const currentTheme = ref<'light' | 'dark'>('light')

const toggleTheme = () => {
  const newTheme = currentTheme.value === 'light' ? 'dark' : 'light'
  currentTheme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

const scrollToSection = (sectionId: string) => {
  // Проверяем, находимся ли мы на главной странице
  const currentPath = window.location.pathname
  if (currentPath !== '/') {
    // Если не на главной странице, переходим на главную с якорем
    window.location.href = `/#${sectionId}`
    return
  }
  
  // Если на главной странице, скроллим к секции
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  // Load saved theme or use system preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    currentTheme.value = savedTheme as 'light' | 'dark'
  } else {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    currentTheme.value = mq.matches ? 'dark' : 'light'
    mq.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        currentTheme.value = newTheme
        document.documentElement.setAttribute('data-theme', newTheme)
      }
    })
  }
  
  document.documentElement.setAttribute('data-theme', currentTheme.value)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0 24px;
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.left {
  display: flex;
  align-items: center;
  gap: 32px;
}

.left,
.right {
  flex: 1;
  display: flex;
  align-items: center;
}

.logoBlock {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo {
  width: 32px;
  height: 32px;
  background-image: url('@/assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .logo {
    width: 24px;
    height: 24px;
  }

  .logoBlock {
    gap: 8px;
  }
}

.name {
  font-weight: 700;
  font-size: 22px;
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .name {
    font-size: 16px;
  }
}

.right {
  justify-content: flex-end;
  gap: 16px;
}

.transparent {
  background-color: rgba(var(--color-background), 0.85);
  backdrop-filter: saturate(160%) blur(6px);
}

.transparent.scrolled {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-hover);
}

.nav-link {
  position: relative;
  color: var(--color-text-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
}

.theme-toggle__button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-background-secondary);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.theme-toggle__button:hover {
  background: var(--color-background-tertiary);
  border-color: var(--color-accent);
  transform: scale(1.05);
}

.theme-toggle__icon {
  width: 20px;
  height: 20px;
}

/* Desktop nav */
.desktop-nav {
  display: flex;
  gap: 32px;
}

/* Animated Burger Button */
.burger-button {
  position: relative;
  width: 24px;
  height: 18px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background: none;
  padding: 0;
  margin-left: 12px;
  cursor: pointer;
}

.burger-button span {
  display: block;
  height: 2px;
  background: var(--color-text-primary);
  border-radius: 1px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  transform-origin: center;
}

/* Animations */
.burger-button.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.burger-button.open span:nth-child(2) {
  opacity: 0;
}

.burger-button.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  position: absolute;
  top: 80px;
  right: 0;
  left: 0;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  padding: 0;
  box-shadow: var(--shadow-lg);
  z-index: 99;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.mobile-link {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  text-decoration: none;
  padding: 16px 24px;
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.mobile-link:hover {
  background-color: var(--color-background-secondary);
  color: var(--color-accent);
}

.mobile-link:last-child {
  border-bottom: none;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .burger-button {
    display: flex;
  }
  
  .theme-toggle {
    display: none;
  }
}
</style>
