import React, { Component } from 'react'

import "./WorkerCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default class WorkerCard extends Component {
    render() {
        return (
            <div className="workerCard">
                <div className="workerPhoto" style={{backgroundImage: "url("+this.props.cardInfo.photo+")"}}></div>
                <h3 className="workerInitials">{this.props.cardInfo.initials}</h3>
                <div className="workerSocials">
                    <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href=""><FontAwesomeIcon icon={faTumblr}/></a>
                    <a href=""><FontAwesomeIcon icon={faFacebookF}/></a>
                    
                </div>
            </div>
        )
    }
}
