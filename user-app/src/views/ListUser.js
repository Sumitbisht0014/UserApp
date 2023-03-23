import React ,{ useState, useEffect, Component } from 'react';
import UserDetailsGrid from '../components/UserDetailsGrid';
import { USERS_URL } from '../config/constants';
import apiCaller from '../utility/apiCaller';

export default class ListUser extends Component{
    constructor(props) {
        super(props);

        this.handleDeleteUser = this.handleDeleteUser.bind(this);

        this.state = {
          users: []
        };
      }
      componentDidMount() {
        this.fetchUserData();
      }

      handleDeleteUser = (id) =>{
        console.log("Deleting Id: "+ id);
        apiCaller.del(`${USERS_URL}/${id}`)
        .then((response)=>{
            this.fetchUserData();
        })
        .catch((error)=>{
            console.log("Failed while deleting Id" + id);
        });
      }
      

      fetchUserData(){
        apiCaller.get(USERS_URL)
        .then(
            (data )=>{
                console.log(data );
                this.setState({users: data });
            }
        ).catch((error)=>{
            console.log(error);
        });
      }
      render(){
        const { users } = this.state;
        return(
            <div>
                User Details
                <UserDetailsGrid userLists={users} onDelete={this.handleDeleteUser}/>
            </div>
        )
      }
        
}

