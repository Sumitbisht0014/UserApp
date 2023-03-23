import { Component, useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import { USERS_URL } from "../config/constants";
import apiCaller from "../utility/apiCaller";
import {useNavigate} from 'react-router-dom';


export default function EditUser () {
    const params = useParams(); 
    const navigation = useNavigate();
    const[userDetail, setUserDetail] = useState({
        name: '',
        description: '',
        address: ''
    });

    useEffect(()=>{
        const id = params.id;
        console.log(params.id);

        apiCaller.get(`${USERS_URL}/${id}`)
        .then((response)=>{
            console.log(response);
            setUserDetail(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    const handleChange = (e)=>{
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setUserDetail({ ...userDetail, [name]: value });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Submitted");
        apiCaller.put(`${USERS_URL}/${userDetail.id}`, userDetail)
        .then((response)=>{
            console.log(response);
            navigation('/');
        })
        .catch((error)=>{
            console.log(error);
        });

    }
    return(
        <div className="container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    value={userDetail?.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            required
                            value={userDetail?.description}
                            onChange={handleChange}
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
                            value={userDetail?.address}
                            onChange={handleChange}
                            name="address"
                        />
                    </div>

                    <button type="submit">Update User</button>
            </form>
            
        </div>
    )    
}