<template>
	<section>
		<div class="col-half">
			<div class="row-half">
				<div class="col-half-inner col-half-inner-bg-1">
					<div class="desc">
						<h3>摄影展</h3>
						<p>优秀图文展示</p>
						<p>
							<a href="">Read More</a>
						</p>
					</div>
				</div>
				<a class="col-half-inner small-img-2">
					
				</a>
			</div>

			<div class="row-half">
				<a class="col-half-inner small-img-3">
					
				</a>
				<a class="col-half-inner small-img-4">
					
				</a>
			</div>
		</div>

		<div class="col-half">
			<div class="row-half">
				<a class="col-half-inner small-img-5">
					
				</a>
				<a class="col-half-inner small-img-6">
					
				</a>
			</div>

			<div class="row-half">
				<a class="col-half-inner small-img-1">
					
				</a>
				<a class="col-half-inner small-img-2">
					
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
	section{
		width: 100%;
		height: 42em;
		background-color: rgba(45, 64, 89, 0.1) none repeat scroll 0 0;
		display: flex;
		flex-wrap: wrap;

		min-width: 1170px;
	}

	.col-half{
		width: 50%;
		float: left;
	}

	.row-half{
		display: flex;
		flex-wrap: wrap;
		margin: 0;
		overflow: hidden;
		height:21em;
	}

	.col-half-inner {
	    background-position: center center;
	    background-size: cover;
	    display: flex;
	    flex-wrap: wrap;
	    min-height: 21em;
	    position: relative;
	    width: 50%;
	    cursor: pointer;
	}

	.small-img-1{
		background-image: url(./../../assets/small-1.jpg);
	}

	.small-img-2{
		background-image: url(./../../assets/small-2.jpg);
	}

	.small-img-3{
		background-image: url(./../../assets/small-3.jpg);
	}

	.small-img-4{
		background-image: url(./../../assets/small-4.jpg);
	}

	.small-img-5{
		background-image: url(./../../assets/small-5.jpg);
	}

	.small-img-6{
		background-image: url(./../../assets/small-6.jpg);
	}

	.col-half-inner-bg-1 {
	    background: #f36363 none repeat scroll 0 0 !important;
	}

	.desc{
		padding:2em 1.72em;
		color: #fff;
	}

	.desc h3{
		margin-bottom: 0.72em;
		font-size: 28px;
		font-weight: 400;
	}

	.desc p{
		font-size: 21px;
		margin-bottom: 1.68em;
		line-height: 1.46em;
		letter-spacing: 2px;
	}

	.desc a{
		color: #fff;
		border:2px solid #fff;
		padding:8px 16px;
		box-sizing: border-box;
		border-radius: 30px;
		transition: 0.5s all ease;
	}

	.desc a:hover{
		padding-right: 42px;
	}

</style>