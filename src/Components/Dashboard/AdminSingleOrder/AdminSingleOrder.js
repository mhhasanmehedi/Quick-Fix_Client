import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const AdminSingleOrder = ({ order, index }) => {
    const { userName, email, serviceName } = order;
    const [pending, setPending] = useState(order.status === 'pending')

    const handleStatus = (e) => {
        fetch('http://localhost:5000/updateStatus', {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                status: e.target.value,
                id: order._id,
            }),
        })
        .then(res => res.json())
        .then(result => {
            setPending(result);
        });
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{serviceName}</td>
            <td>
                {
                    pending &&
                    <Form.Control as="select" onChange={handleStatus}>
                        <option selected>Pending</option>
                        <option>On Going</option>
                        <option>Done</option>
                    </Form.Control>
                }

                {!pending &&
                    <Form.Control as="select" onChange={handleStatus}>
                        <option>Pending</option>
                        <option>On Going</option>
                        <option selected>Done</option>
                    </Form.Control>
                }
            </td>
        </tr>
    );
};

export default AdminSingleOrder;