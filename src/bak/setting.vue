<template>
  <div>
    <head-bar v-bind:title="title"></head-bar>
    <h2>axios 使用实例</h2>
    <button @click="mGetDataByAxios">axios查询空气</button>
    <button @click="mGetData">ajax查询空气</button>
    <select id="mSelect">
      <option>北京</option>
      <option>重庆</option>
      <option>西安</option>
      <option>深圳</option>
      <option>上海</option>
    </select>

    <p>空气质量详情</p>
    <p>城市：{{city}}</p>
    <p>pm 2.5：{{ mPm }}</p>
    <p>空气质量：{{quality}}</p>
  </div>
</template>

<script>
  import bus from '../store/bus.js'
  import headBar from '../components/head-bar.vue'
  import axios from 'axios'
  import qs from 'qs'


  export default{
    components: {headBar},
    data(){
      return {
        title: '空气质量查询',
        mPm: '',
        city: '',
        quality: ''
      }
    },
    methods: {
      formatterDateTime: function () {
        var date = new Date()
        var month = date.getMonth() + 1
        var datetime = date.getFullYear()
          + ""// "年"
          + (month >= 10 ? month : "0" + month)
          + ""// "月"
          + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
          + ""
          + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
          + ""
          + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
          + ""
          + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
        return datetime;
      },
      mGetData: function () {
        var mThis = this;
        var obj = document.getElementById('mSelect');
        var index = obj.selectedIndex; //序号，取当前选中选项的序号
        var mCity = obj.options[index].text;
        $.ajax({
          type: 'post',
          url: 'http://route.showapi.com/104-29',
          dataType: 'json',
          data: {
            "showapi_timestamp": this.$options.methods.formatterDateTime(),
            "showapi_appid": '56243', //这里需要改成自己的appid
            "showapi_sign": '8c70599441644381a78dd5a75b9f9ff3',  //这里需要改成自己的应用的密钥secret
            "city": mCity
          },
          error: function (XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
          },
          success: function (result) {
            console.log(result) //console变量在ie低版本下不能用
            console.log(result.showapi_res_body.pm.pm2_5)
            mThis.mPm = result.showapi_res_body.pm.pm2_5
            mThis.city = result.showapi_res_body.pm.area
            mThis.quality = result.showapi_res_body.pm.quality
          }
        })

      },
      mGetDataByAxios: function () {
        var mThis = this;
        var obj = document.getElementById('mSelect');
        var index = obj.selectedIndex; //序号，取当前选中选项的序号
        var mCity = obj.options[index].text;
        axios.post('http://route.showapi.com/104-29', qs.stringify({
          "showapi_timestamp": this.$options.methods.formatterDateTime(),
          "showapi_appid": '56243',
          "showapi_sign": '8c70599441644381a78dd5a75b9f9ff3',
          "city": mCity
        }))
          .then(function (result) {
            console.log("收到数据：" + JSON.stringify(result))
            //axios返回的数据多包了一层data 处理的时候注意下
            result = result.data;
            mThis.mPm = result.showapi_res_body.pm.pm2_5
            mThis.city = result.showapi_res_body.pm.area
            mThis.quality = result.showapi_res_body.pm.quality
          })
          .catch(function (error) {
            console.log("出错：" + error)
          })
      },
      getData: function () {
        //写法一
        axios.get('/user?id=123&name=张全蛋')
          .then(function (res) {
            console.log("请求成功啦！")
          })
          .catch(function (error) {
            console.log("请求出错啦！")
          })

        //写法二
        axios.get('/user', {
          params: {
            id: 123,
            name: '张全蛋'
          }
        })
          .then(function (res) {
            console.log("请求成功啦！")
          })
          .catch(function () {
            console.log("请求出错啦！")
          })
      }
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 800px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
