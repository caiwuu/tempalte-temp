<script setup lang="ts">
import { resolveComponent } from 'vue'

// 定义组件的 props
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
const DynamicComponent = resolveComponent(props.name)
</script>

<template>
  <el-icon><DynamicComponent /></el-icon>
</template>
