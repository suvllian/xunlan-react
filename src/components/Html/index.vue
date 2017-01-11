<template>
	<div>
		<!-- <div>
			<ul>
				<li :class="{bottom:icon.showFirst}"  @click="changeIconFirst()">
					<h1>一等奖</h1>
					<span>
						<img  v-if="icon.showFirst" src="./../../assets/iafter.png">
						<img  v-else src="./../../assets/ibefore.png">
					</span>
				</li>
				<li :class="{bottom:icon.showSecond}" @click="changeIconSecond()">
					<h1>二等奖</h1>
					<span>
						<img  v-if="icon.showSecond" src="./../../assets/iafter.png">
						<img  v-else src="./../../assets/ibefore.png">
					</span>
				</li>
				<li :class="{bottom:icon.showThree}" @click="changeIconThree()">
					<h1>三等奖</h1>
					<span>
						<img  v-if="icon.showThree" src="./../../assets/iafter.png">
						<img  v-else src="./../../assets/ibefore.png">
					</span>
				</li>
			</ul>
		</div> -->

			<section v-if="isMobile">
				<div class="box" v-for="(single,key) in dataLeft">
					<div class="box-content">
						<img :class="{active:single.isActive,pc:isMobile}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeLeft(key)" alt="">
						<div class="introduction" :class="{float:single.isActive}">
							<h3>{{ parseInt(single.rank) + counter + "."}}<span class="line"></span>{{single.iTopic}}:</h3>
							<p :class="{border:single.isActive}">{{single.iContent}}</p>
						</div>
					</div>
					<div class="box-common">
						<span>票数({{single.iCountVotes}})</span>
						<span>作者：{{single.iAuthor}}</span>
					</div>
				</div>
			</section>

			<section v-if="isMobile">
				<div class="box" v-for="(single,key) in dataMedium">
					<div class="box-content">
						<img :class="{active:single.isActive,pc:isMobile}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeMedium(key)" alt="">
						<div class="introduction" :class="{float:single.isActive}">
							<h3>{{ parseInt(single.rank) + counter + "."}}<span class="line"></span>{{single.iTopic}}:</h3>
							<p :class="{border:single.isActive}">{{single.iContent}}</p>
						</div>
					</div>
					<div class="box-common">
						<span>票数({{single.iCountVotes}})</span>
						<span>作者：{{single.iAuthor}}</span>
					</div>
				</div>
			</section>

			<section v-if="isMobile">
				<div class="box" v-for="(single,key) in dataRight">
					<div class="box-content">
						<img :class="{active:single.isActive,pc:isMobile}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeRight(key)" alt="">
						<div class="introduction" :class="{float:single.isActive}">
							<h3>{{ parseInt(single.rank) + counter + "."}}<span class="line"></span>{{single.iTopic}}:</h3>
							<p :class="{border:single.isActive}">{{single.iContent}}</p>
						</div>
					</div>
					<div class="box-common">
						<span>票数({{single.iCountVotes}})</span>
						<span>作者：{{single.iAuthor}}</span>
					</div>
				</div>
			</section>

			<section v-if="isMobile">
				<div class="box" v-for="(single,key) in dataMore">
					<div class="box-content">
						<img :class="{active:single.isActive,pc:isMobile}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeMore(key)" alt="">
						<div class="introduction" :class="{float:single.isActive}">
							<h3>{{ parseInt(single.rank) + counter + "."}}<span class="line"></span>{{single.iTopic}}:</h3>
							<p :class="{border:single.isActive}">{{single.iContent}}</p>
						</div>
					</div>
					<div class="box-common">
						<span>票数({{single.iCountVotes}})</span>
						<span>作者：{{single.iAuthor}}</span>
					</div>
				</div>
			</section>

			<section v-if="!isMobile">
				<div class="box" v-for="(single,key) in dataMobile">
					<div class="box-content">
						<img :class="{active:single.isActive}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeMore(key)" alt="">
						<div class="introduction" :class="{float:single.isActive}">
							<h3>{{ parseInt(single.rank) + counter + "."}}<span class="line"></span>{{single.iTopic}}:</h3>
							<p :class="{border:single.isActive}">{{single.iContent}}</p>
						</div>
					</div>
					<div class="box-common">
						<span>票数({{single.iCountVotes}})</span>
						<span>作者：{{single.iAuthor}}</span>
					</div>
				</div>
			</section>
			<h1 @click="addData()">{{bottomTitle}}</h1>
	</div>

</template>

