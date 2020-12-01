<template>
	<div calss="detailNavbar">
		<navBar>
			<div slot="leftBar" @click="backHome">
				<img src="~assets/img/common/back.svg" alt="">
			</div>
			<div class="detailItems" slot="midBar">
				<div class="detailItem" 
				:class="{active:currentIndex===index}"
				v-for="(item,index) in title"
				@click="itemClick(index)"
				>
				{{item}}
			</div>
			</div>
		</navBar>
	</div>
</template>

<script>
import navBar from "components/common/navbar/navBar.vue"

export default {
  name: 'detailNavbar',
  components:{
  	navBar
  },

  data () {
    return {
    	title:["商品","参数","评论","推荐"],
    	currentIndex:0
    }
  },
  methods:{
  	//选中选项卡设置样式
  	itemClick(index){
  		this.currentIndex=index
  	},
  	//回到首页
  	backHome(){
  		this.$router.back()
  	}
  }
};
</script>

<style lang="css" scoped>
.detailItems{
	display: flex;
}
.detailItem{
	flex:1;
}
.active{
	color:pink;
}
.leftBar img{
	margin-top: 12px
}
</style>