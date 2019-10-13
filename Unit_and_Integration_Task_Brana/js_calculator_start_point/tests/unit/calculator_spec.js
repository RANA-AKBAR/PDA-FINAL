var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true);
  });
  describe('UNIT TESTS - arithmetic functions', function(){
    it('it should add two numbers together', function(){
      calculator.previousTotal = 1;
      calculator.add(4);
      const actual = calculator.runningTotal;
      const expected = 5;
      assert.strictEqual(actual, expected);
    });

    it('it should subtract two numbers', function(){
      calculator.previousTotal = 7;
      calculator.subtract(3);
      const actual = calculator.runningTotal;
      const expected = 4;
      assert.strictEqual(actual, expected);
    });

    it('it should multiply two numbers', function(){
      calculator.previousTotal = 3;
      calculator.multiply(5);
      const actual = calculator.runningTotal;
      const expected = 15;
      assert.strictEqual(actual, expected);
    });

    it('it should divide two numbers', function(){
      calculator.previousTotal = 21;
      calculator.divide(7);
      const actual = calculator.runningTotal;
      const expected = 3;
      assert.strictEqual(actual, expected);
    });
  });

  describe('INTEGRATION TESTS', function(){
    it('it should concatenate multiple number button clicks', function(){
      calculator.numberClick(1);
      calculator.numberClick(2);
      calculator.numberClick(2);
      calculator.numberClick(4);
      const actual = calculator.runningTotal;
      const expected = 1224;
      assert.strictEqual(actual, expected);
    });

    it('it should chain multiple operations together', function(){
      calculator.numberClick(3);
      calculator.operatorClick("+");
      calculator.numberClick(7);
      calculator.operatorClick("*");
      calculator.numberClick(3);
      calculator.operatorClick("=");
      const actual = calculator.runningTotal;
      const expected = 30;
      assert.strictEqual(actual, expected);
    });

    it('it should clear the running total without affecting the calculation', function(){
      calculator.numberClick(7);
      calculator.operatorClick("*");
      calculator.numberClick(2);
      calculator.operatorClick("+");
      calculator.numberClick(2);
      calculator.clearClick();
      const actual = calculator.previousTotal;
      const expected = 14;
      assert.strictEqual(actual, expected);
    });
  });


});
