import React, { Component } from 'react'
import "./ProviderSection.css"
import ProviderCard from './providerCard/ProviderCard'


export default class ProviderSection extends Component {

    constructor(props) {
        super(props);

        this.cardsInfo = [];
        this.cardsInfo.push({ title: "Business Security", subjects: ["Powerful Admin Panel", "Multi-Language Support", "Support via E-mail and Phone", "Digital project planning"], icon: ["fas", "lightbulb"] });
        this.cardsInfo.push({ title: "​Powerful Admin Panel", subjects: ["Powerful Admin Panel", "Multi-Language Support", "Support via E-mail and Phone", "Digital project planning"], icon: ["fas", "gear"] });
        this.cardsInfo.push({ title: "​Multi-Language Support", subjects: ["Powerful Admin Panel", "Multi-Language Support", "Support via E-mail and Phone", "Digital project planning"], icon: ["fas", "user"] });
    }

    createProviderCards() {
        const providerCards = this.cardsInfo.map((info, i) => {
            return <ProviderCard cardInfo={info} key={i} cardNumber={i}/>
        });

        return providerCards;
    }

    render() {
        return (
            <section className="providerSection section">
                <div className="providerSectionWrapper sectionWrapper">
                    <div className="providerText">
                        <h2 className="providerTextTitle">We Provide Flexible IT Choose</h2>
                        <div className="providerTextMainText">Lorem Ipsum is simply dummy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                    </div>
                    <div className="providerCardsWrapper">
                        {this.createProviderCards()}
                    </div>
                </div>
            </section>
        )
    }
}
