import { tab } from '@testing-library/user-event/dist/tab';
import React, { Component } from 'react';
class Repositry extends Component {
    constructor(params) {
        super(params);
        this.state = { 
            userid:params.match.params.userid,
            repo:[]
         }
         fetch("https://api.github.com/users/"+this.state.userid+"/repos")
         .then(res=>res.json())
         .then(data=>{
             this.setState({repo:data})
         })
    }
    render() { 
        return ( 
            <>
                <h2>Repositry</h2>
                <p>userid- {this.state.userid}- total public_repos- {this.state.repo.length}</p>
                <div className='card '>
                    <table className='table '>
                    {this.state.repo.map(data=>{
                    return <>
                    <tr><td><a href={data.html_url} target="_blank">{data.full_name}</a></td></tr>
                    </>
                })}
                    </table>
                </div>
                
            </>
         );
    }
}
 
export default Repositry;