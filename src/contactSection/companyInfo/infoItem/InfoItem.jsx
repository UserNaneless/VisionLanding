import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

import "./InfoItem.css"

export default class InfoItem extends Component {
    render() {
        return (
            <div className="infoItem">
                <div className="infoItemTop">
                    <FontAwesomeIcon className="infoItemIcon" icon={this.props.info.icon}/>
                    <h3 className="infoItemTitle">{this.props.info.title}</h3>
                </div>
                <div className="infoItemText">{this.props.info.text}</div>
            </div>
        )
    }
}
