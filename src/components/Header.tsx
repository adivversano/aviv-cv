'use client';

import Logo from '@/components/Logo';
import IconHamburger from '@/icons/IconHamburger';
import { motion, Variants } from 'framer-motion';
import './Header.scss';
import { MyButton } from '@/components/MyButton';

type HeaderProps = {
    isDark?: boolean
}

const floatVariants: Variants = {
    rest: { y: 0 },
    float: {
        y: [0, -6, 0], // A subtle up/down movement
        x: [-6, 0, -6],
        transition: {
            duration: 2,
            // repeat: Infinity,
            // repeatType: 'reverse',
        },
    },
};

const Header = ({ isDark = true }: HeaderProps) => {
    // const isDark = useAppStore(state => state.header.isDark);
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