import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const About = () => {
    const techStack = [
        { name: 'React', icon: '⚛️' },
        { name: 'Vite', icon: '⚡' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Framer Motion', icon: '🎬' },
        { name: 'React Router', icon: '🛣️' },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="pt-24 px-4 md:px-6 pb-12">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <div className="text-center mb-12">
                            <h1 className="text-3xl md:text-5xl font-bold mb-4 neon-text">About AlgoScope</h1>
                            <p className="text-lg md:text-xl text-gray-300">
                                Interactive DSA Learning Platform
                            </p>
                        </div>

                        <div className="glass-card">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">Project Overview</h2>
                            <p className="text-gray-300 leading-relaxed">
                                AlgoScope is a modern, interactive platform designed to help developers and students
                                master Data Structures and Algorithms through visual learning. The platform provides
                                real-time visualizations of various sorting algorithms, searching techniques, and
                                fundamental data structures, making complex concepts easier to understand and remember.
                            </p>
                        </div>

                        <div className="glass-card">
                            <h2 className="text-xl md:text-2xl font-bold mb-6 text-secondary">Tech Stack</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg"
                                    >
                                        <span className="text-4xl">{tech.icon}</span>
                                        <span className="text-lg font-semibold">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-card">
                            <h2 className="text-xl md:text-2xl font-bold mb-4 text-accent">Features</h2>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>5+ Sorting Algorithm Visualizations (Bubble, Selection, Insertion, Merge, Quick)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Searching Algorithms (Linear & Binary Search)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Interactive Data Structures (Stack, Queue, Linked List)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Adjustable Speed and Array Size Controls</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Time & Space Complexity Information</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Smooth Animations with Framer Motion</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-3">✓</span>
                                    <span>Fully Responsive Design</span>
                                </li>
                            </ul>
                        </div>

                        <div className="glass-card text-center">
                            <h2 className="text-xl md:text-2xl font-bold mb-4">Developer</h2>
                            <p className="text-gray-300 mb-6">
                                Built with ❤️ for the developer community
                            </p>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block"
                            >
                                View on GitHub →
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
