import React, { Component } from 'react'

import "./InterestingFactCard.css"

export default class InterestingFactCard extends Component {
  render() {
    return (
      <div className="interestingFactCard">
        <div className="factCardInner">
            <div className="factCardFront"
            style={{backgroundImage: "url(" + this.props.cardInfo.background +")"}}></div>
            <div className="factCardBack">
              <h3 className="factCardTitle">{this.props.cardInfo.title}</h3>  
              <div className="factCardText">{this.props.cardInfo.text}</div>
            </div>
        </div>
      </div>
    )
  }
}
