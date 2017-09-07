import React from 'react'
import UserForm from './user-form'
import renderer from 'react-test-renderer'

test('Renders with empty input + disabled button', () => {
  const component = renderer.create(<UserForm />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button gets enabled after adding input', () => {
  const dummyFunction = () => {}
  const component = renderer.create(<UserForm onSubmit={dummyFunction} />)
  let tree = component.toJSON()

  const input = tree.children[0]
  input.props.onChange({ target: { value: 'a' } })

  const button = tree.children[1]
  button.props.onClick()

  tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Renders with initial user + enabled button', () => {})

test('Button gets disabled afer removing input', () => {})
