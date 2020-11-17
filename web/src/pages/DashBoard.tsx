import React from 'react'
import logo from './images/tri.png'
function DashBoard () {
    return(
        <div id="page-dash">
            <aside>
                <header>
                    <h1>Aside Bar</h1>
                    <img src={logo} alt="logo"/>
                </header>
            </aside>
            
        </div>
    )
}

export default DashBoard