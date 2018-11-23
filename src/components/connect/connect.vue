<template>
  <div id="connect">
    <div class="select mt15">
      <span class="item">
        <el-radio v-model="radio" label="1" border>投诉</el-radio>
      </span>
      <div class="item">
        <el-radio v-model="radio" label="2" border>报修</el-radio>
      </div>
      <span class="back item" @click="back">
        <el-radio v-model="radio" label="3" border>取消</el-radio>
      </span>
    </div>
    <div class="msg mt15">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20">
          <div>
            <el-input v-model="title" placeholder="请输入反馈内容标题"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20">
          <div class="msg-body mt15">
            <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 6}" placeholder="请输入反馈内容"
                      v-model="msg"></el-input>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20">
          <div class="msg-img mt15" @click="">
            <el-upload
              :action="actionPath"
              :on-success="handleSuccess"
              list-type="picture-card"
              :data="postData"
              :limit="3"
              :on-exceed="handleExceed"
            >
            <i class="el-icon-plus padding-plus" @click="getToken"></i>
            </el-upload>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="submit mt15">
      <el-row>
        <el-col :span="5" :offset="17">
          <div @click="sub">
            <el-button type="primary" size="medium">提交</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import uuid from 'uuid'

  export default {
    name: "connect",
    data() {
      return {
        radio: '1',
        title: '',
        msg: '',
        imgs: [],
        dialogVisible: false,
        postData: {
          token: '',
          key: ''
        },
        actionPath: 'https://up-z1.qiniup.com',
      }
    },
    methods: {
      back() {
        setTimeout(() => this.$router.push({path: '/index'}), 300)
      },
      getToken() {
        var key = 'reddot/' + uuid.v4()
        this.postData.key = key
        var param = {
          key: key
        }
        axios.post('/api/getToken', param).then(res => {
          // console.log(res.data.result)
          this.postData.token = res.data.result;
          // return next
        })
      },
      handleSuccess(res) {
        var url = 'http://wsmpage.cn/'
        var imgurl = url + res.key
        this.imgs.push(imgurl)
      },
      handleExceed(files, fileList) {
        this.$notify({
          title: '警告',
          message: '一次反馈最多只能提交3张图片',
          offset: 46
        });
      },
      sub() {

        // 将数据信息传至app后台
        var param = {
          type: this.radio,
          title: this.title,
          message: this.msg,
          imgs: this.imgs,
          status_code : '0'
        }
        // console.log(this.imgs)
        if (this.title !== '' && this.msg !== '') {
          axios.post('/api/message/insert', param).then(res => {
            if (res.data === 'ok') {
              this.$notify({
                title: '提示',
                message: '提交成功',
                offset: 200
              })
            }
          })
        } else {
          this.$notify({
            title: '提示',
            message: '请检查输入内容',
            offset: 200
          })
        }

      }
    }
  }
</script>

<style lang="stylus">

  #connect
    .mt15
      margin-top: 15px
    .select
      text-align: center
      display: flex
      .item
        flex: 1
    .msg
      .msg-img
        padding-left: 4px
        .el-upload-list--picture-card, .el-upload--picture-card, .el-upload-list__item
          height: 65px !important
          width: 65px !important
          line-height: 78px !important
      .padding-plus
        padding: 20px


</style>
