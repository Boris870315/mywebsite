import React from 'react';
import './SkillPiece.css'; 

const SkillPiece = ({ skills, imgPath, imgAlt }) => {
  return (
    <div className="skill-piece">
      <img src={imgPath} alt={imgAlt} />
      <p className="skill-text">{skills}</p>
    </div>
  );
};

export default SkillPiece;
