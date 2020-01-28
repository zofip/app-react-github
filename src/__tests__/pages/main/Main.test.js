import React from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { mount } from 'enzyme';

import theme from "../../../styles/theme";
import Main from '../../../pages/main/Main';

describe('<Main />', () => {
  const main = mount(
    <ThemeProvider theme={theme}><Main.WrappedComponent  />
    </ThemeProvider>);

  it('Rendering', () => {
    expect(main).toMatchSnapshot();
  });

});
