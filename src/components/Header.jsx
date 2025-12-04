import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Sun, Moon } from 'lucide-react';
import './Header.css';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = React.useState(() => {
        return localStorage.getItem('theme') || 'light';
    });

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <header className="header">
            <div className="container header-container">
                <div className="actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <div className="lang-switcher">
                        <Globe size={20} />
                        <select
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={i18n.language}
                            className="lang-select"
                        >
                            <option value="fi">FI</option>
                            <option value="sv">SV</option>
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
