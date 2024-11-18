<template>
  <!-- <div class="con"> -->
  <el-menu-item v-if="menuItem.isLeaf" :index="menuItem.id">
    <el-icon v-if="menuItem.icon"><component :is="menuItem.icon" /></el-icon>
    <template #title> {{ menuItem.title }}</template>
  </el-menu-item>

  <el-sub-menu v-else :index="menuItem.id">
    <template #title>
      <el-icon v-if="menuItem.icon"><component :is="menuItem.icon" /></el-icon>
      <span>{{ menuItem.title }}</span>
    </template>
    <!-- 递归渲染子菜单 -->
    <sl-menuItem :key="subItem.id" v-for="subItem in menuItem.children" :menu-item="subItem" />
  </el-sub-menu>
  <!-- </div> -->
</template>

<script setup lang="ts">
import SlMenuItem from './SlMenuItem.vue'

defineProps({
  menuItem: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.con {
  width: 100%;
  height: 100%;
}
</style>
