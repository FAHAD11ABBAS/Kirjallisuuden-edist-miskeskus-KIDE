import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="section about" id="about">
            <div className="container about-container">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>{t('about.title')}</h2>
                    <p>{t('about.text')}</p>
                </motion.div>
                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="About KIDE" />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
