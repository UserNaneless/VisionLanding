import React, { Component } from 'react'

import "./ContactForm.css"

export default class ContactForm extends Component {
	render() {
		return (
			<form className="contactForm">
				<div className="oneRow">
					<div className="miniForm">
						<label htmlFor="email">Email</label>
						<input type="text" id="email" placeholder="Enter a valid email address"/>
					</div>
					<div className="miniForm">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" placeholder="Enter your Name"/>
					</div>
				</div>
				<div className="miniForm">
					<label htmlFor="address">Address</label>
					<input type="text" id="address"placeholder="Enter your address"/>
				</div>
				<div className="miniForm">
					<label htmlFor="message">Message</label>
					<textarea type="text" id="message" placeholder="Enter your message"/>
				</div>
				<button className="formSubmit mainButton">submit</button>

			</form>
		)
	}
}
