<template>
  <div id="index">
    <v_header></v_header>
    <div class="block">
      <el-carousel height="150px">
        <!--<el-carousel-item v-for="adv in advData" :key="adv.id">-->
          <!--<img :src="adv.url" class="img-responsive">-->
        <!--</el-carousel-item>-->
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import v_header from '../header/header1'
  import v_function from '../function/function'
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        advData: [
        //   {url: require('../../common/images/1.jpg'), id: 1},
        //   {url: require('../../common/images/2.jpg'), id: 2},
        //   {url: require('../../common/images/3.jpg'), id: 3},
        //   {url: require('../../common/images/4.jpg'), id: 4}
        ]
      }
    },
    components: {
      v_header,
      v_function
    },
    computed: {
      ...mapState(['auth']),
    },
    mounted: function () {
     this.checkLogin()
    },
    methods: {
      checkLogin() {
        axios.post('/api/users/checkLogin').then(res => {
          console.log(res)
          var status = res.data.status
          if (status == 0) {
            this.$store.commit('login', false)
          }
        })
      }
    }
  }
</script>


<style lang="stylus">
  .block
    /*margin: 2px*/
    margin-top: 2px

    .el-carousel__item h3
      color: #fff
      font-size: 60px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      font-weight: 600
      text-align: center

    .el-carousel__item:nth-child(2n)
      background-color: #99a9bf;

    .el-carousel__item:nth-child(2n+1)
      background-color: #d3dce6;

    .img-responsive
      display: inline-block;
      height: auto;
      max-width: 100%;

</style>
