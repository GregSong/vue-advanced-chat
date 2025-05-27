<template>
  <div class="demo-container">
    <!-- 支持编辑和回复的基础示例 -->
    <vue-advanced-chat
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :messages="JSON.stringify(messages)"
      :messages-loaded="true"
      @edit-message="onEdit"
      @send-message="onSend"
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
      rooms: [{ roomId: 'room1', roomName: '编辑回复' }],
      messages: [
        { _id: 'm1', content: '原始消息', senderId: '1' }
      ]
    }
  },
  methods: {
    onEdit({ roomId, messageId, newContent }) {
      alert(`编辑 ${messageId}: ${newContent}`)
    },
    onSend({ content, replyMessage }) {
      console.log('发送:', content, replyMessage)
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
