<template>
  <button
      @click="handleClick"
      :class="['install-button', props.variant]"
      :disabled="props.disabled"
  >
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7,10 12,15 17,10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    <span class="text">
      <slot>Start merging</slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'outline'
  disabled?: boolean
}>(), {
  variant: 'primary',
  disabled: false,
})

const emit = defineEmits<{
  click: []
}>()

const handleClick = () => {
  if (!props.disabled) {
    emit('click')
  }
}
</script>

<style scoped>
.install-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 20px;
  border-radius: 12px;
  transition: all 0.25s ease;
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;
  font-family: inherit;
}

.install-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

/* --- PRIMARY --- */
.primary {
  background: var(--color-button-primary);
  color: var(--color-text-inverted);
  box-shadow: var(--shadow-md);
}

.primary:hover {
  background: var(--color-button-primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3), var(--shadow-md);
}

/* --- OUTLINE --- */
.outline {
  background: var(--color-button-secondary);
  color: var(--color-button-primary);
  border-color: var(--color-button-primary);
  box-shadow: none;
}

.outline:hover {
  background: var(--color-button-secondary-hover);
  transform: translateY(-2px);
}

.outline:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.icon {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.text {
  white-space: nowrap;
}

/* Responsive */
@media (max-width: 768px) {
  .install-button {
    padding: 10px 16px;
    font-size: 14px;
  }
  
  .icon {
    width: 16px;
    height: 16px;
  }
}

@media (max-width: 480px) {
  .install-button {
    padding: 8px 14px;
    font-size: 13px;
  }
}
</style>
