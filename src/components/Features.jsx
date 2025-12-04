import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award } from 'lucide-react';
import './Features.css';

const Features = () => {
    const { t } = useTranslation();

    const features = [
        { icon: <Users size={40} />, title: t('features.item1'), delay: 0 },
        { icon: <BookOpen size={40} />, title: t('features.item2'), delay: 0.2 },
        { icon: <Award size={40} />, title: t('features.item3'), delay: 0.4 },
    ];

    return (
        <section className="section features" id="projects">
            <div className="container">
                <h2 className="section-title">{t('features.title')}</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: feature.delay }}
                        >
                            <div className="icon-wrapper">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
