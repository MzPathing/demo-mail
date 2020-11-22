<template>
	<div class="wrapper" ref="wrapper">
		<div class="content" id="content">
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
  },
  methods:{
    backTop(x=0,y=0,time=3000){
      this.scroll.scrollTo(x,y,time)
    }
  }
};
</script>

<style lang="css" scoped>

</style>