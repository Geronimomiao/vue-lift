<template>
  <div id="login2" ref="info">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple lh mb15">LOGO</div>
      </el-col>
      <el-col :span="20" :offset="2">
        <div class="grid-content bg-purple mb15">
          <el-input v-model="home" placeholder="分区-楼栋-单元-房号"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="relation" placeholder="同户主关系"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">

          <el-date-picker type="date" placeholder="居(暂)住期限" v-model="deadline" style="width: 100%;"></el-date-picker>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="tname" placeholder="请输入真实姓名"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="gerder" placeholder="请输入性别"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="Idcard" placeholder="请输入身份证号"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="phone" placeholder="请输入手机号"></el-input>
        </div>
        <div class="grid-content bg-purple mb15">
          <el-input v-model="password" placeholder="请设置app密码"></el-input>
        </div>
        <el-upload
          class="upload-demo"
          ref="upload"
          action="http://123.207.148.192:3000/message/img"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-col>
      <el-col :span="3" :offset="16" class="btn">
        <el-button type="success" size="medium" @click.stop.prevent="register">注册</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  import BScroll from '../../../node_modules/better-scroll'


  export default {
    name: "login2",
    data() {
      return {
        tname: '',
        password: '',
        phone: '',
        isShow: 'password',
        Idcard: '',
        gerder: '',
        deadline: '',
        relation: '',
        home: '',
        imageUrl: '',
        flag: true,
        fileList: []
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.info, {click: true})
      })
    },
    methods: {

      register() {
        this.$notify({
          title: '提示',
          message: '请耐心等待审核',
          offset: 100
        });
      },
      isshow(event) {
        if (!event._constructed) {
          return
        }
        this.flag = !this.flag
        if (this.flag) {
          this.isShow = ''
        } else {
          this.isShow = 'password'
        }
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style lang="stylus">

  #login2
    .lh
      min-height: 160px
      line-height: 160px
      font-size: 34px
    .mb15
      margin-bottom: 15px
    .btn
      text-align: center

</style>
