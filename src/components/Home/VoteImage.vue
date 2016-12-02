<template>
	<section>
		<div class="box" v-for="(single,key) in data">
			<div class="box-content">
				<img :class="{active:single.isActive}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="toBig(key)" alt="">
				<div class="introduction" :class="{float:single.isActive}">
					<h3>{{single.iTopic}}:</h3>
					<p :class="{border:single.isActive}">{{single.iContent}}</p>
				</div>
			</div>
			<div class="box-common">
				<span>票数({{single.iCountVotes}})</span>
				<span @click="toVote(key)">
					<img  v-if="single.isVote" src="./../../assets/after.png">
					<img  v-else src="./../../assets/before.png">
				</span>
			</div>
		</div>
		<h1 @click="addData()">查看更多</h1>
	</section>
</template>

<script>
export default{
	data(){
		return{
			data:[],
			counter:1
		}
	},
	methods:{
		toBig:function(index){
			console.log(this.$root.test);
			this.data[index].isActive = !this.data[index].isActive;
		},
		toVote:function(index){
			this.data[index].isVote = !this.data[index].isVote;
			if(this.data[index].isVote){
				this.data[index].iCountVotes++;

			}else{
				this.data[index].iCountVotes--;

			}
		},
		getData:function(page){
			var url = "http://xunlan.chd.edu.cn/camera/v/data.php?page=";
			url = url + page;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        	}	
	        	that.data = data;
	        }
	        xhr.send();
		},
		addData:function(){
			this.counter++;
			var url = "http://xunlan.chd.edu.cn/camera/v/data.php?page=";
			url = url + this.counter;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        	}	
	        	that.data = that.data.concat(data);
	        }
	        xhr.send();
		}
	},
	created(){
		this.getData(1);
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
			cursor: pointer;
			transition: 1s all ease;
			outline: none;
			-webkit-tap-highlight-color:rgba(0,0,0,0) ;

			&:hover{
				color: #333;
			}
		}
	}

	.box{
		background-color: #fff;
		width: auto;
		max-width: 48em;
		height:auto;
		margin: 1em auto;
		padding:1.6em;
		border: 1px solid #eee;
		box-shadow:1px 1px 5px #aaa;
		border-radius:5px;
		outline: none;


		img{
			height: auto;
			max-width:40%; 
			cursor: pointer;
			padding-left: 4%;
			box-sizing:border-box;
			outline: none;
		}

		.introduction{
			max-width: 60%;
			min-width: 60%;
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

				&:nth-child(2){
					img{
						max-height: 1.6em;
						padding-left:0;
						cursor: pointer;
						outline: none;
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
			max-width: 100%;
		}

		.border{
			border-left:4px solid #dfdfdf;
			padding-left:1em;
		}
	}

	// 响应式布局

	@media screen and (max-width:800px){
		.box{
			max-width: 96%;
			margin: 1em 2%;
		}
	}

	@media screen and (max-width:510px){
		body{
			min-width: 368px;
		}

		.box{
			max-width: 96%;
			margin: 1em 2%;
			min-width: 300px;

			.introduction{
				float: none;
				max-width: 100%;

				p{
					border-left:4px solid #dfdfdf;
					padding-left:1em;
				}
			}
		}
		.box-content{
			img{
				width: 100%;
				max-width: 100%;
				padding-left:0;
				padding-bottom:0.5em;
				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0) ;
			}
		}


		.box-common{
			span{
				&:first-child{
					padding-left:0%; 
				}

				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0) ;
			}
		}
	}
	
</style>