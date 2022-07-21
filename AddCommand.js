export default class AddCommand {

    constructor(valueToAdd) {
        this.valueToAdd = valueToAdd;
    }

    execute(value) {
        return value + this.valueToAdd;
    }

    undo(value) {
        return value - this.valueToAdd;
    }
}