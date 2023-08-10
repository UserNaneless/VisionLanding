import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'

import "./Comment.css"

export default class Comment extends Component {

	constructor(props) {
		super(props);

		this.commentRef = React.createRef();
	}

	onScroll = () => {
		const comment = this.commentRef.current;
		if (window.scrollY + document.documentElement.clientHeight > comment.offsetTop) {
			comment.style.transform = "translateX(0)";
		}
	}

	componentDidMount() {
		window.addEventListener("scroll", this.onScroll);

		this.commentRef.current.style.transform = "translateX(5000px)";

	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.onScroll);
	}

	render() {
		return (
			<div ref={this.commentRef} className="comment">
				<FontAwesomeIcon className="commentIcon" icon={faQuoteLeft} />
				<div className="commentText">{this.props.commentInfo.text}</div>
				<h2 className="commentAuthor">{this.props.commentInfo.author}</h2>
			</div>
		)
	}
}
