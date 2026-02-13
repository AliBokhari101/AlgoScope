import { motion } from 'framer-motion';

const InfoPanel = ({ algorithm, timeComplexity, spaceComplexity, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card"
        >
            <h3 className="text-xl font-semibold mb-4 neon-text">Algorithm Info</h3>

            {algorithm && (
                <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary">{algorithm}</h4>
                </div>
            )}

            <div className="space-y-3">
                {timeComplexity && (
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Time Complexity:</span>
                        <span className="font-mono font-semibold text-accent">{timeComplexity}</span>
                    </div>
                )}

                {spaceComplexity && (
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Space Complexity:</span>
                        <span className="font-mono font-semibold text-secondary">{spaceComplexity}</span>
                    </div>
                )}

                {description && (
                    <div className="p-3 bg-white/5 rounded-lg">
                        <p className="text-sm text-gray-300">{description}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default InfoPanel;
