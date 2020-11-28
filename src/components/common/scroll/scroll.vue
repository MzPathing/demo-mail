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
  props:{
    listenScrollKey:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
    	scroll:null
    }
  },
  mounted(){
  	this.scroll=new BScroll(this.$refs.wrapper,{
  		probeType:this.listenScrollKey,
  		pullUpLoad:this.pullUpLoad,
      pullDownRefresh: true,
      click:true
  	})
    //监听滚动，在滑动的时候触发自定义事件
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    //监听滚动，如果滑动到底部了，发射自定义事件
    this.scroll.on("pullingUp",()=>{
      this.$emit('pullingUp')
    })
  },
  methods:{
    backTop(x=0,y=0,time=3000){
      this.scroll.scrollTo(x,y,time)
    },
    refresh(){
      this.scroll.refresh()
    }
  }
};
</script>

<style lang="css" scoped>

</style>