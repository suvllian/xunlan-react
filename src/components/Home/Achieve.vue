<template>
	<section>
		<div>
			<i><img src="./../../assets/icon.png"></i>
			<h2>Achievements</h2>
			<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
		</div>

		<div class="row">
			<div class="text-center">
				<span class="number">20152</span>
				<span class="label">Cups of Coffee</span>
			</div>

			<div class="text-center">
				<span class="number">20152</span>
				<span class="label">Cups of Coffee</span>
			</div>

			<div class="text-center">
				<span class="number">20152</span>
				<span class="label">Cups of Coffee</span>
			</div>

			<div class="text-center">
				<span class="number">20152</span>
				<span class="label">Cups of Coffee</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	$iconsize:82px;

	section{
		width: 100%;
		height: 30em;
		display: block;
		position: relative;
		background: white none repeat scroll 0 0;
    	box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.22);
		z-index: 2;
		padding-top: 2.4em;
		text-align: center;
		min-width:1170px;

		>div{
			min-width: 1170px;
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

		h2{
			color: rgba(0, 0, 0, 0.7);
   			font-weight: 400;
    		margin: 0 0 30px;
    		font-size: 34px;
    		text-align: center;
		}

		p{
			color: #848484;
		    font-family: "Open Sans",Arial,serif;
		    font-size: 18px;
		    font-weight: 300;
		    margin-bottom: 1.5em;
		}

		.row{
			width: 1170px;
			margin:0 auto;
			position:relative;

			.text-center{
				width: 25%;
				padding:0 10px;
				max-height: 10em;
				float:left;

				span{
					display: block;
				}

				.number{
					color: rgba(0, 0, 0, 0.7);
					font-family: "Open Sans",Arial,serif;
				    font-size: 44px;
				    font-weight: 400;
					margin:0.42em 0;
				}

				.label{
					color: rgba(0, 0, 0, 0.5);
				    font-size: 14px;
				    letter-spacing: 5px;
				    text-transform: uppercase;
				}
			}
		}
	}
</style>