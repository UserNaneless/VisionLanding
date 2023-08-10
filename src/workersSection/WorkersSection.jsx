import React, { Component } from 'react'
import "./WorkersSection.css"
import WorkerCard from './workerCard/WorkerCard'

export default class WorkersSection extends Component {

    createWorkerCards(){
        const cards = [];
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/74ccf7a395d258ce99fdda20/successful-old-businessman-suit-glasses-looking-confident.jpg", initials: "Nick Dowson"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/ee6258ad779a50aeb60a64b7/fashionable-young-redhead-woman-with-braid-tattoo-shoulder-having-rest-indoors.jpg", initials: "Gabbi Hudson"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/20cebe00b3975420afb850e2/business-sucessful-businessman-working-with-laptop-using-computer-smiling-standing.jpg", initials: "Paul Perry"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/29fd0360109159e1970d573a/woman-sitting-sofa-with-laptop-legs.jpg", initials: "Margo Loo"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/abd943c656105541872fcdd1/portrait-beautiful-caucasian-woman-laughing-covering-face-with-hand-chuckle-something-funny-express-happy-positive-emotions-white-wall.jpg", initials: "Sam Jhonson"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/dc20c7ecdd4e5961bccfb8eb/handsome-businessman-suit-glasses-cross-arms-chest-lookcopy.jpg", initials: "Harry Patterson"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/6f08fcd379775a96a7ab7ce6/positive-business-woman-posing-camera-outdoors.jpg", initials: "Meghan Scavo"});
        cards.push({photo: "https://images01.nicepagecdn.com/a1389d7bc73adea1e1c1fb7e/07dfdfa5239551ee9e51616d/front-view-smiley-elegant-businesswoman-using-laptop-with-copy-space.jpg", initials: "Linda Larson"});
        
        return cards.map((cardInfo, i) => {
            return <WorkerCard cardInfo={cardInfo} key={i}/>
        })
    }

    render() {
        return (
            <div className="workersSection section">
                <div className="workerSectionWrapper sectionWrapper">
                    {this.createWorkerCards()}
                </div>
            </div>
        )
    }
}
