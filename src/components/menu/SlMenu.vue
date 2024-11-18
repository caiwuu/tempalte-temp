<template>
  <div>
    <div class="menu-header-con">
      <div class="menu-header expand" :class="{ hidden: isCollapse }">
        <span class="title">算力工作台</span>
        <el-icon @click="collapseChange" class="toggle-btn">
          <Fold />
        </el-icon>
      </div>
      <div class="menu-header fold" :class="{ hidden: isCollapse }">
        <el-icon @click="collapseChange" class="toggle-btn">
          <Expand />
        </el-icon>
      </div>
    </div>
    <el-scrollbar class="scrollbar">
      <el-menu
        :default-active="defaultActive"
        class="menu-vertical"
        :default-openeds="defaultOpeneds"
        :collapse="isCollapse"
        :router="router"
      >
        <sl-menuItem :key="item.id" v-for="item in menuData" :menu-item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import SlMenuItem from './SlMenuItem.vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { ref } from 'vue'

const isCollapse = ref(false)
defineProps({
  menuData: {
    type: Array<any>,
    required: true,
  },
  defaultActive: {
    type: String,
    required: false,
  },
  defaultOpeneds: {
    type: Array<string>,
    required: false,
  },
  router: {
    type: Boolean,
    required: false,
    default: false,
  },
})

function collapseChange() {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped>
.menu-vertical {
  border-right: none;
  cursor: pointer;
}

.scrollbar {
  background: var(--el-menu-bg-color);
  z-index: 10;
  padding: 0 10px;
}

.menu-header-con {
  position: relative;
  overflow: hidden;
  height: var(--header-height);
}

.menu-header.fold.hidden {
  font-size: 16px;
  z-index: 1;
}

.menu-header.fold {
  font-size: 0px;
  z-index: -1;
}

.menu-header.expand {
  font-size: 14px;
  z-index: 1;
}

.menu-header.expand.hidden {
  font-size: 0px;
  z-index: -1;
}

.menu-header {
  position: absolute;
  inset: 0;
  font-size: 0;
  display: flex;
  justify-content: center;
  background-color: var(--el-menu-bg-color);
  height: var(--header-height);
  color: var(--el-menu-text-color);
  align-items: center;
  /* position: relative; */
  z-index: 10;
  cursor: pointer;
  transition:
    font-size 0.5s ease,
    color 0.5s ease;

  .title {
    margin-right: 10px;
    /* font-size: 14px; */
    cursor: default;
  }

  .title.hidden {
    font-size: 0;
  }
}
</style>
