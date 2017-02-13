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
		height: 56rem;
		width: 100%;
		position: relative;
		left: 0;
		top:6px;
		clear: both;
	}

	.container{
		height: 56rem;
		width: 100%;
		position: relative;
		margin: 0 auto;
	}

	.slide-first{
		height: 56rem;
		width: 100%;
		background-image: url(./../../assets/2.jpg);
		background-size: 100% 100%;
		position:absolute;
		top: 0;
		left:0;
		opacity: 0;
	}

	.slide-second{	
		height: 56rem;
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
		padding:0 1rem;
		margin: 0 auto;
		min-height: 100%;
		text-align: center;
		position: relative;
		top:0.375rem;
	}
	.box{
		height: 18rem;
		width: 100%;
		position: absolute;
		top:50% ;
		margin-top:-9em;

		h2{
			font-family: "Roboto",Arial,sans-serif;
	    	font-size: 3.875rem;
		    font-weight: 100;
		    line-height: 5.5rem;
		    color: #fff;
		    z-index: 2;
		    margin-bottom: 0.36rem;
    		letter-spacing: 0.42rem;
		}

		p {
			height: 3.6rem;
			margin-bottom: 0.6rem;
			text-align: center;
		}

		a{
			display: block;
			height: 3rem;
			line-height: 3rem;
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

	// 响应式布局
	@media screen and (max-width:1170px){
		.slider{
			
		}

		.content{
			width: 100%;
		}

		.box{
			margin-left: -1rem;
		}
	}
</style>
