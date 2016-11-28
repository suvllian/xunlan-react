<template>
	<section class="slider">
		<div class="container">

		    <div class="slide-first" id="first">
		    	<div class="content">
		    		<div class="box">
		    			<h2 v-on:click="fade()">{{title}}</h2>
		    			<p>
		    				<a href="">Learn More</a>
		    			</p>
		    		</div>
		    	</div>
		    </div>

			<div class="slide-second" id="second">
				<div class="content">
		    		<div class="box">
		    			<h2 v-on:click="fade()">{{title}}</h2>
		    			<p>
		    				<a href="">Learn More</a>
		    			</p>
		    		</div>
		    	</div>
			</div>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			title:'讯澜工作社',
			show:true
		}
	},

	methods:{
		fade:function(){
			this.show = !this.show;

			var first = document.getElementById("first");
			var second = document.getElementById("second");
			var handle = null;

			if(this.show){
				var tempFirst = 0;
				var tempSecond = 1;

				handle = setInterval(function(){
					tempFirst += 0.05;
					tempSecond -= 0.05;

					first.style.opacity = tempFirst;
					second.style.opacity = tempSecond;
				},50);
			}else{
				var tempFirst = 0;
				var tempSecond = 1;

				handle = setInterval(function(){
					tempFirst += 0.05;
					tempSecond -= 0.05;

					second.style.opacity = tempFirst;
					first.style.opacity = tempSecond;
				},50);
			}

			setTimeout(function(){
				clearInterval(handle);
			},1000);
		}
	}
}
</script>

<style lang="scss" scoped>
	.slider{
		height: 56em;
		width: 100%;
		position: relative;
		left: 0;
		top:6px;
		min-width: 1170px;
	}

	.container{
		height: 56em;
		width: 100%;
		position: relative;
		margin: 0 auto;
	}

	.slide-first{
		height: 56em;
		width: 100%;
		background-image: url(./../../assets/2.jpg);
		background-size: 100% 100%;
		position:absolute;
		top: 0;
		left:0;
		opacity: 0;
	}

	.slide-second{	
		height: 56em;
		width: 100%;
		background-image: url(./../../assets/3.jpg);
		background-size: 100% 100%;
		position:absolute;
		top: 0;
		left:0;
		opacity: 1;
	}	



	.content{
		width:1170px;
		padding:0 15px;
		margin: 0 auto;
		min-height: 100%;
		text-align: center;
		position: relative;
		top:6px;
	}
	.box{
		height: 18em;
		width: 100%;
		position: absolute;
		top:50% ;
		margin-top:-9em;

		h2{
			font-family: "Roboto",Arial,sans-serif;
	    	font-size: 70px;
		    font-weight: 100;
		    line-height: 87px;
		    color: #fff;
		    z-index: 2;
		    margin-bottom: 0.36em;
    		letter-spacing: 8px;
		}

		p {
			height: 3.6em;
			margin-bottom: 0.6em;
			text-align: center;
		}

		a{
			display: block;
			height: 3em;
			line-height: 3em;
			width: 164px;
			text-align: center;
			font-size: 24px;
			margin: 0 auto;
			color: #fff;
			border-radius: 42px;
			background-color: #00adb5;

			&:hover{
				opacity: 0.8;
			}
		}
	}
</style>
