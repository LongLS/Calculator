const Operators = require('./Operators/index');

function calculator() {
    this.operator = {
        '+':new  Operators.Add,
        '/':new  Operators.Div
    };
    this.runn = function (operatorsname, number1, number2) {
        return this.operator[operatorsname].run(number1, number2);
    };
};
module.exports = calculator;