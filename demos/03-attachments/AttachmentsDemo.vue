<template>
  <div class="demo-container">
    <!-- 聊天窗口展示图片、视频和语音消息 -->
    <vue-advanced-chat
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :messages="JSON.stringify(messages)"
      :messages-loaded="true"
    />
  </div>
</template>

<script>
import { register } from '../../src/lib'
register()

export default {
  data() {
    return {
      currentUserId: '1',
      rooms: [{
        roomId: 'room1',
        roomName: '附件演示'
      }],
      messages: [
        {
          _id: 'm1',
          content: '图片示例',
          senderId: '1',
          files: [{ name: 'image.png', type: 'png', url: 'https://via.placeholder.com/150' }]
        },
        {
          _id: 'm2',
          content: '语音示例',
          senderId: '2',
          files: [{ name: 'record.mp3', type: 'mp3', audio: true, duration: 2.5, url: 'record.mp3' }]
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-container {
  width: 300px;
  height: 400px;
}
</style>
