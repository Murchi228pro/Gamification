<script setup lang="ts">
import Header from './components/Shared/Header.vue';
</script>

<template>
  <div class="layout">
    <Header />
    
    <main class="content-container">
      <router-view v-slot="{ Component }">
        <component :is="Component" class="router-view-content" />
      </router-view>
    </main>
    

    <nav class="bottom-nav">
      <router-link to="/profile" class="nav-btn">Профиль</router-link>
      <router-link to="/" class="nav-btn">Главная</router-link>
    </nav>
  </div>
</template>

<style lang="scss">
// Глобальные переменные
$gray-text: #999;
$accent: #cc0000;
$primary-dark: #990000;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  overflow: hidden;
  background: $primary-light;
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  background: $primary-light;
  position: relative
}

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 16px 16px;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}

.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 30px;
  transition: all 0.2s;
  flex: 1;
  color: $gray-text;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: $accent;
    transform: translateY(-1px);
  }
  
  &.router-link-active {
    color: $accent;
    font-weight: 500;
  }
}

.header {
  flex-shrink: 0; // Запрещаем сжиматься
}

.content-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-bottom: 80px;
  min-height: 0;
  margin-top: 100px;
  padding-left: 10px;
  padding-right: 10px;

}
</style>