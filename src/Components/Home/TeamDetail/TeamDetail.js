import {  faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TeamDetail.css';

const TeamDetail = (props) => {
    const { name, title, img } = props.team;
    return (
        <div className="col-md-3">
            <div className="single-team-box">
                <img src={img} width="200px" height="200px"  alt="" />
                <div className="team-content">
                    <h6 className="text-warning mt-3">{name}</h6>
                    <h5>{title}</h5>
                    <div className="d-flex justify-content-center align-items-center social-link">
                        <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                        <a href="" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                        <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;