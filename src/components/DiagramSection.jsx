import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, PenTool, CreditCard, Users, Banknote, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './DiagramSection.css';

const DiagramSection = () => {
    const { t } = useTranslation();

    const items = [
        { icon: BookOpen, label: 'Kaunokirjallinen teos', position: 'top' },
        { icon: Building2, label: 'Teosta koskidean ykisityiseen käyttöön', position: 'right-top' },
        { icon: Banknote, label: 'Valtion budjetti', position: 'right-bottom' },
        { icon: CreditCard, label: 'Koulutukset Kohdeapurahat Kirjailijaresidenssi', position: 'left' },
        { icon: PenTool, label: 'Kirjailia', position: 'left-top' }
    ];

    return (
        <section className="diagram-section">
            <div className="diagram-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {t('diagram.title')}
                </motion.h2>

                <div className="circular-diagram">
                    <div className="diagram-center">
                        <svg viewBox="0 0 200 200" className="circle-svg">
                            <circle
                                cx="100"
                                cy="100"
                                r="90"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="25"
                                strokeDasharray="141 424"
                                strokeDashoffset="50"
                                transform="rotate(-90 100 100)"
                            />
                        </svg>

                        <div className="kide-logo-center">
                            <div className="hexagon">
                                <span>KIDE</span>
                            </div>
                        </div>
                    </div>

                    {items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                className={`diagram-item ${item.position}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="item-icon-circle">
                                    <Icon size={24} color="var(--color-primary)" />
                                </div>
                                <p className="item-label">{item.label}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="diagram-description">
                    <p>{t('diagram.center')}</p>
                </div>
            </div>
        </section>
    );
};

export default DiagramSection;
