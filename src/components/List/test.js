import React from 'react';
import List from './List';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

const listItemsDefault = [
    { cityName: 'Minsk', cityCode: 'minsk', id: 0, },
    { cityName: 'Brest', cityCode: 'brest', id: 1, }
];

function setup(listItems = listItemsDefault) {
    const props = {
        changeRoute: jest.fn(),
        deleteListItem: jest.fn(),
        listItems,
    };

    const enzymeWrapper = mount(<List {...props} />);
    const render = renderer.create(<List {...props} />);

    return {
        props,
        enzymeWrapper,
        render,
    };
}

describe('List component', () => {

    it('renders a text message "No cities are available in the region." if no listItems are available', () => {

        const { render, } = setup([]);
        expect(render.toJSON()).toMatchSnapshot();
    });

    it('renders correctly a list with 2 items: Minsk, Brest', () => {

        const { render, } = setup();
        expect(render.toJSON()).toMatchSnapshot();
    });

    it('calls changeRoute with "/minsk" cityCode when Minsk listItem is clicked', () => {
        const { props, enzymeWrapper, } = setup();

        enzymeWrapper.find('.list-item a')
            .at(0)
            .simulate('click');

        expect(props.changeRoute).toBeCalledWith('/minsk');
    });

    it('calls deleteListItem with id=1 when Brest list item delete button is clicked', () => {
        const { props, enzymeWrapper, } = setup();

        enzymeWrapper.find('.list-item .btn-danger')
            .at(1)
            .simulate('click');

        expect(props.deleteListItem).toBeCalledWith(1);
    });

});
