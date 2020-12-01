<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template> 

<script> 
import mainTabBar from "components/common/tabbar/mainTabBar.vue"
export default {
  name: 'App',
  components: {
    mainTabBar
  },
  data(){
    return {
      hello:"hello Vue"
    }
  }
};
</script>

<style>
@import "assets/css/normalize.css";
@import "assets/css/base.css"

</style>
