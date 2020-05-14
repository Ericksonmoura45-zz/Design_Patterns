/**
 * Preparing classes and variables
 */

var yourCar; // Your free car, congrats

class Car {
    name = 'Generic Car'
    img = 'assets/car.jpg';
}

class Gol extends Car {
    name = 'Gol';
    constructor() {
        super();
        this.img = 'assets/gol.jpg';
    }
}

class Amarok extends Car {
    name = 'Amarok';
    constructor() {
        super();
        this.img = 'assets/amarok.jpg';
    }
}

class Fox extends Car {
    name = 'Fox';
    constructor() {
        super();
        this.img = 'assets/fox.jpg';
    }
}

/**
 * Logic starts here
 */
alert(`Congratulations!!!\nYou're the 1000th visitor!`);

function createCar(model) {
    const supportedCars = {
        Gol,
        Amarok,
        Fox,
    }
    console.log(`creating a ${supportedCars[model] || Car}`);

    yourCar = new (supportedCars[model] || Car)(); // Create object of unknow class

    let image = document.createElement('img'); // Puts car's image in an img element
    image.src = yourCar.img;

    let title = document.createElement('h1'); // Puts car's name on title element
    title.innerText=`Enjoy your ${yourCar.name}.`;

    let imageContainer = document.getElementById('car-image');
    imageContainer.innerHTML = '';
    imageContainer.appendChild(title);
    imageContainer.appendChild(image);
}


