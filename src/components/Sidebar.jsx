import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Sidebar = () => {
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
        <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            className="w-64 h-screen fixed left-0 top-16 glass border-r border-white/10 overflow-y-auto"
        >
            <div className="p-6 space-y-6">
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
    );
};

export default Sidebar;
