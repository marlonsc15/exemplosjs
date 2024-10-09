const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

const shuffle = (array, numTrocas) => {
    for (let i = 0; i < numTrocas; i++) {
        let pos1 = Math.floor(Math.random() * array.length);
        let pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
        n--; 
    } while (swapped);
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

const quick_sort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        const pivotIndex = particionamento(array, left, right);
        quick_sort(array, left, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, right);
    }
};


const particionamento = (array, low, high) => {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};
