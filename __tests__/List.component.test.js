import React from 'react';
import List from '../src/components/List.component';
import { mount } from 'enzyme';

function setup() {
    const props = {
        changeRoute: jest.fn(),
        deleteListItem: jest.fn(),
        listItems: [
            { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
            { cityName: 'Brest', cityCode: 'brest', id: 1, },
        ]
    };

    const enzymeWrapper = mount(<List {...props} />);

    return {
        props,
        enzymeWrapper
    }
}

describe('List component', () => {

    it('renders itself correctly', () => {

        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('.city-list-item a').at(0).text()).toBe('Minsk');
        expect(enzymeWrapper.find('.city-list-item a').at(1).text()).toBe('Brest');
    });

    it('calls changeRoute when listItem is clicked', () => {
        const { props, enzymeWrapper } = setup();

        enzymeWrapper.find('.list-item a')
            .at(0)
            .simulate('click');

        expect(props.changeRoute).toBeCalledWith('/minsk');
    });

    it('calls deleteListItem when delete button is clicked', () => {
        const { props, enzymeWrapper } = setup();

        enzymeWrapper.find('.list-item .btn-danger')
            .at(1)
            .simulate('click');

        expect(props.deleteListItem).toBeCalledWith(1);
    });

});
