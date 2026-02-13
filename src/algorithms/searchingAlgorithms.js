// Linear Search Algorithm
export const linearSearch = async (array, target, setCurrentIndex, speed) => {
    for (let i = 0; i < array.length; i++) {
        setCurrentIndex(i);
        await new Promise(resolve => setTimeout(resolve, speed));

        if (array[i] === target) {
            return i;
        }
    }
    setCurrentIndex(-1);
    return -1;
};

// Binary Search Algorithm
export const binarySearch = async (array, target, setCurrentIndex, setLeft, setRight, speed) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        setLeft(left);
        setRight(right);
        setCurrentIndex(mid);
        await new Promise(resolve => setTimeout(resolve, speed));

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    setCurrentIndex(-1);
    return -1;
};
