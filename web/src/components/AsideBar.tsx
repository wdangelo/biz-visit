import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/tri.png'
import '../../src/styles/pages/asidebar.css'


function AsideBar() {
  return (

    <div id="page-aside">
            <aside>
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>Sicoob Unimais</h2>
                    <p>Centro Leste Paulista</p>
                </header>
                <hr id="aside-line"></hr>
                <nav id="side-menu">
                    <ul>
                        <li><Link to="/" id="link-menu">Home</Link></li>
                        <li><Link to="/agencias" id="link-menu" >Agências</Link></li>
                        <li><Link to="/" id="link-menu" >Agenda de Ramais</Link></li>
                        <li><Link to="/" id="link-menu" >Negócios</Link></li>
                        <li>
                            <Link to="/" id="link-menu" >Cadastro</Link>
                                <ul>
                                    <li><Link to="/" id="link-menu" >Usuários</Link></li>
                                    <li><Link to="/" id="link-menu" >Agências</Link></li>

                                </ul>
                        </li>
                        <ul>
                            
                        </ul>
                        <li>
                            <Link to="/" id="link-menu" >Edição</Link>
                                <ul>
                                    <li><Link to="/" id="link-menu" >Usuários</Link></li>
                                    <li><Link to="/" id="link-menu" >Agências</Link></li>

                                </ul>
                        </li>

                    </ul>

                </nav>

                <footer>
                    <strong>www.sicoob.com.br</strong>
                </footer>

            </aside>

        </div>
  );
}

export default AsideBar;