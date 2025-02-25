import React, { useRef } from 'react';

type MyButtonProps = {
    className: string,
    text: string
}

export const MyButton = ({ className, text }: MyButtonProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const btnRef = useRef<HTMLAnchorElement>(null)

    const handleOrigin = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current || !btnRef.current) return;
        const rect = btnRef.current.getBoundingClientRect();
        // Calculate pointer position relative to the button
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
    };

    return (
        <a
            ref={btnRef}
            className={`btn btn-container ${className}`}
            onMouseEnter={handleOrigin}
            onMouseLeave={handleOrigin}
        >
            <span className="label">
                {text}
                <span className='arrow'>←</span>
            </span>
            <span className="bg" ref={ref}></span>
        </a>
    )
}
