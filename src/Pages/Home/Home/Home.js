import React from 'react';
import Banner from '../Banner/Banner';
import DemandProducts from '../DemandProducts/DemandProducts';
import Products from '../Products/Products';
import Facilities from './Facilities/Facilities';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Facilities></Facilities>
            <DemandProducts></DemandProducts>
        </div>
    );
};

export default Home;