import React, { Component } from 'react'
import "./InterestPointSection.css"
import PointCard from './pointCard/PointCard'

export default class InterestPointSection extends Component {

    createPointCards() {
        const pointCards = [];
        pointCards.push({ icon: ["fas", "lightbulb"], title: "high quality", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        pointCards.push({ icon: ["fas", "gear"], title: "creative team", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        pointCards.push({ icon: ["fas", "phone-volume"], title: "amazing results", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        pointCards.push({ icon: ["fas", "list-check"], title: "best pricing", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        pointCards.push({ icon: ["fas", "map-location-dot"], title: "innovations", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        pointCards.push({ icon: ["fas", "users"], title: "24/7 support", text: "Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin id venenatis." });
        return pointCards.map((card, i) => {
            return  <PointCard cardInfo={card} key={i}/>
        })
    }

    render() {
        return (
            <div className="section interestPointSection">
                <div className="interestPointSectionWrapper sectionWrapper">
                    {this.createPointCards()}
                </div>
            </div>
        )
    }
}
