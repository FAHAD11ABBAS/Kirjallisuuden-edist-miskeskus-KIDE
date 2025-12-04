import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero" id="home">
            <div className="hero-bg"></div>
            <div className="container hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('hero.title')}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t('hero.subtitle')}
                </motion.p>
                <motion.button
                    className="btn btn-primary"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {t('hero.cta')}
                </motion.button>
            </div>
        </section>
    );
};

export default Hero;
