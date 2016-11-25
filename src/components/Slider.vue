<template>
	<section v-bind:class="[slider]">
		<div v-bind:class="[containe]">
			<h2 v-on:click="show = !show">{{title}}</h2>
		</div>
	</section>
</template>

<script>
export default{
	data(){
		return{
			slider:'slide',
			containe:'container',
			title:'讯澜工作社',
			show:true
		}
	}
}
</script>

<style scoped>
	.slide{
		height: 56em;
		width: 100%;
		position: relative;
		left: 0;

		background-image: url(./../assets/2.jpg);
		background-size: 100% 100%;
	}

	.container{
		height: 32em;
		width: 43.6%;
		position: relative;
		left: -6%;
		margin: 0 auto;
		padding-top: 8em;
	}

	h2{
		font-family: "Roboto",Arial,sans-serif;
    	font-size: 70px;
	    font-weight: 100;
	    line-height: 87px;
	    color: #818892;
	    margin-bottom: 1px;
	}

</style>
