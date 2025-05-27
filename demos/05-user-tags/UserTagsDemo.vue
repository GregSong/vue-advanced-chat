<template>
  <div class="demo-container">
    <!-- 在输入框输入 @ 触发用户列表 -->
    <vue-advanced-chat
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :messages="JSON.stringify(messages)"
      :messages-loaded="true"
      @open-user-tag="openTag"
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
      rooms: [{ roomId: 'room1', roomName: '用户标签' }],
      messages: []
    }
  },
  methods: {
    openTag({ user }) {
      console.log('点击标签用户:', user)
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
