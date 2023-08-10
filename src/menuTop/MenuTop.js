import React, { Component } from 'react'
import MenuItem from './MenuItem';
import "./MenuTop.css"


export default class MenuTop extends Component {
    render() {
        return (
            <div className="menuTop">
                <MenuItem>home</MenuItem>
                <MenuItem>landing</MenuItem>
                <MenuItem>about</MenuItem>
                <MenuItem>team</MenuItem>
                <MenuItem>contact</MenuItem>
            </div>
        )
    }
}
