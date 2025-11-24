import { useState } from 'react';
import Modal from './Modal';
import CategoryModal from './CategoryModal';
import { useLanguage } from '../contexts/LanguageContext';
import './Categories.css';

const getCategories = (t) => [
    { id: 1, name: t('babies'), icon: '👶', description: t('babiesDesc'), color: 'var(--accent-gradient)', items: 120 },
    { id: 2, name: t('preschool'), icon: '🎨', description: t('preschoolDesc'), color: 'var(--secondary-gradient)', items: 150 },
    { id: 3, name: t('children'), icon: '🚀', description: t('childrenDesc'), color: 'var(--primary-gradient)', items: 200 },
    { id: 4, name: t('tweens'), icon: '🎮', description: t('tweensDesc'), color: 'var(--success-gradient)', items: 180 },
    { id: 5, name: t('teens'), icon: '🎯', description: t('teensDesc'), color: 'var(--warning-gradient)', items: 95 },
    { id: 6, name: t('educational'), icon: '📚', description: t('educationalDesc'), color: 'var(--accent-gradient)', items: 140 },
    { id: 7, name: t('sports'), icon: '⚽', description: t('sportsDesc'), color: 'var(--secondary-gradient)', items: 85 },
    { id: 8, name: t('electronics'), icon: '🤖', description: t('electronicsDesc'), color: 'var(--primary-gradient)', items: 110 },
];

