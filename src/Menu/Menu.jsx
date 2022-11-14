import React from 'react';
import { AiOutlineLaptop, AiOutlineGithub, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import { AreaMenu } from './style.jsx';


const Menu = () => {

  return (
    <AreaMenu>
      <div className="textCenter">
        <Typewriter onInit={(typewrite) => {
          typewrite
          .typeString('Olá, sou Leonardo').pauseFor(1000)
          .start();
        }}
         />
        <p>desenvolvedor</p>
      </div> 
      <div className="containerMenu">
        <div className="item">
          <Link to='/sobre'>
            <AiOutlineUser />
            <p>sobre</p>
          </Link>
        </div>
        <div className="item">
          <Link to='/project'>
            <AiOutlineLaptop />
            <p>projetos</p> 
          </Link>
        </div>
        <div className="item">
          <a href="https://github.com/leocasttro">
            <AiOutlineGithub />
            <p>git</p>
          </a>
        </div>
        <div className="item">
          <Link to='/contato'>
            <AiOutlinePhone />
            <p>contato</p>
          </Link>
        </div>


      </div>
    </AreaMenu>
  )

}

export default Menu;