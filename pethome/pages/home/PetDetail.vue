<template>
	<view class="container">
		<view class="backButton">
			<i class="iconfont" @click="back">&#xe606;</i>
		</view>
		<view class="wrapper">
			<image style="width:100%;height:100%" src="../../static/img/chai.jpg" @error="imageError"></image>
		</view>
		<view class="petMessage">
			<view class="petName">
				<text style="float:left;font-size: 16rpx;font-weight: 600;">柴犬</text>
				<text style="float:right;position:relative;top: 50%;margin-top: -6rpx; margin-right: 5rpx;font-size: 12rpx;">发布于3分钟前</text>
			</view>
			<view class="petAge">
				<text style="color:#dbdbdb; font-size: 14rpx;margin-right: 10rpx;">年龄:</text>
				<text style="font-size: 14rpx;">3个月</text>
			</view>
			<view class="sterilization">
				<text style="color:#dbdbdb; font-size: 14rpx;margin-right: 10rpx;">绝育:</text>
				<text style="font-size: 14rpx;">是</text>
			</view>
			<view class="vaccine">
				<text style="color:#dbdbdb;font-size: 14rpx;margin-right: 10rpx;">疫苗:</text>
				<text style="font-size: 14rpx;">已打两针</text>
			</view>
			<view class="Deworming">
				<text style="color:#dbdbdb;font-size: 14rpx;margin-right: 10rpx;">驱虫:</text>
				<text style="font-size: 14rpx;">已做两次</text>
			</view>
			<view class="description">
				<text style="color:#dbdbdb;font-size: 14rpx;margin-right: 10rpx;flex: 1;">描述:</text>
				<text style="font-size: 14rpx;flex:10;">自己小狗,送给爱狗人士,自己小狗,送给爱狗人士,自己小狗,送给爱狗人士,自己小狗,送给爱狗人士</text>
			</view>
			<view style="width: 120%;height: 5rpx;background-color: #fbfafa;margin-top: 30rpx;"></view>
			<view class="user">
				<view style="width:40rpx;margin-right: 12rpx; height:40rpx;border-width: 1rpx;border-radius: 20rpx;border-style: solid;overflow: hidden;">
					<image style="width:40rpx;height:40rpx;" src="../../static/img/title.jpg" @error="imageError"></image>
				</view>
				<text style="font-size: 15rpx;">宠物之家</text>
			</view>
			<view style="width: 120%;height: 5rpx;background-color: #fbfafa;margin-top: 20rpx;"></view>
			<view class="sender-review">
				<text style="font-size: 15rpx;">送方评价好</text>
			</view>
			<view class="sender-content">
				<view class="sender-left">
					<view style="width:30rpx;margin-top: 5rpx; height:30rpx;border-width: 1rpx;border-radius: 15rpx;border-style: solid;overflow: hidden;">
						<image style="width:30rpx;height:30rpx;" src="../../static/img/title.jpg" @error="imageError"></image>
					</view>
				</view>
				<view>
					<view>
						<text style="font-size: 12rpx;">宠物之家第一位送养者</text>
					</view>
					<view>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
					</view>
					<view>
						<text>我在做宠物之家APP,真是一个很不错的app呢。我在做宠物之家APP,真是一个很不错的app呢。</text>
					</view>
					<view style="margin-top: 5rpx;height: 1rpx;background-color: #e6e6e6;"></view>
				</view>
			</view>
			<view class="receiver-review">
				<text style="font-size: 15rpx;">领方评价</text>
			</view>
			<view class="receiver-content">
				<view class="receiver-left">
					<view style="width:30rpx;margin-top: 5rpx; height:30rpx;border-width: 1rpx;border-radius: 15rpx;border-style: solid;overflow: hidden;">
						<image style="width:30rpx;height:30rpx;" src="../../static/img/title.jpg" @error="imageError"></image>
					</view>
				</view>
				<view>
					<view>
						<text style="font-size: 12rpx;">宠物之家第一位领养者</text>
					</view>
					<view>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
						<image style="width:10rpx;height:10rpx;" src="../../static/img/star.png" @error="imageError"></image>
					</view>
					<view style="margin-bottom: 20px;">
						<text>我在做宠物之家APP,真是一个很不错的app呢。我在做宠物之家APP,真是一个很不错的app呢。</text>
					</view>
				</view>
			</view>
		</view>
		<view class="bottomBar">
			<view class="icon">
				<view class="collection">
					<image style="margin-right: 3px; width:20px;height:20px" src="../../static/img/eptystar.png" @error="imageError"></image>
					<text>收藏</text>
				</view>
				<view class="leaving">
					<image style="margin-right: 3px;width:20px;height:20px" src="../../static/img/liuyan.png" @error="imageError"></image>
					<text>留言</text>
				</view>
				<view class="privateChat">
					<image style="margin-right: 3px;width:20px;height:20px" src="../../static/img/siliao.png" @error="imageError"></image>
					<text>私聊</text>
				</view>
			</view>
			<view class="receiveButtonArea">
				<view class="receiveButtonWrapper">
					<text style="color: #FFFFFF;">申请领养</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "PetDetail",
		methods:{
			back(){
				uni.navigateBack({
					delta: 1,
				});
			}
		}
	}
