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
    //监听滚动，在滑动的时候触发自定义事件
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
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