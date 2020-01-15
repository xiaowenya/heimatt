<template>
  <div class="login-container">
    <!-- 头部导航 -->
    <van-nav-bar title="登录" class="header-bar" />
    <!-- 输入框 -->
    <van-cell-group>
      <!-- 手机号 -->
      <van-field type="text" v-model="loginData.mobile" placeholder="请输入手机号" :error-message="format.mobile"
        @input="formatMobile">
        <!-- 左侧图标 -->
        <template slot="left-icon">
          <span class="iconfont icon-iphone myIcon"></span>
        </template>
      </van-field>
      <!-- 验证码 -->
      <van-field type="text" v-model="loginData.code" placeholder="请输入验证码" :error-message="format.code"
        @input="formatCode">
        <!-- 左侧图标 -->
        <template slot="left-icon">
          <span class="iconfont icon-lock myIcon"></span>
        </template>
        <!-- 右侧图标 -->
        <template slot="right-icon">
          <van-button type="primary" size="small" color="#ededed" class="code">获取验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <!-- 登陆按钮 -->
    <div class="btn-box">
      <van-button type="primary" @click="login" size="large" color="#6db4fb" class="login">登录</van-button>
    </div>
  </div>
</template>

<script>
  import { login } from '@/api/login'
  export default {
    name: 'login',
    data() {
      return {
        loginData: {
          mobile: '',
          code: ''
        },
        format: {
          mobile: '',
          code: ''
        }
      }
    },
    methods: {
      formatLogin() {
        var isPass = []
        // 验证手机号
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (reg.test(this.loginData.mobile)) {
          this.format.mobile = ''
          isPass.push(true)
        } else {
          this.format.mobile = '手机格式不对哦'
          isPass.push(false)
        }
        // 验证码
        if (this.loginData.code.trim().length === 6) {
          this.format.code = ''
          isPass.push(true)
        } else {
          this.format.code = "验证码必须是6位数哦"
          isPass.push(false)
        }
        return isPass.includes(false)
      },
      async login() {
        // if (this.formatLogin()) return
        if (this.formatLogin && this.formatMobile) {
          let res = await login(this.loginData)
          window.console.log(res.data)
        }
      },
      formatMobile() {
        var isPass = []
        // 验证手机号
        const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
        if (reg.test(this.loginData.mobile)) {
          this.format.mobile = ''
          return true
        } else {
          this.format.mobile = '手机格式不对哦'
        }
        if (this.loginData.mobile.trim().length === 0) {
          this.format.mobile = "手机号不能为空"
        }
      },
      formatCode() {
        if (this.loginData.code.trim().length === 0) {
          this.format.code = "验证码不能为空"
        } else if (this.loginData.code.trim().length === 6) {
          this.format.code = ''
          return true
        } else {
          this.format.code = "验证码必须是6位数哦"
        }
      }
    },
  }
</script>

<style lang="less">
  .login-container {
    .header-bar {
      background-color: #3296fa;

      .van-nav-bar__title {
        color: #fff;
      }
    }

    .myIcon {
      font-size: 24px;
      margin-right: 10px;
    }

    .code {
      border-radius: 16px;

      span {
        color: #666
      }
    }

    .btn-box {
      padding: 40px 20px;

      .login {
        border-radius: 8px;
      }
    }
  }
</style>