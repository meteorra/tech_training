import React from 'react';
import List from '../src/components/List.component';
import renderer from 'react-test-renderer';

describe('List component renders the list correctly', () => {

    it('renders correctly a passed in list', () => {
        const listItems = [
            { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
            { cityName: 'Brest', cityCode: 'brest', id: 1, },
        ];
        const rendered = renderer.create(
            <List listItems={listItems} />
        );

        expect(rendered.toJSON()).toMatchSnapshot();
    });
});

