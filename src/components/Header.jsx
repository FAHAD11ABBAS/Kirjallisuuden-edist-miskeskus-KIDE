import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo-placeholder"></div> {/* Spacer to push content right */}
                <div className="language-links">
                    <button
                        className={`lang-btn ${i18n.language === 'fi' ? 'active' : ''}`}
                        onClick={() => changeLanguage('fi')}
                    >
                        Suomeksi
                    </button>
                    <button
                        className={`lang-btn ${i18n.language === 'sv' ? 'active' : ''}`}
                        onClick={() => changeLanguage('sv')}
                    >
                        På svenska
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
