import 'jsdom-global/register'
import React from 'react'
import UserForm from './user-form'
import { expect } from 'chai'
import { mount } from 'enzyme'

describe('Renders correctly', () => {
  const wrapper = mount(<UserForm />)
  const button = wrapper.find('button')
  const input = wrapper.find('input')

  it('input has no value', () => {
    expect(input.getDOMNode().value).to.equal('')
  })

  it('button is disabled by default', () => {
    expect(button.props().disabled).to.equal(true)
  })

  it('button is enabled when text changes', () => {
    input.getDOMNode().value = 'a'
    input.simulate('change')
    expect(button.props().disabled).to.equal(false)
  })
})

describe('Works correctly with initialUser', () => {
  // Write code here
})
