import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Left side project info */}
        <div>
          <h2 className="text-lg font-bold mb-3">GS — Ticket System</h2>
          <p className="text-sm leading-6">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
          </ul>
        </div>

        {/* Information & Social Links side by side */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Social Links</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom text */}
      <div className="text-center text-gray-500 text-xs sm:text-sm mt-8 border-t border-gray-700 pt-4">
        © 2025 GS — Ticket System. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;


