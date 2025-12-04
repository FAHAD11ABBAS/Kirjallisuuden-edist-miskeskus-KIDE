import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero">
            <div className="hero-content">
                <motion.div
                    className="language-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="lang-active">{t('nav.home')}</span>
                    <span className="lang-divider">|</span>
                    <a href="#svenska" className="lang-link">{t('hero.language')}</a>
                </motion.div>

                <motion.div
                    className="hero-logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="hexagon-hero">
                        <span>KIDE</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {t('hero.title')}
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    {t('hero.subtitle')}
                </motion.p>
            </div>

            <div className="hero-image">
                <img src="/images/writing-person.jpg" alt="Person writing" />
            </div>
        </section>
    );
};

export default Hero;
