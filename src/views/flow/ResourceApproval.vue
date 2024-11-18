<template>
  <div class="resource-approval">
    <!-- 步骤条 -->
    <el-steps :active="activeStep" finish-status="success" align-center>
      <el-step v-for="(step, index) in steps" :key="index" :title="step.title"></el-step>
    </el-steps>

    <!-- 资源申请概览 -->
    <ResourceOverview :summary="summary" />

    <!-- 资源开通建议 -->
    <ResourceSuggestion :suggestion="suggestion" />

    <!-- 云主机信息 -->
    <VmTable :vmList="vmList" />

    <!-- 4A接入 -->
    <AIntegration :fileList="fileList" @upload="handleUpload" />

    <!-- 确认按钮 -->
    <div class="footer">
      <el-button @click="onCancel">取消</el-button>
      <el-button type="primary" @click="onConfirm">确认</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ResourceOverview from './ResourceOverview.vue'
import ResourceSuggestion from './ResourceSuggestion.vue'
import VmTable from './VmTable.vue'
import AIntegration from './AIntegration.vue'

interface Summary {
  vmCount: number
  vcpu: string
  memory: string
  storage: string
  bandwidth: string
}

interface Suggestion {
  resourceSufficient: string
  architectureSufficient: string
  businessPlanned: string
  securityZone: string
}

interface Vm {
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
  name: 'ResourceApproval',
  components: { ResourceOverview, ResourceSuggestion, VmTable, AIntegration },
  data() {
    return {
      activeStep: 4,
      steps: [
        { title: '发起工单' },
        { title: '资料概览' },
        { title: '架构负责人审核' },
        { title: '用户确认' },
        { title: '业务部门领导审批' },
        { title: '云资源部门领导审批' },
        { title: '网络开通' },
        { title: '资源开通' },
      ],
      summary: <Summary>{
        vmCount: 2,
        vcpu: '12核',
        memory: '24G',
        storage: '2T',
        bandwidth: '120M',
      },
      suggestion: <Suggestion>{
        resourceSufficient: '是',
        architectureSufficient: '是',
        businessPlanned: '是',
        securityZone: 'DMZ区',
      },
      vmList: <Vm[]>[
        {
          name: 'yybbxECS',
          module: 'A模块',
          type: '通用型 2C4G',
          systemDisk: 'SSD 60GB',
          dataDisk: 'SSD 60GB',
          image: 'windows server2012',
          bandwidth: '1M',
          network: '承载网',
          count: 10,
          resourcePool: '资源池1',
        },
        {
          name: 'yyccxECS',
          module: 'A模块',
          type: '通用型 4C8G',
          systemDisk: 'SSD 500GB',
          dataDisk: 'SSD 500GB',
          image: 'windows server2012',
          bandwidth: '1M',
          network: '承载网',
          count: 5,
          resourcePool: '资源池2',
        },
      ],
      fileList: [],
    }
  },
  methods: {
    onCancel() {
      console.log('取消操作')
    },
    onConfirm() {
      console.log('确认操作')
    },
    handleUpload(files: File[]) {
      console.log('Uploaded files:', files)
    },
  },
})
</script>

<style scoped>
.resource-approval {
  padding: 20px;
}

.footer {
  margin-top: 20px;
  text-align: right;
}
</style>
