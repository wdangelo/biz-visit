
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DashBoard from './pages/DashBoard'
import Agencies from './pages/Agencies'


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={DashBoard} />
                <Route path="/agencias"  component={Agencies} />
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes