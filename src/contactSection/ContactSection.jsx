import React, { Component } from 'react'

import "./ContactSection.css"
import CompanyInfo from './companyInfo/CompanyInfo'
import ContactForm from './contactForm/ContactForm'

export default class ContactSection extends Component {
    render() {
        return (
            <div className="contactSection section">
                <div className="contactSectionWrapper sectionWrapper">
                    <CompanyInfo/>
                    <ContactForm/>
                </div>
            </div>
        )
    }
}
