<template>
  <div class="con">
    <div class="cover">
      <h1>
        {{ errorTitle }} <small>{{ errorCode }}</small>
      </h1>
      <p class="lead" v-html="errorMessage"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 定义组件的 props，接收路由传递的 errorCode
const props = defineProps({
  errorCode: {
    type: Number,
    required: true,
  },
})

// 根据 errorCode 设置标题和消息
const errorTitle = ref('')
const errorMessage = ref('')

switch (props.errorCode) {
  case 404:
    errorTitle.value = 'Resource not found'
    errorMessage.value =
      'The requested resource could not be found but may be available again in the future.'
    break
  case 400:
    errorTitle.value = 'Bad Request'
    errorMessage.value =
      'The server cannot process the request due to something that is perceived to be a client error.'
    break
  case 403:
    errorTitle.value = 'Access Denied'
    errorMessage.value = 'The requested resource requires an authentication.'
    break
  case 500:
    errorTitle.value = 'Webservice currently unavailable'
    errorMessage.value =
      'An unexpected condition was encountered.<br/>Our service team has been dispatched to bring it back online.'
    break
  case 504:
    errorTitle.value = 'Webservice currently unavailable'
    errorMessage.value =
      "We've got some trouble with our backend upstream cluster.<br/>Our service team has been dispatched to bring it back online."
    break
  default:
    errorTitle.value = 'Error'
    errorMessage.value = 'An unexpected error occurred.'
}
</script>

<style type="text/css" scoped>
.lead {
  color: silver;
  font-size: 21px;
  line-height: 1.4;
}

.con {
  display: table-cell;
  vertical-align: middle;
  padding: 0 20px;
  color: #fff;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0;
  min-height: 100%;
  -webkit-box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.8);
  display: table;
  font-family: 'Open Sans', Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: #21232a;
}

.cover {
  display: table-cell;
  vertical-align: middle;
  padding: 0 20px;
}

h1 small {
  font-size: 68%;
  font-weight: 400;
  line-height: 1;
  color: #777;
}
</style>
