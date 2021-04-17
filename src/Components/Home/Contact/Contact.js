import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact container">
            <div className="text-center mb-5">
                <h2 className="text-uppercase">Contact <span className="text-warning">With Us</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem <br/> voluptatem obcaecati!</p>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *" />
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="btn btn-success"> Send Message </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;