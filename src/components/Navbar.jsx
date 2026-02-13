import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                            <span className="text-2xl font-bold">A</span>
                        </div>
                        <span className="text-2xl font-bold neon-text">AlgoScope</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/dashboard" className="hover:text-primary transition-colors">
                            Dashboard
                        </Link>
                        <Link to="/about" className="hover:text-primary transition-colors">
                            About
                        </Link>
                    </div>

                    <Link to="/dashboard" className="btn-primary text-sm py-2 px-4">
                        Get Started
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
