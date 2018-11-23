<template>
  <div id="info" ref="info">
    <v_header></v_header>
    <div class="login">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import BScroll from '../../../node_modules/better-scroll'
  import {mapState} from 'vuex'
  import v_header from '../header/header2'


  export default {
    name: "info",
    components:
      {
        v_header
      },
    computed: {
      ...mapState(['auth']),
    },
    mounted() {
      if (this.auth) {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.info, {click: true})
        })
      } else {
        this.$router.push({path: '/info/user'})
      }
    }
  }
</script>

<style lang="stylus">

  #info
    .login
      margin-top: 30px

</style>
