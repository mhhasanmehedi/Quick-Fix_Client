import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import './AddServices.css';
import swal from 'sweetalert';
import { UserContext } from '../../../App';

const AddServices = () => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            serviceName: data.serviceName,
            description: data.description,
            price: data.price,
            imageURL: imageURL
        };
        console.log(eventData);
        fetch(`http://localhost:5000/addService`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response', res))
        swal("Good job!", "You Service added successfully!", "success");


    };


    const handleImgUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '6067ebeae798dcbd138e0036c7be5e85');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.display_url);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow">
                    <div className="d-flex justify-content-between p-5">
                        <h3>Add Service</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div style={{ padding: "50px" }}>
                        <div className="form-group">
                            <h5 htmlFor="name">Service Name</h5>
                            <input id="name" className="form-control" placeholder="Enter Name" {...register("serviceName")} />
                        </div>
                        <div className="form-group">
                            <h5 htmlFor="description">Description</h5>
                            <textarea className="form-control" id="description" placeholder="Enter Description" {...register("description")} />
                        </div>
                        <div className="form-group">
                            <h5 htmlFor="price">Price</h5>
                            <input className="form-control" id="price" placeholder="Enter Price" {...register("price")} />
                        </div>
                        <div className="form-group">
                            <input className="d-block" type="file" onChange={handleImgUpload} />
                        </div>
                        {
                            imageURL ?
                                <input className="btn btn-info float-right" type="submit" />
                                :
                                <input className="btn btn-info float-right" type="submit" disabled />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;