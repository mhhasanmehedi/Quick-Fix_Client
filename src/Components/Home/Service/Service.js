import React from 'react';
import computer from '../../../images/computer_repair.jpg';
import camera from '../../../images/camera_repair.jpg';
import mobile from '../../../images/mobile_repair.jpg';
import laptop from '../../../images/laptop_repair.jpg';
import ipad from '../../../images/ipad_repair.jpg';
import printer from '../../../images/printer_repair.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Service.css';


const serviceData = [
    {
        name: 'Printer Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 80,
        img: printer
    },
    {
        name: 'Computer Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 140,
        img: computer
    },
    {
        name: 'Camera Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 100,
        img: camera
    },
    {
        name: 'Mobile Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 60,
        img: mobile
    },
    {
        name: 'Laptop Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 170,
        img: laptop
    },
    {
        name: 'ipad Repair',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eveniet facere eligendi repudiandae laborum! Laudantium, veritatis enim',
        price: 95,
        img: ipad
    }

]


const Service = () => {
    return (
        <section className="service container">
            <div className="text-center mt-5 mb-5">
                <h2 className="text-uppercase">Our <span className="text-warning">Services</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem <br/>
                voluptatem obcaecati!</p>
            </div>
            <div className="row">
                {
                    serviceData.map(service => <ServiceDetail service={service} key={service.name} />)
                }
            </div>
        </section>
    );
};

export default Service;