<template>
	<view class="container">
		<view class="searchWrapper">
			<image style="float:left;width: 25px; height: 25px;" src="../../static/img/kefu.png" @error="imageError"></image>
			<uni-search-bar class="searchbar" :radius="100" placeholder="搜索宠物, 商家, 品牌" @input="input" @confirm="search"></uni-search-bar>
			<image style="float:right;margin-left: 2px; width: 20px; height: 20px;"src="../../static/img/fenxiang.png" @error="imageError"></image>
	  </view>
		<view class="swiperWrapper">
		  <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<image style="width: 100%; height: 100%;"src="../../static/img/swp1.jpg" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image style=" width: 100%; height: 100%;"src="../../static/img/swp2.jpg" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image style=" width: 100%; height: 100%;"src="../../static/img/swp3.jpg" @error="imageError"></image>
					</swiper-item>
			</swiper>
		</view>
		<view class="headerIcon">
			<icon-svg style="flex:1;" text="附近">
				<i class="iconfont" @click="toFujin">&#xebfa;</i>
			</icon-svg>
			<icon-svg style="flex:1;" text="狗狗">
				<i class="iconfont">&#xe618;</i>
			</icon-svg>
			<icon-svg style="flex:1;" text="猫猫">
				<i class="iconfont">&#xe619;</i>
			</icon-svg>
			<icon-svg style="flex:1;" text="商城">
				<i class="iconfont">&#xe61d;</i>
			</icon-svg>
		</view>
		<view style="margin-top:10px;width:95%;height: 80px;border-width: 0.1px;border-color:white;border-style: solid; border-radius: 8px;overflow: hidden;">
			<image style=" width: 100%; height: 100%;"src="../../static/img/swp4.jpg" @error="imageError"></image>
		</view>
		<view style="position:relative;margin-top: 10px; width:95%;height:45px;overflow: hidden;">
			<view style="position:absolute;top:50%;margin-top: -15px; left:0; border-width: 1px;border-radius: 25px;border-style: solid;overflow: hidden;">
				<image style="width:30px;height:30px;" src="../../static/img/title.jpg" @error="imageError"></image>
			</view>
			<view style="position:absolute;top:50%;margin-top: -25px; left:40px;display: flex;flex-direction: column;">
				<text style="font-size: 20px;">柯基</text>
				<view style=" display: flex;flex-direction: row;">
					<text style="color:gray;font-size:15px">价格</text>
					<text style="color:red;font-size: 15px;">￥1000</text>
				</view>
			</view>
			<view style="position:absolute;top:50%;margin-top: -9px; right:0;height:18px;border-color: red;border-width: 1px;border-style: solid; border-radius:9px;font-size: 10px;padding: 0 6px;color:tomato;">
				99+人在求购
			</view>
		</view>
		<view class="countWrapper">
			<view class="count">
				<i class="iconfont">&#xe7b0;</i>
			</view>
			<text style="position: absolute; top:0;left:30px;font-size: 15px;">每日特价</text>
			<text style="position: absolute; top:0;right:5px;font-size: 12px;">更多 ></text>
		</view>
		<view style="width:95%">
			<scroll-view show-scrollbar="false" scroll-x="true">
				<view style="margin-top: 15px; display: flex;flex-direction: row;">
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="河北" text2="承德" type="柴犬" text3="￥6000"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="浙江" text2="杭州" type="柯基" text3="￥2000"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="江苏" text2="苏州" type="金毛" text3="￥5000"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="河北" text2="承德" type="柴犬" text3="￥6000"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="浙江" text2="杭州" type="柯基" text3="￥2000"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="江苏" text2="苏州" type="金毛" text3="￥5000"></discount>
				</view>
			</scroll-view>
		</view>
		<view class="latestWrapper">
			<view class="latest">
				<i class="iconfont">&#xe7b2;</i>
			</view>
			<text style="position: absolute; top:0;left:30px;font-size: 15px;">最新上架</text>
			<text style="position: absolute; top:0;right:5px;font-size: 12px;">更多 ></text>
		</view>
		<view style="width:95%">
			<scroll-view show-scrollbar="false" scroll-x="true">
				<view style="margin-top: 15px; display: flex;flex-direction: row;">
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="￥6000" text2="" type="柴犬" text3="刚刚"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="￥2000" text2="" type="柯基" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="￥5000" text2="" type="金毛" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="￥6000" text2="" type="柴犬" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="￥6000" text2="" type="柯基" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="￥6000" text2="" type="金毛" text3="2分钟前"></discount>
				</view>
			</scroll-view>
		</view>
		<view class="qualityWrapper">
			<view class="quality">
				<i class="iconfont">&#xe7b3;</i>
			</view>
			<text style="position: absolute; top:0;left:30px;font-size: 15px;">精品</text>
			<text style="position: absolute; top:0;right:5px;font-size: 12px;">更多 ></text>
		</view>
		<view style="width:95%">
			<scroll-view show-scrollbar="false" scroll-x="true">
				<view style="margin-top: 15px; display: flex;flex-direction: row;">
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="￥6000" text2="" type="柴犬" text3="刚刚"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="￥2000" text2="" type="柯基" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="￥5000" text2="" type="金毛" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/chai.jpg" text1="￥6000" text2="" type="柴犬" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/keji.jpg" text1="￥6000" text2="" type="柯基" text3="2分钟前"></discount>
					<discount style="margin-right: 5px;" src="../../static/img/jinmao.jpg" text1="￥6000" text2="" type="金毛" text3="2分钟前"></discount>
				</view>
			</scroll-view>
		</view>
		<view style="width:95%;text-align: center;color:tomato;margin-top: 30px;">
			<text>为你推荐</text>
		</view>
		<view style="width:95%;margin-top: 10px;">
				<view style="display: flex;flex-direction: row;">
					<view style="flex:1;padding:5px;">
						<recommend src="../../static/img/chai.jpg" type="柴犬" price="￥2000"></recommend>
					</view>
					<view style="flex:1;padding:5px;">
						<recommend src="../../static/img/keji.jpg" type="柯基" price="￥2000"></recommend>
				  </view>
				</view>
		</view>
	</view>
