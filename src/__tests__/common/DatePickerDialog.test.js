import React from 'react';
import { shallow } from 'enzyme';
import DatePickerDialog from '../../common/DatePickerDialog';

describe('<DatePickerDialog />', () => {
   it('Rendering', () => {
      const datePickerDialog = shallow(<DatePickerDialog />);
      expect(datePickerDialog).toMatchSnapshot();
   });
});