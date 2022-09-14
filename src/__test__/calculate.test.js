import calculate from '../logic/calculate';

describe('Calculate Unit testing', () => {
  test('Operation testing', () => {
    const obj = {
      total: 0,
      operation: null,
      next: null,
    };
    const buttonName = '9';
    const result = calculate(obj, buttonName);
    expect(result.next).toEqual('9');
  });

  test('1st operation testing', () => {
    const obj = {
      total: 0,
      next: null,
      operation: '+',
    };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result.next).toEqual('3');
  });

  test('testing Operation', () => {
    const obj = {
      total: 0,
      operation: null,
      next: null,
    };
    const buttonName = 'x';
    const result = calculate(obj, buttonName);
    expect(result.operation).toEqual('x');
  });

  test('2nd operation testing', () => {
    const obj = {
      total: 0,
      operation: 'x',
      next: null,
    };
    const buttonName = '3';
    const result = calculate(obj, buttonName);
    expect(result.next).toEqual('3');
    expect(result.operation).toEqual('x');
    expect(result.total).toEqual(0);
  });
});
