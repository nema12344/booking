import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                    <h4 className="text-lg font-bold mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="#about-us" className="hover:text-yellow-400">About Us</a></li>
                        <li><a href="#news" className="hover:text-yellow-400">News</a></li>
                        <li><a href="#careers" className="hover:text-yellow-400">Careers</a></li>
                        <li><a href="#how-we-work" className="hover:text-yellow-400">How we work</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Support</h4>
                    <ul className="space-y-2">
                        <li><a href="#account" className="hover:text-yellow-400">Account</a></li>
                        <li><a href="#support-center" className="hover:text-yellow-400">Support Center</a></li>
                        <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
                        <li><a href="#accessibility" className="hover:text-yellow-400">Accessibility</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">More</h4>
                    <ul className="space-y-2">
                        <li><a href="#covid-advisory" className="hover:text-yellow-400">Covid Advisory</a></li>
                        <li><a href="#airline-fees" className="hover:text-yellow-400">Airline Fees</a></li>
                        <li><a href="#tips" className="hover:text-yellow-400">Tips</a></li>
                        <li><a href="#quarantine-rules" className="hover:text-yellow-400">Quarantine Rules</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
