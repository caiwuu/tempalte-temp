<template>
  <el-pagination
    background
    v-model:current-page="selfCurrentPage"
    :page-size="pageSize"
    :total="total"
    :layout="layout"
    @current-change="handlePageChange"
    @size-change="handleSizeChange"
  />
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  layout: {
    type: String,
    default: 'total,->, prev, pager, next,sizes, jumper',
  },
})
const selfCurrentPage = ref(props.currentPage)

const emits = defineEmits(['update:currentPage', 'update:pageSize'])

// Emit page change event
const handlePageChange = (page: number) => {
  emits('update:currentPage', page)
}

// Emit size change event
const handleSizeChange = (size: number) => {
  emits('update:pageSize', size)
}
</script>

<style>
/* 自定义分页器容器样式 */
.el-pagination {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  /* 左右分布 */
  align-items: center;
  /* 垂直居中 */
}

/* 让 total 放在左侧 */
.el-pagination .el-pager {
  margin-left: 0;
}

/* 让其他分页控制项放右侧 */
.el-pagination .el-pagination__right {
  margin-left: auto;
  /* 向右对齐 */
}
</style>
