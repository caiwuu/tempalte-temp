<template>
  <div class="con">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in hierarchy" :to="{ path: item.path }">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { watch, ref } from 'vue'

const route = useRoute()

let hierarchy = ref<RouteRecordRaw[]>()

watch(
  () => route.path,
  () => {
    hierarchy.value = route.matched
  },
  { immediate: true },
)
</script>

<style scoped>
.con {
  padding: 20px;
}
</style>
