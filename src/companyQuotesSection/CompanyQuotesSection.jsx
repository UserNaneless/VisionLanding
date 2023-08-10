import React, { Component } from 'react'

import "./CompanyQuoteSection.css" 

export default class CompanyQuotesSection extends Component {
    render() {
        return (
            <div className="companyQuotesSection section">
                <div className="companyQuotesSectionWrapper sectionWrapper">
                    <div className="quote">
                        <h1 className="quoteTitle">​​Intense is exactly what you need</h1>
                        <div className="quoteText">​While we were not the first home cleaning company in the UK, we take pride in being market leaders in introducing an instant online booking system plus the facility for our customers to login and control their cleaning service 24/7, 365 days a year putting you in complete control. </div>
                    </div>
                    <div className="quote">
                        <h1 className="quoteTitle">​​We dwelling elegance do shutters appetite yourself diverted</h1>
                        <div className="quoteText">​​As a result of our philosophy to be the most forward thinking home cleaning company and our focus on understanding customer needs, we have and will continue to expand across the UK with franchises in the southwest of England to the north east of Scotland with over 50 territories nationwide.</div>
                    </div>
                </div>
            </div>
        )
    }
}
