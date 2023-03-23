import React ,{ useState, useEffect, Component } from 'react';
import { Navigate } from 'react-router-dom';
import { USERS_URL } from '../config/constants';
import apiCaller from '../utility/apiCaller';

export default class AddUser extends Component{
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.addUser = this.addUser.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "", 
            address: "",
      
            submitted: false
          };
      }
      componentDidMount() {
        
      }
      
      onChangeTitle(e){
        this.setState({
            name: e.target.value
          });
      }
      onChangeDescription(e){
        this.setState({
            description: e.target.value
          });
      }
      onChangeAddress(e){
        this.setState({
            address: e.target.value
          });
      }

      addUser(){
        console.log("Adding:" + this.state.name);
        var data ={
            "id": 0,
            "name": this.state.name,
            "address": this.state.address,
            "description": this.state.description
          };

          apiCaller.post(USERS_URL,data)
          .then((response)=>{
            this.setState(
                {
                    submitted: true,
                    id: response.id
                });
          })
          .catch((error=>{
            console.log(error);
          }))
      }
      render(){
        const { searchTitle, users, currentTutorial, currentIndex } = this.state;
        return(
            <div className='container'>
                {
                    this.state.submitted ? (
                       <div>
                         <h1>User created Successfully! </h1>
                         <h3>UserID: {this.state.id}</h3>
                         <Navigate to={'/'} />
                        </div>
                    ):
                    (
                        <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        name="name"
                    />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            name="description"
                        />
                        </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            required
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            name="address"
                        />
                    </div>

                        <button onClick={this.addUser} className="btn btn-success">
                        Submit
                        </button>
                </div>
                    )
                }
            </div>
        )
      }
        
}

