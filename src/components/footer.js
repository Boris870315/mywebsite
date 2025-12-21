import React from 'react';
import "./footer.css"; // Ensure the CSS file is in the correct path

const year = new Date().getFullYear();
function Footer() {
  // You can add logic here to choose between CopyRightBlack and CopyRightWhite images if needed
  return (
    <footer className="footer-container">
  <p className="footer-text">Copyright © {year} Boris</p>
</footer>

  );
}

export default Footer;
