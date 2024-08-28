<template>
  <el-container>
    <el-aside width="200px">
      <Sidebar/>
    </el-aside>
    <el-container>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
  name: 'App',
  components: {
    Sidebar,
  },
  setup() {
    document.getElementById('loadingPage').remove()
  }
}
</script>
<style lang="less">
.el-aside {
  margin: 1em 0 1em 1em;
  border-radius: 8%;
  background-color: red;
}
</style>
