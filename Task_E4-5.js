/*Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.
Общие требования:
Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.
*/

class ElectDevice {
    constructor(name, energy)
    {
        this.name = name;
		this.energy = energy;
		this.included = false;
    }

    plugIn()
    {
        console.log(this.name + " included (ON)");
        this.included = true;
    }

    getPowerUsed()
    {
        return this.included ? this.included : 0;
    }
}

const lamp = new ElectDevice('lamp', 50);
const computer = new ElectDevice('computer', 900);

console.log(lamp.getPowerUsed() + computer.getPowerUsed());

lamp.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());

computer.plugIn();
console.log(lamp.getPowerUsed() + computer.getPowerUsed());
