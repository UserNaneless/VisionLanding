import React, { Component } from 'react'
import InfoItem from './infoItem/InfoItem'

import "./CompanyInfo.css"

export default class CompanyInfo extends Component {
    createInfoItems(){
        const info = [];
        info.push({icon: ["fas", "phone"], title: "call us", text: "1 (234) 567-891, 1 (234) 987-654"});
        info.push({icon: ["fas", "location-dot"], title: "location", text: "121 Rock Sreet, 21 Avenue, New York, NY 92103-9000"});
        info.push({icon: ["fas", "clock"], title: "Business Hours", text: "Mon – Fri …… 10 am – 8 pm, Sat, Sun ....… Closed"});
        
        return info.map((infoItem, i) => {
            return <InfoItem info={infoItem} key={i}/>
        })
    }

    render() {
        return (
            <div className="companyInfo">
                <h1 className="infoTitle">Contact us</h1>
                <div className="info">
                    {this.createInfoItems()}
                </div>
            </div>
        )
    }
}
