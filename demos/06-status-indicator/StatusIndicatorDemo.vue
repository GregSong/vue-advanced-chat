<template>
  <div class="demo-container">
    <!-- 展示已读、新消息、系统消息等状态 -->
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
      rooms: [{ roomId: 'room1', roomName: '状态演示' }],
      messages: [
        { _id: 'm1', content: '系统消息', system: true },
        { _id: 'm2', content: '未读消息', senderId: '2', new: true },
        { _id: 'm3', content: '已读消息', senderId: '1', seen: true }
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
