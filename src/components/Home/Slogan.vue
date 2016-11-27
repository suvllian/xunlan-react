<template>
	<section>
		<div>
			<i><img src="./../../assets/icon.png"></i>
		</div>

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

	section{
		width: 100%;
		height: 16em;
		display: block;
		position: relative;
		background: white none repeat scroll 0 0;
    	box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.22);
		z-index: 2;
		text-align: center;
		padding-top: 1.2em;

		min-width: 1170px;
	}

	p{
		width: 1170px;
		padding: 22px 15px;
		position: relative;
		margin: 0 auto;
	}

	span{
		display: inline-block;
		font-size: 42px;
		color: #333;
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