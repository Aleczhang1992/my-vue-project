<template>
  <div class="hello">
  	
  	<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <router-link :to="{ name: 'testPage', params: { userId: 123 }}">测试页面</router-link>
  </mt-tab-container-item>
</mt-tab-container>
<img class="logo" src="../assets/logo.png">
 <p class="welcome">{{ message }}</p>
<div v-html="content"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'
import { Navbar, TabItem, TabContainer, TabContainerItem, Cell } from 'mint-ui'

Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
export default {
  name: 'hello',
  data () {
    return {
      selected: '1',
      title: 'Hello Vue!',
      content: ''
    }
  },
  components: {
    'mt-navbar': Navbar,
    'mt-tab-item': TabItem,
    'mt-tab-container': TabContainer,
    'mt-tab-container-item': TabContainerItem,
    'mt-cell': Cell
  },
  methods: {
      async getContent () {
        const response = await fetch('/api/testData');
        this.content = await response.text();
        
      }
    },
   //计算属性
  computed: mapState([
      'message'
    ]),
  mounted () {
  	//组件加载时
  	//修改state中的message
      this.$store.commit('MESSAGE', '欢迎使用-- vue！');
      //调用接口获取内容
      this.getContent();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
