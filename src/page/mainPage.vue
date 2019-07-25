<template>
  <div>
    <head-bar v-bind:title="title" class="head"></head-bar>

    <!--占位-->
    <div style="height: 3rem"></div>

    <!--<home @typeSearch="typeSearch"></home>-->

    <find></find>



    <div @click="showPicker(0)" ref="select0">{{ selectedText[0] }}</div>
    <picker @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"
            ref="picker0" :title="title" :cancelTxt="cancelTxt"
            :confirmTxt="confirmTxt"></picker>

    <div class="select" @click="showPicker(1)" ref="select1">{{ selectedText[1] }}</div>
    <picker @select="handleSelect(1,arguments)" :data="numData" :selected-index="selectedIndex[1]"
            ref="picker1" :title="title" :cancelTxt="cancelTxt"
            :confirmTxt="confirmTxt"></picker>

    <foot-bar class="foot" @footClick="footClick"></foot-bar>
  </div>
</template>

<script>
  //导入组件
  import headBar from '../components/head-bar.vue'
  import footBar from '../components/foot-bar.vue'
  import picker from '../components/picker.vue'
  import home from '../components/home.vue'
  import find from '../components/find'

  let data1 = [
    {
      text: '剧毒',
      value: 1
    }, {
      text: '蚂蚁',
      value: 2
    },
    {
      text: '幽鬼',
      value: 3
    },
    {
      text: '主宰',
      value: 4
    },
    {
      text: '卡尔',
      value: 5
    },
    {
      text: '宙斯',
      value: 6
    },
    {
      text: '巫医',
      value: 7
    }, {
      text: '巫妖',
      value: 8
    },
    {
      text: '神谕者',
      value: 9
    },
    {
      text: '撼地神牛',
      value: 10
    },
    {
      text: '蓝胖子',
      value: 11
    },
    {
      text: '水晶室女',
      value: 12
    },
    {
      text: '莉娜',
      value: 13
    },
    {
      text: '斯拉克',
      value: 14
    },
    {
      text: '斯拉达',
      value: 15
    },
    {
      text: '张全蛋',
      value: 16
    }
  ]
  let yuans = []
  let jiaos = []
  let yuanUnit = [{
    text: '元',
    value: 0
  }]
  let jiaoUnit = [{
    text: '角',
    value: 0
  }]

  export default {
    components: {
      headBar, footBar, picker, home, find
    },
    data() {
      return {
        title: '首页',
        selectedIndex: [
          [0],
          [1, 0],
          [0, 1, 2],
          [0, 0, 0]
        ],
        selectedText: [
          '单列选项',
          '双列选项'
        ],
        cancelTxt: '取消',
        confirmTxt: '确定',
        yuans: [],
        jiaos: [],
        numData: []
      }
    },
    mounted() {
      this.$refs.picker0.setData([data1])
    },
    created() {
      for (var i = 0; i < 100; i++) {
        var obj = new Object()
        obj.text = i
        obj.value = i
        yuans.push(obj)
        jiaos.push(obj)
      }
      this.numData.push(yuans)
      this.numData.push(yuanUnit)
      this.numData.push(jiaos)
      this.numData.push(jiaoUnit)
    },
    methods: {
      showPicker(index) {
        let picker = this.$refs['picker' + index]
        picker.show()
      },
      handleSelect(index, args) {
        //选择的项目在这块做处理
        this.selectedText.splice(index, 1, args[2].join('，'))
        console.log('>>>' + args[1][0] + '>>>' + args[2])
      },
      typeSearch(type) {
        alert(type)
      },
      footClick(index) {
        alert(index)
      }
    }
  }
</script>

<style scoped>

  body {
    margin: 0;
    padding: 0;
    background-color: #fbfaf7;
  }

  .head {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .foot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
