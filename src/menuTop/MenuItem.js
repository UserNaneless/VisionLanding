import React, { Component } from 'react'
import "./MenuItem.css"

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="menuItem">{this.props.children}</div>
        )
    }
}

