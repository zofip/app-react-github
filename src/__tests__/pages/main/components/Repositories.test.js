import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import MaterialTable from 'material-table';

import Repositories from '../../../../pages/main/components/Repositories';
import { getRepositoriesByUser, getValueByUrl } from '../../../../services/serviceRepository';


describe('<Repositories />', () => {

    jest.fn(getRepositoriesByUser, () => {
        return [
            {
                name: "enzyme",
                description: "JavaScript Testing utilities for React",
                languages_url: "Javascript",
                default_branch: "master",
                git_url: "git://github.com/zofip/enzyme.git"
            },
        ]
    });

    jest.fn(getValueByUrl, () => {
        return [
            {
                java: "15",
                javascript: "1011"
            },
        ]
    });
    const repositories = shallow(<Repositories />);

    it('Rendering', () => {
        expect(repositories).toMatchSnapshot();
    });

    it('InputSearch', () => {
        repositories.find(TextField).simulate("change", { target: { value: "oth" } });
        repositories.find(TextField).simulate("change", { target: { value: "ot" } });
        repositories.find(MaterialTable);
    });


});