import React from 'react'

type ISocialButtons = {
    className?: string
}

export const SocialButtons = ({ className }: ISocialButtons) => {
    return (
        <div className={`social-container ${className ?? ''}`}>
            <a className="social-btn btn-hover reset-link" href="https://www.instagram.com/aviv__design" target="_blank" rel="noreferrer">
                Instagram
            </a>
            <div className='seperator' />
            <a className="social-btn btn-hover reset-link" href="https://www.linkedin.com/in/aviv-avidar-057381237" target="_blank" rel="noreferrer">
                Linkedin
            </a>
            <div className='seperator' />
            <a className="social-btn btn-hover reset-link" href="mailto:avivdesign123@gmail.com?subject=%D7%94%D7%99%D7%99,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8%20%D7%91%D7%A0%D7%95%D7%92%D7%A2%C2%A0%D7%9C...." target="_blank" rel="noreferrer">
                Email
            </a>
        </div>
    )
}
