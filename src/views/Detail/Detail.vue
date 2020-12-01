<template>
	<div id="detail">
		<detailNavbar></detailNavbar>
	</div>
</template>

<script>
import detailNavbar from "views/Detail/childComponents/detailNavbar.vue"

export default {

  name: 'Detail',
  components:{
  	detailNavbar
  },

  data () {
    return {
    	iid:null
    }
  },
  created(){
  	console.log(this.$route.query.iid);
  	this.iid=this.$route.query.iid
  }
};
</script>

<style lang="css" scoped>
</style>