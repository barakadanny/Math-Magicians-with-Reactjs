import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import '@testing-library/jest-dom';

describe('Test Home page', () => {
  it('testing Home page UI rendering', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
