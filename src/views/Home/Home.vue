<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="midBar">
				购物街
			</div>
		</nav-bar>
    <tabControl :tabcontrolList="tabcontrolList" @itemClick="itemClick" ref="tabControlFaker" v-show="showFakerTabControlTop"></tabControl>
    <!-- 绑定ref，获取到子元素scroll，响应回到顶部按钮 -->
    <scroll ref="scroll" 
    @scroll="scroll" 
     @pullingUp="pullingUp"
    :listenScrollKey="3" 
    :pullUpLoad="true">
  		<homeSwiper :bannerList="bannerList"/>
  		<HomeRecommend :recommend="recommend" @recommendImgLoad="recommendImgLoad"></HomeRecommend>
  		<tabControl :tabcontrolList="tabcontrolList" @itemClick="itemClick" ref="tabControl" v-show="!showFakerTabControlTop"></tabControl>
  		<tabControlGoods :goodsList="goodsItems" ></tabControlGoods>
    </scroll>
    <backTop @click.native="backTopClick" v-show="showBackTop"/>
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
import {debounce} from "common/utils/utils.js"

export default {

  name: 'Home',

  data () {
    return {
    	bannerList:null,
    	recommend:[],
    	tabcontrolList:["流行","新款","精选"],
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
    	showGood:'pop',
      showBackTop:false,
      //悬浮选项卡位置
      tabControlTop:0,
      //是否显示假的悬浮卡
      showFakerTabControlTop:false
    }
  },
  created(){
  	this.getHomeMultidata();
  	this.getGoodsItems('pop',this.goodsList.pop.num)
  	this.getGoodsItems('sell',this.goodsList.sell.num)
  	this.getGoodsItems('new',this.goodsList.new.num)


  },
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on("imgLoad",()=>{
      refresh()
    })
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
      //同步两个控件样式
      this.$refs.tabControl.currentIndex=index
      this.$refs.tabControlFaker.currentIndex=index
  	},
    //回到顶部按钮点击事件
    backTopClick(){
      this.$refs.scroll.backTop(0,0,1000)
    },
    //监听滚动
    scroll(position){
      //在滑动距离超过1000的时候显示回到顶部按钮
      this.showBackTop=position.y<=-1000?true:false
      //设置TabControl显示
      this.showFakerTabControlTop=-position.y>=this.tabControlTop?true:false

    },
    //滑动到底部时触发的函数
    pullingUp(){
      this.getGoodsItems(this.showGood,this.goodsList[this.showGood].num)
      this.$refs.scroll.scroll.finishPullUp()
    },
    //recommend图片加载完成，获取悬浮选项卡的位置
    recommendImgLoad(){

      this.tabControlTop=this.$refs.tabControl.$el.offsetTop

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
}
.wrapper{
  height:-webkit-calc(100% - 44px - 49px)
}
.content{
}
</style>