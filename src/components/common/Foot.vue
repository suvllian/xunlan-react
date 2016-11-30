<template>
	<footer>
		<div>
			<img src="./../../assets/icon.png">
			<p class="count">已有 {{vistorNumber}} 人次访问</p>
			<p><small>© 2016 讯澜工作社. All Rights Reserved</small></p>
			<p><small>Powered By <a href="http://suvllian.com">Suvllian</a></small></p>
		</div>
	</footer>
</template>

<script>
export default {
	data(){
		return{
			vistorNumber:1000
		}
	}
}
</script>

<style lang="scss" scoped>
	footer{
		border-top: 1px solid #f0f2f3;
    	padding: 40px 0;
    	background-color: rgba(21, 31, 44, 0.1);
    	height: auto;
		min-width: 1170px;
	}

	div{
		width: 1170px;
		height: auto;
		margin: 0 auto;
		padding: 0 1em;
		text-align: center;
	}

	p{
		color: #818892;
		font-size: 1.125em;
		padding:0.25em 0;

		a{
			color: #69606b;
			transition: color 1s ease;

			&:hover{
				color: #333;
			}
		}
	}

	img{
		width: 10em;
		height: 10em;
	}

	small{
		font-size: 1.125em;
	}

	.count{
		color: #69606b;
		font-family: "Source Sans Light",sans-serif;
    	font-size: 1.25em;
    	font-weight: 300;
	}
</style>