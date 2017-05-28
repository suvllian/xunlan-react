import React, {Component} from 'react';

export default class TimeLine extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: [
        {
          year: '2017年',
          staff: ['讯澜工作社代表长安大学承办“陕西省h5设计大赛”', '讯澜工作社各部门规章制度完善和更新']
        },
        {
          year: '2016年',
          staff: ['指导教师黄天怡获“优秀指导教师”称号', '讯澜工作社承办优秀网络文化进校园-手机随拍摄影大赛']
        },
        {
          year: '2015年',
          staff: ['在中国大学生在线平台荣获“十佳共建频道”与“十佳校园网络通讯平台”称号', 
            '讯澜工作社秘书处成立', '长安大学官方微信粉丝突破一万（1月23日）']
        },
        {
          year: '2014年',
          staff: ['长安大学官方微信正式上线（12月11日）', '开始长安大学官方微信研发建设（11月7日）', '长安大学官方微信通过认证',
            '原讯澜工作室更名为讯澜工作社', '讯澜工作室成立新媒体运营部']
        },
        {
          year: '2003年',
          staff: ['长安大学党委宣传部成立讯澜工作室']
        }
      ]
    }
  }

  render() {
    return (
        <div className="container about-padding">
          {
            this.state.data.map((item, bIndex) => {
              return (
                  <div className="time-box" key={bIndex}>
                    <div className="time-year">{item.year}</div>
                    <div className="time-staff">
                      {
                        item.staff.map((item, sIndex) => {
                          return (
                              <p className="staffs" key={sIndex}>{item}</p>
                          )
                        })
                      }
                    </div>
                  </div>
              )
            })
          }
        </div>
    )
  }
}
