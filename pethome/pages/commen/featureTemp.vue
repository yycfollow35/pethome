<template>
	<view>
	<view class="wrapper">
		<!-- <view class="msgWrapper"> -->
			<view class="icon">
				<image class="img" :src="src" @error="imageError"></image>
			</view>
			<view class="contentWrapper">
				<text class="title">{{text}}</text>
			</view>
			<view class="button">
				<i class="iconfont">&#xe600;</i>
			</view>
		<!-- </view> -->
	</view>
	</view>
</template>

<script>
	export default {
	name: 'featureTemp',
	props:["text","src"]
	}
</script>

<style>
	.wrapper{
		overflow: hidden;
		height:30px;
	}
	.icon{
		height: 100%;
		float: left;
		margin-right: 10px;
		display: flex;
		align-items: center;
	}
	.img{
		width: 20px;
		height: 20px;
	}
	.iconfont{
		font-size: 15px;
  }
	.contentWrapper{
		float: left;
		height:100%;
		display: flex;
		align-items: center;
	}
	.button{
		height: 100%;
		float:right;
		display: flex;
		align-items: center;
	}
	.title{
		font-size: 17px;
	}
</style>
