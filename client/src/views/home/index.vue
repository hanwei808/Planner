<template>
  <div
    class="article-container"
    :class="{'md-sidebar-expand': !$store.state.isMdCollapse}"
  >
    <div class="home">
      <div
        v-for="(_, path) in svgs"
        :key="path"
      >
        {{ String(path).replace('.', '') }}
        <h2
          :id="typeof path === 'string' ? path.split('/')?.pop()?.split('.')?.shift() : ''"
          ebook-toc-level-1=""
          :heading="typeof path === 'string' ? path.split('/')?.pop()?.split('.')?.shift() : ''"
        >
          {{ typeof path === 'string' ? path.split('/')?.pop()?.split('.')?.shift() : '' }}
        </h2>
        <inline-svg :src="String(path).replace('.', '')" />
      </div>
    </div>
    <mdSidebar :navigation="navigation" />
  </div>
</template>

<script setup lang="ts">
import mdSidebar from '@/components/mdSidebar.vue';
import { ref, Ref, onMounted } from 'vue';

const svgFiles = import.meta.glob('./drawio/*.svg')

let svgs = ref<{ [key: string]: string }>({});

// Define a type for navigation items
type NavigationItem = {
  title: string;
  id: string;
  children: NavigationItem[];
};

// Define the type for the navigation ref
const navigation: Ref<NavigationItem[]> = ref([]);

onMounted(async () => {
  const icons = Object.keys(svgFiles).map(async (path) => {
    svgs.value[path] = new URL(path.replace('.', ''), import.meta.url).href;
  })
  await Promise.all(icons);
  createNavigation();
});

const createNavigation = (): void => {
  const headers = Array.from(document.querySelectorAll('h2, h3')) as HTMLElement[];
  let currentH1: NavigationItem | null = null;

  headers.forEach(header => {
    const newItem: NavigationItem = {
      title: header.innerText,
      id: header.id,
      children: []
    };

    if (header.tagName === 'H2') {
      currentH1 = newItem;
      navigation.value.push(newItem);
    } else if (header.tagName === 'H3' && currentH1) {
      currentH1.children.push(newItem);
    }
  });
};
</script>

<style scoped>
.article-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
}
@media screen and (min-width: 600px) {
  .article-container {
    padding-right: 50px;
  }
  .md-sidebar-expand {
    padding-right: 200px;
  }
}
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
