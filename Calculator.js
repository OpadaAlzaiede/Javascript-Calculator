export default class Calculator {

    constructor() {
        this.value = 0;
        this.history = [];
    }

    executeCommand(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undoCommand() {
        let command = this.history.pop();

        if(!command) return this.value;

        this.value = command.undo(this.value);
    }

    clear() {
        for(let i = this.history.length; i > 0; i--) {
            this.undoCommand(this.history[i]);
        }
    }
}