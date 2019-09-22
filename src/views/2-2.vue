<template>
  <div class="home"></div>
</template>

<script>
/*
  axios请求方法：get, post, put, patch, delete

  get: 获取数据
  post: 提交数据（表单提交，文件上传等） （公司中一般用于新建）
  put: 更新数据 （所有数据推送到后端）  （公司中一般用于更新）
  patch: 更新数据 （只将修改的数据推送到后端） （公司中一般用于更新，表单数据的内容比较多的时候）
  delete: 删除数据
*/

import axios from "axios";

export default {
  name: "axios2-2",
  components: {},
  created() {
    //axios中get请求方式的两种写法，以及带参数传递

    // 带参数路径为http://localhost:8080/data.json
    axios
      .get("/data.json", {
        params: {
          id: 12
        }
      })
      .then(res => {
        console.log(res);
      });

    axios({
      method: "get",
      url: "/data.json",
      params: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    });

    // psot请求方式
    // 两种数据格式，1. form-data 表单提交（图片上传，文件上传）
    //              2. application/json (大部分情况使用，json数据的流行)
    let data = {
      id: 13
    };
    axios.post("/post", data).then(res => {
      console.log(res);
    });

    axios({
      method: "post",
      url: "/post",
      data: data
    }).then(res => {
      console.log(res);
    });

    // form-data 请求
    let formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    axios.post("/post", formData).then(res => {
      console.log(res);
    });

    //put请求
    axios.put('/put', data).then(res=>{
      console.log(res);
    })

    // patch请求
    axios.patch('/patch', data).then(res=>{
      console.log(res);
    })

    //delete请求
    axios.delete('/delete',{
      params:{
        id: 12
      }
    }).then(res=>{
      console.log(res);
    })

    axios.delete('/delete',{
      data:{
        id: 12
      }
    }).then(res=>{
      console.log(res);
    })

    axios({
      method:'delete',
      url:'/delete',
      data:{},
      params:{}
    }).then(res=>{
      console.log(res);
    })
  }
};
</script>
