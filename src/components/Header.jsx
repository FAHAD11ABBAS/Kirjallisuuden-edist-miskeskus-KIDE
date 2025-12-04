import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <h1>KIDE</h1>
                </div>

                <nav className="desktop-nav">
                    <a href="#home">{t('nav.home')}</a>
                    <a href="#about">{t('nav.about')}</a>
                    <a href="#projects">{t('nav.projects')}</a>
                    <a href="#contact">{t('nav.contact')}</a>
                </nav>

                <div className="actions">
                    <div className="lang-switcher">
                        <Globe size={20} />
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}
                            className="lang-select"
                        >
                            <option value="fi">FI</option>
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                        </select>
                    </div>
                    <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <a href="#home" onClick={() => setIsOpen(false)}>{t('nav.home')}</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>
                        <a href="#projects" onClick={() => setIsOpen(false)}>{t('nav.projects')}</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
