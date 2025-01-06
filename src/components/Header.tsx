'use client';

import Logo from '@/components/Logo';
import { IconDownload } from '@/icons/IconDownload';
import IconHamburger from '@/icons/IconHamburger';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import './Header.scss';

type HeaderProps = {
    isDark?: boolean
}

const Header = ({ isDark = true }: HeaderProps) => {
    // const isDark = useAppStore(state => state.header.isDark);
    return (
        <div className={`header-wrapper${isDark ? '' : ' white'}`}>
            <div className="header-container inner-container">
                <Logo />

                <nav>
                    <ul className="navbar">
                        <li className="projects-btn">עבודות</li>
                        <li className="download-cv-btn">
                            <span className="cv">
                                קורות חיים
                            </span>
                            <IconDownload />
                        </li>
                        <li>
                            <Link
                                className={`contact-btn btn${isDark ? '' : ' white'}`}
                                href="/project/111"
                                data-text="← דברו איתי"
                            >
                                דברו איתי
                                <span className='arrow'>←</span>
                            </Link>
                        </li>
                        <li className="hamburger-btn-container">
                            <Button className="hamburger-btn" variant="" bsPrefix='reset-btn'>
                                <IconHamburger />
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;