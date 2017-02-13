<template>
	<div>
		<div class="header-image">
			<img v-bind:src=" 'http://talent.baidu.com/external/baidu/images/museum/ab-b' + (activeItem+1) + '.jpg'" alt="header">
		</div>
		<header>
			<div class="header-container">
				<div id="blue-slider"></div>
				<ul>
					<li v-for="(item,index) in liItems" @click="beActive(index)" @mouseover="slideHeader(index)" @mouseleave="resetHeader()" :class="{active:item.isActive}">
						<span></span>
						{{item.title}}
					</li>
				</ul>
			</div>
		</header>
		<article>
			<div class="content" v-show="contentItem[0].isActive">
				<p>
					讯澜工作社是直属于校党委宣传部的学生宣传思想工作团队，担负着网络维护、专题制作、稿件编辑、官方微博微信运营等重要工作。
				</p>

				<p>
					长安大学讯澜工作社（原名讯澜工作室）成立于2003年9月，是校党委宣传部直属的宣传思想工作学生团队。致力于学校新媒体平台的运营，学校网站的建设与开发，中国大学生在线长安大学通讯站、与道同行共建频道的建设等工作。 讯澜工作社一直以来用技术和文字服务于长安大学的学生宣传工作，在计算机Web技术和新闻传媒中书写个性和精彩，努力打造专业的Web技术和互联网新闻传媒团队。
				</p>

				<p>
					目前，讯澜工作社包括新闻编辑部，技术部，新媒体运营部，秘书处四个部门。各个部门各司其职、相互合作、共同努力，为长安大学的宣传工作贡献着自己的力量。
				</p>

				<p>
					经过12年的执着进取，讯澜工作社已发展成为在校内有一定影响力的宣传思想工作学生团队。
				</p>
				<p>
					经过12年的执着进取，讯澜工作社已发展成为在校内有一定影响力的宣传思想工作学生团队。
				</p>
			</div>

			<div class="content" v-show="contentItem[1].isActive">
				<h3>新闻编辑部</h3>
				<p>
					主要负责教育部中国大学生在线和【与道同行】共建平台的投稿工作。对学校重大活动
				</p>
				<p>
					进行采稿、拍照工作，并及时上传、发表，以及采访稿的写作。
				</p>

				<h3>网络技术部</h3>
				<p>
					主要负责长安大学官方微信的功能开发和维护，中国大学生在线共建频道的前端网页的专题制作，网站开发以及维护工作等。
				</p>

				<h3>新媒体运营部</h3>
				<p>
					主要负责长安大学官方微信、微博的运营，是校内文化传播、师生交流、服务师生的良好平台。日常工作由编辑、设计师、摄影等职能共同承担完成。
				</p>
				<p>
					长安大学官方微信自2014年12月1日上线至今，短短一学期内粉丝量已突破两万，在校内有着良好口碑，影响至深。
				</p>

				<h3>秘书处</h3>
				<p>
					主要负责工作社的日常事务管理及与各部门之间的沟通联系，以及与校内其他兄弟组织的沟通和联系，具体工作包括：信息传达、财务管理、制度建设、文件草拟、对外交流合作等。
				</p>
			</div>

			<div class="content" v-show="contentItem[2].isActive">
				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>

				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>
			</div>

			<div class="content" v-show="contentItem[3].isActive">
				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>

				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>
			</div>

			<div class="content" v-show="contentItem[4].isActive">
				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>

				<p>
					2013年至2015年，长安大学校园网络通讯站接连获得 “十佳校园网络通讯站”、“全国优秀共建频道”的称号，多名师生被评为“全国校园网络通讯站十佳指导老师”、“全国校园网络通讯站十佳学生通讯员”、“全国校园网络通讯站优秀学生通讯员”等荣誉。
				</p>
				<p>
					2014年12月1日，我校官方微信正式上线，在新媒体运营部老师和各成员的共同努力之下，短短10个月粉丝量已经突破2万人，数次在中国青年报每周高校官方微信平台综合排名中位次良好；数篇头条图文进入榜单，排名靠前。
				</p>
			</div>
		</article>
	</div>
