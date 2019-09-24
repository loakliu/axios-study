<template>
  <div></div>
</template>

<script>
// axios 配置参数

import axios from "axios";

export default {
  name: "axios3-1",
  components: {},
  created() {
    axios.create({
      baseURL: "http://localhost:8080", // 请求的域名，基本地址,http://localhost:8080为默认值
      timeout: 1000, //请求时长（ms）,后端设定，超时释放内存
      url: "/data.json", //请求路径
      method: "get", // 请求方法，get, post, put, patch, delete
      headers: {
        token: ""
      }, //设置请求头
      params: {}, //请求参数拼接在url上
      data: {} // 请求参数放在请求中
    });

    // 参数的配置方式：

    // 1.axios全局配置(很少用到，一般全局配置仅修改下面的两项)
    axios.defaults.timeout = 1000;
    axios.defaulst.baseURL = "http://localhost:8080";

    // 2.axios实例配置
    // 若不添加参数，则使用的是全局配置的参数
    let instance = axios.create();
    // 修改实力配置的参数
    instance.defaults.timeout = 3000;

    // 3.axios请求配置
    // 根据不同的接口修改对应参数
    instance.get("/data.json", {
      timeout: 5000
    });

    // 配置参数的优先级？？？
    //  axios请求配置 > axios实例配置 >axios全局配置

    // 实际开发
    // 假设：有两种请求接口
    // http:localhost:9090
    // http:localhost:9091

    let instance = axios.create({
      baseURL: "http://loaclhost:9090",
      timeout: 1000
    });

    let instance1 = axios.create({
      baseURL: "http://loaclhost:9091",
      timeout: 1000
    });

    instance.get("/contactList", {
      params: {}
    }).then(res => {
        console.log(res);
    });

    instance.get('/orderList',{ //假设文件大，请求需要事件更长
      timeout:5000
    }).then(res=>{
      console.log(res);
    })
  }
};
</script>
