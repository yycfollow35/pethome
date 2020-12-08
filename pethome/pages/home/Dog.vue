<template>
	<view class="container">
		<view class="status_bar">
							<!-- 这里是状态栏 -->
		</view>
		<view class="header">
			<i class="iconfont" @click="back">&#xe606;</i>
			<text @click="click()" class="headerText">狗狗</text>
		</view>
		<view class="petList">
			<scroll-view style="height:100%;width: 100%;" show-scrollbar="false" scroll-y="true">
				<view style=" width:100%;display: flex;flex-direction: column;align-items: center;">
					<view style="width:100%;margin-top: 10px; display: flex;flex-direction: row;">
						<view style="flex:1;margin-right: 5px;">
							<recommend src="../../static/img/chai.jpg" type="柴犬" price="￥2000"></recommend>
						</view>
						<view style="flex:1;">
							<recommend src="../../static/img/keji.jpg" type="柯基" price="￥2000"></recommend>
						</view>
					</view>
					<view style="width:100%;margin-top: 10px; display: flex;flex-direction: row;">
						<view style="flex:1;margin-right: 5px;">
							<recommend src="../../static/img/chai.jpg" type="柴犬" price="￥2000"></recommend>
						</view>
						<view style="flex:1;">
							<recommend src="../../static/img/keji.jpg" type="柯基" price="￥2000"></recommend>
						</view>
					</view>
					<view style="width:100%;margin-top: 10px; display: flex;flex-direction: row;">
						<view style="flex:1;margin-right: 5px;">
							<recommend src="../../static/img/chai.jpg" type="柴犬" price="￥2000"></recommend>
						</view>
						<view style="flex:1;">
							<recommend src="../../static/img/keji.jpg" type="柯基" price="￥2000"></recommend>
						</view>
					</view>
					<view style="width:100%;margin-top: 10px; display: flex;flex-direction: row;">
						<view style="flex:1;margin-right: 5px;">
							<recommend src="../../static/img/chai.jpg" type="柴犬" price="￥2000"></recommend>
						</view>
						<view style="flex:1;">
							<recommend src="../../static/img/keji.jpg" type="柯基" price="￥2000"></recommend>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
			name: "Dog",
			data(){
				return {
				}
			},
			onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			        console.log(option.id); //打印出上个页面传递的参数。
							
			    },
			methods: {
				back(){
					uni.navigateBack({
						delta: 1,
					});
				}
			},
			computed:{
				// screenHeight(){
				// 	return window.screen.height
				// }
			}
	}
</script>

<style scoped>
	.iconfont{
		font-size: 15px;
		position: absolute;
		left: 0;
		top:3px;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.container{
		display: flex;
		flex-direction: column;
		align-items: center;
		height: calc(100vh);
	}
	.header{
		width:80%;
		background-color: "red";
		position: relative;
		margin-top: 10px;
	}
	.headerText{
		font-size: 15px;
		position: absolute;
		left: 50%;
		top:0;
		margin-left: -15px;
	}
	.petList{
		width:100%;
		margin-top: 30px;
		height:calc(100% - 40px);
	}
</style>

