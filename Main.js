import Calculator from './Calculator.js';
import AddCommand from './AddCommand.js';
import SubstractCommand from './SubstractCommand.js';
import DivideCommand from './DivideCommand.js';
import MultiplyCommand from './MultiplyCommand.js';

let calculator = new Calculator();
calculator.executeCommand(new AddCommand(20));
calculator.executeCommand(new MultiplyCommand(2));
calculator.executeCommand(new SubstractCommand(4));
calculator.executeCommand(new DivideCommand(3));
calculator.clear();
console.log(calculator.value);
