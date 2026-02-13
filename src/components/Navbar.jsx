import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
            >
                <div className="container mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold">A</span>
                            </div>
                            <span className="text-xl md:text-2xl font-bold neon-text">AlgoScope</span>
                        </Link>

                        {/* Desktop Navigation */}
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

                        <div className="flex items-center space-x-4">
                            {/* Get Started Button */}
                            <Link to="/dashboard" className="hidden sm:block btn-primary text-sm py-2 px-4">
                                Get Started
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={toggleMobileMenu}
                                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isMobileMenuOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-[73px] right-0 bottom-0 w-64 glass border-l border-white/10 z-40 md:hidden"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                <Link
                                    to="/"
                                    onClick={closeMobileMenu}
                                    className="text-lg hover:text-primary transition-colors py-2"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/dashboard"
                                    onClick={closeMobileMenu}
                                    className="text-lg hover:text-primary transition-colors py-2"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={closeMobileMenu}
                                    className="text-lg hover:text-primary transition-colors py-2"
                                >
                                    About
                                </Link>
                                <div className="pt-4 border-t border-white/10">
                                    <Link
                                        to="/dashboard"
                                        onClick={closeMobileMenu}
                                        className="btn-primary text-sm py-2 px-4 block text-center"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
