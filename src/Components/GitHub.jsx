import React, { Component } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
var userdata;
class GitHub extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userid:"",
            follower:"",
            following:"",
            avatar_url:"",
            public_repos:"",
            userlogin:"",
            datafind:false


         }
    }
    
    inputHandler=(event)=>{
        if(event.target.name==="userid")
        {
            this.setState((prev)=>{
                return {...prev, userid:event.target.value}
            });
        }
    }
    submitHandler=(event)=>{
        event.preventDefault();
        fetch("https://api.github.com/users/"+this.state.userid)
        .then(res=>res.json())
        .then((data)=>{
            this.setState({userlogin:data.login, follower:data.followers, following:data.following, public_repos:data.public_repos, avatar_url:data.avatar_url, datafind:true})
        }, (error)=>{
            console.log(error);
        })
        
    }
    render() { 
        if(this.state.datafind===true)
        {
           userdata= <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={this.state.avatar_url} alt="Card image cap"/>
                    <p className='text text-center '>{this.state.userlogin}</p>
                    <div class="card-body">
                        <div class="col-auto">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <div class="input-group-text">{this.state.follower}</div>
                                </div>
                                <Link exact to={"/follower/"+this.state.userid}  class="form-control">Follower</Link>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <div class="input-group-text">{this.state.public_repos}</div>
                                </div>
                                <Link exact to={"/repo/"+this.state.userid}  class="form-control">Repositories</Link>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                <div class="input-group-text">{this.state.following}</div>
                                </div>
                                <Link exact to={"/following/"+this.state.userid} class="form-control" >Following</Link>
                            </div>
                        </div>
                    </div>
                </div>
        }
        else
        {
            userdata = <p className='text text-center'>Data Not Found</p>
        }
        return ( 
            <>
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                    <form class="form-inline" onSubmit={this.submitHandler}>
                            <div className="form-group mx-sm-3 mb-2">
                                <label className="sr-only">Password</label>
                                <input type="text" className="form-control" placeholder="user id" name='userid' value={this.state.userid} onChange={this.inputHandler}/>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2">Find</button>
                         </form>
                    </div>
                    <div className='col-md-6'></div>
                </div>
                {userdata}
                
            </div>
            </>
         );
    }
}
 
export default GitHub;