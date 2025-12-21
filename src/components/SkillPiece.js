import React from 'react';
import './SkillPiece.css'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SkillPiece = ({ skills, imgPath, imgAlt }) => {
  return (
    <div className="skill-piece">
      <img src={imgPath} alt={imgAlt} />
      <p>{skills}</p>
    </div>
  );
};

export default SkillPiece;
