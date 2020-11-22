<template>
  <div>
    <div class="homeGoods">
      {{goodsList.pop.list}}
      <goods-item v-for="item in goodsList" :goodsList="item"/>
    </div>
  </div>
</template>

<script>
import GoodsItem from "components/content/tabControlGoods/goodsItem.vue"
export default {

  name: 'tabControlGoods',
  props:{
  	goodsList:{
  		type:Array,
  		default:[]
  	}
  },
  data () {
    return {

    }
  },
  components:{
  	GoodsItem
  }
};
</script>

<style lang="css" scoped>
.homeGoods{
	display:flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding:3px;
}
</style>