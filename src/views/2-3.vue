<template>
  <div></div>
</template>

<script>
// 并发请求： 同时进行多个请求，并统一处理返回值

import axios from "axios";

export default {
  name: "axios2-3",
  components: {},
  created() {
    // axios.all()以及axios.spread()两个方法
    axios.all(
      [
        axios.get('/data.json'),
        axios.get('/city.json')
      ]
    ).then(
      axios.spread((dataRes,cityRes)=>{
        console.log(dataRes,cityRes);
      })
    )
  }
};
</script>
