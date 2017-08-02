import React from 'react';
import { mount } from 'enzyme';
import CityView from '../src/containers/City/City.view';

function setup() {
    const props = {
        fetchForecast: jest.fn(),
        code: 'minsk',
        forecast: {
            temp: 20,
            visibility: 100,
            windSpeed: 1000,
        },
    };

    const enzymeWrapper = mount(<CityView {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('CityView', () => {

    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('h1').text()).toBe('Here is minsk weather forecast');
        expect(enzymeWrapper.find('.property-table').children().length).toEqual(3);
    });
});
