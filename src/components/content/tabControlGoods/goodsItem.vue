<template>
	<div class="goodsItem" @click="goodsItemClick">
		<!-- <a :href="goodsList.clientUrl" title=""> -->
		<a title="">
			<img :src="goodsList.show.img" alt=""  @load="imgLoad">
			<div class="goodsInfo">
				<p class="goodsDec">{{goodsList.props[0]}}</p>
				<span class="price">{{goodsList.orgPrice}}</span>
				<span class="star">收藏：{{goodsList.cfav}}</span>
			</div>
		</a>
	</div>
</template>

<script>
export default {

  name: 'goodsItem',
  props:{
  	goodsList:{
  		type:Object,
  		default:{}
  	}
  },
  data () {
    return {

    }
  },
  methods:{
  	imgLoad(){
  		this.$bus.$emit("imgLoad")
  	},
  	goodsItemClick(){
  		this.$router.push({
  			path:"/detail",
  			query:{
  				iid:this.goodsList.iid
  			}
  		})
  	}
  }
};
</script>

<style lang="css" scoped>
.goodsItem{
	width:48%;
	position: relative;
	padding-bottom:18px;
}
.goodsItem a{
	color:#ccc;
	font-size:12px;
}
.goodsItem img{
	border-radius:5px;
	width: 100%;
	padding-bottom: 70px
}
.goodsDec{
  overflow: hidden;
  margin-bottom: 3px;
  text-overflow: ellipsis;
  color:pink;


}
.goodsItem span{
	display: inline-block;
	width:50%;
	text-align:center;
}
.price{
	color:red;
}
.goodsInfo{
	position: absolute;
	bottom:18px;
}
</style>