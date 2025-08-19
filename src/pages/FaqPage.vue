<template>
  <div class="faq-page">
    <header class="faq-header">
      <h1 class="title">❓ Frequently Asked Questions</h1>
      <p class="subtitle">Find answers to the most common questions about Combine PDF</p>
    </header>

    <div class="faq-wrapper">
      <AccordionGroup :items="faqs" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccordionGroup from '@/components/AccordionGroup.vue'

const faqs = [
  {
    title: 'What is Combine PDF?',
    description:
        'Combine PDF is a powerful yet simple Chrome extension that helps you merge PDF files directly in your browser — no internet, no hassle, just instant results.',
  },
  {
    title: 'What’s the difference between Quick Merge and Page-to-Page?',
    description: `
      <ul>
        <li>⚡ <strong>Quick Merge</strong> — instantly combines up to <strong>4</strong> full PDF files, with the option to reorder them before merging.</li>
        <li>📄 <strong>Page-to-Page</strong> — pick and merge <strong>individual pages</strong> from different PDFs. No hard limits — it depends only on your computer’s performance.</li>
      </ul>
    `,
  },
  {
    title: 'Will my files stay private?',
    description:
        'Yes! 🔒 Your PDFs never leave your device. Everything happens 100% offline inside your browser, guaranteeing complete privacy and security.',
  },
  {
    title: 'Can I merge large files or only specific pages?',
    description:
        'Definitely ✅. Work with hundreds of pages in Page-to-Page mode or merge just the specific pages you need. It’s flexible and entirely under your control.',
  },
  {
    title: 'Why use Combine PDF instead of online tools?',
    description: `
      <ul>
        <li>🔒 <strong>Privacy-first</strong> — no uploads, everything stays on your device.</li>
        <li>⚡ <strong>Fast</strong> — local processing right in Chrome.</li>
        <li>🖱 <strong>Easy</strong> — drag, drop, and done.</li>
        <li>🎯 <strong>Flexible</strong> — two modes: Quick Merge and Page-to-Page.</li>
      </ul>
    `,
  },
  {
    title: 'How do I get the merged document?',
    description:
        'As soon as your files are merged, Combine PDF instantly prompts you to download the final document with one click. Quick and effortless!',
  },
  {
    title: 'Is it free to use?',
    description:
        'Yes, Combine PDF is free for everyday use. Core features — Quick Merge and Page-to-Page — are fully accessible.',
  },
  {
    title: 'Need help?',
    description:
        'We’re here for you! Reach out anytime at <a href="mailto:kosurij.dm@gmail.com" class="contact-link">kosurij.dm@gmail.com</a> — we’ll be glad to help.',
  },
]</script>

<style scoped>
.faq-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px 120px;
  color: var(--color-text-primary);
  background: var(--color-background);
}

.faq-header {
  text-align: center;
  margin-bottom: 48px;
  padding: 0 8px;
  max-width: 800px;
}

.title {
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.2;
}

.subtitle {
  font-weight: 600;
  font-size: 20px;
  color: var(--color-text-secondary);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.faq-wrapper {
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 800px;
}

/* 📱 Адаптив */
@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }

  .subtitle {
    font-size: 16px;
    font-weight: 500;
  }

  .faq-page {
    padding: 24px 16px 80px;
  }
  
  .faq-header {
    margin-bottom: 32px;
  }
}

@media (max-width: 480px) {
  .title {
    font-size: 24px;
  }
  
  .subtitle {
    font-size: 14px;
  }
}
</style>

<style>
.contact-link {
  position: relative;
  display: inline-block;
  background: linear-gradient(90deg, var(--color-accent), var(--color-accent-hover));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
  white-space: nowrap;
  font-weight: 600;
}

.contact-link:hover {
  opacity: 0.85;
}

.contact-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease-in-out;
}

.contact-link:hover::after {
  transform: scaleX(1);
}

.faq-wrapper ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
