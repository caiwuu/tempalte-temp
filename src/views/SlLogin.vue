<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="Enter username"
          :class="{ 'input-error': errors.username }"
        />
        <span v-if="errors.username" class="error-message">{{ errors.username }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter password"
          :class="{ 'input-error': errors.password }"
        />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>

      <button type="submit" class="submit-btn">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/api/user'
import { useUserStore } from '@/stores/user'
import router from '@/router'
const userStore = useUserStore()
// 定义响应式变量
const username = ref('')
const password = ref('')
const errors = ref({
  username: '',
  password: '',
})

// 提交处理函数
const handleSubmit = () => {
  // 重置错误信息
  errors.value = {
    username: '',
    password: '',
  }

  // 简单的表单验证
  if (!username.value) {
    errors.value.username = 'Username is required'
  }
  if (!password.value) {
    errors.value.password = 'Password is required'
  }

  // 如果验证通过，进行登录处理
  if (!errors.value.username && !errors.value.password) {
    login({
      uid: 'kunlun',
      eid: 'xxxx',
      userName: username.value,
      email: 'xxxx@zj.chinamobile.com',
      mobilePhone: 'xxxx',
      deptFullName: '合作伙伴-信息技术部-兰德',
      deptName: '兰德',
      deptDN: 'OU=兰德,OU=信息技术部,OU=合作伙伴,O=zmcc',
      companyName: '省公司',
    }).then((res) => {
      if (res.code === 200) {
        // alert('登录成功')
        userStore.setUser(res.entity)
        router.push('/')
      }
    })
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}

.input-error {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 12px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #45a049;
}
</style>
