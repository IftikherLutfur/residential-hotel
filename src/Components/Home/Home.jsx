import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from "../../Components/Cards/Cards.jsx"

const Home = () => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid grid-cols-3'>
        {
            cards.map(card=><Cards key={card.id} card={card}></Cards>)
        }
            </div>
        </div>
    );
};

export default Home;