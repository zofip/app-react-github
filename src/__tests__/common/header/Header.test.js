import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../common/header/Header';

describe('<Header />', () => {
   it('Rendering', () => {
      const header = shallow(<Header />);
      expect(header).toMatchSnapshot();
   });
});