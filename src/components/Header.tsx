'use client';

import Logo from '@/components/Logo';
import { MyButton } from '@/components/MyButton';
import IconHamburger from '@/icons/IconHamburger';
import { motion } from 'framer-motion';
import './Header.scss';

type HeaderProps = {
    isDark?: boolean
}

const Header = ({ isDark = true }: HeaderProps) => {
    return (
        <div className={`header-wrapper${isDark ? '' : ' white'}`}>
            <div className="header-container inner-container">
                <Logo isDark={isDark} />

                <nav>
                    <ul className="navbar">
                        <li className="projects-btn">פרויקטים</li>
                        <li className="download-cv-btn">
                            <span className="cv">
                                קורות חיים
                            </span>
                            {/* <IconDownload /> */}
                        </li>
                        <li>
                            <MyButton className={`contact-btn ${isDark ? '' : ' white'}`} text="דברו איתי" />
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