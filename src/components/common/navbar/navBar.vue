<template>
	<div class="mainnavBar">
		<div class="navBar">
			<div class="leftBar">
				<slot name="leftBar"></slot>
			</div>
			<div class="midBar">
				<slot name="midBar"></slot>
			</div>
			<div class="rightBar">
				<slot name="rightBar"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'navBar',

  data () {
    return {

    }
  }
};
</script>

<style lang="css" scoped>
.mainnavBar{
	width:100%;
}
.navBar{
	display: flex;
	height:44px;
	line-height: 44px;
    text-align:center;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.1)
}
.leftBar,.rightBar{
	width:60px;
}
.midBar{
	flex: 1;
}
</style>