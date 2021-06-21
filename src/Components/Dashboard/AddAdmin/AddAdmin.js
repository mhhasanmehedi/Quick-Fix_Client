import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './AddAdmin.css';
import swal from 'sweetalert';


const AddAdmin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        const admin = {
            email: data.email,
        }
        const url = 'https://mighty-chamber-70734.herokuapp.com/addAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(admin)
        })
            .then(res => console.log("server site", res))
        swal("Good job!", "You Admin added successfully!", "success");
    };
    return (
        <section className="row">
            <div className="col-md-3">
                <Sidebar />
            </div>
            <div className="col-md-9">
                <div className="d-flex justify-content-between p-5">
                    <h3>Add Admin</h3>
                    <h5>{loggedInUser.name}</h5>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-5  pt-5 pb-5">
                    <div className="input-group" style={{marginLeft:'250px'}}>
                        <input {...register("email", { required: true })} type="email" placeholder="Enter Admin Email" style={{ width: '350px' }} />
                        <div className="input-group-append">
                            <input type="submit" className="btn btn-info" value="Add Admin" />
                        </div>
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;