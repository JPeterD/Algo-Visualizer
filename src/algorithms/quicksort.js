import colors from '../SortingVisualizer/barColors';
import { swap } from './swap';

const arrayBars = document.getElementsByClassName('arrayBar');
let count = 0;

export const quicksort = (tempArr, animationSpeed) => {
	const arr = tempArr.map(item => item.val);
	count = 0;
	let low = 0;
	let high = arr.length - 1;

	quicksortHelper(arr, low, high, animationSpeed);
	count += 2;
	return { arr, count };
};

const quicksortHelper = (arr, low, high, speed) => {
	if (low > high) return;

	let pivot = partition(arr, low, high, speed);

	setTimeout(() => {
		arrayBars[pivot].style.backgroundColor = colors.sortedElementColor;
	}, count * speed);
	count++;

	quicksortHelper(arr, low, pivot - 1, speed);
	quicksortHelper(arr, pivot + 1, high, speed);
};

const partition = (arr, low, high, speed) => {
	let pivotElement = arr[high];

	setTimeout(() => {
		arrayBars[high].style.backgroundColor = colors.pivotActiveColor;
	}, count * speed);
	count++;

	let i = low;
	for (let j = low; j < high; j++) {
		setTimeout(() => {
			arrayBars[j].style.backgroundColor = colors.cyan;
		}, count * speed);
		count += 2;

		setTimeout(() => {
			arrayBars[j].style.backgroundColor = colors.primaryColor;
		}, count * speed);
		count++;

		if (pivotElement > arr[j]) {
			let tempI = i;
			setTimeout(() => {
				arrayBars[tempI].style.backgroundColor = colors.orange;

				let temp = arrayBars[tempI].style.height;
				arrayBars[tempI].style.height = arrayBars[j].style.height;
				arrayBars[j].style.height = temp;
			}, count * speed);
			count++;

			setTimeout(() => {
				arrayBars[tempI].style.backgroundColor = colors.primaryColor;
			}, (count + 1) * speed);
			count++;

			swap(i, j, arr);
			i++;
		}
	}

	setTimeout(() => {
		arrayBars[high].style.backgroundColor = colors.primaryColor;
	}, count * speed);
	count++;

	setTimeout(() => {
		let temp = arrayBars[i].style.height;
		arrayBars[i].style.height = arrayBars[high].style.height;
		arrayBars[high].style.height = temp;
	}, count * speed);
	count++;

	swap(i, high, arr);
	return i;
};
