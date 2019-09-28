<template>
  <div class="home">
    <!-- 联系人列表 -->
    <van-contact-list :list="list" @add="onAdd" @edit="onEdit" />
    <!-- 联系人编辑 -->
    <van-popup v-model="showEdit" position="bottom">
      <van-contact-edit
        :contact-info="editingContact"
        :is-edit="isEdit"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>


<script>
import { ContactList, Toast, ContactEdit, Popup } from "vant"; //引入vant中button租金啊
import axios from "axios";

export default {
  name: "ContactList2",
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data() {
    return {
      // list中的数据格式，数组的每个项都是一个对象
      // {
      //   id:1,
      //   name:'',
      //   tel:''
      // }
      list: [],
      instance: null, // axios 实例
      showEdit: false, // 编辑弹出框的显示和隐藏
      editingContact: {}, // 正在编辑的联系人数据
      isEdit: false // 新建或者编辑
    };
  },
  created() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api",
      timeout: 1000
    });
    this.getList();
  },
  methods: {
    getList() {
      this.instance
        .get("/contactList")
        .then(res => {
          // console.log(res);
          this.list = res.data.data;
        })
        .catch(err => {
          console.log(err);
          Toast("请求失败，请稍后重试");
        });
    },
    onAdd() {
      // 添加联系人
      this.showEdit = true;
      this.isEdit = false;
    },
    onEdit(info) {
      //编辑联系人
      this.showEdit = true;
      this.isEdit = true;
      this.editingContact = info;
    },
    onSave(info) {
      //保存联系人
      if (this.isEdit) {
        // 编辑保存
        this.instance.put("/contact/edit", info).then(res => {
          if (res.data.code === 200) {
            Toast("编辑成功");
            this.showEdit = false;
            this.getList();
          }
        }).catch(()=>{
          Toast("请求失败，请稍后重试");
        });
      } else {
        // 新建保存
        this.instance
          .post("/contact/new/json", info)
          .then(res => {
            if (res.data.code === 200) {
              Toast("新建成功");
              this.showEdit = false;
              // 每次新建数据后都需进行异步刷新数据，故将请求封装成一个方法，新建完成后进行调用
              this.getList();
            }
          })
          .catch(err => {
            console.log(err);
            Toast("请求失败，请稍后重试");
          });
      }
    },
    onDelete(info) {
      // 删除联系人
      this.instance.delete('/contact',{
        params:{
          id:info.id
        }
      }).then(res=>{
        if(res.data.code===200){
          Toast('删除成功');
          this.showEdit=false;
          this.getList();
        }
      }).catch(()=>{
         Toast("请求失败，请稍后重试");
      })
    }
  }
};
</script>
<style>
.van-contact-list_add {
  z-index: 0;
}
.van-popup {
  height: 100%;
}
</style>
