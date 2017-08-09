import React from 'react';
import renderer from 'react-test-renderer';
import CityView from './view';

function setup() {
    const props = {
        fetchForecast: jest.fn(),
        code: 'minsk',
        forecast: {},
    };

    const View = CityView(() => null);
    const render = renderer.create(<View {...props}/>);

    return {
        render,
    };
}

describe('CityView', () => {

    it('renders h1 title with code property "Here is minsk weather forecast"', () => {

        const { render, } = setup();
        expect(render.toJSON()).toMatchSnapshot();
    });
});
