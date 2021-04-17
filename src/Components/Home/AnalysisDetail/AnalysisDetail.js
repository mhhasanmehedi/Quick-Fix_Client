import React from 'react';
import './AnalysisDetail.css';

const AnalysisDetail = (props) => {
    const { title, description, icon ,img } = props.analysis;
    return (
        <div className="col-md-4">
            <div className="single-analysis-box">
                <img width="100%" src={img} alt=""/>
                <div className="content-box">
                    <img className="mt-3 mb-3" src={icon} width="60px" alt="" />
                    <h4 className="text-uppercase">{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AnalysisDetail;