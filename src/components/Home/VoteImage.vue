<template>
	<section>
		<div class="box" v-for="(single,key) in data">
			<div class="box-content">
				<img :class="{active:single.isActive}" v-bind:src="'http://xunlan.chd.edu.cn/camera/v/works/'+single.iId+'.jpg'" v-on:click="enlargeImage(key)" alt="">
				<div class="introduction" :class="{float:single.isActive}">
					<h3>{{single.iTopic}}:</h3>
					<p :class="{border:single.isActive}">{{single.iContent}}</p>
				</div>
			</div>
			<div class="box-common">
				<span>票数({{single.iCountVotes}})</span>
				<span @click="dealVote(key,single.iId)">
					<img  v-if="single.isVote" src="./../../assets/after.png">
					<img  v-else src="./../../assets/before.png">
				</span>
			</div>
		</div>
		<h1 @click="addData()">{{bottomTitle}}</h1>
	</section>
</template>

<script>
export default{
	data(){
		return{
			data:[
			{"iId":"1","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u8349\u5802\uff0e\u5b66\u5e9c\u300b","iAuthor":"\u5f20\u65f8","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"2","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u7a97\u5916\u300b","iAuthor":"\u5218\u8f9b","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"3","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u7a7a\u4e2d\u6f2b\u6b65\u300b","iAuthor":"\u7530\u751c","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"4","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u661f\u7a7a\u300b","iAuthor":"\u5f20\u65f8","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"5","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u4e00\u62b9\u9633\u5149\u300b","iAuthor":"\u738b\u98de","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"6","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u4e00\u9685\u300b","iAuthor":"\u6b27\u5c0f\u82cf","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"7","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u5f71\u300b","iAuthor":"\u7530\u9f99","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"8","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66","iTopic":"\u300a\u8ffd\u6eaf\u300b","iAuthor":"\u7530\u751c","iContent":"\u6682\u65e0\u7b80\u4ecb","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"9","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u7891\u4e2d\u5510\u98ce\u300b","iAuthor":null,"iContent":"\u4e00\u5e2d\u957f\u88d9\uff0c\u6211\u9759\u9759\u7684\u54c1\u4f4d\u8fd9\u53e4\u8001\u7684\u6c14\u606f","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"10","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u547c\u5438\u300b","iAuthor":null,"iContent":"\u5927\u5510\u8299\u84c9\u56ed\u91cc\u7684\u9526\u9ca4\uff0c\u5728\u7a7a\u6c14\u6e05\u65b0\u7684\u96e8\u540e\uff0c\u547c\u5438\u6700\u65b0\u9c9c\u7684\u7a7a\u6c14","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"11","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u9006\u5149\u300b","iAuthor":null,"iContent":"\u9006\u7740\u5149\uff0c\u770b\u5230\u4e0d\u4e00\u6837\u7684\u4e16\u754c","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"12","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u9752\u9f99\u5bfa\u7684\u6c14\u606f\u300b","iAuthor":null,"iContent":"\u9752\u9f99\u5bfa\u6a31\u82b1\u76db\u5f00\uff0c\u5728\u96ea\u767d\u7684\u82b1\u74e3\u95f4\u900f\u9732\u51fa\u53e4\u5efa\u7684\u6c14\u606f","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"13","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u6211\u773c\u4e2d\u7684\u957f\u5b89\u5854\u300b","iAuthor":null,"iContent":"\u6362\u4e2a\u89d2\u5ea6\uff0c\u4f60\u4f1a\u770b\u5230\u4e0d\u4e00\u6837\u7684\u4e16\u754c","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"14","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u590f\u7684\u4e16\u535a\u56ed\u300b","iAuthor":null,"iContent":"\u590f\u5929\u7684\u4e16\u535a\u56ed\uff0c\u5f25\u6f2b\u7740\u8377\u82b1\u7684\u9999\u6c14","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"15","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u5174\u5584\u5bfa\u7684\u7948\u798f\u300b","iAuthor":null,"iContent":"\u4e0e\u4f60\u5728\u5174\u5584\u5bfa\u8bb8\u4e0b\u771f\u8bda\u7684\u613f\u671b\uff0c\u4e00\u540c\u7948\u798f","iCountVotes":"0","isActive":false,"isVote":false},
			{"iId":"16","iSchool":"\u897f\u5b89\u5efa\u7b51\u79d1\u6280\u5927\u5b66\u534e\u6e05\u5b66\u9662","iTopic":"\u300a\u522b\u6837\u5b81\u9759-\u8fd0\u52a8\u573a\u4e0a\u7684\u5929\u7a7a\u300b","iAuthor":null,"iContent":"\u5730\u4e0a\u597d\u50cf\u6709\u4e00\u5757\u88c2\u75d5\uff0c\u90a3\u662f\u96e8\u540e\u7684\u5929\u7a7a","iCountVotes":"0","isActive":false,"isVote":false}
			],
			pageCounter:1,
			bottomTitle:"查看更多"
		}
	},
	methods:{
		enlargeImage:function(index){
			this.data[index].isActive = !this.data[index].isActive;
		},
		dealVote:function(index,id){
			this.data[index].isVote = !this.data[index].isVote;
			if(this.data[index].isVote){
				this.data[index].iCountVotes++;
				this.changeVote(id,"add");
			}else{
				this.data[index].iCountVotes--;
				this.changeVote(id,"sub");
			}
		},
		setCookie:function(){
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?page=1";
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        xhr.send();
		},
		addData:function(){
			this.pageCounter++;
			var url = "http://xunlan.chd.edu.cn/camera/v/api/data.php?page=";
			url = url + this.pageCounter;
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
	        	var responseLength = data.length;
	        	if(responseLength===0){
		        	that.bottomTitle = "没有更多内容了";
		        }
	        }
	        xhr.send();
		},
		changeVote:function(id,way){
			var url = "http://xunlan.chd.edu.cn/camera/v/api/votedeal.php";
			var postData = "way="+way+"&id="+id;

	        var xhr = new XMLHttpRequest();
	        xhr.open('POST',url);
	        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
	        xhr.onload = function(e){
	        	
	        }
	        xhr.send(postData);
		}
	},
	created(){
		this.setCookie();
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