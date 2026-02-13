import { motion } from 'framer-motion';

const VisualBar = ({ height, color, index, isComparing, isSorted }) => {
    const getColor = () => {
        if (isSorted) return 'bg-accent';
        if (isComparing) return 'bg-secondary';
        return color || 'bg-primary';
    };

    return (
        <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: `${height}%` }}
            transition={{ duration: 0.3 }}
            className={`${getColor()} rounded-t-lg relative group`}
            style={{ width: '100%' }}
        >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold">
                {Math.round(height)}
            </div>
        </motion.div>
    );
};

export default VisualBar;
