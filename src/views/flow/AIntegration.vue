<template>
  <div class="section">
    <h3>4A接入</h3>
    <el-form>
      <!-- 导出接入表 -->
      <el-form-item label="4A接入表导出">
        <el-button type="primary" @click="handleExport">导出接入表</el-button>
      </el-form-item>

      <!-- 文件上传 -->
      <el-form-item label="4A接入说明">
        <el-upload
          action="#"
          :file-list="fileList"
          list-type="text"
          class="upload-demo"
          :on-change="handleChange"
        >
          <el-button size="small" type="primary">文件上传</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { UploadFile } from 'element-plus/es/components/upload'

export default defineComponent({
  name: 'AIntegration',
  props: {
    fileList: {
      type: Array as PropType<UploadFile[]>,
      required: true,
    },
  },
  emits: ['upload'],
  methods: {
    handleExport() {
      // 模拟导出接入表的逻辑
      console.log('导出接入表...')
    },
    handleChange(file: UploadFile, fileList: UploadFile[]) {
      console.log('Uploaded files:', fileList)
      this.$emit('upload', fileList)
    },
  },
})
</script>

<style scoped>
.section {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
</style>
