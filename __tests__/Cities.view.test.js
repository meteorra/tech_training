import React from 'react';
import { mount } from 'enzyme';
import CitiesView from '../src/containers/Cities/Cities.view';

function setup() {
    const props = {
        changeRoute: jest.fn(),
        deleteListItem: jest.fn(),
        cities: [
            { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
            { cityName: 'Brest', cityCode: 'brest', id: 1, },
        ]
    };

    const enzymeWrapper = mount(<CitiesView {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('CitiesView', () => {

    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('h1').text()).toBe('Discover the weather in Belarus cities');
        expect(enzymeWrapper.find('ul').children().length).toEqual(2);
    });
});
