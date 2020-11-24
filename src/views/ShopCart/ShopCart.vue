<template>
	<div>
		<h2>功能选择</h2>
		<div class="btn">
			<button class="buttom" type="">信息轰炸</button>
			<button class="buttom" type="">自动回复</button>
			<button class="buttom" type="">自定义</button>
		</div>
		
		<ul id="hello">
			<li class="active">早安花花宝贝</li>
		</ul>
		<button type="">发送</button>
	</div>
	
</template>

<script>
export default {

  name: 'ShopCart',

  data () {
    return {
    	name:[
    		{
    			type:1,
    			name:"陈花花"
    		},
    		{
    			type:2,
    			name:"久久"
    		},{
    			type:2,
    			name:"三三"
    		},{
    			type:2,
    			name:"咸鱼"
    		},{
    			type:2,
    			name:"星星"
    		},{
    			type:2,
    			name:"路飞"
    		},{
    			type:3,
    			name:"海岛"
    		},{
    			type:2,
    			name:"富婆"
    		},{
    			type:2,
    			name:"老杨"
    		},{
    			type:2,
    			name:"大黄"
    		},{
    			type:2,
    			name:"群里的小可爱们"
    		},
    	],
    	helloText:["满目深情眼里只有","早安","傻逼"]
    }
  },
  mounted(){
  		const rootEl=document.getElementById("hello")
  		let num=0
  		let timer=setInterval(()=>{
  			if(num>=this.name.length-1){
  				clearInterval(timer)
  				return
  			}
  			const obj=this.getHelloText(num)
  			const li=document.createElement('li')
  			li.innerHTML=`${obj.text}, ${obj.name}`
  			
  			rootEl.appendChild(li)
  			if(num===0){
  				console.log(123);
  				li.classList.add("active")
  			}
  			num++
  		}, 1500);
  },
  methods:{
  	getHelloText(num){
  		let text={name:"",text:""}
  		return text={
  			name:this.name[num].name,
  			text:this.helloText[this.name[num].type-1]
  		}
  	}
  }

};
</script>

<style lang="css" scoped>
h2{
	margin-left:35px;
}
ul{
	list-style:none;
}
li{
	margin:50px;
	border-bottom: 1px solid #ccc;
}
.active{
	color:red;
}
.btn{
	display: flex
}
button{
	flex:1;
	text-decoration:none;
	background:#2f435e;
	color:#f2f2f2;
	
	padding: 10px;
	font-size:3px;
	font-weight:bold;
	border-radius:3px;
	
	-webkit-transition:all linear 0.30s;
	-moz-transition:all linear 0.30s;
	transition:all linear 0.30s;

	margin:10px
}
</style>