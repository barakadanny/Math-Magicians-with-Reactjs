import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Calculator';
import '@testing-library/jest-dom';

describe('Test Header page', () => {
  it('testing Header page UI rendering', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
