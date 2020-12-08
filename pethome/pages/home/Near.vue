<template>
	<view class="container">
		<view class="status_bar">
							<!-- 这里是状态栏 -->
		</view>
		<view class="header">
			<i class="iconfont" @click="back">&#xe606;</i>
			<text @click="click()" class="headerText">附近</text>
		</view>
		<view class="filter">
			<u-dropdown title-size=18>
				<u-dropdown-item v-model="value1" title="种类筛选" :options="options1"></u-dropdown-item>
			</u-dropdown>
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
			name: "Near",
			data(){
				return {
					value1: 1,
					options1: [{
							label: '猫猫',
							value: 1,
						},
						{
							label: '狗狗',
							value: 2,
						}
					]
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
				},
				click(){
					console.log("window",window)
					// console.log("screenheight",this.screenHeight)
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
		/* overflow: hidden; */
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
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
	.filter{
		width: 100%;
		margin-top: 30px;
		font-size: 8px;
	}
	.petList{
		width:100%;
		/* height:100px; */
		height:calc(100% - 80px);
	}
	/* uni-page-body{
		height:100%;
	} */
</style>
