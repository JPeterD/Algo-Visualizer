import { swap } from './swap';

export const selectionSort = (tempArr, speed) => {
	const arr = tempArr.map(item => item.val);
	const arrayBars = document.getElementsByClassName('arrayBar');

	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		let minIdx = i;

		setTimeout(() => {
			arrayBars[minIdx].style.backgroundColor = 'red';
		}, count * speed);
		count++;

		for (let j = i + 1; j < arr.length; j++) {
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = 'orange';
			}, (count + 2) * speed);

			let oldMinIdx;
			if (arr[j] < arr[minIdx]) {
				oldMinIdx = minIdx;
				minIdx = j;

				setTimeout(() => {
					arrayBars[oldMinIdx].style.backgroundColor = '#dd85e7';
				}, (count + 3) * speed);
			}
			setTimeout(() => {
				arrayBars[j].style.backgroundColor = '#dd85e7';
			}, (count + 3) * speed);
			count++;
		}

		swap(i, minIdx, arr);

		setTimeout(() => {
			let temp = arrayBars[i].style.height;
			arrayBars[i].style.height = arrayBars[minIdx].style.height;
			arrayBars[minIdx].style.height = temp;
			arrayBars[i].style.backgroundColor = 'green';
		}, (count + 3) * speed);
		count++;
	}
	return { arr, count };
};
