import React from 'react'
import ReactDom from 'react-dom'
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import Users from './users'
import Contact from './contact'
import NotFound from './notfound'

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/users">Users</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/users/:id" component={Users} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>            
        </div>
    </Router>
)

ReactDom.render(routing, document.getElementById('root'))