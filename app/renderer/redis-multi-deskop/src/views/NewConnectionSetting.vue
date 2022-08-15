<script setup lang="ts">
import { reactive } from "vue";
const { ipcRenderer } = window.require("electron");

const form = reactive({
  name: "",
  address: "",
  port: 6379,
  password: "",
  username: "",
});

const handleConfirmClick = () => {
  console.log("form:", form);
};

const handleCancelClick = () => {
  ipcRenderer.send("close-connection-window");
};
</script>

<template>
  <div class="wrapper">
    <el-form :model="form" label-width="80px">
      <el-form-item label="连接名">
        <el-input v-model="form.name" placeholder="请输入连接名" />
      </el-form-item>
      <el-form-item label="地址">
        <div class="form-item">
          <el-input
            class="address"
            v-model="form.address"
            placeholder="请输入地址"
          />
          ：
          <el-input-number v-model="form.port" :min="1" :step="1" />
        </div>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input
          v-model="form.username"
          placeholder="请输入Redis服务器授权用户名(可选)Redis>6.0"
        />
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="请输入Redis服务器授权密码(可选)"
          show-password
        />
      </el-form-item>
    </el-form>
    <div class="buttons">
      <el-button size="large" type="success" round @click="handleConfirmClick"
        >确定</el-button
      >
      <el-button size="large" round @click="handleCancelClick">取消</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
}
.form-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  .address {
    flex: 1;
    margin-right: 10px;
  }
}
.buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
