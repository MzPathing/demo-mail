<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {

  name: 'tabbar',
  data () {
    return {

    }
  }
};
</script>

<style>
#tab-bar{
  display:flex;
  position:fixed;
  left:0;
  right:0;
  bottom:0;
  background-color: #f6f6f6;
  box-shadow: 0px -10px 1px rgba(100,100,100,1);
}
</style>