<template>
  <div id="function">
    <el-row>
      <el-col :span="12">
        <div class="func_h grid-content bg-purple" @click="door"><span><i class="el-icon-bell"></i>门禁</span></div>
      </el-col>
      <el-col :span="12">
        <div class="func_h grid-content bg-purple-light" @click="lift"><span><i class="el-icon-d-caret"></i>乘梯</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="func_h grid-content bg-purple-light" @click="go"><span><i class="el-icon-message"></i>物业</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="func_h grid-content bg-purple" @click="other"><span><i class="el-icon-menu"></i>其他</span></div>
      </el-col>
    </el-row>
    <div id="lp" v-if="auth">
      <login1></login1>
    </div>
  </div>
</template>

<script>

  import login1 from '../login/login1'
  import {mapState} from 'vuex'

  export default {
    name: "function",
    computed: {
      ...mapState(['auth'])
    },
    data() {
      return {}
    },
    components: {
      login1
    },
    methods: {
      door() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {
          var SIP = '61723128305334'
          var SIP_PSW = '63dbbf93'
          var DEV_SIP = '61723086249374'
          ReddotApp.setAccount(SIP, SIP_PSW, DEV_SIP)
          ReddotApp.monitor()
        }
      },
      go() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {
          this.$router.push({path: '/index/connect'})
        }
      },
      lift() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {

        }
      },
      other() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {
          ReddotApp.unlock()
        }
      }
    }
  }
</script>

<style lang="stylus">

  #function
    position: relative
    #lp
      position: absolute
      top: 33%
      right: 41%
    .func_h
      min-height: 100px !important
      margin: 2px
      span
        line-height: 100px
        font-size: 40px
        color: #7e8c8d


</style>
