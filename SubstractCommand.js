export default class SubstractCommand {

    constructor(valueToSubstract) {
        this.valueToSubstract = valueToSubstract;
    }

    execute(value) {
        return value - this.valueToSubstract;
    }

    undo(value) {
        return value + this.valueToSubstract;
    }
}