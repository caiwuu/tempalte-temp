<template>
  <div class="filter-container">
    <el-form :inline="true" class="filter-form">
      <el-form-item label="工单名称">
        <el-input v-model="filters.workOrderName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="业务系统名称">
        <el-input v-model="filters.businessSystemName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="发起时间">
        <el-date-picker
          v-model="filters.startDate"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="YYYY-MM-DD"
        />
      </el-form-item>
    </el-form>
    <div class="button-group">
      <el-button type="primary" plain>
        <el-icon><Search /></el-icon><span>搜 索</span>
      </el-button>
      <el-button type="info" plain>
        <el-icon><Close /></el-icon> <span>重 置</span>
      </el-button>
      <!-- <el-button type="primary" @click="fetchData">查询</el-button> -->
      <!-- <el-button type="info" @click="resetFilters">重置</el-button> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Close } from '@element-plus/icons-vue'

const filters = ref({
  workOrderName: '',
  businessSystemName: '',
  startDate: '',
})
</script>

<style scoped>
.filter-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.el-form--inline .el-form-item {
  display: inline-flex;
  margin-right: 32px;
  vertical-align: middle;
  margin-bottom: 0;
}
</style>
