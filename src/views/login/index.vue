<template>
<div class="login-container">
<!--ref是在函数中获取dom-->
  <el-form class="login-form" ref="login-form" :model="user" :rules="rules">
    <div class="title-container">
      <h3 class="title">
        系统登陆
      </h3>
    </div>
<!--    给form-item添加prop 为了校验-->
    <el-form-item prop="mobile">
      <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
    </el-form-item>
    <el-form-item prop="captcha">
      <el-input v-model="user.captcha" placeholder="请输入验证码"></el-input>
    </el-form-item>
    <el-form-item prop="checked">
      <el-checkbox v-model="user.checked"><el-link href="https://www.baidu.com" target="_blank">
        我已阅读用户协议和隐私条款
      </el-link></el-checkbox>

    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" class="login-btn" :loading="loginLoading">登陆</el-button>

    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    const validateAgree = (rule, value, callback) => {
      // 通过 callback
      console.log(value)
      if (value) {
        callback()
      } else {
        callback(new Error('请同意协议啊'))
      }
    }
    return {
      user: {
        mobile: '',
        captcha: '',
        checked: true
      },
      loginLoading: false,

      rules: {
        mobile: [
          // 必须要有 没有提示message 焦点处罚
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 手机号正则
          {
            // 要注意没有单引号
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: '请输入正确手机号',
            trigger: 'change'
          }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        checked: [
          { validator: validateAgree, trigger: 'change' }
        ]

      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$refs['login-form'])
      this.$refs['login-form'].validate(
        (valid) => {
          if (valid) {
            //  loading
            this.loginLoading = true
            //  axios
            var _this = this
            this.$notify(

              {
                message: '安德伍德 shi shi la ni',
                duration: 30000,
                onClose () {
                  console.log(this)
                  console.log(_this)
                  _this.loginLoading = false
                  _this.$router.push('home')
                }
              }
            )

            // this.$router.push('/home')
          } else {
            console.log('error submit!!')
            return false
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  position: fixed;
  left:0;
  top:0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d3a4b;
  .login-form{
    background-color: #ffffff;
    padding: 50px;
    //??
    min-width: 300px;
  }
  .login-btn{
    width: 100%;
  }
  .title-container{
    .title{
      text-align: center;
      font-family: "Microsoft YaHei";
    }

  }
}
</style>
