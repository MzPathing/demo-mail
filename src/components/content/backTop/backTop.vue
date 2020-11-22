<template>
	<div class="backTop">
		<img src="~assets/img/common/top.png" alt="">
	</div>
</template>

<script>
export default {

  name: 'backTop',

  data () {
    return {

    }
  },
  methods:{
    backTop(x=0,y=0,t=300){
      this.scroll.scrollTo(x,y,t)
    }
  }
};
</script>

<style lang="css" scoped>
img{
	position: absolute;
	z-index: 1;
	bottom:58px;
	right:8px;
	width:43px;
	height:43px;
}
</style>