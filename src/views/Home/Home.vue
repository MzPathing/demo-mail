<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="midBar">
				购物街
			</div>
		</nav-bar>
    <!-- 绑定ref，获取到子元素scroll，响应回到顶部按钮 -->
    <scroll ref="scroll">
  		<homeSwiper :bannerList="bannerList"/>
  		<HomeRecommend :recommend="recommend"></HomeRecommend>
  		<tabControl :tabcontrolList="tabcontrolList" @itemClick="itemClick"></tabControl>
  		<tabControlGoods :goodsList="goodsItems" ></tabControlGoods>
    </scroll>
    <backTop @click.native="backTopClick"/>
	</div>
</template>

<script>
//组件

import navBar from "components/common/navbar/navBar.vue"
import scroll from "components/common/scroll/scroll.vue"
import homeSwiper from "views/Home/childComponents/homeSwiper.vue"
import HomeRecommend from "views/Home/childComponents/HomeRecommend.vue"
import TabControl from "components/content/tabControl/TabControl.vue"
import tabControlGoods from "components/content/tabControlGoods/tabControlGoods.vue"
import backTop from "components/content/backTop/backTop.vue"



//js
import {getHomeMultidata,getGoodsItems} from "network/HomeRequest.js"

export default {

  name: 'Home',

  data () {
    return {
    	bannerList:null,
    	recommend:[],
    	tabcontrolList:["流行","分类","精选"],
    	goodsList:{
    		pop:{
    			type:'pop',
    			num:1,
    			list:[]
    		},
    		new:{
    			type:'new',
    			num:1,
    			list:[]
    		},
    		sell:{
    			type:'sell',
    			num:1,
    			list:[]
    		},
    	},
    	showGood:'pop'
    }
  },
  created(){
  	this.getHomeMultidata();
  	this.getGoodsItems('pop',this.goodsList.pop.num)
  	this.getGoodsItems('sell',this.goodsList.sell.num)
  	this.getGoodsItems('new',this.goodsList.new.num)
  },
  components:{
  	navBar,
    scroll,
  	homeSwiper,
  	HomeRecommend,
  	TabControl,
  	tabControlGoods,
    backTop
  },
  methods:{
  	getHomeMultidata(){
  		getHomeMultidata().then(res=>{
	  		this.bannerList=res.data.data.banner.list
	  		this.recommend=res.data.data.recommend.list
	  	})
  	},
  	getGoodsItems(type,num){
  		return getGoodsItems(type,num).then(res=>{
  			this.goodsList[type].list=[...this.goodsList[type].list,...res.data.data.list]
  			num++
  		})
  	},
    //商品选项卡点击展示不同类别衣服
  	itemClick(index){
  		switch(index){
  			case 0:
  			this.showGood="pop";
  			break;
  			case 1:
  			this.showGood="new";
  			break;
  			case 2:
  			this.showGood="sell";
  			break;
  		}
  	},
    //回到顶部按钮点击事件
    backTopClick(){
      this.$refs.scroll.backTop(0,0,1000)
    }
  },
  computed:{
  	goodsItems(){
  		return this.goodsList[this.showGood].list
  	}
  }
};
</script>

<style lang="css">
#home{
  position: relative;
  height:100vh;
  overflow: hidden;

}
.home-nav{
	background-color: pink;
	color:white;
	box-shadow: 
}
.wrapper{
  height:-webkit-calc(100% - 44px - 49px)
}
.content{
}
</style>