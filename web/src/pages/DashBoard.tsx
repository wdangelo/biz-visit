import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/tri.png'
import '../styles/pages/asidebar.css'
function DashBoard () {
    return(
        <div id="page-dash">
            <aside>
                <header>
                    <img src={logo} alt="logo"/>
                    <h2>Sicoob Unimais</h2>
                    <p>Centro Leste Paulista</p>
                </header>
                
                <nav id="side-menu">
                    <ul>
                        <li><Link to="/" id="link-menu">Home</Link></li>
                        <li><Link to="/" id="link-menu" >Agências</Link></li>
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

            </aside>

            <footer>
                <strong>Um texto aqui</strong>
                <span>Outro texto aqui</span>
            </footer>
            

        </div>
    )
}

export default DashBoard