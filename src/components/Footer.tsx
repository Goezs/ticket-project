import React from 'react';
import './Footer.css';


interface FooterProps{
    companyName: String;
}

export const Footer: React.FC<FooterProps> = ({ companyName }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-content">
                <p>&copy; {currentYear} {companyName}. All rights reserverd.</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of service</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};