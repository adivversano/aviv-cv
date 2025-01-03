'use client';

import Logo from '@/components/Logo';
import { IconDownload } from '@/icons/IconDownload';
import { Button } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <div className="header inner-container">
            <Logo />

            <nav>
                <ul className="navbar">
                    <li>עבודות</li>
                    <li className="download-cv-btn">
                        <span className="cv">
                            קורות חיים
                        </span>
                        <IconDownload />
                    </li>
                    <li>
                        <Button className="contact-btn" variant="" onClick={() => console.log('111')}>
                            דברו איתי ←
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;