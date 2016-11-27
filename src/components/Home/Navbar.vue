<template>
	<header>
		<div class="container">
			<div class="nav-header">
				<h1 id="logo"><a v-bind:href="logo.src">{{logo.title}}</a></h1>
				<nav>
					<ul>
						<li v-for="item in liItems">
							<a v-bind:href="item.src">{{item.title}}</a>
						</li >
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default{
	data(){
		return{
			logo:{
				title:"xunlan",
				src:"http://suvllian.com"
			},
			liItems:[
				{title:"首页",src:'http://suvllian.com'},
				{title:"摄影大赛",src:'camera/v/'},
				{title:"专题展示",src:'http://suvllian.com'},
				{title:"新闻周刊",src:'http://suvllian.com'},
				{title:"关于我们",src:'http://suvllian.com'}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	header{
		height: 96px;
		width: 100%;
		background: white none repeat scroll 0 0;
    	box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.22);
    	padding: 0;

		position: relative;
		top: 0;
		left: 0;

		min-width: 1170px;
	}

	h1, h2, h3, h4, h5, h6 {
	    color: rgba(0, 0, 0, 0.7);
	    font-weight: 400;
	    margin: 0 0 30px;
	}

	.container{
		width: 1170px;
		height: 96px;
		padding:0px 15px;
		margin: 0 auto;
	}

	.nav-header{
	    float: left;
	    position: relative;
		height: 96px;
	    width: 100%;
	}

	#logo {
	    float: left;
	    font-size: 22px;
	    font-weight: 700;
	    margin-bottom: 0;
	    margin-top: 1em;
	    padding-top: 15px;
	    text-transform: uppercase;

	    a {
		    border: 2px solid #00adb5;
		    color: rgba(21, 31, 44, 0.8);
		    padding: 0 7px;
		    position: relative;

		    &:hover{
		    	color: rgba(0, 0,0 , 0.9);
		    }

		    &:focus{
		    	color: rgba(0, 0,0 , 0.9);
		    }
		}
	}

	nav{
	    display: block;
	    float: right;
	    position: relative;
	    z-index: 2;

	    ul{
		    color: #848484;
		    font-family: "Open Sans",Arial,serif;
		    font-size: 18px;
		    height: 96px;
		    font-weight: 300;
		    margin:0 1em 0 0;

		    li{
				float: left;
				height: 96px;
			    padding-top: 15px;
				position: relative;
				list-style: none;
				transition: 1s all ease;

				a{
					display: block;
					position: relative;
				    color: rgba(0, 0, 0, 0.8);
				    font-size: 14px;
				    font-weight: 400;
				    padding: 2em 1.3em !important;
				    text-decoration: none;
				    text-transform: uppercase;
					transition: 0.5s all ease;
				}

				&:hover{
					background-color: #00adb5;

					a{
						color: #fff;
					}
				}
			}
		}
	}
</style>