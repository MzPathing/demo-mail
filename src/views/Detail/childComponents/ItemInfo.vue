<template>
	<div class="itemInfo">
		<p id="title">{{itemInfo.title}}</p>
		<div class="price">
			<span class="actualPrice">{{itemInfo.price}}</span>
			<span class="oldPrice">{{itemInfo.oldPrice}}</span>
			<span class="discountDesc">{{itemInfo.discountDesc}}</span>
		</div>
		<div class="sellInfo">
			<span class="sell">{{itemInfo.sell}}</span>
			<span class="star">{{itemInfo.star}}</span>
			<span class="deliveryTime">{{itemInfo.deliveryTime}}</span>
		</div>
		<div class="service">
			<span v-for="(item,index) in itemInfo.services">
				{{item.name}}
			</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'ItenInfo',

  props:{
  	itemInfo:{
  		type:Object,
  		default:{name:"123"}
  	}
  },

  data () {
    return {

    }
  },

  mounted(){
  }
};
</script>

<style lang="css" scoped>
.itemInfo{
	border-bottom: 1px solid #ccc;
	margin-bottom:10px;
}
.itemInfo p{
	width:95%;
	margin:10px auto;
	font-weight:bold;
	line-height: 22px;
}
.price .actualPrice{
	color : #FF0068;
	font-size:25px;
}
.price .oldPrice{
	color : #ccc;
	font-size:12px;
	text-decoration: line-through;
	margin:0 10px 0;
}
.price .discountDesc{
	color:white;
	font-weight:bold;
	background-color: #ff0099;
	border-radius:5px;
	font-size:10px;
	height:50px;
	vertical-align: middle;
	margin-bottom: 50px
}
.sellInfo,.service{
	display: flex;
	margin:20px 5px;

}
.sellInfo span{
	flex:1;
	color:#ccc;
	font-size:8px;
}
.service span{
	flex:1;
	font-size:12px;
	font-weight: bold;
}

</style>