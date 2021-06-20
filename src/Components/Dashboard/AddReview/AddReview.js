import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const reviewData = { ...data, ...loggedInUser };
        fetch(`http://localhost:5000/addReview`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
        swal("Good job!", "You Review added successfully!", "success");

    };

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)} className="shadow">
                    <div className="d-flex justify-content-between p-5 name">
                        <h3>Add Review</h3>
                        <h5>{loggedInUser.name}</h5>
                    </div>
                    <div style={{ padding: "50px" }}>
                        <div className="form-group">
                            <h5 htmlFor="name">Your Name</h5>
                            <input id="name" className="form-control" defaultValue={loggedInUser.name} placeholder="Enter Your Name" {...register("name")} />
                        </div>
                        <div className="form-group">
                            <h5 htmlFor="company">Your Company</h5>
                            <input id="company" className="form-control" placeholder="Enter Your Company" {...register("company")} />
                        </div>
                        <div className="form-group">
                            <h5 htmlFor="review">Your Review</h5>
                            <textarea className="form-control" id="review" placeholder="Enter Your Review" {...register("review")} />
                        </div>
                        <input className="btn btn-info float-right" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;