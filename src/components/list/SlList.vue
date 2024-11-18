<template>
  <div class="list-con">
    <!-- Filter Section -->
    <sl-filterForm></sl-filterForm>

    <!-- Table Section -->
    <el-table
      stripe
      :data="tableData"
      border
      style="width: 100%; height: calc(100vh - 48px - 42px - 82px)"
    >
      <el-table-column prop="index" label="序号" width="60" />
      <el-table-column prop="workOrderName" label="工单名称" />
      <el-table-column prop="workOrderNumber" label="工单编号" />
      <el-table-column prop="initiator" label="发起人" />
      <el-table-column prop="workOrderType" label="工单类型" />
      <el-table-column prop="businessSystem" label="业务系统" />
      <el-table-column prop="startDate" label="发起时间" />
      <el-table-column prop="currentNodeDate" label="节点时间" />
      <el-table-column prop="currentNode" label="当前节点" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-link @click="viewDetails(scope.row)">查看详情</el-link>
        </template>
      </el-table-column>
    </el-table>
    <sl-pagination
      :currentPage="totalRecords"
      :pageSize="pageSize"
      :total="totalRecords"
    ></sl-pagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import SlPagination from '@/components/base/SlPagination.vue'
import SlFilterForm from '../base/SlFilterForm.vue'

// const filters = ref({
//   workOrderName: '',
//   businessSystemName: '',
//   startDate: '',
// })

const tableData = ref(
  Array(20).fill({
    index: 1,
    workOrderName: '申请001',
    workOrderNumber: '1010100110',
    initiator: '孙侃静',
    workOrderType: '资源开通',
    businessSystem: '业务系统名称',
    startDate: '2024-01-09',
    currentNodeDate: '2024-01-09',
    currentNode: '驳回确认',
  }),
)

// const currentPage = ref(1)
const pageSize = ref(10)
const totalRecords = ref(123)

// const fetchData = () => {
//   // Implement data fetching logic here
//   ElMessage.info('查询数据')
// }

// const resetFilters = () => {
//   filters.value.workOrderName = ''
//   filters.value.businessSystemName = ''
//   filters.value.startDate = ''
//   fetchData()
// }

// const handlePageChange = (page: number) => {
//   currentPage.value = page
//   fetchData()
// }

// const handleSizeChange = (size: number) => {
//   pageSize.value = size
//   fetchData()
// }

const viewDetails = (row: any) => {
  ElMessage.info(`查看详情: ${row.workOrderNumber}`)
}
</script>

<style scoped>
.list-con {
  background-color: #fff;
  padding: 10px;
}

.button-group {
  display: flex;
  align-items: center;
}

.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
