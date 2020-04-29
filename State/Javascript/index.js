/**
 * NOTE: the lack of typing makes this state implementation cofusing.
 * This pattern is better understood in other languages, with static types.
 */

/**
 * Should be an interface but Javascript is dynamically typed
 */
class State {
    toggleQuality() { };
    toggleCost() { };
    toggleSpeed() { };
}

class ExcellentCheapState extends State {
    excellent = true;
    cheap = true;
    fast = false;

    constructor(toggles) {
        super();
        console.log(`ExcelletnCheap constructor: `, toggles.currentState);

        this.t = toggles;
    }

    toggleCost() {
        this.t.setState(this.t.getExcelState());
    }
    toggleQuality() {
        this.t.setState(this.t.getCheapState());
    }
    toggleSpeed() {
        this.t.setState(Math.round(Math.random()) ? this.t.getFastCheapState() : this.t.getExcelFastState());
    }
}

class ExcellentFastState extends State {
    excellent = true;
    cheap = false;
    fast = true;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        this.t.setState(Math.round(Math.random()) ? this.t.getExcelCheapState() : this.t.getFastCheapState());
    }
    toggleQuality() {
        this.t.setState(this.t.getCheapState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getExcelState());
    }
}

class FastCheapState extends State {
    excellent = false;
    cheap = true;
    fast = true;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        this.t.setState(this.t.getFastState());
    }
    toggleQuality() {
        this.t.setState(Math.round(Math.random()) ? this.t.getExcelCheapState() : this.t.getExcelFastState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getCheapState());
    }
}

class FastState extends State {
    excellent = false;
    cheap = false;
    fast = true;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        this.t.setState(this.t.getFastCheapState());
    }
    toggleQuality() {
        this.t.setState(this.t.getExcelFastState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getNoProjState());
    }
}

class ExcellentState extends State {
    excellent = true;
    cheap = false;
    fast = false;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        this.t.setState(this.t.getExcelCheapState());
    }
    toggleQuality() {
        this.t.setState(this.t.getNoProjState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getExcelFastState());
    }
}

class CheapState extends State {
    excellent = false;
    cheap = true;
    fast = false;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        // if (this.t.currentState.cheap) this.t.setState(this.t.currentState.excellent ? this.t.getExcellent() : this.t.getFast());
        this.t.setState(this.t.getNoProjState());
    }
    toggleQuality() {
        this.t.setState(this.t.getExcelCheapState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getFastCheapState());
    }
}

/**
 * Initial state
 */
class NoProjectState extends State {
    excellent = false;
    cheap = false;
    fast = false;

    constructor(toggles) {
        super();
        this.t = toggles;
    }
    toggleCost() {
        this.t.setState(this.t.getCheapState());
    }
    toggleQuality() {
        this.t.setState(this.t.getExcelState());
    }
    toggleSpeed() {
        this.t.setState(this.t.getFastState());
    }
}


/**
 * Context class
 */
class Toggles {
    currentState = new NoProjectState(this); // NoProjectState is the initial state

    //Every state possible
    excelCheapState = new ExcellentCheapState(this);
    fastCheapState = new FastCheapState(this);
    excelFastState = new ExcellentFastState(this);
    excelState = new ExcellentState(this);
    fastState = new FastState(this);
    cheapState = new CheapState(this);
    noProjState = new NoProjectState(this);

    qualityToggle = document.getElementById('switchQuality');
    costToggle = document.getElementById('switchCost');
    speedToggle = document.getElementById('switchFast');

    constructor() {
        this.qualityToggle.addEventListener('click', (ev) => {
            console.log(`quality value: `, ev.originalTarget.checked);
            this.toggleQuality();
            this.updateToggles();
        });

        this.costToggle.addEventListener('click', (ev) => {
            console.log(`cost value: `, ev.originalTarget.checked);
            this.toggleCost();
            this.updateToggles();
        });

        this.speedToggle.addEventListener('click', (ev) => {
            console.log(`speed value: `, ev.originalTarget.checked);
            this.toggleSpeed();
            this.updateToggles();
        });

        this.updateToggles();
    }

    updateToggles() {
        this.qualityToggle.checked = this.currentState.excellent;
        this.costToggle.checked = this.currentState.cheap;
        this.speedToggle.checked = this.currentState.fast;
    }

    setState(newState) {
        this.currentState = newState;
    }
    getState = () => this.currentState
    getExcellent = () => this.excellent;
    getCheap = () => this.cheap;
    getFast = () => this.fast;

    toggleCost() {
        this.currentState.toggleCost();
        console.log(`state is now: `, this.currentState);
    }
    toggleQuality() {
        this.currentState.toggleQuality();
        console.log(`state is now: `, this.currentState);
    }
    toggleSpeed() {
        this.currentState.toggleSpeed();
        console.log(`state is now: `, this.currentState);
    }

    getExcelCheapState = () => this.excelCheapState;
    getFastCheapState = () => this.fastCheapState;
    getExcelFastState = () => this.excelFastState;
    getExcelState = () => this.excelState;
    getFastState = () => this.fastState;
    getCheapState = () => this.cheapState;
    getNoProjState = () => this.noProjState;
}


let projectSpecifications = new Toggles();


