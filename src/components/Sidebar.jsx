import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Sidebar = ({ isOpen = true, onClose = () => { } }) => {
    const [activeSection, setActiveSection] = useState('sorting');

    const sections = [
        {
            id: 'sorting',
            name: 'Sorting',
            icon: '📊',
            items: [
                { name: 'Bubble Sort', path: '/sorting' },
                { name: 'Selection Sort', path: '/sorting' },
                { name: 'Insertion Sort', path: '/sorting' },
                { name: 'Merge Sort', path: '/sorting' },
                { name: 'Quick Sort', path: '/sorting' },
            ]
        },
        {
            id: 'searching',
            name: 'Searching',
            icon: '🔍',
            items: [
                { name: 'Linear Search', path: '/searching' },
                { name: 'Binary Search', path: '/searching' },
            ]
        },
        {
            id: 'structures',
            name: 'Data Structures',
            icon: '🏗️',
            items: [
                { name: 'Stack', path: '/data-structures' },
                { name: 'Queue', path: '/data-structures' },
                { name: 'Linked List', path: '/data-structures' },
            ]
        },
    ];

    return (
        <>
            {/* Backdrop for mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar - Always visible on desktop, toggleable on mobile */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                className={`
                    w-64 h-screen fixed left-0 top-16 glass border-r border-white/10 overflow-y-auto z-40
                    ${isOpen ? 'block' : 'hidden md:block'}
                `}
            >
                <div className="p-6 space-y-6">
                    {/* Close button for mobile */}
                    <button
                        onClick={onClose}
                        className="md:hidden absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Close sidebar"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {sections.map((section) => (
                        <div key={section.id}>
                            <button
                                onClick={() => setActiveSection(activeSection === section.id ? '' : section.id)}
                                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{section.icon}</span>
                                    <span className="font-semibold">{section.name}</span>
                                </div>
                                <span className={`transform transition-transform ${activeSection === section.id ? 'rotate-90' : ''}`}>
                                    ▶
                                </span>
                            </button>

                            {activeSection === section.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className="mt-2 ml-6 space-y-2"
                                >
                                    {section.items.map((item, idx) => (
                                        <Link
                                            key={idx}
                                            to={item.path}
                                            onClick={onClose}
                                            className="block p-2 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors text-sm"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;
