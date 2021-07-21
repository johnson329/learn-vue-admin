<template>

  <el-container class="layout-container">
    <el-aside class="aside" width="200px">
      <Aside class="aside-menu"/>
    </el-aside>
    <el-container>
      <el-header class="header">

        <div>
          <i class="el-icon-s-fold"></i>
          <span>学vue后台</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <el-avatar :size="small" :src="circleUrl"></el-avatar>
            <span class="el-dropdown-link">
              周杰伦
            </span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
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
  },
  data () {
    return { circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png' }
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
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main {
  background-color: #E9EEF3;
}
.avatar-wrap {
  display: flex;
  align-items: center;
}

</style>