const Categories = () => {
    const { t } = useLanguage();
    const categories = getCategories(t);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categoryProducts, setCategoryProducts] = useState([]);

    const openModal = (category) => {
        // Generar productos de ejemplo para la categoría
        const categoryExamples = {
            1: [ // Babies
                { name: 'Sonajero Musical', emoji: '🔔' },
                { name: 'Osito de Peluche', emoji: '🧸' },
                { name: 'Manta Sensorial', emoji: '🛏️' },
                { name: 'Juguete de Mordida', emoji: '🦷' },
                { name: 'Móvil Musical', emoji: '🎵' },
                { name: 'Bloques Suaves', emoji: '🧱' },
                { name: 'Libro Táctil', emoji: '📖' },
                { name: 'Pelota Sensorial', emoji: '⚽' }
            ],
            2: [ // Preschool
                { name: 'Set de Pintura', emoji: '🎨' },
                { name: 'Bloques de Construcción', emoji: '🏗️' },
                { name: 'Rompecabezas Grande', emoji: '🧩' },
                { name: 'Muñecas de Juego', emoji: '👭' },
                { name: 'Coche de Juguete', emoji: '🚗' },
                { name: 'Libro Interactivo', emoji: '📚' },
                { name: 'Juego de Mesa', emoji: '🎲' },
                { name: 'Instrumentos Musicales', emoji: '🎵' }
            ],
            3: [ // Children
                { name: 'Lego Creator', emoji: '🚀' },
                { name: 'Muñeco de Acción', emoji: '🦸' },
                { name: 'Set de Ciencia', emoji: '🔬' },
                { name: 'Pista de Carreras', emoji: '🏎️' },
                { name: 'Rompecabezas 3D', emoji: '🧩' },
                { name: 'Juego de Construcción', emoji: '🏗️' },
                { name: 'Libro de Aventuras', emoji: '📖' },
                { name: 'Pelota Deportiva', emoji: '⚽' }
            ],
            4: [ // Tweens
                { name: 'Consola de Juegos', emoji: '🎮' },
                { name: 'Set de Construcción Avanzado', emoji: '🏗️' },
                { name: 'Cámara Instantánea', emoji: '📷' },
                { name: 'Patines', emoji: '⛸️' },
                { name: 'Kit de Experimentos', emoji: '🧪' },
                { name: 'Guitarra Eléctrica', emoji: '🎸' },
                { name: 'Dron', emoji: '🚁' },
                { name: 'Set de Arte Digital', emoji: '🎨' }
            ],
            5: [ // Teens
                { name: 'Auriculares Gaming', emoji: '🎧' },
                { name: 'Smartphone', emoji: '📱' },
                { name: 'Cámara DSLR', emoji: '📷' },
                { name: 'Bicicleta', emoji: '🚴' },
                { name: 'Consola Portátil', emoji: '🎮' },
                { name: 'Altavoz Bluetooth', emoji: '🔊' },
                { name: 'Tablet', emoji: '📱' },
                { name: 'Reloj Inteligente', emoji: '⌚' }
            ],
            6: [ // Educational
                { name: 'Robot Educativo', emoji: '🤖' },
                { name: 'Microscopio', emoji: '🔬' },
                { name: 'Globo Terráqueo Interactivo', emoji: '🌍' },
                { name: 'Set de Matemáticas', emoji: '🔢' },
                { name: 'Enciclopedia Digital', emoji: '📚' },
                { name: 'Kit de Astronomía', emoji: '🌟' },
                { name: 'Juego de Memoria', emoji: '🧠' },
                { name: 'Lenguaje de Programación', emoji: '💻' }
            ],
            7: [ // Sports
                { name: 'Balón de Fútbol', emoji: '⚽' },
                { name: 'Raqueta de Tenis', emoji: '🎾' },
                { name: 'Bicicleta de Montaña', emoji: '🚵' },
                { name: 'Patines en Línea', emoji: '⛸️' },
                { name: 'Set de Golf', emoji: '⛳' },
                { name: 'Pelota de Baloncesto', emoji: '🏀' },
                { name: 'Red de Voleibol', emoji: '🏐' },
                { name: 'Guantes de Béisbol', emoji: '⚾' }
            ],
            8: [ // Electronics
                { name: 'Dron con Cámara', emoji: '🚁' },
                { name: 'Robot Programable', emoji: '🤖' },
                { name: 'Consola de Videojuegos', emoji: '🎮' },
                { name: 'Cámara de Acción', emoji: '📹' },
                { name: 'Altavoz Inteligente', emoji: '🔊' },
                { name: 'Tablet Educativa', emoji: '📱' },
                { name: 'Reloj Inteligente', emoji: '⌚' },
                { name: 'Auriculares VR', emoji: '🥽' }
            ]
        };

        const examples = categoryExamples[category.id] || [];
        const dummy = examples.map((example, i) => ({
            id: `${category.id}-${i}`,
            name: example.name,
            price: (Math.random() * 50 + 10).toFixed(2),
            emoji: example.emoji,
            description: `Un juguete perfecto para ${category.description.toLowerCase()}. ${example.name} ofrece diversión y aprendizaje.`,
            rating: (4.5 + Math.random() * 0.5).toFixed(1),
            reviews: Math.floor(Math.random() * 200 + 50),
            features: ['Seguro y duradero', 'Fomenta el desarrollo', 'Fácil de usar', 'Alta calidad']
        }));
        setSelectedCategory(category);
        setCategoryProducts(dummy);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCategory(null);
        setCategoryProducts([]);
    };

    return (
        <>
            <section className="categories" id="categories">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">{t('exploreByAge')}</span>
                        <h2 className="section-title">
                            {t('toyCategories')}
                        </h2>
                        <p className="section-description">
                            {t('findPerfectToy')}
                        </p>
                    </div>

                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="category-card glass-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="category-icon" style={{ background: category.color }}>
                                    {category.icon}
                                </div>
                                <h3 className="category-name">{category.name}</h3>
                                <div className="category-items">{category.items} {t('products')}</div>
                                <p className="category-description">{category.description}</p>
                                <button className="category-btn" onClick={() => openModal(category)}>
                                    <span>{t('explore')}</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {modalOpen && selectedCategory && (
                <CategoryModal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    category={selectedCategory}
                    products={categoryProducts}
                />
            )}
        </>
    );
};

export default Categories;
