<template>
	<section>
		<h1>投票效果</h1>
		<div class="box">
			<div class="box-content">
				<img :class="{active:isActive}" src="../../assets/small-1.jpg" v-on:click="toBig()" alt="">
				<div class="introduction" :class="{float:isActive}">
					<h3>在岛上想她家鱼的菇:</h3>
					<p :class="{border:isActive}">新西兰，库克山。
	新西兰的美丽，精妙，丰富，恬静，浪漫，也不是言语所能描述的了。</p>
				</div>
			</div>
			<div class="box-common">
				<span>热度({{iCount}})</span>
				<span>推荐</span>
				<span @click="toVote()">
				<img  v-if="isVote" src="./../../assets/before.png">
				<img  v-else src="./../../assets/after.png">
				</span>
			</div>
		</div>
		
	</section>
</template>

<script>
export default{
	data(){
		return{
			isActive:false,
			isVote:true,
			iCount:23
		}
	},
	methods:{
		toBig:function(){
			this.isActive = !this.isActive;
		},
		toVote:function(){
			this.isVote = !this.isVote;
			if(!this.isVote){
				this.iCount++;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	section{
		height: auto;
		width: 100%;
		padding:2em 0;
		position:relative;

		h1{
			font-weight: 400;
			text-align: center;
			margin: 1em 0;
		}
	}

	.box{
		background-color: #fff;
		width: 48em;
		height:auto;
		margin: 0 auto;
		padding:1.6em;
		border: 1px solid #eee;
		box-shadow:1px 1px 5px #aaa;
		border-radius:5px;


		img{
			height: auto;
			max-width:40%; 
			cursor: pointer;
			padding-left: 4%;
			box-sizing:border-box;
		}

		.introduction{
			max-width: 60%;
			color: #333;
			float: left;

			h3{
				font-weight: 400;
				text-decoration: underline;
				font-size: 1.125em;
				margin-bottom: 0.875em;
			}

			p{
				line-height: 1.5em;
			}
		}

		.box-common{
			height: 3em;
			width: 100%;
			padding-top:0.5em;

			span{
				margin-left: 1em;
				color: #aaa;
				font-size: 0.875em;
				line-height: 3em;

				&:first-child{
					margin-left: 0;
				}	

				&:nth-child(3){
					img{
						max-height: 1.6em;
						padding-left:0;
						cursor: pointer;
					}
				}
			}
		}

		// JS设置样式
		.active{
			width: 100%;
			max-width: 100%;
			padding-left:0;
			padding-bottom:0.5em;
		}

		.float{
			float: none;
		}

		.border{
			border-left:4px solid #dfdfdf;
			padding-left:1em;
		}
	}

	
</style>