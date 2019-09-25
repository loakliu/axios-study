<template>
  <div></div>
</template>

<script>
// 错误处理：请求错误时进行的处理

import axios from "axios";

export default {
  name: "axios3-4",
  components: {},
  created() {
    axios.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err);
      }
    );
    axios.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(err);
      }
    );

    axios
      .get("/data.json")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    // 例子： 实际开发过程中，一般添加一个统一的错误处理

    let instance = axios.create({});
    instance.interceptors.request(config=>{
      return config;
    },err=>{
      // 请求错误  一般http 状态码以4开头， 常见401超时， 404 not found
      return Promise.reject(err);
    })

    instance.interceptors.responce.use(res=>{
      return res;
    },err=>{
      // 响应错误处理
      // 一般http状态码以5开头的，常见500 系统错误， 502 系统重启

      // c错误统一处理
      $('#model').show();
      setTimeout(()=>{
        $('#model').hide();
      },2000);
      return Promise.reject(err);
    })

    // 当该接口比较特殊，需要cathc错误在别处使用，还可以在请求时添加一个catch
    instance.get('.data.json').then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
  }

};
</script>
