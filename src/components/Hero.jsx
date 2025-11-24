import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text animate-slide-left">
                        <span className="hero-badge">✨ {t('heroTitle')}</span>
                        <h1 className="hero-title">
                            {t('heroSubtitle')}
                        </h1>
                        <p className="hero-description">
                            {t('heroDescription')}
                        </p>
                        <div className="hero-buttons">
                            <a href="#categories" className="btn btn-primary">
                                <span>{t('shopNow')}</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#deals" className="btn btn-outline">
                                <span>{t('learnMore')}</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-value">500+</div>
                                <div className="stat-label">{t('products')}</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-value">10K+</div>
                                <div className="stat-label">{t('happyCustomers')}</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-value">4.9★</div>
                                <div className="stat-label">{t('rating')}</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual animate-slide-right">
                        <div className="hero-image-container">
                            <div className="floating-emoji emoji-1">🎮</div>
                            <div className="floating-emoji emoji-2">🧸</div>
                            <div className="floating-emoji emoji-3">🚀</div>
                            <div className="floating-emoji emoji-4">🎨</div>
                            <div className="floating-emoji emoji-5">⚽</div>
                            <div className="floating-emoji emoji-6">🎪</div>

                            <div className="hero-circle circle-1"></div>
                            <div className="hero-circle circle-2"></div>
                            <div className="hero-circle circle-3"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <p>{t('scrollToExplore')}</p>
            </div>
        </section>
    );
};

export default Hero;
