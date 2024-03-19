import React from 'react';
import './ExperiencePiece.css'

const ExperiencePiece = ({ experience }) => {
  return (
    <div className="experience-piece">
        <div className='left-column'>
            <p className="year">{experience.year}</p>
            <p>{experience.peojectName}</p>
            <p className='company'>{experience.company}</p>
        </div>
        <div className='right-column'>
            <p className="position">{experience.position}</p>
            <p className="project-description" dangerouslySetInnerHTML={{ __html: experience.description }}></p>
        </div>
    </div>
  );
};

export default ExperiencePiece;
