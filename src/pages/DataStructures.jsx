import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ControlPanel from '../components/ControlPanel';

const DataStructures = () => {
    // Stack State
    const [stack, setStack] = useState([]);
    const [stackInput, setStackInput] = useState('');

    // Queue State
    const [queue, setQueue] = useState([]);
    const [queueInput, setQueueInput] = useState('');

    // Linked List State
    const [linkedList, setLinkedList] = useState([]);
    const [listInput, setListInput] = useState('');

    // Stack Operations
    const pushToStack = () => {
        if (stackInput.trim()) {
            setStack([...stack, stackInput]);
            setStackInput('');
        }
    };

    const popFromStack = () => {
        if (stack.length > 0) {
            setStack(stack.slice(0, -1));
        }
    };

    // Queue Operations
    const enqueue = () => {
        if (queueInput.trim()) {
            setQueue([...queue, queueInput]);
            setQueueInput('');
        }
    };

    const dequeue = () => {
        if (queue.length > 0) {
            setQueue(queue.slice(1));
        }
    };

    // Linked List Operations
    const addToList = () => {
        if (listInput.trim()) {
            setLinkedList([...linkedList, listInput]);
            setListInput('');
        }
    };

    const removeFromList = (index) => {
        setLinkedList(linkedList.filter((_, i) => i !== index));
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
                        Data Structures Visualizer
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Stack */}
                        <ControlPanel title="Stack (LIFO)">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={stackInput}
                                        onChange={(e) => setStackInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && pushToStack()}
                                        placeholder="Enter value"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-primary"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={pushToStack} className="flex-1 btn-primary text-sm py-2">
                                        Push
                                    </button>
                                    <button onClick={popFromStack} className="flex-1 btn-secondary text-sm py-2">
                                        Pop
                                    </button>
                                </div>

                                <div className="h-64 bg-white/5 rounded-lg p-4 flex flex-col-reverse gap-2 overflow-y-auto">
                                    <AnimatePresence>
                                        {stack.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: 100 }}
                                                className={`p-3 rounded-lg text-center font-semibold ${index === stack.length - 1
                                                        ? 'bg-primary text-white'
                                                        : 'bg-white/10'
                                                    }`}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                <div className="text-sm text-gray-300 text-center">
                                    Size: {stack.length}
                                </div>
                            </div>
                        </ControlPanel>

                        {/* Queue */}
                        <ControlPanel title="Queue (FIFO)">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={queueInput}
                                        onChange={(e) => setQueueInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && enqueue()}
                                        placeholder="Enter value"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary"
                                    />
                                </div>

                                <div className="flex gap-2">
                                    <button onClick={enqueue} className="flex-1 btn-secondary text-sm py-2">
                                        Enqueue
                                    </button>
                                    <button onClick={dequeue} className="flex-1 btn-accent text-sm py-2">
                                        Dequeue
                                    </button>
                                </div>

                                <div className="h-64 bg-white/5 rounded-lg p-4 flex flex-col gap-2 overflow-y-auto">
                                    <AnimatePresence>
                                        {queue.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, y: -100 }}
                                                className={`p-3 rounded-lg text-center font-semibold ${index === 0
                                                        ? 'bg-secondary text-white'
                                                        : 'bg-white/10'
                                                    }`}
                                            >
                                                {item}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                <div className="text-sm text-gray-300 text-center">
                                    Size: {queue.length}
                                </div>
                            </div>
                        </ControlPanel>

                        {/* Linked List */}
                        <ControlPanel title="Linked List">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={listInput}
                                        onChange={(e) => setListInput(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && addToList()}
                                        placeholder="Enter value"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-accent"
                                    />
                                </div>

                                <button onClick={addToList} className="w-full btn-accent text-sm py-2">
                                    Add Node
                                </button>

                                <div className="h-64 bg-white/5 rounded-lg p-4 overflow-y-auto">
                                    <AnimatePresence>
                                        {linkedList.map((item, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0 }}
                                                className="mb-3"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="flex-1 bg-accent/20 border border-accent rounded-lg p-3 text-center font-semibold">
                                                        {item}
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromList(index)}
                                                        className="bg-red-500/20 hover:bg-red-500/40 text-red-400 w-8 h-8 rounded-lg transition-colors"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                                {index < linkedList.length - 1 && (
                                                    <div className="ml-4 text-2xl text-accent">↓</div>
                                                )}
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                <div className="text-sm text-gray-300 text-center">
                                    Nodes: {linkedList.length}
                                </div>
                            </div>
                        </ControlPanel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataStructures;
