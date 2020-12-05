<template>
	<swiper class="detailSwiper">
		<swiperItem class="detailSwiperItem" v-for="item in topImages">
			<img :src="item" alt="">
		</swiperItem>
	</swiper>
</template>

<script>
//引入swiper和swiperItem组件
import swiper from "components/common/swiper/swiper.vue"
import swiperItem from "components/common/swiper/swiperItem.vue"
export default {

  name: 'DetailSwiper',
  props:{
  	topImages:{
  		type:Array,
  		default:[1,2,3,4]
  	}
  },
  data () {
    return {

    }
  },
  components:{
  	swiperItem,
  	swiper
  },
  created(){
  }
};
</script>

<style lang="css" scoped>
.detailSwiper .detailSwiperItem{
	height: 300px;
	overflow: hidden
}
</style>