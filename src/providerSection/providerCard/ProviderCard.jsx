import React, { Component } from 'react'
import CircleIcon from '../../overallComponents/CircleIcon';
import "./ProviderCard.css"

export default class ProviderCard extends Component {

    constructor(props){
        super(props);

        this.cardRef = React.createRef();
    }

    createProviderCardList(){
        const providerList = this.props.cardInfo.subjects.map((subject, i) => {
            return <li className="providerCardListItem" key={i}>{subject}</li>
        });

        return providerList;
    }

    onScroll = () => {
        const card = this.cardRef.current;
        if(window.scrollY + document.documentElement.clientHeight > card.offsetTop){
            this.cardRef.current.style.transform = "translateX(0)";
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.onScroll);

        switch(this.props.cardNumber){
            case 0:
                this.cardRef.current.style.transform = "translateX(-5000px)";
                this.cardRef.current.style.transition = "transform 1s";
                break;
            case 1:
                this.cardRef.current.style.transform = "translateY(10000px)";
                this.cardRef.current.style.transition = "transform 1.2s";
                break;
            case 2:
                this.cardRef.current.style.transform = "translateX(5000px)";
                this.cardRef.current.style.transition = "transform 1.3s";
        }

        //this.cardRef.current.style.transform = "translateX(" + (Math.round(Math.random()) == 1 ? "+" : "-") + "5000px)";

    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll);
    }

    render() {
        return (
            <div ref={this.cardRef} className="providerCard">
                <CircleIcon icon={this.props.cardInfo.icon}/>
                <h5 className="providerCardTitle">{this.props.cardInfo.title}</h5>
                <ul className="providerCardList">
                    {this.createProviderCardList()}
                </ul>         
            </div>
        )
    }
}