</template>

<script>
	// import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	
	export default {
			name: "Home",
	    // components: {uniSearchBar},
			methods: {
				toFujin(){
					console.log(123456,this)
				}
			}
	}
</script>


<style>
	.container{
		width:100%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.swiperWrapper{
		width:95%;
		margin-top: 5px;
		/* display:flex; */
		/* justify-content: center; */
	}
	.swiper{
		width:100%;
		border-width: 0.1px;
		border-color:white;
		border-style: solid;
		border-radius: 8px;
		overflow: hidden;
	}
	.searchWrapper{
		/* background-color: red; */
		overflow:hidden;
		width:95%;
		display:flex;
		justify-content: flex-end;
		align-items: center;
	}
	.searchbar{
		float:left;
		width:90%;
	}
	.headerIcon{
		margin-top: 10px;
		width:95%;
		display:flex;
		flex-direction: row;
	}
	.near{
		flex:1;
		font-size: 10px;
	}
	.dog{
		flex:1;
		font-size: 10px;
	}
	.cat{
		flex:1;
		font-size: 10px;
	}
	.shop{
		flex:1;
		font-size: 10px;
	}
	.count{
		width:20px;
		height:20px;
	}
	.countWrapper{
		width:95%;
		margin-top: 30px;
		position: relative;
	}
	scroll-view ::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	}
	.latestWrapper{
		width:95%;
		margin-top: 30px;
		position: relative;
	}
	.latest{
		width:20px;
		height:20px;
	}
	.qualityWrapper{
		width:95%;
		margin-top: 30px;
		position: relative;
	}
	.quality{
		width:20px;
		height:20px;
	}
</style>
