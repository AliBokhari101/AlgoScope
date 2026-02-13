// Bubble Sort Algorithm
export const bubbleSort = async (array, setArray, setComparing, speed) => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setComparing([j, j + 1]);
            await new Promise(resolve => setTimeout(resolve, speed));

            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }
    }
    setComparing([]);
    return arr;
};

// Selection Sort Algorithm
export const selectionSort = async (array, setArray, setComparing, speed) => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;

        for (let j = i + 1; j < n; j++) {
            setComparing([minIdx, j]);
            await new Promise(resolve => setTimeout(resolve, speed));

            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }
    setComparing([]);
    return arr;
};

// Insertion Sort Algorithm
export const insertionSort = async (array, setArray, setComparing, speed) => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            setComparing([j, j + 1]);
            await new Promise(resolve => setTimeout(resolve, speed));

            arr[j + 1] = arr[j];
            setArray([...arr]);
            j--;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
        arr[j + 1] = key;
        setArray([...arr]);
    }
    setComparing([]);
    return arr;
};

// Merge Sort Algorithm
export const mergeSort = async (array, setArray, setComparing, speed) => {
    const arr = [...array];

    const merge = async (arr, left, mid, right) => {
        const leftArr = arr.slice(left, mid + 1);
        const rightArr = arr.slice(mid + 1, right + 1);

        let i = 0, j = 0, k = left;

        while (i < leftArr.length && j < rightArr.length) {
            setComparing([left + i, mid + 1 + j]);
            await new Promise(resolve => setTimeout(resolve, speed));

            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            setArray([...arr]);
            k++;
        }

        while (i < leftArr.length) {
            arr[k] = leftArr[i];
            setArray([...arr]);
            i++;
            k++;
            await new Promise(resolve => setTimeout(resolve, speed));
        }

        while (j < rightArr.length) {
            arr[k] = rightArr[j];
            setArray([...arr]);
            j++;
            k++;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    };

    const mergeSortHelper = async (arr, left, right) => {
        if (left < right) {
            const mid = Math.floor((left + right) / 2);
            await mergeSortHelper(arr, left, mid);
            await mergeSortHelper(arr, mid + 1, right);
            await merge(arr, left, mid, right);
        }
    };

    await mergeSortHelper(arr, 0, arr.length - 1);
    setComparing([]);
    return arr;
};

// Quick Sort Algorithm
export const quickSort = async (array, setArray, setComparing, speed) => {
    const arr = [...array];

    const partition = async (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            setComparing([j, high]);
            await new Promise(resolve => setTimeout(resolve, speed));

            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, speed));
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        await new Promise(resolve => setTimeout(resolve, speed));
        return i + 1;
    };

    const quickSortHelper = async (arr, low, high) => {
        if (low < high) {
            const pi = await partition(arr, low, high);
            await quickSortHelper(arr, low, pi - 1);
            await quickSortHelper(arr, pi + 1, high);
        }
    };

    await quickSortHelper(arr, 0, arr.length - 1);
    setComparing([]);
    return arr;
};
