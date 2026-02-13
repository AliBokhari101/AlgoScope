import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    const features = [
        {
            title: 'Sorting Algorithms',
            description: 'Visualize Bubble, Selection, Insertion, Merge, and Quick Sort',
            icon: '📊',
            path: '/sorting',
            gradient: 'from-primary to-primary-dark'
        },
        {
            title: 'Searching Algorithms',
            description: 'Step-by-step Linear and Binary Search visualization',
            icon: '🔍',
            path: '/searching',
            gradient: 'from-secondary to-secondary-dark'
        },
        {
            title: 'Data Structures',
            description: 'Interactive Stack, Queue, and Linked List operations',
            icon: '🏗️',
            path: '/data-structures',
            gradient: 'from-accent to-accent-dark'
        },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
                            <span className="neon-text">Visualize Algorithms.</span>
                            <br />
                            <span className="text-white">Understand Deeply.</span>
                        </h1>

                        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                            Master Data Structures and Algorithms through interactive visualizations
                            and step-by-step animations
                        </p>

                        <Link to="/dashboard" className="btn-primary text-lg inline-block">
                            Start Exploring →
                        </Link>
                    </motion.div>

                    {/* Animated Background Elements - Hidden on mobile for performance */}
                    <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                    <div className="hidden md:block absolute top-40 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="hidden md:block absolute bottom-20 left-1/2 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 neon-text"
                    >
                        What You Can Learn
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="glass-card group cursor-pointer"
                            >
                                <Link to={feature.path}>
                                    <div className={`text-6xl mb-4 bg-gradient-to-br ${feature.gradient} w-20 h-20 rounded-xl flex items-center justify-center`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300">
                                        {feature.description}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card text-center p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join thousands of developers mastering algorithms through visualization
                        </p>
                        <Link to="/dashboard" className="btn-secondary text-lg inline-block">
                            Go to Dashboard
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
