import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Hero.css';
import logoKide from '../assets/logo_kide.png';
import heroBg from '../assets/hero_bg.jpg';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="hero-wrapper">
            <section className="hero-top">
                <div className="container hero-container">
                    <motion.div
                        className="hero-logo-box"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={logoKide} alt="KIDE Logo" className="kide-logo" />
                    </motion.div>

                    <motion.div
                        className="hero-text-box"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h1>{t('hero.title')}</h1>
                        <p className="hero-subtitle">{t('hero.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            <section className="hero-visuals">
                <div className="visual-left">
                    <img src={heroBg} alt="Writing" />
                </div>
                <div className="visual-right">
                    <div className="pattern-overlay"></div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
