<template>
  <div class="demo-container">
    <!-- 使用 FormatMessage 组件展示多种文本格式 -->
    <format-message
      content="**加粗文字** _斜体_ ~删除线~ `代码`"
      :text-formatting="textFormatting"
      :link-options="{ target: '_blank' }"
    />
  </div>
</template>

<script>
import FormatMessage from '../../src/components/FormatMessage/FormatMessage.vue'

export default {
  components: { FormatMessage },
  data() {
    return {
      // 文本格式配置
      textFormatting: {
        disabled: false,
        italic: '_',
        bold: '*',
        strike: '~',
        underline: '°',
        multilineCode: '```',
        inlineCode: '`'
      }
    }
  }
}
</script>

<style scoped>
.demo-container {
  padding: 20px;
}
</style>
