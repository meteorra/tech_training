import React from 'react';
import PropertyTable from './PropertyTable';
import renderer from 'react-test-renderer';

function setup() {
    const props = {
        tableItems: {
            temp: 20,
            visibility: 100,
            windSpeed: 1000,
        },
    };

    const render = renderer.create(<PropertyTable {...props} />);

    return {
        props,
        render,
    };
}

describe('PropertyTable component', () => {

    it('renders correctly certain values of temp, visibility & windSpeed', () => {
        const { render, } = setup();

        expect(render.toJSON()).toMatchSnapshot();
    });

});

