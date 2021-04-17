import React from 'react';
import tools from '../../../images/tools.png';
import rocket from '../../../images/rocket.png';
import headset from '../../../images/headset.png';
import AnalysisDetail from '../AnalysisDetail/AnalysisDetail';
import analysis1 from '../../../images/analysis_1.jpg';
import analysis2 from '../../../images/analysis_2.jpg';
import analysis3 from '../../../images/analysis_3.jpg';

const analysisData = [
    {
        title: 'Free Diagnostics.',
        description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Aliquam interdum diam tortor elit ipsum.',
        icon: tools,
        img:analysis1
    },
    {
        title: 'Online Help',
        description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Aliquam interdum diam tortor elit ipsum.',
        icon: headset,
        img:analysis2
    },
    {
        title: 'Professional Repair',
        description: 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. Aliquam interdum diam tortor elit ipsum.',
        icon: rocket,
        img:analysis3
    }
]


const Analysis = () => {
    return (
        <section className="analysis container text-center">
            <div className="row">
                {
                    analysisData.map(analysis => <AnalysisDetail analysis={analysis} key={analysis.title} />)
                }
            </div>
        </section>
    );
};

export default Analysis;