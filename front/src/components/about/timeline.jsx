import React, {Component} from 'react';

export default class TimeLine extends Component {
  render() {
    return (
        <div className="container about-padding">
          {
            this.props.timeline.map((item, bIndex) => {
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
