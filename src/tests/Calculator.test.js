import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add numbers', () => {
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('5');
  });

  it('should subtract numbers', () => {
    container.find('#number7').simulate('click');
    container.find('#operator-subtract').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('3');
  });

  it('should multiply numbers', () => {
    container.find('#number3').simulate('click');
    container.find('#operator-multiply').simulate('click');
    container.find('#number5').simulate('click');
    container.find('#operator-equals').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('15');
  });

  it('should divide numbers', () => {
    container.find('#number2').simulate('click');
    container.find('#number1').simulate('click');
    container.find('#operator-divide').simulate('click');
    container.find('#number7').simulate('click');
    container.find('#operator-equals').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('3');
  });

  it('should allow to click same number multiple times', () => {
    container.find('#number3').simulate('click');
    container.find('#number3').simulate('click');
    container.find('#number3').simulate('click');
    let number = container.find('#running-total');
    expect(number.text()).toEqual('333');
  });

  it('should chain multiple operations together', () => {
    container.find('#number4').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#operator_add').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('12');
  });

  it('should clear running total', () => {
    container.find('#number1').simulate('click');
    container.find('#operator_add').simulate('click');
    container.find('#number4').simulate('click');
    container.find('#operator-equals').simulate('click');
    let sum = container.find('#running-total');
    expect(sum.text()).toEqual('5');
    container.find('#clear').simulate('click');
    let clear = container.find('#running-total');
    expect(clear.text()).toEqual('0');
  });
})

