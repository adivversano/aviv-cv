'use client';

import Logo from '@/components/Logo';
import { MyButton } from '@/components/MyButton';
import IconHamburger from '@/icons/IconHamburger';
import Link from 'next/link';
import { useRef, useState } from 'react';
import useClickOutside from 'src/hooks/useClickOutside';

type HeaderProps = {
    isDark?: boolean
}

const Header = ({ isDark = true }: HeaderProps) => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useClickOutside(headerRef, () => setIsMenuOpen(false));
    const onDownloadCV = () => {
        window.open('/aviv-cv/assets/אביב אבידר - מעצב גרפי (UX-UI) קו״ח.pdf');
    }

    return (
        <div className={`header-wrapper${isDark ? '' : ' white'}`} ref={headerRef}>
            <div className="header-container inner-container">
                <Logo isDark={isDark} />

                <nav>
                    <ul className="navbar">
                        <li className="projects-btn">
                            <Link className="reset-link btn-hover" href="/projects">
                                פרויקטים
                            </Link>
                        </li>
                        <li className="download-cv-btn">
                            <button className="cv reset-btn btn-hover" onClick={onDownloadCV}>
                                קורות חיים
                            </button>
                        </li>
                        <li>
                            <MyButton
                                className={`contact-btn ${isDark ? '' : ' white'}`}
                                text="דברו איתי"
                                as={Link}
                                href="/contact"
                            />
                        </li>
                        <li className="hamburger-btn-container">
                            <button className="hamburger-btn reset-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <IconHamburger /> : <IconHamburger />}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`mobile-menu ${isMenuOpen ? ' open' : ''} inner-container`}>
                <nav>
                    <ul className="navbar">
                        <li className="projects-btn">
                            <Link className="reset-link btn-hover" href="/projects">
                                פרויקטים
                            </Link>
                        </li>
                        <li className="download-cv-btn">
                            <button className="cv reset-btn btn-hover" onClick={onDownloadCV}>
                                קורות חיים
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;