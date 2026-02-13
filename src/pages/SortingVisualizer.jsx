import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ControlPanel from '../components/ControlPanel';
import VisualBar from '../components/VisualBar';
import InfoPanel from '../components/InfoPanel';
import { bubbleSort, selectionSort, insertionSort, mergeSort, quickSort } from '../algorithms/sortingAlgorithms';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [arraySize, setArraySize] = useState(50);
    const [speed, setSpeed] = useState(50);
    const [comparing, setComparing] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [selectedAlgorithm, setSelectedAlgorithm] = useState('bubble');
    const sortingRef = useRef(false);

    const algorithms = {
        bubble: {
            name: 'Bubble Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
            func: bubbleSort
        },
        selection: {
            name: 'Selection Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            description: 'Divides the input into a sorted and unsorted region, repeatedly selecting the smallest element from the unsorted region.',
            func: selectionSort
        },
        insertion: {
            name: 'Insertion Sort',
            timeComplexity: 'O(n²)',
            spaceComplexity: 'O(1)',
            description: 'Builds the final sorted array one item at a time by inserting each element into its correct position.',
            func: insertionSort
        },
        merge: {
            name: 'Merge Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(n)',
            description: 'Divides the array into halves, recursively sorts them, and then merges the sorted halves.',
            func: mergeSort
        },
        quick: {
            name: 'Quick Sort',
            timeComplexity: 'O(n log n)',
            spaceComplexity: 'O(log n)',
            description: 'Selects a pivot element and partitions the array around it, then recursively sorts the partitions.',
            func: quickSort
        }
    };

    const generateArray = () => {
        const newArray = [];
        for (let i = 0; i < arraySize; i++) {
            newArray.push(Math.floor(Math.random() * 90) + 10);
        }
        setArray(newArray);
        setComparing([]);
    };

    const handleSort = async () => {
        if (array.length === 0) {
            generateArray();
            return;
        }

        setIsSorting(true);
        sortingRef.current = true;
        const actualSpeed = 500 - speed * 4.5;

        await algorithms[selectedAlgorithm].func(array, setArray, setComparing, actualSpeed);

        setIsSorting(false);
        sortingRef.current = false;
    };

    const handleReset = () => {
        sortingRef.current = false;
        setIsSorting(false);
        setComparing([]);
        generateArray();
    };

    // Generate initial array on mount
    useState(() => {
        generateArray();
    }, []);

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
                        Sorting Visualizer
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Main Visualization Area */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Algorithm Selection */}
                            <ControlPanel title="Select Algorithm">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {Object.keys(algorithms).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedAlgorithm(key)}
                                            disabled={isSorting}
                                            className={`p-3 rounded-lg font-semibold transition-all ${selectedAlgorithm === key
                                                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                                                    : 'bg-white/5 hover:bg-white/10'
                                                } ${isSorting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            {algorithms[key].name}
                                        </button>
                                    ))}
                                </div>
                            </ControlPanel>

                            {/* Visualization */}
                            <div className="glass-card h-96">
                                <div className="h-full flex items-end justify-center gap-1 p-4">
                                    {array.map((value, idx) => (
                                        <VisualBar
                                            key={idx}
                                            height={value}
                                            index={idx}
                                            isComparing={comparing.includes(idx)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Controls */}
                            <ControlPanel title="Controls">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold mb-2">
                                            Array Size: {arraySize}
                                        </label>
                                        <input
                                            type="range"
                                            min="10"
                                            max="100"
                                            value={arraySize}
                                            onChange={(e) => setArraySize(Number(e.target.value))}
                                            disabled={isSorting}
                                            className="w-full accent-primary"
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
                                            disabled={isSorting}
                                            className="w-full accent-secondary"
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={generateArray}
                                            disabled={isSorting}
                                            className="flex-1 btn-accent"
                                        >
                                            Generate Array
                                        </button>
                                        <button
                                            onClick={handleSort}
                                            disabled={isSorting}
                                            className="flex-1 btn-primary"
                                        >
                                            {isSorting ? 'Sorting...' : 'Start Sort'}
                                        </button>
                                        <button
                                            onClick={handleReset}
                                            className="flex-1 btn-secondary"
                                        >
                                            Reset
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

export default SortingVisualizer;
