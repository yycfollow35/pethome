<template>
	<view class="wrapper">
		<view class="icon">
			<slot></slot>
		</view>
		<view class="text">{{text}}</view>
	</view>
</template>

<script src="//at.alicdn.com/t/font_2156254_bff4x95nel4.js"></script>

<script >
	
export default {
  name: 'icon-svg',
  props: ['text'],
  // computed: {
  //   iconName() {
  //     return this.iconClass.slice(1,9)
  //   }
  // },
	created(){
	},
	onShow(){
	},
	onLoad(){
	}
}
</script>

<style scoped>
.wrapper{
	/* width:100px; */
	/* height:200px; */
	display:flex;
	flex-direction: column;
	justify-content: center;
	/* background-color: #007AFF; */
}
.icon{
	width:100%;
	text-align: center;
	font-size: 35PX;
}
/* .iconfont {
	width:60px;
	height:60px;
} */
.text{
	width:100%;
	text-align: center;
	font-size: 15px;
}
</style>