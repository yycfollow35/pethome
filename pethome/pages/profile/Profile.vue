<template>
	<view class="container">
		<view class="loginWrapper">
			<view class="imgWrapper">
				<image class="img" src="../../static/img/keji.jpg" @error="imageError"></image>
			</view>
			<view class="loginText">
				<text style="font-weight: 600;">登录/注册</text>
			</view>
		</view>
		<view class="features">
			<featureTemp class="featureTemp" src="../../static/img/adopt.png" text="我的领养"></featureTemp>
			<featureTemp class="featureTemp" src="../../static/img/give.png" text="我的送养"></featureTemp>
			<featureTemp class="featureTemp" src="../../static/img/collection.png" text="我的收藏"></featureTemp>
			<featureTemp class="featureTemp" src="../../static/img/message.png" text="基本资料"></featureTemp>
			<featureTemp class="featureTemp" src="../../static/img/authenticate.png" text="实名认证"></featureTemp>
		</view>
		<view class="occupy">
			<view class="description">
				<text style="color:#bfbfbf;">
					个人维护，联系方式
				</text>
			</view>
			<view style="color:#bfbfbf; margin-top:10px;margin-bottom: 10px;">
				<text>微信：</text>
				<text style="color: #f46b31;">yyc1977244307</text>
			</view>
			<text style="color:#bfbfbf;">一宠物之家一</text>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		width:100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.loginWrapper{
		width:100%;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		align-items: center;
		/* margin-top: 50px; */
		padding-top: 50px;
		height: 300rpx;
		background-color: #f46b31;
		/* margin-right: 50px; */
	}
	.imgWrapper{
		width:50px;
		height: 50px;
		/* float:left; */
		border-radius: 25px;
		background-color: #007AFF;
		overflow: hidden;
	}
	.img{
		width:100%;
		height: 100%;
	}
	.loginText{
		height: 50px;
		/* float:left; */
		font-size:20px;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* background-color: #4CD964; */
	}
	.featureTemp{
		width:100%;
		padding: 10px 0;
		border-bottom: 0.5px solid #e6e6e6;
	}
	.features{
		width:90%;
		/* margin-top: 30px; */
	}
	.occupy{
		width: 100%;
		height: 1000px;
		background-color: #f1f1f1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.description{
		/* width: 60%; */
		margin-top: 30px; 
		/* font-size: 15px; */
	}
</style>
