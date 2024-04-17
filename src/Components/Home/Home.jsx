import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from "../../Components/Cards/Cards.jsx"
import Slider from '../Slider/Slider.jsx';
import Team from '../Team/Team.jsx';
import Footer from '../Footer.jsx';
import { Helmet } from 'react-helmet-async';
import GoogleMap from '../Map/GoogleMap.jsx';
import Quality from './Quality.jsx';

const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Homies - Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Slider></Slider>
            <Quality></Quality>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {
            cards.map(card=><Cards key={card.id} card={card}></Cards>)
        }
            </div>
            <Team></Team>
            <GoogleMap></GoogleMap>
            <Footer></Footer>
        </div>
    );
};

export default Home;