import React, { Component } from 'react'
import "./miniPhoneSection.css"

export default class MiniPhoneSection extends Component {
    render() {
        return (
            <div className="section miniPhoneSection">
                <div className="sectionWrapper miniPhoneSectionWrapper">
                    <h1 className="miniPhoneText">
                    ​​We advise leaders on strategy, marketing, organization and IT
                    </h1>
                    <button className="miniPhoneButton mainButton">+12-345-678-89089</button>
                </div>
            </div>
        )
    }
}
