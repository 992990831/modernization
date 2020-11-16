import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Main app component', () => {
  it('Should render without crashing', () => {
    shallow(<App />);
  });

});
