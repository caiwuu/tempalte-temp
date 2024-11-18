<template>
  <div class="section">
    <h3>云主机</h3>
    <el-table :data="vmList" border>
      <el-table-column prop="name" label="主机名称" width="150"></el-table-column>
      <el-table-column prop="module" label="功能模块" width="120"></el-table-column>
      <el-table-column prop="type" label="实例规格" width="150"></el-table-column>
      <el-table-column prop="systemDisk" label="系统盘" width="120"></el-table-column>
      <el-table-column prop="dataDisk" label="数据盘" width="120"></el-table-column>
      <el-table-column prop="image" label="镜像" width="180"></el-table-column>
      <el-table-column prop="bandwidth" label="带宽" width="100"></el-table-column>
      <el-table-column prop="network" label="网络平面" width="120"></el-table-column>
      <el-table-column prop="count" label="数量" width="100"></el-table-column>
      <el-table-column prop="resourcePool" label="资源池" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export interface Vm {
  name: string
  module: string
  type: string
  systemDisk: string
  dataDisk: string
  image: string
  bandwidth: string
  network: string
  count: number
  resourcePool: string
}

export default defineComponent({
  name: 'VmTable',
  props: {
    vmList: {
      type: Array as PropType<Vm[]>,
      required: true,
    },
  },
})
</script>
