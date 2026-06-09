<template>
  <div class="profile">
    <div class="profile-card">

      <div class="avatar">
        <span class="avatar-text">{{ user.initials }}</span>
      </div>
      
      <h2 class="username">{{ user.name }}</h2>
      

      <div class="points">
        <span class="points-value">{{ user.points }}</span>
        <span class="points-label">баллов</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const user = {
  name: 'Александр',
  points: 2450,
  initials: 'А'
}
</script>

<style lang="scss" scoped>
$accent: #cc0000;
$primary-dark: #2c3e50;
$light-text: #ffffff;
$gray-text: #7f8c8d;

.profile {
  padding: 40px 20px;
  margin: 0;
  min-height: 100%;
  background: $primary-dark;
  display: flex;
  align-items: center;
  justify-content: start;
  flex: 1;          
  display: flex;
  flex-direction: column; 
  min-height: 0; 
  
}

.profile-card {
  background: $light-text;
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  width: 100%;
  max-width: 350px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 100px;
  height: 100px;
  background: $accent;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  
  .avatar-text {
    font-size: 48px;
    font-weight: 500;
    color: $light-text;
  }
}

.username {
  font-size: 24px;
  font-weight: 500;
  color: $primary-dark;
  margin-bottom: 12px;
}

.points {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
  
  .points-value {
    font-size: 32px;
    font-weight: 600;
    color: $accent;
  }
  
  .points-label {
    font-size: 14px;
    color: $gray-text;
  }
}
</style>