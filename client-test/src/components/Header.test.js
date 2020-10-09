import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('Should render without crashing', () => {
    shallow(
      <Header />
    );
  });

  it('Should hide hellow world', () => {
    const el = mount(<Header showHello={false} />);
    expect(el.find('div').text() === "Hello world!");
  });

});
