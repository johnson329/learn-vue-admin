<template>

  <el-container class="layout-container">
    <el-aside class="aside" width="200px">
      <Aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
<!--  <router-view/>-->
<!--  <div>-->
<!--    侧边导航栏-->
<!--  </div>-->

</template>

<script>

import Aside from './components/aside'
export default {
  name: 'LayoutIndex',
  components: { Aside },
  // 组件注册
  comments: {
    Aside
  }
}
</script>

<style scoped lang="less">

.layout-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.aside {
  background-color: #d3dce6;
  .aside-menu{
    height: 100%;
  }
}

.header {
  background-color: #B3C0D1;
}
.main {
  background-color: #E9EEF3;
}

</style>
