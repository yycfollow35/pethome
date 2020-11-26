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
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
			<featureTemp class="featureTemp"></featureTemp>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.container {
		width:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.loginWrapper{
		width:90%;
		overflow: hidden;
		margin-top: 50px;
		/* margin-right: 50px; */
	}
	.imgWrapper{
		width:50px;
		height: 50px;
		float:left;
		margin-right: 10px;
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
		float:left;
		font-size:20px;
		display: flex;
		/* justify-content: center; */
		align-items: center;
		/* background-color: #4CD964; */
	}
	.featureTemp{
		width:100%;
		margin-top: 20px;
	}
	.features{
		width:90%;
		margin-top: 30px;
	}
</style>
