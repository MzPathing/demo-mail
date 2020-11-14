<template>
	<div>
		<nav-bar class="home-nav">
			<div slot="midBar">
				购物街
			</div>
		</nav-bar>
		<homeSwiper :bannerList="bannerList"/>
		<HomeRecommend :recommend="recommend"></HomeRecommend>
	</div>
</template>

<script>
//组价
import navBar from "components/common/navbar/navBar.vue"
import homeSwiper from "views/Home/childComponents/homeSwiper.vue"
import HomeRecommend from "views/Home/childComponents/HomeRecommend.vue"


//js
import {getHomeMultidata} from "network/HomeRequest.js"

export default {

  name: 'Home',

  data () {
    return {
    	bannerList:null,
    	recommend:{}
    }
  },
  created(){
  	getHomeMultidata().then(res=>{
  		this.bannerList=res.data.data.banner.list
  		this.recommend=res.data.data.recommend.list
  		console.log(this.recommend);
  	})
  },
  components:{
  	navBar,
  	homeSwiper,
  	HomeRecommend
  }
};
</script>

<style lang="css" scoped>
.home-nav{
	background-color: pink;
	color:white;
	box-shadow: 
}
</style>