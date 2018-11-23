<template>
  <div id="user">
    <el-row>
      <el-col :span="16" :offset="4">
        <el-card  shadow="always">
          <img src="../../common/images/test.jpg" class="image">
          <div style="padding: 14px;">
            <div class="nickname">
              <span>好吃的汉堡</span>
            </div>
            <div class="text item"> <span>姓名:</span> <span>Reddot</span></div>
            <div class="text item"> <span>身份:</span> <span>内测人员</span></div>
            <div class="text item"> <span>联系方式:</span> <span>130*****337</span></div>
          </div>
          <el-row>
            <el-col :span="3" :offset="14">
              <el-button type="danger" size="mini" class="button" @click="logout">注销<i class="el-icon-caret-right"></i></el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import {mapState} from 'vuex'
  import axios from 'axios'

  export default {
    name: "user",
    data() {
      return {}
    },
    computed: {
      ...mapState(['auth'])
    },
    methods: {
      logout() {
        axios.post('/api/users/logout').then(res => {
          var status = res.data.status
          if (status == 0) {
            this.$notify({
              title: '提示',
              message: '注销成功',
              offset: 200
            });
            this.$store.commit('login', true)
            this.$router.push({path: '/info'})
          }
        })
      }
    }
  }
</script>

<style lang="stylus">

  #user
    /*text-align: center*/
    margin-top: 60px
    .nickname
      text-align: center
    .image
      width: 100%;
      display: block;
    .text
      font-size: 14px;
      line-height: 14px
      display: flex
      text-align: center
      span
        flex 1
    .item
      padding-top: 10px
    .button
      display: inline-block
      width: 64px
      margin-left: 25px

</style>
