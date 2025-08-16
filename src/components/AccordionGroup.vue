<template>
  <AccordionRoot
      class="AccordionRoot"
      type="multiple"
      :collapsible="true"
  >
    <template v-for="(item, index) in items" :key="index">
      <AccordionItem class="AccordionItem" :value="`item-${index}`">
        <AccordionHeader class="AccordionHeader">
          <AccordionTrigger class="AccordionTrigger">
            <span class="AccordionItemTitle">{{ item.title }}</span>
            <ArrowIcon  class="AccordionChevron"/>
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <div class="AccordionContentText" v-html="item.description" />
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<script setup lang="ts">
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from 'radix-vue'
import ArrowIcon from '/src/assets/arrow.svg'

defineProps<{
  items: {
    title: string
    description: string
  }[]
}>()
</script>

<style scoped>
button,
h3 {
  all: unset;
}

.AccordionRoot {
  width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.AccordionItem {
  background-color: var(--color-background);
  border-radius: 12px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  border: 1px solid var(--color-border);
}

.AccordionItem:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-border-hover);
}

.AccordionItem:focus-within {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}

.AccordionHeader {
  display: flex;
}

.AccordionTrigger {
  all: unset;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.AccordionTrigger:hover {
  background-color: var(--color-background-secondary);
}

.AccordionItemTitle {
  font-weight: 700;
  font-size: 18px;
  color: var(--color-text-primary);
}

.AccordionContent {
  overflow: hidden;
  font-size: 15px;
  color: var(--color-text-secondary);
  background-color: var(--color-background);
}

.AccordionContent[data-state='open'] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.AccordionContentText {
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary);
  background-color: var(--color-background);
  border-top: 1px solid var(--color-border);
  letter-spacing: 0.01em;
  line-height: 1.6;
}

.AccordionChevron {
  width: 18px;
  height: 18px;
  color: var(--color-text-primary);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(180deg);
}

/* Анимации */
@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .AccordionRoot {
    width: calc(100vw - 32px);
  }

  .AccordionTrigger {
    padding: 16px;
    font-size: 15px;
  }

  .AccordionItemTitle {
    font-size: 16px;
  }

  .AccordionContentText {
    padding: 16px;
    font-size: 14px;
  }

  .AccordionChevron {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .AccordionRoot {
    width: calc(100vw - 24px);
    gap: 16px;
  }
  
  .AccordionItem {
    border-radius: 8px;
  }
  
  .AccordionTrigger {
    padding: 14px;
  }
  
  .AccordionContentText {
    padding: 14px;
  }
}
</style>
