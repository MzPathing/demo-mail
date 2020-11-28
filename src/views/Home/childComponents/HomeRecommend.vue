<template>
	<div  class="homeRecommend">
		<div class="recommendItem" v-for="item in recommend">
			<a :href="item.link" title="">
				<img :src="item.image" alt="" @load="recommendImgLoad">
				<span>{{item.title}}</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'HomeRecommend',
  props:{
  	recommend:{
  		type:Array,
  		default:[]
  	}
  },
  data () {
    return {
    	emitRecommendImgLoad:false
    }
  },
  methods:{
  	recommendImgLoad(){
  		if(!this.emitRecommendImgLoad){
  			this.$emit('recommendImgLoad')
  			this.emitRecommendImgLoad=true
  		}
  	}
  }
};
</script>

<style lang="css" scoped>
.homeRecommend{
	position:relative;
	display: flex;
	text-align: center;
	font-size:12px;
	padding-bottom: 10px;
	border-bottom: 8px solid #eee
}
.recommendItem{
	flex:1;
}
.recommendItem img{
	width:65px;
	height:65px;
	margin:10px 0;
}
.recommendItem a{
	color:#ccc;
	text-decoration: none;
}
</style>