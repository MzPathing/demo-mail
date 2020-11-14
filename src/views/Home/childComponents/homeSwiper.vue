<template>
	<swiper>
		<swiperItem class="" v-for="item in bannerList">
			<img :src="item.image" alt="">
		</swiperItem>
	</swiper>
</template>

<script>
import swiper from "components/common/swiper/swiper.vue"
import swiperItem from "components/common/swiper/swiperItem.vue"
export default {

  name: 'homeSwiper',
  props:{
  	bannerList:Array
  },
  data () {
    return {

    }
  },
  components:{
  	swiper,
  	swiperItem
  }
};
</script>

<style lang="css" scoped>
</style>