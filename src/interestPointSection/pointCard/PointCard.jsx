import React, { Component } from 'react'
import CircleIcon from '../../overallComponents/CircleIcon'

import "./PointCard.css"

export default class PointCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="pointCard">
                <CircleIcon icon={this.props.cardInfo.icon}/>
                <h2 className="pointCardTitle">{this.props.cardInfo.title}</h2>
                <div className="pointCardText">{this.props.cardInfo.text}</div>
            </div>
        )
    }
}
