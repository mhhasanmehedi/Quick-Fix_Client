import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TeamDetail.css';

const TeamDetail = (props) => {
    const { name, title, img } = props.team;
    return (
        <div className="col-md-3">
            <div className="single-team-box">
                <div className="team-box-inner">
                    <div className="team-box-front">
                        <img src={img} alt="" />
                    </div>
                    <div className="team-box-back">
                        <img src={img} width="100px" height="100px" alt="" />
                        <h6 className="text-warning mt-3">{name}</h6>
                        <h5>{title}</h5>
                        <div className="d-flex justify-content-center align-items-center social-link">
                            <a href="//twitter.com" target="_blank"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
                            <a href="//facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                            <a href="//intagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;