<template>
  <div class="testPage">
    <img class="logo" src="../assets/logo.png">
    <p class="welcome">欢迎使用 vue</p>
    <div v-html="content"></div>
  </div>
</template>

<script>


  export default {
    data () {
      return {
        title: 'Hello Vue!',
        content: ''
      }
    },
    methods: {
//    async getContent () {
//      const response = await fetch('/api/hello');
//      this.content = await response.text();
//    }
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
    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
