<template>
	<section>
		<div class="col-half">
			<div class="row-half">
				<div class="col-half-inner col-half-inner-bg-1">
					<div class="desc">
						<h3>技术部</h3>
						<p>主要负责长安大学官方微信的功能开发和维护，中国大学生在线共建频道的前端网页的专题制作，网站开发以及维护工作等。</p>
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
						<h3>新媒体部</h3>
						<p>主要负责长安大学官方微信、微博的运营，是校内文化传播、师生交流、服务师生的良好平台。日常工作由编辑、设计师、摄影等职能共同承担完成。</p>
						<p>
							<a href="">Read More</a>
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="col-half col-half-2">
			<h2>新闻部</h2>
			<p>主要负责教育部中国大学生在线和【与道同行】共建平台的投稿工作。</p>
			<p>对学校重大活动进行采稿、拍照工作，并及时上传、发表，以及采访稿的写作。
			</p>

			<h2>秘书处</h2>
			<p>主要负责工作社的日常事务管理及与各部门之间的沟通联系<br/>以及与校内其他兄弟组织的沟通和联系，具体工作包括：<br/><em>信息传达、财务管理、制度建设、文件草拟、对外交流合作</em>等。</p>
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