import React, { Component } from 'react';

import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import GitHub from './GitHub'
import Follower from './Follower';
import Following from './Following';
import Repositry from './Repositry';
import Home from './Home';
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <Navbar/>
                <div className='container mt-3 switch-router'>
                <div className='row'>
                    <div className='col-md-8'>
                        <GitHub/>
                    </div>
                    <div className='col-md-4'>
                        <Switch>
                            <Route path="/follower/:userid" component={Follower}/>
                            <Route path="/following/:userid" component={Following}/>
                            <Route path="/repo/:userid" component={Repositry}/>
                            <Route path="/" component={Home}/>
                        </Switch>
                    </div>
                </div>
                </div>
            </>
         );
    }
}
 
export default Router;