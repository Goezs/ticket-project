import React from 'react';
import './Footer.css';



interface FooterProps{
    companyName: String;
}

export const Footer: React.FC<FooterProps> = ({ companyName }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-purple-900 text-purple-300 bordet-t border-purple-800">
            <div className="max-w-7x1 mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <p>&copy; {currentYear} {companyName}. All rights reserverd.</p>
                    <ul className="space-y-2.5">
                        <li
                            className="text-sm hover:text-white transition-colors dutation-200 ease-in-out">
                                Privacy Policy
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};