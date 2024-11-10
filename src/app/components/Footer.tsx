import React from 'react';
import "../Styles/footer.css"
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer-content">
        <div className="footer-links">
          <a href="https://www.facebook.com/mariam.latif.543" className="footer-link">
            Facebook <CiFacebook className="footer-icon" />
          </a><br />
          <a href="https://github.com/maryamlatif" className="footer-link">
            Github <IoLogoGithub className="footer-icon" />
          </a><br />
          <a href="https://www.linkedin.com/in/maham-latif-48732927a" className="footer-link">
            LinkedIn <LiaLinkedin className="footer-icon" />
          </a><br />
          <a href="https://www.instagram.com/mariam.latif" className="footer-link">
            Instagram <IoLogoInstagram className="footer-icon" />
          </a><br />
        </div>
      </footer>
    </div>
  );
}
