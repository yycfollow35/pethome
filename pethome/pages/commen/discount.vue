<template>
	<view style="">
		<image style="width:115px; height:110px;" :src="src" @error="imageError"></image>
		<view class="type">{{type}}</view>
		<view style="width:115px">
			<view class="bottom">
				<text class="text1">{{text1}}</text>
				<text class="text2">{{text2}}</text>
				<text class="text3">{{text3}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"count",
		props:["type","text1","text2","text3","src"],
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.text2{
	font-size: 12px;
	color: #999999;
	position: absolute;
	left:30px;
	top:0;
},
.text1{
	font-size: 8px;
	color: #999999;
	position: absolute;
	left:0;
	top:0;
},
.type{
	font-size: 13px;
	margin-top: 8px;
},
.text3{
	font-size: 8px;
	color:#FF0000;
	position: absolute;
	right:0;
	top:0;
},
.bottom{
	position: relative;
	left:0;
	top: 0;
	margin-top: 8px;
	height:14px;
}
</style>

