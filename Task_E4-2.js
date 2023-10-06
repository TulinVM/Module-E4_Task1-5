/* E4.Задание 2.
Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
 объекта свойство с данным именем. Функция должна возвращать true или false.
*/

const AutoCar = {
    name: 'Hyundai',
    model: 'Creta',
    year: 2019,
    color: 'white',
	mileage: 80000
};

console.log(isProperty(AutoCar, 'color'));

function isProperty(object, property) {
    if (object.hasOwnProperty(property)) {
        return true;
    } else {
        return false;
    }
}

