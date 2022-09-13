import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Test Calculator pag', () => {
  it('testing Calculator page UI rendering', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
