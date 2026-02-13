import { motion } from 'framer-motion';

const ControlPanel = ({ children, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
        >
            {title && <h3 className="text-xl font-semibold mb-4 neon-text">{title}</h3>}
            <div className="space-y-4">
                {children}
            </div>
        </motion.div>
    );
};

export default ControlPanel;
