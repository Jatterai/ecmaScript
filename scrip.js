/**
 * Задание 1: Удалить все дубликаты из массива
 */
const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
const newarr = Array.from(new Set(arr));

//2 Объединить два объекта в один
const obj1 = {
	id: 1,
	name: 'userName',
}

const obj2 = {
	id: 1,
	password: 'qwerty'
}

Object.assign(obj1, obj2);


//3. Сократить объявление фенкции до стрелочной
const add = (x, y) => x + y;

//4. Написать функцию для задержки

const sleep = (ms) => {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res();
		}, ms);
	})
}

sleep(5000).then(() => console.log('I love you'))