<template>
	<div>
		<tab-bar>
			 <tabbar-item v-for="item in tabbarList" :path="item.path" :activeColor="item.activeColor">
        <img slot="itemIcon" :src="item.src" alt="">
        <img slot="itemIcon_active" :src="item.active_src" alt="">
        <span slot="itemText">{{item.title}}</span>
        <span slot="itemText_active" class="active_Text">{{item.title}}</span>
      </tabbar-item>
		</tab-bar>
	</div>
</template>

<script>
import tabBar from "components/common/tabbar/tabBar.vue"
import tabbarItem from "components/common/tabbar/tabBarItem.vue"

export default {

  name: 'mainTabBar',

  data () {
    return {
    	tabbarList:[
    		{
    			title:"首页",
    			src:require("../../../assets/img/tabbar/home.svg"),
    			active_src:require("../../../assets/img/tabbar/home_active.svg"),
    			activeColor:"yellow",
    			path:"/home"
    		},
    		{
    			title:"分类",
    			src:require("../../../assets/img/tabbar/category.svg"),
    			active_src:require("../../../assets/img/tabbar/category_active.svg"),
    			activeColor:"yellow",
    			path:"/category"
    		},
    		{
    			title:"购物车",
    			src:require("../../../assets/img/tabbar/shopCart.svg"),
    			active_src:require("../../../assets/img/tabbar/shopCart_active.svg"),
    			activeColor:"yellow",
    			path:"/shopCart"
    		},
    		{
    			title:"我的",
    			src:require("../../../assets/img/tabbar/profile.svg"),
    			active_src:require("../../../assets/img/tabbar/profile_active.svg"),
    			activeColor:"yellow",
    			path:"/profile"
    		},
    	]
    }
  },
  components:{
  	tabbarItem,
  	tabBar
  }
};
</script>

<style lang="css" scoped>
</style>