<template>
	<footer>
		<div>
			<p v-bind:style="{float:left}" v-html="copyright"></p>
			<p v-bind:style="{float:right}" v-html="author"></p>
		</div>
	</footer>
</template>

<script>
export default {
	data(){
		return{
			copyright:'<small>© 2016 讯澜工作社. All Rights Reserved</small>',
			author:'<small>Powered By <a href="http://suvllian.com">Suvllian</a></small>',
			left:'left',
			right:'right'
		}
	}
}
</script>

<style scoped>
	footer{
		border-top: 1px solid #f0f2f3;
    	padding: 40px 0;
    	background-color: rgba(21, 31, 44, 0.1);
	}

	div{
		width: 1170px;
		height: auto;
		margin: 0 auto;
		padding: 0 15px;
	}

	p{
		color: #818892;
		font-size: 18px;
		margin-top:-9px;
	}

	small{
		font-size: 18px;
	}
</style>