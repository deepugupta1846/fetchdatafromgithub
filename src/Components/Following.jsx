import React, { Component } from 'react';

class Following extends Component {

    constructor(params) {
        super(params);
        this.state = { 
            userid:params.match.params.userid,
            
         }
        //  fetch("https://api.github.com/users/"+this.state.userid+"/following%7B/other_user%7D")
        //  .then(res=>res.json())
        //  .then(data=>{
        //      this.setState({following:data})
        //  })
    }


    render() { 
        return ( 
            <>
                <h2>Following {this.state.userid}</h2>
                <p>userid- {this.state.userid}- following- null</p>
                
            </>
         );
    }
}
 
export default Following;