<script>
export default{
	data(){
		return{
			dataLeft:[],
			dataMedium:[],
			dataRight:[],
			dataMore:[],
			dataMobile:[],
			counter:0,
			icon:{
				showFirst:true,
				showSecond:false,
				showThree:false,
			},
			isMobile:true,
			cWidth:0,
			bottomTitle:"查看更多",
			pageCount:1
		}
	},

	methods:{
		enlargeLeft:function(index){
			this.dataLeft[index].isActive = !this.dataLeft[index].isActive;
		},

		enlargeMedium:function(index){
			this.dataMedium[index].isActive = !this.dataMedium[index].isActive;
		},

		enlargeRight:function(index){
			this.dataRight[index].isActive = !this.dataRight[index].isActive;
		},

		enlargeMore:function(index){
			this.dataMore[index].isActive = !this.dataMore[index].isActive;
		},

		changeIcon:function(){
			this.icon.showFirst = false;
			this.icon.showSecond = false;
			this.icon.showThree = false;
		},

		changeIconFirst:function(){
			this.changeIcon();
			this.icon.showFirst = !this.icon.showFirst;
			this.counter = 0;
			if(this.cWidth<800){
				this.getMobileData("first");
			}else{
				this.getData("first");
			}
		},

		changeIconSecond:function(){
			this.changeIcon();
			this.icon.showSecond = !this.icon.showSecond;
			this.counter = 20;
			if(this.cWidth<800){
				this.getMobileData("second");
			}else{
				this.getData("second");
			}
		},

		changeIconThree:function(){
			this.changeIcon();
			this.icon.showThree = !this.icon.showThree;
			this.counter = 60;
			if(this.cWidth<800){
				this.getMobileData("three");
			}else{
				this.getData("three");
			}
		},

		addData:function(){
			if(this.cWidth<800){
				this.addMobileData();
			}else{
				this.addPcData();
			}
		},

		getData:function(title){
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?count=1&page=" + title;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){        
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        		data[i].rank = i+1;
	        	}	

	        	var dataLeft = [],dataMedium = [],dataRight = [],dataMore = [];
	        	for(let i=0,j=0;i<data.length;i=i+4,j++){
	        		dataLeft[j]   = data[i];
	        		dataMedium[j] = data[i+1];
	        		dataRight[j]  = data[i+2];
	        		dataMore[j]  = data[i+3];
	        	}

	        	that.dataLeft   = dataLeft;
        		that.dataMedium = dataMedium;
        		that.dataRight  = dataRight;
        		that.dataMore  = dataMore;
	        }
	        xhr.send();
		},

		addPcData:function(){
			this.pageCount++;
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?count=" + this.pageCount +"&page=all";
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){        
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        		data[i].rank = i+1 +(that.pageCount-1)*40;
	        	}	

	        	var dataLeft = [],dataMedium = [],dataRight = [],dataMore = [];
	        	for(let i=0,j=0;i<data.length;i=i+4,j++){
	        		dataLeft[j]   = data[i];
	        		dataMedium[j] = data[i+1];
	        		dataRight[j]  = data[i+2];
	        		dataMore[j]  = data[i+3];
	        	}

	        	that.dataLeft = that.dataLeft.concat(dataLeft);
        		that.dataMedium = that.dataMedium.concat(dataMedium);
        		that.dataRight = that.dataRight.concat(dataRight);
        		that.dataMore = that.dataMore.concat(dataMore);
        		console.log(that.dataLeft);
	        }
	        xhr.send();
		},

		getMobileData:function(title){
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?page=" + title;
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){        
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        		data[i].rank = i+1;
	        	}
	        	that.dataMobile = data;
	        }
	        xhr.send();
		},

		addMobileData:function(){
			this.pageCount++;
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?count=" + this.pageCount +"&page=all";
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){        
	        	var data = JSON.parse(this.response);
	        	for(let i=0;i<data.length;i++){
	        		data[i].isActive = false;
	        		data[i].isVote = false;
	        		data[i].rank = i+1 +(that.pageCount-1)*40;
	        	}
	        	that.dataMobile = that.dataMobile.concat(data);
	        }
	        xhr.send();
		},
	},

	created(){
		var width = document.body.clientWidth;
		this.cWidth = parseInt(width);
		if(this.cWidth<800){
			this.isMobile = false;
			this.getMobileData("first");
		}else{
			this.getData("all");
		}
    }
}
</script>
<style lang="scss" scoped>
	section{
		height: auto;
		width: 25%;
		padding:1.2em 1%;
		position:relative;
		float: left;

		h2{
			font-weight: 400;
			margin-bottom: 0.6;
		}

	}

	h1{
		font-weight: 400;
		text-align: center;
		margin: 1em 0;
		cursor: pointer;
		transition: 1s all ease;
		clear: both;
		outline: none;
		-webkit-tap-highlight-color:rgba(0,0,0,0) ;

		&:hover{
			color: #333;
		}
	}

	ul{
		width: 100%;
		padding:10px;
		height: auto;
		box-sizing:border-box;
		li{
			width: 33%;
			display: inline-block;
			cursor: pointer;
			overflow: hidden;
			transition: 1s all ease;

			&:hover{
				transform:scale3d(0.8,0.8,1.2);
			}


			h1{
				font-weight: 400;
				text-align: center;
				margin-top: 0.32em;
				margin-bottom: 0;
				cursor: pointer;
				transition: 1s all ease;
				outline: none;
				-webkit-tap-highlight-color:rgba(0,0,0,0) ;

				&:hover{
					color: #333;
				}
			}

			span{
				display: inline-block;
				height: 60px;
				width: 100%;
				text-align: center;

				img{
					height: 100%;
					max-width: 60px;
				}
			}

			&:hover{

			}
		}
	}

	.line{
		margin:0 6px;
	}

	.box{
		background-color: #fff;
		width: auto;
		max-width: 48em;
		height:auto;
		margin: 1em auto;
		padding:1em;
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

		.pc{
			height: 200px;
			min-height: 200px;
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
			clear: left;

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
			max-height: 500px;
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

	@media screen and (max-width:999px){
		.box{
			max-width: 96%;
			margin: 1em 2%;

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

		section{
			input{
				position:relative;
				width: 100%;

				margin-left: 0;
				left:0;
			}
		}	
	}

	@media screen and (max-width:800px){
		body{
			min-width: 368px;
		}

		section{
			height: auto;
			width: 80%;
			padding:2em 0;
			float: none;
			margin: 0 auto;
		}

		.box{
			min-width: 300px;
		}

		ul{
			li{
				width: 32%;
			}
		}
	}

	@media screen and (max-width:510px){
		section{
			width: 100%;
			padding-top:0;
		}

		ul{
			li{
				span{
					display: none;
				}

				h1{
					font-size: 28px;
				}
			}

			.bottom{
				border-bottom:3px dotted #aaa;
			}
		}
	}
</style>