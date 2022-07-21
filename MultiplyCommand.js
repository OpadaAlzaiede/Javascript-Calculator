export default class MultiplyCommand {

    constructor(valueToMultiply) {
        this.valueToMultiply = valueToMultiply;
    }

    execute(value) {
        return value * this.valueToMultiply;
    }

    undo(value) {
        return value / this.valueToMultiply;
    }
}