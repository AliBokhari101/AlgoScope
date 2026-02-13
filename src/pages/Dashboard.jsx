import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    const stats = [
        { label: 'Sorting Algorithms', value: '5+', icon: '📊' },
        { label: 'Searching Methods', value: '2+', icon: '🔍' },
        { label: 'Data Structures', value: '3+', icon: '🏗️' },
        { label: 'Total Visualizations', value: '10+', icon: '✨' },
    ];

    return (
        <div className="min-h-screen">
            <Navbar />
            <Sidebar />

            <div className="ml-64 pt-24 px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Welcome Section */}
                    <div className="mb-12">
                        <h1 className="text-5xl font-bold mb-4">
                            Welcome to <span className="neon-text">AlgoScope</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Your interactive platform for mastering Data Structures and Algorithms
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="glass-card text-center"
                            >
                                <div className="text-4xl mb-3">{stat.icon}</div>
                                <div className="text-3xl font-bold neon-text mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-300">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Start Guide */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card"
                    >
                        <h2 className="text-2xl font-bold mb-6 neon-text">Quick Start Guide</h2>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    1
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Choose a Category</h3>
                                    <p className="text-gray-300">Select from Sorting, Searching, or Data Structures in the sidebar</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    2
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Pick an Algorithm</h3>
                                    <p className="text-gray-300">Choose the specific algorithm you want to visualize</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-accent w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                    3
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-1">Customize & Run</h3>
                                    <p className="text-gray-300">Adjust speed and size, then watch the algorithm in action</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
