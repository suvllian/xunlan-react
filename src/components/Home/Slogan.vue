<template>
	<section>
		<div class="slogan"></div>
		<div class="slogan-shadow"></div>
			<div>
				<i><img src="./../../assets/all.png"></i>
			</div>
			<p><span>Slogan</span></p>
			<p>
				<span>执着</span>
				<span>进步</span>
				<span>高效</span>
				<span>卓越</span>
			</p>

	</section>
</template>

<style lang="scss" scoped>
	$iconsize:4em;
	$paddingSize:-2.4em;

	@mixin common-insize{
		width: 100%;
		height: 20em;
		min-width: 1170px;

	}

	section{
		@include common-insize;
		display: block;
		position: relative;
		background: white none repeat scroll 0 0;
    	box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.22);
		z-index: 2;
		text-align: center;
		padding-top: 2.4em;
	}

	.slogan{
		@include common-insize;
		position:absolute;
		margin-top: $paddingSize;
		background: url(./../../assets/fix-bg.jpg) fixed 40% 100%;
		opacity: 0.48;
	}

	.slogan-shadow{
		@include common-insize;
		position:absolute;
		opacity: 0.66;
		margin-top: $paddingSize;
		background-color: #333;
	}

	p{
		width: 1170px;
		position: relative;
		margin: 0 auto;

		&:last-child{
			padding: 22px 15px;
		}
	}

	span{
		display: inline-block;
		font-size: 42px;
		color: #fff;
		letter-spacing: 8px;
		padding: 0 28px;
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