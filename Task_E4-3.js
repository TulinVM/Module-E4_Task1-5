/*E4.Задание 3.
Написать функцию, которая создает пустой объект, но без прототипа.
*/
function notPrototype() {
	const empty = Object.create(null);
	return empty
}

notPrototype()
