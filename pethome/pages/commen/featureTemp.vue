<template>
	<view class="wrapper">
		<!-- <view class="msgWrapper"> -->
			<view class="icon">
				<i class="iconfont">&#xe7b3;</i>
			</view>
			<view class="contentWrapper">
				<text class="title">收藏</text>
			</view>
			<view class="button">
				<i class="iconfont">&#xe602;</i>
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
	name: 'featureTemp',
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
	.iconfont{
		font-size: 25px;
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
