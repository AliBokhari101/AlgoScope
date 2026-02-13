import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ControlPanel from '../components/ControlPanel';
import InfoPanel from '../components/InfoPanel';
import { linearSearch, binarySearch } from '../algorithms/searchingAlgorithms';

const SearchingVisualizer = () => {
    const [array, setArray] = useState([5, 12, 23, 34, 45, 56, 67, 78, 89, 91]);
    const [target, setTarget] = useState(45);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [leftBound, setLeftBound] = useState(-1);
    const [rightBound, setRightBound] = useState(-1);
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState(null);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('binary');
    const [speed, setSpeed] = useState(50);

    const algorithms = {
        linear: {
            name: 'Linear Search',
            timeComplexity: 'O(n)',
            spaceComplexity: 'O(1)',
            description: 'Sequentially checks each element until the target is found or the list ends.',
        },
        binary: {
            name: 'Binary Search',
            timeComplexity: 'O(log n)',
            spaceComplexity: 'O(1)',
            description: 'Efficiently finds target by repeatedly dividing the sorted array in half.',
        }
    };

    const handleSearch = async () => {
        setIsSearching(true);
        setResult(null);
        setCurrentIndex(-1);
        setLeftBound(-1);
        setRightBound(-1);

        const actualSpeed = 1000 - speed * 8;
        let foundIndex;

        if (selectedAlgorithm === 'linear') {
            foundIndex = await linearSearch(array, target, setCurrentIndex, actualSpeed);
        } else {
            foundIndex = await binarySearch(array, target, setCurrentIndex, setLeftBound, setRightBound, actualSpeed);
        }

        setResult(foundIndex);
        setIsSearching(false);
    };

    const generateSortedArray = () => {
        const newArray = [];
        let current = Math.floor(Math.random() * 10) + 1;
        for (let i = 0; i < 10; i++) {
            newArray.push(current);
            current += Math.floor(Math.random() * 15) + 5;
        }
        setArray(newArray);
        setTarget(newArray[Math.floor(Math.random() * newArray.length)]);
        setCurrentIndex(-1);
        setLeftBound(-1);
        setRightBound(-1);
        setResult(null);
    };

    return (
        <div className="min-h-screen">
            <Navbar />
            <Sidebar />

            <div className="ml-64 pt-24 px-8 pb-12">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-8 neon-text"
                    >
                        Searching Visualizer
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Visualization Area */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Algorithm Selection */}
                            <ControlPanel title="Select Algorithm">
                                <div className="grid grid-cols-2 gap-3">
                                    {Object.keys(algorithms).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedAlgorithm(key)}
                                            disabled={isSearching}
                                            className={`p-3 rounded-lg font-semibold transition-all ${selectedAlgorithm === key
                                                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                                                    : 'bg-white/5 hover:bg-white/10'
                                                } ${isSearching ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {algorithms[key].name}
                                        </button>
                                    ))}
                                </div>
                            </ControlPanel>

                            {/* Visualization */}
                            <div className="glass-card p-8">
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    {array.map((value, idx) => {
                                        let bgColor = 'bg-white/10';

                                        if (result === idx) {
                                            bgColor = 'bg-accent animate-glow';
                                        } else if (currentIndex === idx) {
                                            bgColor = 'bg-secondary';
                                        } else if (selectedAlgorithm === 'binary' && idx >= leftBound && idx <= rightBound) {
                                            bgColor = 'bg-primary/30';
                                        }

                                        return (
                                            <motion.div
                                                key={idx}
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: idx * 0.05 }}
                                                className={`${bgColor} w-16 h-16 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-300`}
                                            >
                                                {value}
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Result Display */}
                                {result !== null && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center p-4 bg-white/5 rounded-lg"
                                    >
                                        {result >= 0 ? (
                                            <p className="text-lg">
                                                ✅ Found <span className="text-accent font-bold">{target}</span> at index{' '}
                                                <span className="text-primary font-bold">{result}</span>
                                            </p>
                                        ) : (
                                            <p className="text-lg">
                                                ❌ <span className="text-secondary font-bold">{target}</span> not found in array
                                            </p>
                                        )}
                                    </motion.div>
                                )}
                            </div>

                            {/* Controls */}
                            <ControlPanel title="Controls">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Target Value: {target}
                                        </label>
                                        <input
                                            type="number"
                                            value={target}
                                            onChange={(e) => setTarget(Number(e.target.value))}
                                            disabled={isSearching}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Speed: {speed}
                                        </label>
                                        <input
                                            type="range"
                                            min="1"
                                            max="100"
                                            value={speed}
                                            onChange={(e) => setSpeed(Number(e.target.value))}
                                            disabled={isSearching}
                                            className="w-full accent-secondary"
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={generateSortedArray}
                                            disabled={isSearching}
                                            className="flex-1 btn-accent"
                                        >
                                            Generate Array
                                        </button>
                                        <button
                                            onClick={handleSearch}
                                            disabled={isSearching}
                                            className="flex-1 btn-primary"
                                        >
                                            {isSearching ? 'Searching...' : 'Start Search'}
                                        </button>
                                    </div>
                                </div>
                            </ControlPanel>
                        </div>

                        {/* Info Panel */}
                        <div>
                            <InfoPanel
                                algorithm={algorithms[selectedAlgorithm].name}
                                timeComplexity={algorithms[selectedAlgorithm].timeComplexity}
                                spaceComplexity={algorithms[selectedAlgorithm].spaceComplexity}
                                description={algorithms[selectedAlgorithm].description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchingVisualizer;
