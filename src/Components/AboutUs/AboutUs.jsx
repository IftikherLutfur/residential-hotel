
import Navbar from '../Navbar/Navbar';
import Team from '../Team/Team';
import Features from './Features';
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async';
import Mission from './Mission';
import Rev from '../Rev/Rev';

const AboutUs = () => {
	return (
		<div>
			<Helmet>
				<title>Homies - About Us</title>
			</Helmet>
			<Navbar></Navbar>
			<Features></Features>
			<Mission></Mission>
			<Team></Team>
			<Rev></Rev>
			<Footer></Footer>

		</div>
	);
};

export default AboutUs;