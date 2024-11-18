<template>
  <div class="section">
    <h3>资源申请概览</h3>
    <el-row :gutter="20">
      <el-col :span="8"><strong>云主机总数：</strong>{{ summary.vmCount }}</el-col>
      <el-col :span="8"><strong>vCPU：</strong>{{ summary.vcpu }}</el-col>
      <el-col :span="8"><strong>内存：</strong>{{ summary.memory }}</el-col>
    </el-row>
    <el-row :gutter="20" class="mt-2">
      <el-col :span="8"><strong>存储：</strong>{{ summary.storage }}</el-col>
      <el-col :span="8"><strong>带宽：</strong>{{ summary.bandwidth }}</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export interface Summary {
  vmCount: number
  vcpu: string
  memory: string
  storage: string
  bandwidth: string
}

export default defineComponent({
  name: 'ResourceOverview',
  props: {
    summary: {
      type: Object as PropType<Summary>,
      required: true,
    },
  },
})
</script>
