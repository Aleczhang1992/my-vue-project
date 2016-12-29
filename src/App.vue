<template>
  <div id="app">
  	<mt-header title="提供两个测试页面">
	  <mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'


import { Header,Button} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);


export default {
  name: 'app',
  components: {
    'mt-header':Header,
    'mt-button':Button
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
}
</style>
