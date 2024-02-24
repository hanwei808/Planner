<template>
  <div
    class="md-sidebar"
    :class="$store.state.isMdCollapse ? 'collapse' : 'expanded'"
  >
    <div style="text-align: right;padding: 10px 20px 0 0;">
      <el-icon
        style="cursor: pointer;"
        size="20"
        @click="handleCollapse"
      >
        <Expand v-if="!$store.state.isMdCollapse" />
        <Fold v-else />
      </el-icon>
    </div>
    <ul v-show="!$store.state.isMdCollapse">
      <li
        v-for="item in props.navigation"
        :key="item.id"
      >
        <a
          @click="scrollTo(item)"
        >{{ item.title }}</a>
        <ul v-if="item.children">
          <li
            v-for="child in item.children"
            :key="child.id"
          >
            <a
              @click="scrollTo(child)"
            >{{ child.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
  
<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import { useStore } from '@/store'
import { PropType } from 'vue';
const store = useStore()

interface NavigationItem {
  title: string
  id: string;
  children: NavigationItem[]
}

const props = defineProps({
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    default: () => []
  }
})

const scrollTo = (item: NavigationItem): void => {
  const element = document.getElementById(item.id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};


const handleCollapse = () => {
    store.commit('toggleMdCollapse', !store.state.isMdCollapse)
}
</script>
  
<style>
@media screen and (min-width: 300px) {
    .md-sidebar {
        display: none;
    }
}
@media screen and (min-width: 600px) {
    .md-sidebar {
        display: block;
        position: fixed;
        top: 60px;
        right: 12px;
        height: -webkit-fill-available;
        background-color: #fff;
        color: #42b983;
        box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.2);
        z-index: 999;
    }
    .expanded {
        width: 200px;
        transition: width 0.3s ease;
    }
    .collapse {
        width: 50px;
        transition: width 0.3s ease;
    }
    .md-sidebar > ul {
        cursor: pointer;
        margin: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>
  