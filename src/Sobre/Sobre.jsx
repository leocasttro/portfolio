import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineLeft} from 'react-icons/ai'

import { AreaSobre } from './style';

const Sobre = () => {
  return (
    <AreaSobre>
      <h1>
        Sobre
      </h1>
      <div className='buttomBack'>
        <Link to='/'>
          <AiOutlineLeft />
        </Link>
      </div>
      <div className="containerContato">
        <div className="textSobre">
          <h2>Sobre mim</h2>
          <p>Cursando graduação em análise e 
            desenvolvimento de sistemas, atuando com desenvolvimento na linguagem 
            JavaScript e Framework VUE e React, experiência em projetos .ASP NET linguagem C#,
             contribuição no projeto de automação em 
            linguagem Python. Possuo conhecimentos em: HTML5, CSS3, JavaScript, TypeScript,
             Python e C#, busco futuramente me aprofundar na utilização 
             de frameworks Front-end</p>
        </div>
      </div>
    </AreaSobre>
  )
}

export default Sobre;