<template>
  <div>
    <van-button type="default">默认按钮</van-button>
  </div>
</template>


<script>
import {Button} from 'vant'; //引入vant中button租金啊
import axios from "axios";

export default {
  name: "ContactList",
  components: {
    [Button.name]:Button
  },

};
</script>
