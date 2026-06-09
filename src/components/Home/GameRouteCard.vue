
<template>
  <router-link :to="to" class="game-card">
    <div class="game-card__content">
      <slot name="icon">
        <div class="game-card__placeholder"></div>
      </slot>
    </div>
    <div class="game-card__label">
      {{ title }}
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.game-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  
  aspect-ratio: 1 / 1;
  width: 100%;
  
  border-radius: 16px;
  border: 2px solid red;
  
  background: white;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &__content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__placeholder {
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    border-radius: 8px;
  }
  
  &__label {
    padding: 12px;
    text-align: center;
    background: white;
    color: black;
    font-size: 1rem;
    font-weight: 500;
    border-top: 1px solid #eee;
  }
}
</style>