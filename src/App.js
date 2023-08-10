import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import MenuTop from './menuTop/MenuTop';
import OpenerSection from './openerSection/OpenerSection';
import ProviderSection from './providerSection/ProviderSection';
import MiniPhoneSection from './miniPhoneSection/miniPhoneSection';
import InterestPointSection from './interestPointSection/InterestPointSection';
import InterestingFactsSection from './interestingFactsSection/InterestingFactsSection';
import CompanyQuotesSection from './companyQuotesSection/CompanyQuotesSection';
import WorkersSection from './workersSection/WorkersSection';
import CommentsSection from './commnetsSection/CommentsSection';
import AchievementsSection from './achievemntsSection/AchievementsSection';
import ContactSection from './contactSection/ContactSection';

library.add(fas);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}



	render() {
		return (
			<div className="app">
				<MenuTop/>
				<OpenerSection/>
				<ProviderSection/>
				<MiniPhoneSection/>
				<InterestPointSection/>
				<InterestingFactsSection/>
				<CompanyQuotesSection/>
				<WorkersSection/>
				<CommentsSection/>
				<AchievementsSection/>
				<ContactSection/>
			</div>
		);
	}
}

export default App;
