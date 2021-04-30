import React from 'react'
import {shallow,configure } from 'enzyme'
import { LoginPage } from '../../components/loginPage'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
test('should correctly render LoginPage', ()=>{
    const wrapper = shallow(<LoginPage/>)
    expect(wrapper).toMatchSnapshot()
})

test('should  call startLogin on button click', ()=>{
    const startLogin = jest.fn()
    const wrapper = shallow(<LoginPage startLogin={startLogin} />)
    wrapper.find('button').simulate('click')
    expect(LoginPage).toHaveBeenCalled()
  })