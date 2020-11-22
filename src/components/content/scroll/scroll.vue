<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from "better-scroll"
export default {

  name: 'scroll',

  data () {
    return {
    	scroll:null
    }
  },
  mounted(){
  	this.scroll=new BScroll(this.$refs.wrapper,{
  		probeType:3,
  		pullUpLoad:true,
      click:true
  	})
  	console.log(123);
  }
};
</script>

<style lang="css" scoped>
</style>