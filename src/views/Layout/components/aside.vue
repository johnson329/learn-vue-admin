<template>

  <!--      有子菜单 打开或关闭触发的事件-->
  <!--      @open="handleOpen"-->
  <!--      @close="handleClose"-->
    <el-menu
      default-active="/"
      class="nav-menu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"

      router
    >
<!--      router-->
      <!--      以index为path进行路由调换-->

      <el-menu-item index="/">
<!--        图标不够 用iconfont -->
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/content">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
      <el-menu-item index="/materials">
<!--        iconfont -->
        <i class="iconfont icon-image"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>

      <el-menu-item index="/articles">
        <i class="el-icon-setting"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
      <el-menu-item index="/comments">
        <i class="el-icon-setting"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
      <el-menu-item index="follow-ups">
        <i class="el-icon-setting"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
      <el-menu-item index="settings">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>

</template>

<script>
export default {
  name: 'Aside',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
.nav-menu {
  .iconfont{
    margin-right: 10px;
    padding-left: 5px;
  }
}

</style>
