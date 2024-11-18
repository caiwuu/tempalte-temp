<template>
  <!-- <el-header class="layout-top-header" height="48px"> -->
  <div class="toolbar">
    <el-dropdown>
      <el-icon style="margin-right: 8px; margin-top: 1px">
        <setting />
      </el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>View</el-dropdown-item>
          <el-dropdown-item>Add</el-dropdown-item>
          <el-dropdown-item>Delete</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>Tom</span>
  </div>
  <!-- </el-header> -->
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { Setting } from '@element-plus/icons-vue'
const userStore = useUserStore()
const userInfo = userStore.userInfo

console.log(userInfo)
</script>

<style scoped lang="scss">
.layout-top-header {
  text-align: right;
  font-size: 12px;
  background-color: red;
  .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
}
</style>
