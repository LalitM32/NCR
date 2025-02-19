import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className={`fixed bottom-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <span className="transition-transform duration-200 transform hover:rotate-12">↑</span>
        </button>
    );
};

export default BackToTopButton; 