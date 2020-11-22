<template>
	<div>
		<div class="tab-control">
			<div class="tab-item" v-for="(item,index) in tabcontrolList" :class="{item_active:index===currentIndex}" @click="itemClick(index)">
				<span >{{item}}</span>
			</div>
		</div>		
	</div>

</template>

<script>
export default {

  name: 'TabControl',

  data () {
    return {
    	currentIndex:0
    }
  },
  props:{
  	tabcontrolList:Array
  },
  methods:{
  	itemClick(index){
  		this.currentIndex=index
  		this.$emit('itemClick',index)
  	}
  }
};
</script>

<style lang="css" scoped>
.tab-control{
	display: flex;
	background-color: white;
	position:sticky;
	top:44px;
}
.tab-item{
	font-size:15px;
	line-height: 44px;
	height:44px;
	flex:1;
	text-align: center;
	font-weight: bold;
}
.item_active span{
	color:pink;
	border-bottom:2px solid pink;
	padding-bottom: 3px
}

</style>