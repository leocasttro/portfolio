import React from 'react'; 
import { Link } from 'react-router-dom';
import {AiOutlineLeft, AiOutlineLinkedin, AiOutlineWhatsApp, AiOutlineMail} from 'react-icons/ai'

import { AreaContato } from './style';

const Contato = () => {
  return (
    <AreaContato>
      <h1>
        Contatos
      </h1>
      <div className='buttomBack'>
        <Link to='/'>
          <AiOutlineLeft />
        </Link>
      </div>
      <div className="containerContato">
        <div className="itemsContato">
          <AiOutlineLinkedin /> <p>www.linkedin.com/leonardo-castro</p>
          <AiOutlineMail /> <p>leocasttro40@gmail.com</p>
          <AiOutlineWhatsApp /> <p>+55 61 99891-8274</p>
        </div>
      </div>
    </AreaContato>
  )
}

export default Contato;