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
      pullDownRefresh: true
  	})
  	console.log(this.$refs.wrapper);
  }
};
</script>

<style lang="css" scoped>
.wrapper{
  height:100vh;
  overflow: hidden
}
</style>