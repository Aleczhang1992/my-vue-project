<template>
  <div class="testPage">
    <img class="logo" src="../assets/logo.png">
    <p class="welcome">{{title}}</p>
    <router-link :to="{ name: 'hello', params: { userId: 123 }}">返回测试页面1</router-link>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'

  export default {
    data () {
      return {
        title: '这里是测试页面2!',
        content: ''
      }
    },
    methods: {
//    async getContent () {
//      const response = await fetch('/api/hello');
//      this.content = await response.text();
//    }
    },
    created(){
  	 	Indicator.open({
		  text: '加载中...',
		  spinnerType: 'fading-circle'
		});
        setTimeout(h => {
            Indicator.close();
        }, 500);
  },
    mounted () {

    },

    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }

  .logo {
    width: 100px;
    height: 100px;
    padding-top: 100px;
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
