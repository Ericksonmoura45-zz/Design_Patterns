/**
 * Unused code. For consultation only.
 * Open index.js to see complete code.
 * Open index.htlm to see project running.
 */
class KeyboardSubject {
    // List of observers functions
    state = {
        observers: []
    };

    constructor() {
        document.addEventListener('keydown', async (e) => {
            if (e.key >= '0' && e.key <= '9') {
                keyValue = e.key.charCodeAt(0) - 48;
                console.log(keyValue);


                c1.data.labels.push('june');
                c1.data.datasets[0].data.push(keyValue);
                console.log(`c1.data.datasets[0].data:`, c1.data.datasets[0].data);


                // Sending a n add-data command. Observers that recognizes this command should update themselves.
                this.notifyAll('add-data');
            }
        });
    }

    // Includes a new observer function
    subscribe(observerFunction) {
        this.state.observers.push(observerFunction);
    }

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