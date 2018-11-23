<template>
  <div id="message">
    <v_header></v_header>
    <div id="main">
      <div class="title">
        <el-radio v-model="select" label="1" border class="inner">投诉</el-radio>
        <el-radio v-model="select" label="2" border class="inner">报修</el-radio>
      </div>

      <el-collapse v-model="activeNames" class="body" accordion>
        <div v-if="select == 1" v-for="(msg, i) in this.message1">
          <el-collapse-item v-bind:title="msg.title">
            <div>反馈标题：{{msg.title}}</div>
            <div>反馈内容：{{msg.message}}</div>
          </el-collapse-item>
        </div>
         <div v-if="select == 2" v-for="(msg, i) in this.message2">
          <el-collapse-item v-bind:title="msg.title">
            <div>反馈标题：{{msg.title}}</div>
            <div>反馈内容：{{msg.message}}</div>
          </el-collapse-item>
        </div>
      </el-collapse>

    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import v_header from '../header/header3'

  export default {
    name: "message",
    data() {
      return {
        message1: null,
        message2: null,
        select: '1',
        activeNames: ['1']
      }
    },
    created() {
      axios.get('api/message/1').then((res) => {
        this.message1 = res.data.result.list
        console.log(this.message1)
      })
      axios.get('api/message/2').then((res) => {
        this.message2 = res.data.result.list
        console.log(this.message2)
      })
    },
    methods: {

    },
    components: {
      v_header
    }
  }
</script>

<style lang="stylus">

  #main
    .title
      display: flex
      margin: 10px 10px
      .inner
        flex: 1
    .body
      margin: 0 20px

</style>
