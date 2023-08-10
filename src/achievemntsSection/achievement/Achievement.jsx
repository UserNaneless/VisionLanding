import React, { Component } from 'react'

import "./Achievement.css"

export default class Achievement extends Component {

    constructor(props) {
		super(props);

		this.numberRef = React.createRef();

        this.animationStarted = false;
        this.currentNumber = 0;
        this.animationTick = 0;
	}

    numberComingUpAnimation = () => {
        const number = this.numberRef.current;

        if(this.currentNumber >= this.props.achievement.number){
            return;
        }


        this.currentNumber += 1;
        number.innerHTML = this.currentNumber;

        setTimeout(this.numberComingUpAnimation, this.animationTick);
    }

	onScroll = () => {
		const number = this.numberRef.current;
		if (window.scrollY + document.documentElement.clientHeight - 200> number.offsetTop) {
            if(!this.animationStarted){
                this.animationTick = 2000 / this.props.achievement.number;
                setTimeout(this.numberComingUpAnimation, this.animationTick);
                this.animationStarted = true;
            }
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.onScroll);
        this.numberRef.current.innerHTML = 0;

	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll);
	}

    render() {
        return (
            <div className="achievement">
                <div ref={this.numberRef} className="numberAchieved">{this.props.achievement.number}</div>
                <h2 className="achievementTitle">{this.props.achievement.title}</h2>
            </div>
        )
    }
}
