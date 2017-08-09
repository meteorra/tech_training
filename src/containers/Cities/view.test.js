import React from 'react';
import renderer from 'react-test-renderer';
import CitiesView from './view';

function setup() {

    const props = {
        changeRoute: jest.fn(),
        deleteListItem: jest.fn(),
        cities: [],
    };

    const View = CitiesView(() => null);
    const render = renderer.create(<View {...props} />);

    return {
        render,
    };
}

describe('CitiesView', () => {

    it('renders h1 title "Discover the weather in Belarus cities"', () => {

        const { render, } = setup();
        expect(render.toJSON()).toMatchSnapshot();
    });
});
