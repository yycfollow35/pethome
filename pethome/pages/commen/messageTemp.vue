<template>
	<view>
		<!-- <view class="msgWrapper"> -->
			<view class="icon">
				<i class="iconfont">&#xe603;</i>
			</view>
			<view class="contentWrapper">
				<text class="title">通知消息</text>
				<text class="messageContent">宠物之家专注为爱宠人士提供送领养服务</text>
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
	name: 'messageTemp',
	}
</script>

<style>
	.msgWrapper{
		width:90%;
		overflow: hidden;
		/* background-color: #808080; */
		margin-top: 20px;
	}
	.icon{
		float: left;
		margin-right: 12px;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #f4ea2a;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.contentWrapper{
		float: left;
		display: flex;
		flex-direction: column;
		margin-top: 2px;
	}
	.title{
		font-size: 14px;
		font-weight: 600;
	}
	.messageContent{
		font-size: 12px;
	}
	.iconfont{
		font-size: 30px;
	}
</style>
