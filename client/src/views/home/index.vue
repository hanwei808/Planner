<template>
  <div class="home">
    <div
      v-for="(svg, path) in svgs"
      :key="path"
    >
      {{ path }}
      <br>
      <img
        :src="svg"
        alt="svg"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const svgFiles = import.meta.glob('./drawio/*.svg')

let svgs = ref<{ [key: string]: string }>({});

onMounted(async () => {
  const icons = Object.keys(svgFiles).map(async (path) => {
    const module = await svgFiles[path]();
    svgs.value[path] = (module as { default: string }).default;
  })
  await Promise.all(icons);
});
</script>

<style scoped>
.home {
  div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    width: 100%;
    border-bottom: solid 1px gray;
  }
}
</style>
