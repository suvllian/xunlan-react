<template>
	<footer>
		<div>
			<p class="count" v-cloak>已有 {{vistorNumber}} 人次访问</p>
			<p><small>© 2016 讯澜工作社. All Rights Reserved</small></p>
			<p><small>Powered By <a href="http://suvllian.com">Suvllian</a></small></p>
		</div>
	</footer>
</template>

<script>
export default {
	data(){
		return{
			vistorNumber: 1
		}
	},
	methods:{
		getVisitCount:function(){
			var url = "http://xunlan.chd.edu.cn/camera/v/api/visitcount.php";
	        var xhr = new XMLHttpRequest();
	        xhr.open('GET',url);
	        var that = this;
	        xhr.onload = function(e){
	        	that.vistorNumber = this.response;
	        }
	        xhr.send();
		}
	},
	created(){
		// this.getVisitCount();
	}
}
</script>

<style lang="scss" scoped>
	$fontsize:0.8rem;

	footer{
		border-top: 1px solid #f0f2f3;
    	padding: 0.66rem 0;
    	background-color: rgba(21, 31, 44, 0.1);
    	height: auto;
    	clear: both;
	}

	div{
		width: 1170px;
		height: auto;
		margin: 0 auto;
		padding: 0 1rem;
		text-align: center;
	}

	p{
		color: #818892;
		font-size: $fontsize;
		padding:0.25rem 0;

		a{
			color: #69606b;
			transition: color 1s ease;

			&:hover{
				color: #333;
			}
		}
	}

	img{
		width: 10rem;
		height: 10rem;
	}

	small{
		font-size: $fontsize;
	}

	.count{
		color: #69606b;
		font-family: "Source Sans Light",sans-serif;
    	font-weight: 300;
	}

	[v-cloak]{
		display:none;
	}

	// 响应式布局
	@media screen and (max-width:1170px){
		div{
			width: 100%;
		}
	}

	$fontsize600:0.8em;
	@media screen and (max-width:600px){
		footer{
			padding:$fontsize600 0;
		}

		p{
			font-size: $fontsize600;
			line-height:0.8em;
			padding:0.125rem 0;
		}

		small{
			font-size: $fontsize600;
		}

		.count{
	    	font-size: 0.66em;
		}
	}
</style>