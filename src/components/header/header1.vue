<template>
  <div id="header">
    <el-row>
      <el-col :span="3">
        <div class="grid-content bg-purple" @click="scanner">
          <span class="icon-uniE900 ws"></span>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light msg">xxxxx小区</div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple" @click="go">
          <span class="icon-2 ws"></span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "header",
    computed: {
      ...mapState(['auth'])
    },
    methods: {
      go() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {
          this.$router.push({ path: '/message' })
        }
      },
      scanner() {
        if (this.auth) {
          this.$notify({
            title: '提示',
            message: '请先登录APP',
            offset: 200
          });
        } else {
          ReddotApp.scanQRCode()
        }
      }
    }
  }
</script>

<style lang="stylus">

    .el-row
      .el-col
        border-radius: 4px;
        .msg
          line-height: 36px
          color: #666

      .bg-purple-dark
        background: #99a9bf;


      .bg-purple
        background: #d3dce6;


      .bg-purple-light
        background: #e5e9f2;


      .grid-content
        border-radius: 4px;
        min-height: 36px;
        text-align: center
        .ws
          color: #999999
          font-size: 35px

      .row-bg
        padding: 10px 0;
        background-color: #f9fafc;

</style>
