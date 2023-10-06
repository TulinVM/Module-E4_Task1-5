/* E4.Задание 4.
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

*/


function ElectDevice(name, energy) {
    this.name = name;
    this.energy = energy;
    this.included = false;
}
ElectDevice.prototype.plugIn = function() {
    console.log(this.name + " included (ON)");
    this.included = true;
}

ElectDevice.prototype.getPowerUsed = function() {
    return this.included ? this.energy : 0;
}

const lamp = new ElectDevice('lamp', 50);
const computer = new ElectDevice('computer', 900);

console.log(lamp.getPowerUsed() + computer.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());
