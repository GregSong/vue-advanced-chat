<template>
  <div class="demo-container">
    <!-- 点击表情按钮展示 EmojiPicker -->
    <emoji-picker-container>
      <template #emoji-picker-icon>
        <svg-icon name="emoji" />
      </template>
    </emoji-picker-container>
  </div>
</template>

<script>
import EmojiPickerContainer from '../../src/components/EmojiPickerContainer/EmojiPickerContainer.vue'
import SvgIcon from '../../src/components/SvgIcon/SvgIcon.vue'

export default {
  components: { EmojiPickerContainer, SvgIcon }
}
</script>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>
