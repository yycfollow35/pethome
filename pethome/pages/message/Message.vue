<template>
	<view class="container">
		<view class="header">
			<text style="font-size: 15px;">消息列表</text>
		</view>
		<view class="messages">
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
			<messageTemp class="msgWrapper"></messageTemp>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.container {
		width:100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.header {
		width:90%;
		text-align: center;
		margin-top: 30px;
		font-weight: 600;
	}
	.messages{
		width:90%;
		/* margin-top: 20px; */
	}
	.msgWrapper{
		width:100%;
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
