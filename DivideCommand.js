export default class DivideCommand {

    constructor(valueToDivide) {
        this.valueToDivide = valueToDivide;
    }

    execute(value) {
        return value / this.valueToDivide;
    }

    undo(value) {
        return value * this.valueToDivide;
    }
}