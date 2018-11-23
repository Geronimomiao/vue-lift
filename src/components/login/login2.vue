<template>
  <div id="login2" ref="lo2">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple lh mb15">LOGO</div>
      </el-col>
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple mb15">
          <el-input v-model="phoneNumber" placeholder="请输入手机号"></el-input>
        </div>
      </el-col>
      <el-col :span="20" :offset="2">
        <div class="grid-content mb15 show">
          <el-input v-model="password" placeholder="请输入密码" :type="isShow">
          </el-input>
          <i class="el-icon-view isshow" @click="isshow($event)"></i>
        </div>
      </el-col>
      <el-col :span="8" :offset="3" class="btn">
        <el-button type="primary" size="medium" @click="login">登录</el-button>
      </el-col>
      <el-col :span="8" :offset="2" class="btn">
        <el-button type="success" size="medium" @click="register">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import BScroll from '../../../node_modules/better-scroll'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: "login2",
    data() {
      return {
        phoneNumber: '',
        password: '',
        isShow: 'password',
        flag: true,

      }
    },
    mounted() {
      if (this.auth) {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.lo2, {click: true})
        })
      }
    },
    computed: {
      ...mapState(['auth']),
      ...mapState(['user'])
      // ...mapGetters(['login'])
    },
    methods: {
      register() {
        this.$router.push({path: '/info/register'})
      },
      isshow(event) {
        // console.log(event)
        if (!event._constructed) {
          return
        }
        // console.log(this.flag)
        this.flag = !this.flag
        if (this.flag) {
          this.isShow = ''
        } else {
          this.isShow = 'password'
        }
      },
      login() {
        var param = {
          phoneNumber: this.phoneNumber,
          password: this.password
        }
        axios.post('/api/users/login', param).then(res => {
          // console.log(res)
          // var status = res.data.status
          // console.log(status)
          if (status == 0) {
            this.$store.commit('login', false)
            this.$notify({
              title: '提示',
              message: '登陆成功',
              offset: 200
            })
            this.$router.push({path: '/info/user'})
          } else {
            this.$notify({
              title: '提示',
              message: '请检查用户名和密码',
              offset: 200
            })
          }
        })
      }
    }
  }
</script>

<style lang="stylus">

  #login2
    .lh
      min-height: 160px
      line-height: 160px
      font-size: 34px
    .mb15
      margin-bottom: 15px
    .btn
      text-align: center
    .show
      position: relative
      .isshow
        display: block
        width: 30px
        height: 30px
        line-height: 30px
        position: absolute
        top: 5px
        right: 18px

</style>
