<template>
  <div class="roller-container">
    <div class="roller">
      <div class="blur left"></div>
      <div class="blur right"></div>
      
      <div class="prizes-list" ref="prizesContainer">
        <PrizeItem 
          v-for="prize in prizes" 
          :key="prize.id" 
          :prize="prize"
          class="prize-item"
        />
      </div>
    </div>
    
    <button class="spin-button" @click="spin">
      Вращать!
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Prize } from './types.ts'
import PrizeItem from './PrizeItem.vue'

const prizesContainer = ref<HTMLElement>()
const prizes = ref<Prize[]>([])

function updateList() {
  const newPrizes: Prize[] = []
  for (let i = 0; i < 20; i++) {
    newPrizes.push({
      id: i, 
      title: (i * 20).toString(), 
      image_src: ""
    })
  }
  prizes.value = newPrizes
}

updateList()

function spin() {
  if (!prizesContainer.value) return
  
  const itemCount = prizesContainer.value.children.length
  const randomIndex = Math.floor(Math.random() * itemCount)
  
  const targetElement = prizesContainer.value.children[randomIndex] as HTMLElement
  
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  })
}

onMounted(() => {
  if (prizesContainer.value && prizesContainer.value.children.length > 0) {
    const centerIndex = Math.floor(prizesContainer.value.children.length / 2)
    const centerElement = prizesContainer.value.children[centerIndex] as HTMLElement
    centerElement.scrollIntoView({
      behavior: 'auto',
      inline: 'center'
    })
  }
})
</script>

<style lang="scss" scoped>
.roller-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-sizing: border-box;
}

.roller {
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 100px; // Уменьшено с 200px до 100px
  background-color: #f5f5f5;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  .blur {
    position: absolute;
    top: 0;
    width: 60px; // Уменьшено с 80px до 60px
    height: 100%;
    pointer-events: none;
    z-index: 2;
    
    &.left {
      left: 0;
      background: linear-gradient(to right, rgba(245, 245, 245, 0.95), transparent);
    }
    
    &.right {
      right: 0;
      background: linear-gradient(to left, rgba(245, 245, 245, 0.95), transparent);
    }
  }
  
  .prizes-list {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    height: 100%;
    gap: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

.prize-item {
  flex-shrink: 0;
  scroll-snap-align: center;
  width: 100px; // Уменьшено с 120px до 100px
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-button {
  z-index: 3;
  padding: 8px 24px; // Уменьшено с 12px 32px
  font-size: 16px; // Уменьшено с 18px
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
}

// Адаптивность для очень маленьких экранов
@media (max-width: 768px) {
  .roller {
    height: 80px; // Еще меньше на мобильных
    
    .blur {
      width: 40px;
    }
  }
  
  .prize-item {
    width: 80px;
  }
  
  .spin-button {
    padding: 6px 20px;
    font-size: 14px;
  }
}
</style>