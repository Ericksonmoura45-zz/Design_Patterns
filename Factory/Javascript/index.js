console.log(`hello from index.js`);

class Car {

}

class Gol extends Car {

}

class Amarok extends Car {

}

class Fox extends Car {

}

function createCar(model) {
    const supportedCars = {
        Gol,
        Amarok,
        Fox
    }
    return new (supportedCars[model] || Car)();
}