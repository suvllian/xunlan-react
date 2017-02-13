<template>
	<section>
		<div id="connect">
			<h2><span>联系我们</span></h2>	
			<form>
				<div class="row">
					<div class="right">
						<h3>联系地址</h3>
						<p>Get in touch with us. Feel Free to use contact below. </p>
						<ul>
							<li>
								<i></i>
								地址:行政楼
							</li>
							<li>
								<i></i>
								电话:029-5282425
							</li>
							<li>
								<i></i>
								邮箱:suvllian@163.com
							</li>
							<li>
								<i></i>
								网址:xunlan.chd.edu.cn
							</li>
						</ul>
					</div>

					<div class="left">
						<div class="col-md-6">
							<input class="form-control" placeholder="姓名" type="text">
						</div>
						<div class="col-md-6">
							<input class="form-control" placeholder="邮箱" type="text">
						</div>
						<div class="col-md-12">
							<textarea class="form-control" placeholder="留言"></textarea>
						</div>
						<div class="col-md-12">
							<input class="btn" value="Send Message" type="submit">
						</div>
					</div>
				</div>
			</form>

			<div style="clear:both;"></div>
		</div>
	</section>
</template>

<script>
export default {
    methods:{
    	
    },

    mounted(){
		
	}
}
</script>

<style lang="scss" scoped>
	$color:#00adb5;

	section{
		width: 100%;
    	box-shadow: 0 5px 5px -4px rgba(0, 0, 0, 0.22);
		position: relative;

		.row{
			margin-left: -15px;
			margin-right: -15px;
		}

		.col-md-6{
			width: 50%;
			float: left;

			input{
				width: 90%;
			}

			&:nth-child(2){
				input{
					width: 100%;
				}
			}
		}

		.col-md-12{
			width: 100%;
			position:relative;
			float: left;

			textarea{
				width: 100%;
				height: 220px;
			}
		}

		h2{
			color: rgba(0, 0, 0, 0.7);
			font-weight: 500;
			padding: 0 0 30px;
			font-size: 30px;
			text-align: center;
			letter-spacing: 2px;

			span{
				// border-bottom:2px dotted $color;
			}
		}

		h3{
			color: rgba(0, 0, 0, 0.7);
		    font-weight: 600;
		    padding: 0 0 20px;
		    font-size: 24px;
		}

		#connect{
			width: 1170px;
			margin: 0 auto;	
			padding: 16px 15px 32px;
			background-color:#fff;
			border-top:1px solid #eee;
			transition: all 1s ease;

			.left,.right{
				width: 50%;
				padding:0 15px;
			}

			.left{
				float: left;

				.form-control{
					margin-bottom: 30px;
					border: 1px solid rgba(0, 0, 0, 0.1);
				    border-radius: 1px;
				    font-size: 18px;
				    color: #555555;
				    line-height: 1.42857;
				    padding: 8px 16px;
				    transition: all 0.15s ease 0s;

				    &:focus,&:active{
				    	border-bottom:1px dotted $color;
				    }
				}

				.btn{
					cursor: pointer;
					background: $color none repeat scroll 0 0;
				    border: 2px solid $color;
				    color: #fff;
				    border-radius: 30px;
				    font-family: "Open Sans",Arial,serif;
				    font-weight: 400;
				    margin:0 4px 4px 0;
				    line-height: 1.42857;
				    padding: 8px 16px;
				    text-align: center;
				    vertical-align: middle;
				    transition: all 0.5s ease 0s;

				    &:focus,&:active,&:hover{
				    	background: #00c5cf;
				    	border: 2px solid #00c5cf;
				    }
				}
			}

			.right{
				float: right;

				// 字体共同样式
				%p{
					color: #848484;
				    font-family: "Open Sans",Arial,serif;
				    font-size: 18px;
				    font-weight: 300;
				    margin-bottom: 18px;
				    line-height: 1.8;
				}

				p{
					@extend %p;
				}

				ul{
					li{
						list-style: none;
					    letter-spacing: 1px;
					    @extend %p;
					}
				}
			}
		}
	}

	// 响应式布局
	@media screen and (max-width:1170px){
		section{
			#connect{
				width: 970px;
			}
		}
	}

	@media screen and (max-width:1000px){
		section{
			#connect{
				width: 750px;

				.left,.right{
					float: none;
					width: 100%;
				}
			}
		}
	}


	@media screen and (max-width:780px){
		section{
			#connect{
				width: 100%;
				padding-left:15px;
				padding-right:15px;
			}

			.col-md-6{
				width: 100%;

				input{
					width: 100%;
				}
			}
		}
	}
</style>