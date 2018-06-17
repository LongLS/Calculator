class Division{
    run(number1, number2){
      if (number1 !== 0){
          return number1 / number2;
      }
      throw new Error('Err!')
    };
}
module.exports = Division;