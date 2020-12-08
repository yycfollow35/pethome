<template>
	<view style="width:100%">
		<image style="width:100%;height:175px" :src="src" @error="imageError"></image>
		<view class="wrapper">
			<text class="type">{{type}}</text>
			<text class="price">{{price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"recommend",
		props:["type","price","src"],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.wrapper{
	font-size: 13px;
	margin-top: 8px;
	position: relative;
	height: 20px;
}
.type{
	position: absolute;
	left: 0;
	top: 0;
}
.price{
	color: tomato;
	position: absolute;
	right: 0;
	top: 0;
}
</style>

