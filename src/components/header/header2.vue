<template>
  <el-row>
    <el-col :span="3">
      <div class="bg-purple grid-content">
        <span class="el-icon-arrow-left ws" @click="back"></span>
      </div>
    </el-col>
    <el-col :span="21">
      <div class="grid-content bg-purple-light title">
        <i>{{msg}}</i>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "header2",
    data() {
      return {
        title: 'dsa'
      }
    },
    computed: {
      ...mapState(['auth']),
      msg: function () {
        if (this.auth) {
          this.title = '登录页面'
        } else {
          this.title = '用户信息'
        }
        return this.title
      }
    },
    methods: {
      back() {
        this.$router.push({path: '/index'})
      }
    }
  }
</script>

<style lang="stylus">

  .title
    text-align: center
    i
      font-size: 18px
      line-height: 36px
      color: #999999
      margin-right: 40px

</style>
