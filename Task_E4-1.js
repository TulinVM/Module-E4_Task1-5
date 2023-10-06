/* E4.Задание 1.
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
*/

const student = {
    name: 'Ivan',
    lastname: 'Sidorov',
    birthYear: 2003,
    course: 'programmer',
	studyYears: '2',
};

requestData(student);

function requestData(data) {
    for (var x in data) {
        console.log(x + ' - ' + data[x]);
    }
}
