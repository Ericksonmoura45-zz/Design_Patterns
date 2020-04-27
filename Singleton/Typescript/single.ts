//Typescript Playground: https://www.typescriptlang.org/play/

// NOT USING SINGLETON
class NormalClass {
    name: string = '';
    constructor() { }

    set setName(n: string) {
        this.name = n;
    }
}

const normalA = new NormalClass();
normalA.name = `Aron`;
const normalB = new NormalClass();
normalB.name = `Bea`;

console.log('normalA name: ', normalA.name);
console.log('normalB name: ', normalB.name);
console.log(normalA == normalB ? 'normalA == normalB' : 'normalA != normalB');




// USING SINGLETON
class UniqueObjClass {
    private uniqueObject: UniqueObjClass;
    name: string = '';

    // private constructor so it can't be instanciated with 'new UniqueObjClass()'
    private constructor() { }

    set setName(n: string) {
        this.name = n;
    }

    getInstance(): UniqueObjClass {
        if (this.uniqueObject == null) {
            this.uniqueObject = new UniqueObjClass();
        }
        return this.uniqueObject;
    }
}

let time: UniqueObjClass;
time = UniqueObjClass.prototype.getInstance();
time.name = 'a';

let money: UniqueObjClass;
money = UniqueObjClass.prototype.getInstance();
money.name = 'b';

console.log('time name: ', time.name);
console.log('money name: ', money.name);
console.log(time == money ? 'time == money' : 'time != money');
console.log(`Quod erat demonstrandum.`)