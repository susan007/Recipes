<template>
  <div>
    <head-bar v-bind:title="title" class="head"></head-bar>

    <!--<mcontent v-bind:mcontent="mcontent" class="mcontent"></mcontent>-->

    <h3>{{$route.query.title}}-{{$route.query.mcontent}}</h3>

    <h3>测试picker</h3>
    <div @click="showPicker(0)" ref="select0">{{ selectedText[0] }}</div>
    <picker @select="handleSelect(0,arguments)" :selected-index="selectedIndex[0]"
            ref="picker0" :title="title" :cancelTxt="cancelTxt"
            :confirmTxt="confirmTxt"></picker>

    <div class="select" @click="showPicker(1)" ref="select1">{{ selectedText[1] }}</div>
    <picker @select="handleSelect(1,arguments)" :data="numData" :selected-index="selectedIndex[1]"
            ref="picker1" :title="title" :cancelTxt="cancelTxt"
            :confirmTxt="confirmTxt"></picker>

    <foot-bar class="foot"></foot-bar>
  </div>
</template>

<script>
  //导入组件
  import mcontent from '../components/mcontent.vue'
  import headBar from '../components/head-bar.vue'
  import footBar from '../components/foot-bar.vue'
  import picker from '../components/picker.vue'

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
  let data2 = [
    {
      text: '输出',
      value: 'a'
    }, {
      text: '控制',
      value: 'b'
    },
    {
      text: '核心',
      value: 'c'
    },
    {
      text: '爆发',
      value: 'd'
    },
    {
      text: '辅助',
      value: 'e'
    },
    {
      text: '打野',
      value: 'f'
    },
    {
      text: '逃生',
      value: 'g'
    }, {
      text: '先手',
      value: 'h'
    }
  ]
  let yuans = []
  let jiaos = []

  export default{
    components: {
      mcontent, headBar, footBar, picker
    },
    data() {
      return {
        title: '',
        mcontent: this.$route.query.mcontent,
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
        numData: [data1,data2]
      }
    },
    methods: {
      showPicker(index) {
        let picker = this.$refs['picker' + index]
        picker.show()
      },
      handleSelect(index, args) {
        //选择的项目在这块做处理
        this.selectedText.splice(index, 1, args[2].join('，'))
        console.log(">>>"+this.selectedText[0])
      }
    },
    mounted () {
      this.$refs.picker0.setData([data1])
    },
    created () {
//      for (var i = 0; i < 100; i++) {
//        yuans.push(i)
//        jiaos.push(i)
//      }
//      this.numData.push(yuans)
//      this.numData.push(jiaos)
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
  }

  .mcontent {
    height: 100%;
    width: 100%;
  }

  .foot {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }

</style>
