import operate from '../logic/operate';

describe('Operate Unit testing', () => {
  test('Addition testing', () => {
    const numberOne = 0;
    const numberTwo = 0;
    const operation = '+';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('0');
  });

  test('minus testing', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = '-';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('3');
  });

  test('multiplication testing', () => {
    const numberOne = 1;
    const numberTwo = 0;
    const operation = 'x';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('0');
  });

  test('modulo testing', () => {
    const numberOne = 5;
    const numberTwo = 2;
    const operation = '%';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toEqual('1');
  });
});
