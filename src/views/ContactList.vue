<template>
  <!-- 封装完成后进行改造，未封装的备份为contactList2.vue , 路由亦可以访问 -->

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
  name: "ContactList",
  components: {
    [ContactList.name]: ContactList,
    [ContactEdit.name]: ContactEdit,
    [Popup.name]: Popup
  },
  data() {
    return {
      list: [],
      instance: null, 
      showEdit: false, 
      editingContact: {}, 
      isEdit: false 
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
    async getList() {
      let res = await this.$Http.getContactList();
      this.list = res.data;
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
    async onSave(info) {
      //保存联系人
      if (this.isEdit) {
        // 编辑保存
        let res = await this.$Http.editContact(info);
        if (res.code === 200) { //返回的res实际为res.data
          Toast("编辑成功");
          this.showEdit = false;
          this.getList();
        }
      } else {
        // 新建保存
        let res = await this.$Http.newContactJson(info);
        if (res.code === 200) {
          Toast("新建成功");
          this.showEdit = false;
          // 每次新建数据后都需进行异步刷新数据，故将请求封装成一个方法，新建完成后进行调用
          this.getList();
        }
      }
    },
    async onDelete(info) {
      // 删除联系人
      let res = await this.$Http.delContact({
        id: info.id
      });
      if (res.code === 200) {
        Toast("删除成功");
        this.showEdit = false;
        this.getList();
      }
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
