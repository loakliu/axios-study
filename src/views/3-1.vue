<template>
  <div></div>
</template>

<script>
// axios 实例
// 为什么要创建axios实例？

// 后端接口地址有多个，并且超时时长不一样；通过axios配置多种参数，用实例去请求，这样就不用一个一个地去请求。

import axios from "axios";

export default {
  name: "axios3-1",
  components: {},
  created() {
    // 什么时候使用axios实例？
    // 当项目中需要用到多个域名，多个语言，只通过axios.get不能满足需求；
    // axios.get在使用的时候，其实也是创建了一个实例，只不过是使用了默认值
    let instance = axios.create({
      baseURL: 'http://localhost:8080',
      timeout:1000 //设置超时时长
    })
    let instance2 = axios.create({
      baseURL:'http://localhost:8080',
      timeout:5000
    })
    instance.get('/data.json').then(res=>{
      console.log(res);
    })
  }
};
</script>
