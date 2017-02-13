<template>
	<section>
		<div>
			<i><img src="./../../assets/link.png"></i>
			<h2>友情链接</h2>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	$iconsize:4rem;

	@mixin common-insize{
		width: 100%;
		height: 24rem;
	}

	section{
		@include common-insize;
		padding-top: 2.4rem;
		background:  #fff;
		clear: both;
	}

	div{
		width: 1170px;
		margin: 0 auto;
	}

	h2{
		color: rgba(0, 0, 0, 0.7);
		font-weight: 400;
		margin: 0 0 1.875rem;
		font-size: 2rem;
		text-align: center;
	}

	i{
		max-width: $iconsize;
		max-height: $iconsize;
		position:relative;
		display: block;
		margin: 0 auto 1rem;

		img{
			max-width: $iconsize;
			max-height: $iconsize;
		}
	}

	// 响应式布局
	@media screen and (max-width:1170px){
		div{
			width: 100%;
		}
	}
</style>