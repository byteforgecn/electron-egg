<template>
  <div>
    <el-menu
        :default-active="activePath"
        class="sidebar"
        @select="handleSelect"
    >
      <el-menu-item index="/">
        <el-icon><icon-menu /></el-icon>
        <router-link to="/">{{ $t('sidebar./') }}</router-link>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon><setting /></el-icon>
        <router-link to="/setting">{{ $t('sidebar.setting') }}</router-link>
      </el-menu-item>
      <el-menu-item index="/about">
        <el-icon><setting /></el-icon>
        <router-link to="/about">{{ $t('sidebar.about') }}</router-link>
      </el-menu-item>
      <el-menu-item index="/language">
        <el-icon><setting /></el-icon>
        <router-link to="/language">Language</router-link>
      </el-menu-item>
    </el-menu>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activePath: this.$route.path,
    };
  },
  watch: {
    '$route'(to) {
      this.activePath = to.path;
    },
  },
  methods: {
    handleSelect(index) {
      this.$router.push(index);
    },
  },
};
</script>

<style>
.sidebar {
  width: 200px;
}
.el-menu-item {
  background-color: pink;
}
.el-menu-item.is-active {
  background-color: #409EFF; /* 自定义高亮背景颜色 */
  color: white; /* 自定义高亮字体颜色 */
}
.el-menu-item.is-active:hover {
  background-color: #409EFF; /* 自定义高亮背景颜色 */
}
</style>
