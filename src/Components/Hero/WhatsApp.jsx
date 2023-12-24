import { motion } from 'framer-motion';
import React, { useState } from 'react';

const WhatsAppPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const phoneNumber = '1234567890'; // Replace with your phone number in international format
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // WhatsApp SVG icon
    const WhatsAppIcon = () => (
        <img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png" alt="" className='w-6 h-6' />
    );

    const CrossIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59l-4.9-4.88a1 1 0 0 0-1.4 1.41L10.59 12l-4.88 4.9a1 1 0 0 0 1.4 1.41L12 13.41l4.9 4.88a1 1 0 0 0 1.41-1.41L13.41 12l4.88-4.9a1 1 0 0 0 0-1.4z" />
        </svg>
    );

    return (
        <div className="fixed z-50 bottom-20 right-5 sm:hidden">
            {/* WhatsApp Icon */}
            <div
                className="p-3 text-white transition-colors bg-green-600 rounded-full shadow-lg cursor-pointer hover:bg-green-700"
                onClick={() => setShowPopup(!showPopup)}
            >
                <WhatsAppIcon />
            </div>

            {/* Popup */}
            {showPopup && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: [0, 1], y: [20, 0] }}
                    className="absolute right-0 p-6 mt-3 overflow-hidden transition-all duration-300 ease-linear bg-black rounded-lg shadow-lg w-72 bottom-14">
                    <p className="text-base font-medium text-white">Chat with us on WhatsApp!</p>
                    <motion.a
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: [0, 1], y: [30, 0] }}
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 mt-2 text-center text-white transition-all duration-200 bg-green-600 rounded hover:bg-green-700"
                    >
                        Open Chat
                    </motion.a>
                    <button
                        className="absolute flex items-center justify-center w-4 h-4 mt-2 text-center text-white transition-colors rounded top-2 right-2 "
                        onClick={() => setShowPopup(false)}
                    >
                        <CrossIcon />
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default WhatsAppPopup;
