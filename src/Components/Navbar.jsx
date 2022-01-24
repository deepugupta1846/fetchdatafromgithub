import React, { Component } from 'react';
import './css/navbar.css';
import githublogo from './Image/github_PNG83.png'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
                <div className='navbar'>
                    <div>
                        <div className='nav_1'>
                            <img src={githublogo} width="40"/>
                            <label>GitHub</label>
                        </div>
                    </div>
                </div>
            </>
         );
    }
}
 
export default Navbar;