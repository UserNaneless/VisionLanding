import React, { Component } from 'react'
import Achievement from './achievement/Achievement'

import "./AchievementsSection.css"

export default class AchievementsSection extends Component {

    createAchievements(){
        const achievements = [];
        achievements.push({number: 92, title: "unlimited ideas"});
        achievements.push({number: 37, title: "Beautiful Web Blocks"});
        achievements.push({number: 25, title: "Responsive Designs"});

        return achievements.map((achieve, i) => {
            return <Achievement achievement={achieve} key={i}/>
        })
    }

    render() {
        return (
            <div className="achievementsSection section">
                <div className="achievementsSectionWrapper sectionWrapper">
                    <h1 className="achievementsSectionTitle">The Future That You Will See Soon</h1>
                    <div className="achievementsSectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium voluptate veniam sit a ex unde aperiam, neque corporis.</div>
                    <div className="achievements">
                        {this.createAchievements()}
                    </div>
                </div>
            </div>
        )
    }
}
