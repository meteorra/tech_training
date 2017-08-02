import React from 'react';
import PropertyTable from '../src/components/PropertyTable.component';
import { mount } from 'enzyme';

function setup() {
    const props = {
        tableItems: {
            temp: 20,
            visibility: 100,
            windSpeed: 1000,
        },
    };

    const enzymeWrapper = mount(<PropertyTable {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('PropertyTable component', () => {

    it('maps props to the correct DOM nodes', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('.temp-item').text()).toBe('Current temperature: 20');
        expect(enzymeWrapper.find('.visibility-item').text()).toBe('Current visibility: 100');
        expect(enzymeWrapper.find('.wind-item').text()).toBe('Current speed of wind: 1000');
    });

});

