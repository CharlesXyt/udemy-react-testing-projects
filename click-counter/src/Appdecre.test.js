import React from 'react'
import Enzyme,{ shallow } from 'enzyme'
import EnzymeAdapter from "enzyme-adapter-react-16"
import App from './App'

Enzyme.configure({adapter:new EnzymeAdapter()});

const setup = (props={},state=null) =>{
    const wrapper = shallow(<App {...props}/>)
    if(state) wrapper.setState(state)
    return wrapper
}

test('counter decrement,when decrement button click',()=>{
    const wrapper = setup(null,{counter:10})
    const button = wrapper.find('[data-test="decrement-button"]')
    button.simulate('click')
    const counterDisplay = wrapper.find('[data-test="counter-display"]')
    expect(counterDisplay.text()).toContain(9)
})

test('counter cannot below 0',()=>{
    const wrapper = setup(null,{counter:0})
    const button = wrapper.find('[data-test="decrement-button"]')
    button.simulate('click')
    const counterDisplay = wrapper.find('[data-test="counter-display"]')
    expect(counterDisplay.text()).toContain(0)
})


test('if count is 0, decrement counter will show error',()=>{
    const wrapper = setup(null,{counter:0})
    const button = wrapper.find('[data-test="decrement-button"]')
    button.simulate('click')
    const errorMessage = wrapper.find('[data-test="error-display"]')
    expect(errorMessage.length).toBe(1)
})


test('if count is higher than 0, error will disappear',()=>{
    const wrapper = setup(null,{counter:0})
    const button = wrapper.find('[data-test="decrement-button"]')
    button.simulate('click')
    const buttonDec = wrapper.find('[data-test="increment-button"]')
    buttonDec.simulate('click')
    wrapper.update()
    const errorMessageNew = wrapper.find('[data-test="error-display"]')
    expect(errorMessageNew.length).toBe(0)
})