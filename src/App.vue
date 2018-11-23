<template>
  <div id="app" ref="app">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/index" exact>
          <span class="icon-1"></span>
          首页
        </router-link>
      </div>
      <div class="tab-item-scanner" @click="scanner">
        <router-link to="">
          <span class="icon-uniE900 inner"></span>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/info">
          <span class="icon-3"></span>
          我的
        </router-link>
      </div>
    </div>
    <div class="view" ref="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import BScroll from '../node_modules/better-scroll'
  import {mapState} from 'vuex'

  export default {
    name: 'App',
    computed: {
      ...mapState(['auth'])
    },
    mounted() {
      // this.$nextTick(() => {
      //   this.scroll = new BScroll(this.$refs.view, {click: true})
      // })
      this.height = document.documentElement.clientHeight
      this.$refs.app.style.height = this.height + 'px'
    },
    methods: {
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

  @import "common/stylus/base.styl"

  #app
    /*min-height: 700px*/
    .tab
      position: fixed
      bottom: 0
      display: flex
      height: 52px
      width: 100%
      z-index: 300
      .tab-item-scanner
        text-align: center
        .inner
          position: fixed
          z-index: 200
          border-radius: 50%
          height: 75px
          width: 75px
          bottom: -9px
          right: 40%
          background-color: #d3dce6
        .icon-uniE900
          font-size: 45px
          line-height: 75px
      .tab-item
        padding-top: 6px
        flex: 1
        text-align: center
        position: relative
        & > a
          display: block
          font-size: 14px
          line-height: 18px
          color: #777
          background-color: #e5e9f2

          &.router-link-active
            color: #f0f0f0
            background-color: #99a9bf

        .icon-1, .icon-3
          display: block
          font-size: 28px


    .view
      padding-bottom: 52px
</style>
