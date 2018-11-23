<template>
  <div id="login">
    <router-link to="/info">
      <div class="lp">
        <div class="item">立即</div>
        <div class="item">登录</div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "login1"
  }
</script>

<style lang="stylus">

  #login
    width: 70px
    height: 70px
    border-radius: 50%
    background: #99a9bf;
    text-align: center
    .lp
      padding-top: 16%
      .item
        color: #f0f0f0
        line-height: 23px

</style>
