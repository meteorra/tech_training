import React from 'react';
import PropertyTable from '../src/components/PropertyTable.component';
import renderer from 'react-test-renderer';

describe('PropertyTable component renders the table correctly', () => {

    it('renders correctly passed in table items', () => {
        const tableItems = {
            temp: 22,
            visibility: 10000,
            windSpeed: 200,
        };
        const rendered = renderer.create(
            <PropertyTable tableItems={tableItems}  />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});
