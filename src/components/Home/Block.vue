<template>
	<section>
		<div class="col-half">
			<div class="row-half">
				<div class="col-half-inner col-half-inner-bg-1">
					<div class="desc">
						<h3>About Us</h3>
						<p>Powered By Suvllian</p>
						<p>
							<a href="">Read More</a>
						</p>
					</div>
				</div>
				<a class="col-half-inner small-img-1">
					
				</a>
			</div>

			<div class="row-half">
				<a class="col-half-inner small-img-2">
					
				</a>
				<div class="col-half-inner col-half-inner-bg-2">
					<div class="desc">
						<h3>About Us</h3>
						<p>Powered By Suvllian</p>
						<p>
							<a href="">Read More</a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="col-half col-half-2">
			<h3>About Us</h3>
			<p>Powered By Suvllian</p>

			<h3>About Us</h3>
			<p>Powered By Suvllian</p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	section{
		width: 100%;
		height: 42em;
		background-color: rgba(45, 64, 89, 0.1) none repeat scroll 0 0;
		display: flex;
		flex-wrap: wrap;
		margin-top:6px;
		min-width: 1170px;
	}

	.col-half{
		width: 50%;
		float: left;
	}

	.col-half-2{
		padding:4em 2.6em;
		background-color: rgba(45, 64, 89, 0.1);

		h2{
			font-weight: 400;
			color: #333;
			font-size: 32px;
			margin-bottom: 0.8em;
			margin-top: 1em;
		}

		p{
			font-size: 20px;
			letter-spacing: 2px;
			line-height: 1.82em;
		}
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

	.col-half-inner-bg-1 {
	    background: #f36363 none repeat scroll 0 0 !important;
	}

	.col-half-inner-bg-2 {
	    background: #046fdb none repeat scroll 0 0 !important;
	}

	.small-img-1{
		background-image: url(./../../assets/small-1.jpg);
	}

	.small-img-2{
		background-image: url(./../../assets/small-2.jpg);
	}

	.desc{
		padding:2em 1.72em;
		color: #fff;

		h3{
			margin-bottom: 0.72em;
			font-size: 28px;
			font-weight: 400;
		}

		p{
			font-size: 21px;
			margin-bottom: 1.68em;
			line-height: 1.46em;
			letter-spacing: 2px;
		}

		a{
			color: #fff;
			border:2px solid #fff;
			padding:8px 16px;
			box-sizing: border-box;
			border-radius: 30px;
			transition: 0.5s all ease;

			&:hover{
				padding-right: 42px;
			}
		}
	}
</style>