<template>
  <div class="demo-container">
    <!-- 切换亮色与暗色主题 -->
    <button @click="theme = theme === 'light' ? 'dark' : 'light'">
      切换主题
    </button>
    <vue-advanced-chat
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :messages="JSON.stringify(messages)"
      :messages-loaded="true"
      :theme="theme"
    />
  </div>
</template>

<script>
import { register } from '../../src/lib'
register()

export default {
  data() {
    return {
      theme: 'light',
      currentUserId: '1',
      rooms: [{ roomId: 'room1', roomName: '主题切换' }],
      messages: []
    }
  }
}
</script>

<style scoped>
.demo-container {
  width: 300px;
  height: 400px;
}
button {
  margin-bottom: 10px;
}
</style>
