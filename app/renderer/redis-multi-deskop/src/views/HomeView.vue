<script setup lang="ts">
declare const window: Window & { require: any };

import { CirclePlusFilled } from "@element-plus/icons-vue";
// import { ipcRenderer } from "electron";
const { ipcRenderer } = window.require("electron");
const handleConnectToRedisServer = () => {
  ipcRenderer.send("create-connection-window");
};
</script>

<template>
  <main>
    <el-aside class="aside">
      <div class="buttons">
        <el-button
          @click="handleConnectToRedisServer"
          type="success"
          text
          :icon="CirclePlusFilled"
        >
          连接至Redis Server
        </el-button>
      </div>
    </el-aside>
  </main>
</template>

<style lang="scss" scoped>
.aside {
  border-right: 1px solid var(--el-border-color);
  height: 100vh;
}
.buttons {
  padding: 10px;
  border-bottom: 1px solid var(--el-border-color);
}
</style>
