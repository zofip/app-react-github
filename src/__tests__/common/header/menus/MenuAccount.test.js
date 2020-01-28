import React from 'react';
import { shallow } from 'enzyme';
import MenuAccount from '../../../../common/header/menus/MenuAccount';

describe('<MenuAccount />', () => {
   it('Rendering', () => {
      const menuAccount = shallow(<MenuAccount />);
      expect(menuAccount).toMatchSnapshot();
   });
});