<template>
  <div class="section">
    <h3>资源开通建议</h3>
    <el-row :gutter="20">
      <el-col :span="12"
        ><strong>云资源是否满足需求：</strong>{{ suggestion.resourceSufficient }}</el-col
      >
      <el-col :span="12"
        ><strong>云化架构是否满足需求：</strong>{{ suggestion.architectureSufficient }}</el-col
      >
    </el-row>
    <el-row :gutter="20" class="mt-2">
      <el-col :span="12"
        ><strong>业务是否有规划设计：</strong>{{ suggestion.businessPlanned }}</el-col
      >
      <el-col :span="12"><strong>安全域：</strong>{{ suggestion.securityZone }}</el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export interface Suggestion {
  resourceSufficient: string
  architectureSufficient: string
  businessPlanned: string
  securityZone: string
}

export default defineComponent({
  name: 'ResourceSuggestion',
  props: {
    suggestion: {
      type: Object as PropType<Suggestion>,
      required: true,
    },
  },
})
</script>
