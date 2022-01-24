import React, { Component } from 'react';
class Follower extends Component {
    constructor(params) {
        super(params);
        this.state = { 
            userid:params.match.params.userid,
            followerdata:[]
         }

         fetch("https://api.github.com/users/"+this.state.userid+"/followers")
         .then(res=>res.json())
         .then(data=>{
            this.setState({followerdata:data})
         },(error)=>{
             console.log(error);
         });
    }
    render() { 
        return ( 
            <>
                <h2>Follower</h2>
                <p>userid- {this.state.userid}- total public_repos- {this.state.followerdata.length}</p>
                {this.state.followerdata.map(data=>{
                    return <div>
                        <p><a href={data.html_url} target='_blank'>{data.login}</a></p>
                    </div>
                })}
                
            </>
         );
    }
}
 
export default Follower;