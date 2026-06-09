<template>
  <div class="games-container">
    <div class="games-grid">
      <GameRouteCard 
        v-for="game in games" 
        :key="game.id"
        :to="game.to"
        :title="game.title"
        class="card"
      >
        <template #icon>
          <div class="custom-icon">{{ game.emoji }}</div>
        </template>
      </GameRouteCard>
    </div>
  </div>
</template>

<script setup>
import GameRouteCard from './GameRouteCard.vue'

const games = [
  { id: 1, to: '/fortune_wheel', title: 'бармалда', emoji: '🎲' },
  { id: 2, to: '/wordle', title: 'вордли', emoji: '🎲' },
  { id: 3, to: '/miner', title: 'минёр', emoji: '🎲' },
  { id: 4, to: '/shellfish', title: 'секретик)))', emoji: '🎲' }
]
</script>

<style lang="scss" scoped>

.games-container {
  width: 100%;
  flex: 1;          
  display: flex;     
  align-items: center; 
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  
  @media (max-width: 480px) {
    gap: 15px;
  }


}

.custom-icon {
  font-size: 48px;
}
</style>