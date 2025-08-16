<template>
  <div class="faq-page">
    <header class="faq-header">
      <h1 class="title">❓ Frequently Asked Questions</h1>
      <p class="subtitle">Find answers to the most common questions about Merge PDF</p>
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
    title: 'What is Merge PDF?',
    description:
        'Merge PDF is an online tool for combining multiple PDF files into one document. You can upload files, arrange page order, and download the result with one click.',
  },
  {
    title: 'Are my files secure?',
    description:
        'Yes, absolutely secure! All files are processed locally in your browser and never uploaded to our servers. We have no access to your document content.',
  },
  {
    title: 'What file formats are supported?',
    description:
        'Currently, only PDF files are supported. If you have documents in other formats (Word, Excel, PowerPoint), convert them to PDF first.',
  },
  {
    title: 'Are there file size limitations?',
    description:
        'File size is limited by your browser capabilities. We recommend using files up to 100 MB for optimal performance.',
  },
  {
    title: 'Can I change page order?',
    description:
        'Yes! After uploading files, you can drag and drop pages to rearrange them, remove unwanted pages, and add new files at any time.',
  },
  {
    title: 'Is original quality preserved?',
    description:
        'Yes, we preserve the original quality of all PDF files. No quality loss or compression occurs.',
  },
  {
    title: 'Does it work on mobile devices?',
    description:
        'Yes, Merge PDF is fully responsive and works on all devices: computers, tablets, and smartphones.',
  },
  {
    title: 'Do I need to install software?',
    description:
        'No! Merge PDF works right in your browser. Just open the website and start working. No additional programs or extensions required.',
  },
  {
    title: 'How many files can I merge at once?',
    description:
        'You can upload and merge any number of PDF files. Limitations depend only on your browser and device capabilities.',
  },
  {
    title: 'Still have questions?',
    description:
        'We\'re always here to help! Email us at <a href="mailto:support@mergepdf.com" class="contact-link">support@mergepdf.com</a> or use the contact form on our website.',
  }
]

</script>

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
</style>
