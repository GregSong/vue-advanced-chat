<template>
  <div class="gallery">
    <aside class="sidebar">
      <ul>
        <li v-for="demo in demos" :key="demo.name" @click="selectDemo(demo)">
          {{ demo.name }}
        </li>
      </ul>
    </aside>
    <section class="workspace">
      <div class="preview">
        <component :is="currentDemo.component" v-if="currentDemo" />
      </div>
      <div class="doc" v-html="currentDemo.doc" />
    </section>
  </div>
</template>

<script>
import demos from './demos'

export default {
  data() {
    return {
      demos,
      currentDemo: demos[0]
    }
  },
  methods: {
    selectDemo(demo) {
      this.currentDemo = demo
    }
  }
}
</script>

<style scoped>
.gallery {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 200px;
  border-right: 1px solid #ccc;
  padding: 10px;
}
.workspace {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.preview {
  flex: 1;
  padding: 10px;
}
.doc {
  flex: 1;
  padding: 10px;
  border-top: 1px solid #ccc;
  overflow: auto;
}
</style>
