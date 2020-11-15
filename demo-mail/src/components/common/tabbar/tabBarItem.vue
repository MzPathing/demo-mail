<template>
	<div class="tab-bar-item" @click="itemClick">
		<slot v-if="isActive" name="itemIcon"></slot>
  	<slot v-else name="itemIcon_active"></slot>
    <slot v-if="isActive" name="itemText"></slot>
  	<slot v-else name="itemText_active"></slot>
	</div>
</template>

<script>
export default {

  name: 'tabBarItem',
  props:{
  	path:String,
  	activeColor:{
  		type:String,
  		default:"pink"
  	}
  },
  data () {
    return {
    }
  },
  computed:{
  	isActive(){
  		return this.$route.path!=this.path?true:false
  	},
  	showColor(){
  		return {color:this.activeColor}
  	}
  },
  methods:{
  	//点击的时候判断当前路由是否和跳转路由一致，如果一样不跳转，一样跳转
  	itemClick(){
  		 if(this.$route.path==this.path){
        console.log("same path");
      }else{
        this.$router.push(this.path)
      }
  	}
  }
};
</script>

<style lang="css" scoped>
.tab-bar-item{
  flex:1;
  text-align:center;
  height:49px;
}
.tab-bar-item img{
  width:20px;
  height: 20px;
  display:block;
  margin:0 auto;
  vertical-align:0;
}
.active_Text{
  color:red;
}
</style>