import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'

import "./CircleIcon.css"

export default class CircleIcon extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="circleIcon">
                <FontAwesomeIcon icon={this.props.icon}/>
            </div>
        )
    }
}
