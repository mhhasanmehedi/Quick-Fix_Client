import React from 'react';
import './ManageServiceCard.css';
import cross from '../../../images/cross-removebg-preview.png';
import swal from 'sweetalert';


const ManageServiceCard = ({ service }) => {
    const { serviceName, imageURL, description } = service;

    const handleDelete = (id, event) => {
        fetch(`http://localhost:5000/serviceDelete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = "none"
                }
            })
        swal("Good job!", "You Service Delete successfully!", "success");
    }
    return (
        <div className="col-md-6">
            <div className="manage-service shadow">
                <img src={cross} className="delete" alt="..." onClick={(event) => handleDelete(service._id, event)} />

                <div className="details">
                    <img src={imageURL} className="img-fluid" alt="" />
                    <h5 className="p-2">Name : {serviceName} </h5>
                    <h6 className="p-2"> Policy : {description}</h6>
                </div>
            </div>
        </div>
    );
};

export default ManageServiceCard;