</script>

<style scoped>
	/* scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	} */
	.container {
		width:100%;
		/* height:100%; */
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.backButton{
		width: 60rpx;
		height: 60rpx;
		border-radius: 30rpx;
		background-color: #e6e6e6;
		border: 1prx solid "white";
		opacity: 0.7;
		position: fixed;
		top: 10rpx;
		left: 10rpx;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content:center ;
	}
	.iconfont{
		font-size: 30rpx;
		font-weight: bold;
		color: white;
		margin-left: -5rpx;
	}
	.wrapper{
		width:100%;
		height:800rpx;
	}
	.petMessage{
		width:95%;
		display:flex;
		flex-direction: column;
		align-items: center;
	}
	.petName{
		overflow: hidden;
		width:100%;
		margin-top: 20rpx;
	}
	.petAge{
		width:100%;
		margin-top: 12rpx;
	}
	.sterilization{
		width:100%;
		margin-top: 12rpx;
	}
	.vaccine{
		width:100%;
		margin-top: 12rpx;
	}
	.Deworming{
		width:100%;
		margin-top: 12rpx;
	}
	.description{
		width:100%;
		margin-top: 12rpx;
		display: flex;
	}
	.user{
		width:100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 20rpx;
		/* background-color: #007AFF; */
	}
	.sender-review{
		width:100%;
		padding: 10rpx 0;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.receiver-review{
		width:100%;
		padding: 10rpx 0;
		border-bottom: 1rpx solid #e6e6e6;
	}
	.sender-content{
		width:100%;
		padding: 10rpx 0;
		display: flex;
		/* align-items: center; */
	}
	.receiver-content{
		width:100%;
		padding: 10rpx 0;
		display: flex;
		/* align-items: center; */
	}
	.sender-left{
		height:100%;
		margin-right: 12rpx;
	}
	.receiver-left{
		height:100%;
		margin-right: 12rpx;
	}
	.bottomBar{
		display: flex;
		width: 100%;
		align-items: center;
		height: 40px;
		border-top: 0.5px solid #CCCCCC;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		z-index: 10;
	}
	.icon{
		flex: 6;
		display: flex;
		justify-content: space-around;
	}
	.collection{
		/* background-color: #ff0000; */
		display: flex;
		align-items: center;
	}
	.privateChat{
		/* background-color: #ff0000; */
		display: flex;
		align-items: center;
	}
	.leaving{
		/* background-color: #ff0000; */
		display: flex;
		align-items: center;
	}
	.receiveButtonArea{
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.receiveButtonWrapper{
		width: 100px;
		height: 30px;
		border-radius: 5px;
		background-color: #FA3534;
		text-align: center;
		line-height: 30px;
	}
</style>