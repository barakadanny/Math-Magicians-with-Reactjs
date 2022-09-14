import React from 'react';
import renderer from 'react-test-renderer';
import Quotes from '../components/Quote';
import '@testing-library/jest-dom';

describe('Test Quotes pag', () => {
  it('testing Quotes page UI rendering', () => {
    const tree = renderer.create(<Quotes />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
