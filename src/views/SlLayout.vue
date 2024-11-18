<template>
  <el-container class="layout-container">
    <SlMenu router default-active="2-1" :default-openeds="['2']" :menuData="menuData"></SlMenu>
    <el-container>
      <el-header class="layout-top-header" height="48px">
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
          <span>{{ userStore.userInfo.userName }}</span>
        </div>
      </el-header>
      <Breadcrumb></Breadcrumb>
      <el-main>
        <RouterView />
        <!-- <List></List> -->
        <!-- <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar> -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref, markRaw } from 'vue'
import { Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import SlMenu from '@/components/menu/SlMenu.vue'
import Breadcrumb from '@/components/breadcrumb/SlBreadcrumb.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

// const item = {
//   date: '2016-05-02',
//   name: 'Tom',
//   address: 'No. 189, Grove St, Los Angeles',
// }

// const tableData = ref(Array.from({ length: 20 }).fill(item))

// 后续还要加入icon 等props
const menuData = ref([
  {
    title: '资源开通',
    isLeaf: false,
    icon: markRaw(IconMenu),
    id: '1',
    children: [
      {
        title: '开通申请',
        isLeaf: true,
        id: 'resourceApproval',
      },
      {
        title: '架构审核',
        isLeaf: true,
        id: '1-0',
      },
      {
        title: '租户确认',
        isLeaf: true,
        id: '1-1',
      },
      {
        title: '业务三级审核',
        isLeaf: true,
        id: '1-2',
      },
      {
        title: '业务二级审核',
        isLeaf: true,
        id: '1-3',
      },
      {
        title: '云资源部审核',
        isLeaf: true,
        id: '1-4',
      },
    ],
  },
  {
    title: '组件测试',
    isLeaf: false,
    icon: markRaw(IconMenu),
    id: '2',
    children: [
      {
        title: 'form',
        isLeaf: true,
        id: 'testForm',
      }
    ],
  }
])
</script>

<style scoped lang="scss">
.layout-container {
  height: 100vh;

  // .el-header {
  //   position: relative;
  //   box-shadow: 0px 2px 2px #eeeaea;
  // }

  // .layout-aside {
  //   overflow: hidden;
  //   z-index: 1000;
  //   background-color: var(--el-menu-bg-color);
  // }
  .layout-top-header {
    text-align: right;
    font-size: 12px;
    background-color: #fff;

    .toolbar {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      right: 20px;
    }
  }

  .el-main {
    padding: 10px;
  }
}
</style>
