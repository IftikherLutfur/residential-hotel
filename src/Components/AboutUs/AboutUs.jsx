
import Navbar from '../Navbar/Navbar';
import Team from '../Team/Team';
import Features from './Features';
import Footer from '../Footer'
import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>Homies - About Us</title>
            </Helmet>
            <Navbar></Navbar>
            <Features></Features>
            <Team></Team>
            <Footer></Footer>
           
        </div>
    );
};

export default AboutUs;