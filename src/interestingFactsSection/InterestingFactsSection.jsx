import React, { Component } from 'react'
import "./InterestingFactsSection.css"
import InterestingFactCard from './InterestingFactCard/InterestingFactCard'

export default class InterestingFactsSection extends Component {

    createInterestingFactsCards(){
        const cards = [];
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/32037b0791a95987aececbcd/female-work-brainstorming.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."});
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/b09e15f3b6455f3aaa179069/16758708_rm405-da01-04-mockup.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/1b30859eb975565caff9537a/front-view-team-meeting-mock-up.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/6dfc249d806557eaa0d2772f/top-view-image-motivated-employees-working-together-office-official-meeting-concept-business.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/2c1b7079072b50a5b3f68f8c/planning-risk-strategy-project-management-business.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/4d43ceb63cc259428cb37921/group-people-working-out-business-plan-office.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/32037b0791a95987aececbcd/female-work-brainstorming.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/6dfc249d806557eaa0d2772f/top-view-image-motivated-employees-working-together-office-official-meeting-concept-business.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        cards.push({background: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/32037b0791a95987aececbcd/female-work-brainstorming.jpg", title: "title", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."})
        return cards.map((cardInfo, i) =>{
            return <InterestingFactCard cardInfo={cardInfo} key={i}/>
        })
    }

    render() {
        return (
            <div className="interestingFactsSection section">
                <div className="interestingFactsSectionWrapper sectionWrapper">
                    {this.createInterestingFactsCards()}
                </div>
            </div>
        )
    }
}
