import React from 'react';
import Carousel from '../Carousel/Carousel';

import './style.jsx'
import { AreaHome } from './style.jsx';

const Home = () => {
  return (
    <AreaHome>
      <div className='container-home'>
      </div>
      <Carousel />
    </AreaHome>  
  )
}

export default Home;