'use client';
import React, {
    useRef,
    ElementType,
    ComponentPropsWithoutRef,
  } from 'react';
  
  type MyButtonProps<T extends ElementType> = {
    as?: T;
    className: string;
    text: string;
  } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>;
  
  export function MyButton<T extends ElementType = 'a'>({
    as,
    className,
    text,
    ...rest
  }: MyButtonProps<T>) {
    const Component = as || 'a';
    const circleRef = useRef<HTMLSpanElement>(null);
    // Use HTMLElement for a generic element ref.
    const btnRef = useRef<HTMLAnchorElement>(null);
  
    const handleOrigin = (e: React.MouseEvent<HTMLElement>) => {
      if (!circleRef.current || !btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circleRef.current.style.left = `${x}px`;
      circleRef.current.style.top = `${y}px`;
    };
  
    return (
      <Component
        ref={btnRef}
        className={`btn btn-container ${className}`}
        onMouseEnter={handleOrigin}
        onMouseLeave={handleOrigin}
        {...rest}
      >
        <span className="label">
          {text}
          <span className="arrow">←</span>
        </span>
        <span className="bg" ref={circleRef}></span>
      </Component>
    );
  }
  