</template>

<script>

export default{
	data(){
		return{
			liItems:[
				{title:"组织介绍",isActive:true},
				{title:"部门介绍",isActive:false},
				{title:"讯澜大事记",isActive:false},
				{title:"讯澜生活",isActive:false},
				{title:"讯澜引力",isActive:false}
			],
			contentItem:[
				{content:"",isActive:true},
				{content:"",isActive:false},
				{content:"",isActive:false},
				{content:"",isActive:false},
				{content:"",isActive:false},
			],
			activeItem:0,
		}
	},
	
	methods:{
		slideHeader:function(index){

			// 鼠标滑过右移
			var blueSlider = document.getElementById("blue-slider");

			// 动态获取li的宽度
			var width      = parseInt(blueSlider.offsetWidth);
			var leftOffset = index*width;
			blueSlider.style.left = leftOffset + "px";
		},

		resetHeader:function(){

			// 鼠标离开
			this.slideHeader(this.activeItem);
		},

		beActive:function(index){

			// 鼠标点击
			this.beNotActive();
			this.liItems[index].isActive = true;
			this.contentItem[index].isActive = true;
			this.slideHeader(index);
			this.activeItem = index;
		},

		beNotActive:function(){
			for(let i=0;i<this.liItems.length;i++){
				this.liItems[i].isActive = false;
				this.contentItem[i].isActive = false;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	$width:1170px;

	$imageHeight:136px;
	.header-image{
		width: 100%;
		margin-bottom: -5px;
		min-height: $imageHeight;

		img{
			width: 100%;
			min-height: $imageHeight;
		}
	}

	header{
		height: 46px;
		border-bottom: 1px solid #eee;
		text-align: center;
		overflow: hidden;

		.header-container{
			width: $width;
			margin: 0 auto;
			position:relative;
			transition: all 0.5s ease 0s;  
			
			#blue-slider{
			    height: 4px;
			    width: 234px;
			    position: absolute;
			    top: 0;
			    left: 0;
			    background-color: #00adb5;
			    transition: all 0.5s ease 0s;    
			}

			span{
				width: 0;
				height: 0;
				transition: all 0.1s ease 0s;  
			}

			.active{
				span{
					background-color: #00adb5;
				    height: 12px;
				    width: 12px;
				    left: 60px;
				    top: 50%;
				    margin-top: -6px;
				    position: absolute; 
				}
			}

			ul{
				li{
					width: 20%;
					float: left;
					position:relative;
					line-height: 46px;
					list-style: none;
					color: #000;
					font-size: 16px;
					cursor: pointer;
				}
			}
		}	
	}
	
	article{
		width: $width;
		margin: 0 auto;
		text-indent: 2em;
		overflow: hidden;

		.content{
			padding:15px 0 100px;

			p{
				color:#333;
				font-size: 16px;
				line-height: 30px;
				margin-top: 8px;
			}

			h3{
				font-weight:400;
				font-size:22px;
				color:#222;
				padding:28px 0 0;
				letter-spacing: 2px;

				&:first-child{
					padding:0;
				}
			}
		}
	}

	@media screen and (max-width:1170px){
		$width:88%;

		header{
			.header-container{
				width: $width;

				#blue-slider{
					width:20%;
				}

				.active{
					color:#00adb5;
					span{
					    display: none;
					}
				}
			}
		}

		article{
			width: $width;
		}
	}

	@media screen and (max-width:600px){
		$width:100%;

		header{
			.header-container{
				width: $width;
			}
		}
	}


	@media screen and (max-width:450px){
		header{
			.header-container{
				ul{
					li{
						font-size: 15px;
					}
				}
			}
		}

		article{
			.content{
				padding-bottom:66px;
				p{		
					font-size: 14px;
				}

				h3{
					font-size:16px;
					font-weight: bold;
				}
			}
		}
	}
</style>