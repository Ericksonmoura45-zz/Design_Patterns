/**
 * Open index.html to see it working.
 * Make sure this file is in the same folder as index.html
 */


const numCheckbox = 3; // Number of checkboxes
let keyValue; // Last keyboard number typed
let lasKeyElem = document.getElementById('lastkey');

class KeyboardSubject {
    // List of observers functions
    state = {
        observers: []
    };

    constructor() {
        document.addEventListener('keydown', async (e) => {
            // Sending 'updated-observed-values' command. Observers that recognizes this command should update themselves.
            keyValue = e.key;

            console.log(`h3: `, lasKeyElem);

            lasKeyElem.innerText = 'Key pressed: ' + keyValue;
            this.notifyAll('update-observed-values');
        });
    }

    // Includes a new observer function
    subscribe(observerFunction) {
        this.state.observers.push(observerFunction);
    }

    /**
     * Not being used right now
     * @param {number} index which observer function will be poped from state.observers array
     */
    unsubscribe(index) {
        this.state.observers.splice(index);
    }

    // Iterate over all functions passing a command that has to be recognizable to them
    notifyAll(command) {
        console.log(`Notifying  ${this.state.observers.length} observers`);
        // console.log(`observers: ${this.state.observers}`);

        for (const observerFunction of this.state.observers) {
            console.log('observerFunction: ', observerFunction);
            observerFunction(command);
        }
    }
}

class Observer {
    htmlElem = document.createElement('div');

    constructor() {
        this.htmlElem = this.createCheckboxInput();
    }

    createCheckboxInput() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;

        const label = document.createElement('label');
        label.innerText = 'Observed values: ';

        const span = document.createElement('span');

        const div = document.createElement('div');
        div.append(checkbox, label, span);

        return div;

        /*<div>
            <input type='checkbox'></input>
            <label>Observed values: </label>
            <span></span>
        </div>*/
    }


    /**
     * Adds keyValue to end of span's innerText
     */
    updateObservedValues() {
        const span = this.htmlElem.getElementsByTagName('span')[0];
        span.innerText = span.innerText + keyValue + ', ';
        console.log(`child: `, span);
    }

    /**
     * Function to be called when observed object notifies all of its observes.
     * Execute one of the commands specified in the nested if-else.
     * @param {string} command what will be done
     */
    listenKeyboardEvent(command) {
        console.log(`checked: `, this.htmlElem.getElementsByTagName('input')[0].checked);

        if (command === 'update-observed-values') {
            if (this.htmlElem.getElementsByTagName('input')[0].checked) this.updateObservedValues();

        } else if (command === 'there-is-no-other-command') {
        }
    }
}

const container = document.getElementById('container');
console.log(`container`, container);
const keyListener = new KeyboardSubject();

for (let i = 0; i < numCheckbox; i++) {
    const ob = new Observer(i);
    keyListener.subscribe(ob.listenKeyboardEvent.bind(ob));
    container.appendChild(ob.htmlElem);
}

console.log(`container children: `, container.children);


/*
window.onload = function initContainer() {
}
*/