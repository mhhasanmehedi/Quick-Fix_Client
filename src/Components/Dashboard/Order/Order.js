import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';
import swal from 'sweetalert';

const Order = () => {
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();


    const [orderCheckout, setOrderCheckout] = useState([]);
    const [order, setOrder] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        const url = ` https://mighty-chamber-70734.herokuapp.com/services/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderCheckout(data))
    }, [id])

    const onSubmit = data => {
        setOrder(data)
    };

    const handleSuccess = (paymentId) => {
        const newOrder = { ...loggedInUser, ...order, ...orderCheckout, paymentId, status: 'pending' }

        delete newOrder._id
        delete newOrder.image
        console.log(newOrder);
        fetch('https://mighty-chamber-70734.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("Good job!", "We received order successfully!", "success");
            })
    }
    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9" style={{ display: order ? 'none' : 'block' }}>
                <div className="d-flex justify-content-between p-5 name" >
                    <h4>Service Name : {orderCheckout.serviceName}</h4>
                    <h5>{loggedInUser.name}</h5>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-5">

                    <label>Your Name</label> <br />
                    <input {...register("userName", { required: true })} value={loggedInUser.name} Placeholder="Enter Your Name" className="form-control" />  <br />
                    {errors.userName && <span className>This field is required</span>}

                    <label >Your Email</label> <br />
                    <input {...register("email", { required: true })} value={loggedInUser.email} className="form-control" /> <br />
                    {errors.email && <span className="text-danger">This field is required</span>}

                    <label>Your Location </label> <br />
                    <input {...register("location", { required: true })} className="form-control" placeholder="Enter Your Location" /> <br />
                    {errors.location && <span className="text-danger">Enter Your Location</span>}

                    <input type="submit" value="Pay us" className="btn btn-danger btn-brand" />
                </form>
            </div>
            <div className="col-md-9" style={{ display: order ? 'block' : 'none' }}>
                <div className="d-flex justify-content-between p-5 name" >
                    <h3>Payment</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <div className="p-5">
                    <ProcessPayment handleOrder={handleSuccess} />
                </div>
            </div>
        </section>
    );
};

export default Order;