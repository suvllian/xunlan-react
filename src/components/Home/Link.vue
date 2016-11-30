<template>
	<section>
		<div>
			<i><img src="./../../assets/link.png"></i>
			<h2>友情链接</h2>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	$iconsize:4em;

	@mixin common-insize{
		width: 100%;
		height: 24em;
		min-width: 1170px;

	}
	section{
		@include common-insize;
		padding-top: 2.4em;
		background:  #fff;
	}

	h2{
		color: rgba(0, 0, 0, 0.7);
		font-weight: 400;
		margin: 0 0 30px;
		font-size: 34px;
		text-align: center;
	}

	i{
		max-width: $iconsize;
		max-height: $iconsize;
		position:relative;
		display: block;
		margin: 0 auto 16px;

		img{
			max-width: $iconsize;
			max-height: $iconsize;
		}
	}
</style>