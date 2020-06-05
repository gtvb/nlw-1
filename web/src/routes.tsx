import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { CreatePoint } from './pages/CreatePoint'

export const Routes = () => {
    return (
        <Router>
           <Route path='/' exact component={Home} />
           <Route path='/create-point' component={CreatePoint} />
        </Router>
    )
}