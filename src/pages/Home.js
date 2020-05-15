import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/services';
import FeaturedRooms from '../components/FeaturedRooms';

 const Home = () => {
    return (
        <>
        <Hero>       
        <Banner title="Luxurious rooms" subtitle="deluxe room 
        starting at $299">
            <Link to="/rooms" className="btn-primary">
                our rooms
            </Link>
        </Banner>
        </Hero>
        <Services />
        <FeaturedRooms/>
        </>
    )
}

export default Home;