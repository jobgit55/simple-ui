import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'test-class'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('Button Component test', () => {
    it('should render default button', () => {
        const wrapper = render(<Button {...defaultProps}>Test</Button>)
        const element = wrapper.getByText('Test') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element.disabled).toBeFalsy()
        expect(element).toHaveClass('btn btn-default')
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render different props button', () => {
        const wrapper = render(<Button {...testProps}>Test</Button>)
        const element = wrapper.getByText('Test')
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg test-class')
    })
    it('should render link when btnType is link', () => {
        const wrapper = render(<Button btnType={'link'} href="http://dummyurl">Test</Button>)
        const element = wrapper.getByText('Test')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled', () => {
        const wrapper = render(<Button {...disabledProps}>Test</Button>)
        const element = wrapper.getByText('Test') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})