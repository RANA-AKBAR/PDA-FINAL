var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update the display of the running total', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  })

  describe('do arithmetical operations and update display with result', function(){
    it ('should be able to add two numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number7')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10');
    });

    it ('should be able to subtract two numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number6')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('4');
    });

    it ('should be able to multiply two numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number8')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('72');
    });

    it ('should be able to divide two numbers', function(){
      running_total = element(by.css('#running_total'))
      element(by.css('#number9')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number3')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('30');
    });

  });

  it('should be able to chain multiple operations together', function () {
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('65');
  })

  describe('output should be as expected for a range of numbers (+,-, decimals and very large numbers)', function(){
    it('should display positive numbers', function(){
      element(by.css('#number8')).click();
      element(by.css('#operator_add')).click();
      element(by.css('#number2')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('10');

    });

    it('should display negative numbers', function(){
      element(by.css('#number3')).click();
      element(by.css('#operator_subtract')).click();
      element(by.css('#number7')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('-4')
    });

    it('should display decimals', function(){
      element(by.css('#number3')).click();
      element(by.css('#operator_divide')).click();
      element(by.css('#number4')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('0.75')
    });

    it('should display very large numbers', function(){
      element(by.css('#number3')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_multiply')).click();
      element(by.css('#number1')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#number0')).click();
      element(by.css('#operator_equals')).click();
      expect(running_total.getAttribute('value')).to.eventually.equal('3000000')
    });
  });

  it('should return NaN when divided by 0', function(){
    element(by.css('#number8')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
  })

});
