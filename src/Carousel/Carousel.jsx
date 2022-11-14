import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Projects from '../Projects/Projects';
import {AiOutlineLeft} from 'react-icons/ai'
import { SiCsharp, SiCss3, SiJavascript, SiPython, SiReact } from "react-icons/si";
import { Link } from 'react-router-dom';


import Agenda from '../img/Agenda.jpg'
import Api from '../img/Api.jpg'
import Blogr from '../img/Blogr.jpg'
import Calculadora from '../img/Calculadora.jpg'
import Xadrez from '../img/Xadrez.jpg'


import {AreaCarousel} from './style'

const Carousel = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)
  const [projects] = useState([
    {
      id: 1,
      name: 'Agenda Js',
      img: Agenda
    },
    {
      id: 2,
      name: 'Blogr',
      img: Blogr
    },
    {
      id: 3,
      name: 'Calculadora',
      img: Calculadora
    },
    {
      id: 4,
      name: 'Project Xadrez',
      img: Xadrez
    },
    {
      id: 5,
      name: 'Api',
      img: Api
    },
  ]);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
    
  return (
    <AreaCarousel>
    <h1>
      Projetos
    </h1>
    <div className='buttomBack'>
      <Link to='/'>
        <AiOutlineLeft />
      </Link>
    </div>
    <div className='container'>
      <motion.div className='carousel' ref={carousel} whileTap={{cursor: 'grabbing'}}>
          <motion.div 
          className='inner'
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          >
            <Projects projects={projects}/>
          </motion.div>

      </motion.div>
    </div>
    <div className='techs'>
      <SiPython />
      <SiJavascript />
      <SiCss3 />
      <SiCsharp />
      <SiReact />
    </div>
    </AreaCarousel>
  )
}

export default Carousel;