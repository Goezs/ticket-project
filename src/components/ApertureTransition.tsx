import React, {useEffect, useState } from 'react';
import './ApertureTransition.css';

interface ApertureTransitionProps {
    duration?: number; //Duration in milliseconds
}

export const ApertureTransition:
React.FC<ApertureTransitionProps> = ({
duration = 800 }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [shouldRender, setShouldRender] = useState<boolean>(true);

    useEffect(() => {
        //Trigger the opening animation immediately on mount
        const animationFrame = requestAnimationFrame(() => {
            setIsOpen(true);
        });

        //unmount the overlay from the DOM once the animation finishes
        const timeout = setTimeout(() => {
            setShouldRender(false);
        }, duration);

        return () => {
            cancelAnimationFrame(animationFrame);
            clearTimeout(timeout);
        };
    }, [duration]);

    if (!shouldRender) return null;

    return (
        <div
            className={`aperture-overlay ${isOpen ? 'open' : ''}`}
            style={{ '--transition-duration': `${duration}ms` } as React.CSSProperties}

        >
            <div className='aperture-blade blade-top-left'></div>
            <div className='aperture-blade blade-top-right'></div>
            <div className='aperture-blade blade-bottom-left'></div>
            <div className='aperture-blade blade-bottom-right'></div>
        </div>
    );
};