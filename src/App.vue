<template>
  <div id="app">
    <div id="nav">
      <h1>学vue仓库</h1>
      <el-button>默认按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
      <router-view/>

    </div>
    <!--    路由出口 也就是对应上面的路由要显示的组件 -->

  </div>
</template>
<script>
export default {
  name: 'App'

}
</script>
<style lang="less">

</style>
