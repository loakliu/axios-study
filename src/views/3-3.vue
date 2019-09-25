<template>
  <div></div>
</template>

<script>
// 拦截器： 在请求或响应被处理前拦截他们；
// 解释：在发起请求前做一些处理，或者在后端响应之后做一些处理

// 故拦截器分为两种： 请求拦截器，响应拦截器

import axios from "axios";

export default {
  name: "axios3-2",
  components: {},
  created() {

    // 请求拦截器

    axios.interceptors.request.use(config=>{
      // 在发送请求前做些什么
      return config
    },err=>{
      // 在请求错误的时候做些什么，返回一个promise
      return Promise.reject(err)
    })

    // 响应拦截器
    axios.interceptors.response.use(res=>{
      // 请求成功响应数据做处理
      return res
    },err=>{
      // 响应错误做些什么
      return Promise.reject(err)
    })

    // 例子：实际开发----登陆状态（token:''）,访问需要登录的例子
    // 一般都是通过什么一个axios实例，而不使用axios.的方式，因为可能会造成全局污染；
    let instance = axios.create({});
    instance.interceptors.request.use(config=>{
      config.headers.token=""; //一般添加到headers中
      return config;
    })
    // 访问不需要登录的接口，分开访问
    let newInstance=axios.create({});

    // 移动端开发，假设登陆时间很长，在请求时，添加一个等待的样式

    let instance_phone = axios.create({});
    instance_phone.interceptors.ruquest.use(config=>{
      $("#model").show();
      return config;
    })
    // 当请求到数据的时候，将样式进行隐藏
    instance_phone.insterceptors.response.use(res=>{
      $('#model').hide();
      return res;
    })
  }

};
</script>
