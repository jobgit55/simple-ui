import React from 'react';
import { render, RenderResult, fireEvent, wait, cleanup } from '@testing-library/react';
import Menu, { MenuProps } from './Menu';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const testProps: MenuProps = {
    defaultIndex: '0',
    onSelect: jest.fn(),
    className: 'menu-test'
}

const testVerticalProps: MenuProps = {
    defaultIndex: '0',
    mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
          <MenuItem>
            active
          </MenuItem>
          <MenuItem disabled>
            disabled
          </MenuItem>
          <MenuItem>
            test
          </MenuItem>
          <SubMenu title="dropdown">
              <MenuItem>
                drop1
                </MenuItem>
          </SubMenu>
        </Menu>
    )
}

const createStyleFile = () => {
    const cssFile: string = `
        .submenu {
            display: none;
        }
        .submenu.menu-opened {
            display: block;
        }
    `
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerHTML = cssFile
    return style
}

let wrapper: RenderResult, menuElement: HTMLElement, acitveElement: HTMLElement, disabledElement: HTMLElement
describe('Menu component test', () => {
    beforeEach(() => {
        wrapper = render(generateMenu(testProps))
        wrapper.container.append(createStyleFile())
        menuElement = wrapper.getByTestId('test-menu')
        acitveElement = wrapper.getByText('active')
        disabledElement = wrapper.getByText('disabled')
    })
    it('should render default Menu and MenuItem', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('menu menu-test')
        expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
        expect(acitveElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('should change active and call right callback', () => {
        const thirdItem = wrapper.getByText('test')
        fireEvent.click(thirdItem)
        expect(thirdItem).toHaveClass('is-active')
        expect(acitveElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith('2')
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith('1')
    })
    it('should render vertical mode', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerticalProps))
        const menuElement = wrapper.getByTestId('test-menu')
        expect(menuElement).toHaveClass('menu-vertical')
    })
    it('should show submenu when hover in horizontal mode menu', async () => {
        expect(wrapper.queryByText('drop1')).not.toBeVisible()
        const dropdownElement = wrapper.getByText('dropdown')
        fireEvent.mouseEnter(dropdownElement)
        await wait(() => {
            expect(wrapper.queryByText('drop1')).toBeVisible()
        })
        fireEvent.click(wrapper.getByText('drop1'))
        expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
        fireEvent.mouseLeave(dropdownElement)
        await wait(() => {
            expect(wrapper.queryByText('drop1')).not.toBeVisible()
        })
    })
})