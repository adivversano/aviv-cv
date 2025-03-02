'use client';

import Logo from '@/components/Logo';
import { MyButton } from '@/components/MyButton';
import IconHamburger from '@/icons/IconHamburger';
import { motion } from 'framer-motion';
import Link from 'next/link';

type HeaderProps = {
    isDark?: boolean
}

const Header = ({ isDark = true }: HeaderProps) => {

    const onDownloadCV = () => {
        window.open('/assets/cv.pdf');
    }

    return (
        <div className={`header-wrapper${isDark ? '' : ' white'}`}>
            <div className="header-container inner-container">
                <Logo isDark={isDark} />

                <nav>
                    <ul className="navbar">
                        <li className="projects-btn">
                            <Link className="reset-link" href="/projects">
                                פרויקטים
                            </Link>
                        </li>
                        <li className="download-cv-btn">
                            <button className="cv reset-btn" onClick={onDownloadCV}>
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
                            <motion.button className="hamburger-btn reset-btn">
                                <IconHamburger />
                            </motion.button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;