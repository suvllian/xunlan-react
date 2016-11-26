<template>
	<section v-bind:class="[slider]">
		<div v-bind:class="[container]">
			  <transition name="slide-fade" mode="out-in">
			    <div v-if="show" class="slide1">
			    	<div class="content">
			    		<div class="box">
			    			<h2 v-on:click="show = !show">{{title}}</h2>
			    			<p>
			    				<a href="">Learn More</a>
			    			</p>
			    		</div>
			    	</div>
			    </div>

				<div v-else class="slide2">
					<div class="content">
			    		<div class="box">
			    			<h2 v-on:click="show = !show">{{title}}</h2>
			    			<p>
			    				<a href="">Learn More</a>
			    			</p>
			    		</div>
			    	</div>
				</div>
			  </transition>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			slider:'slider',
			container:'container',
			title:'讯澜工作社',
			show:true
		}
	}
}
</script>

<style scoped>
	.slider{
		height: 56em;
		width: 100%;
		position: relative;
		left: 0;
	}

	.slide1{
		background-image: url(./../../assets/2.jpg);
		background-size: 100% 100%;
	}

	.slide2{	
		background-image: url(./../../assets/3.jpg);
		background-size: 100% 100%;
	}	

	.container{
		height: 56em;
		width: 100%;
		position: relative;
		margin: 0 auto;
	}

	.container>div{
		position: absolute;
		height: 100%;
		width: 100%;
		top:6px;
		left:0;
		z-index: 1;
	}

	.content{
		width:1170px;
		padding:0 15px;
		margin: 0 auto;
		min-height: 100%;
		text-align: center;
		position: relative;
	}

	.box{
		height: 18em;
		width: 100%;
		position: absolute;
		top:50% ;
		margin-top:-9em;
	}

	.box h2{
		font-family: "Roboto",Arial,sans-serif;
    	font-size: 70px;
	    font-weight: 100;
	    line-height: 87px;
	    color: #fff;
	    z-index: 2;
	    margin-bottom: 0.36em;
	    		letter-spacing: 8px;
	}

	.box p {
		height: 3.6em;
		margin-bottom: 0.6em;
		text-align: center;
	}

	.box a{
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
	}

	.box a:hover{
		opacity: 0.8;
	}

</style>
