<template>
	<div id="detail">
		<detailNavbar></detailNavbar>
		<detail-swiper :topImages="topImages"></detail-swiper>
		<item-info :itemInfo="itemInformation"></item-info>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
		<h1>11111111111111111</h1>
	</div>
</template>

<script>
//引入的组件
import detailNavbar from "views/Detail/childComponents/detailNavbar.vue"
import DetailSwiper from "views/Detail/childComponents/DetailSwiper.vue"
import ItemInfo from "views/Detail/childComponents/ItemInfo.vue"

//引入的js文件
	//引入网络请求js文件
import {getDetailData} from "network/detailRequest.js"

import {getItemInfo} from "network/detailRequest.js"
export default {

  name: 'Detail',
  components:{
  	detailNavbar,
  	DetailSwiper,
  	// 商品信息：标题、当前价格、历史价格、今日特价、销量、收藏、特色等等
  	ItemInfo
  },

  data () {
    return {
    	iid:null,
    	//轮播图图片
    	topImages:[],
    	//itemInfo组件信息
    	itemInformation:{}
    }
  },
  created(){
  	this.iid=this.$route.query.iid
  	getDetailData(this.iid).then(res=>{
  		let result=res.data.result
  		this.topImages=res.data.result.itemInfo.topImages
  		this.itemInformation=new getItemInfo(result.itemInfo,result.columns,result.shopInfo.services)
  		console.log(this.itemInformation);
  	})
  }
};
</script>

<style lang="css" scoped>
</style>