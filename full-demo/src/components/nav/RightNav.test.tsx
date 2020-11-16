import React from 'react';
import { shallow, mount } from 'enzyme';

import RightNav from './RightNav';
import { Link } from 'react-router-dom';

describe('right navigation bar', () => {
  it('Should render without crashing', () => {
    shallow(<RightNav />);
  });

  it("should contain 5 links", () => {
    const nav = shallow(<RightNav />);
    expect(nav.find(Link).length).toBe(5);
  });
});
