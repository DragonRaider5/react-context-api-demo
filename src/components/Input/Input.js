import React from 'react'
import styled from 'styled-components'

export default ({ readOnly, multiline, defaultValue, value, ...restProps }) => readOnly
  ? (
    <Text {...restProps}>
      { defaultValue || value}
    </Text>
  )
  : React.createElement(
    multiline ? TextArea : Input,
    {
      value,
      defaultValue,
      rows: 4,
      ...restProps
    }
  )

const Text = styled.span`
  font-weight: 300;
  color: #333;
  font-size: 16px;
`

const Input = Text.withComponent('input').extend`
  padding: 2px;
  width: 100%;

  border: none;
  border-bottom: 1px solid #CCC;
  transition: border 0.2s;

  &:focus {
    outline: none;
    border-bottom: 1px solid #666;
  }
`

const TextArea = Input.withComponent('textarea').extend`
  padding: 2px 4px;

  border: 1px solid #CCC;
  border-radius: 4px;

  &:focus {
    border: 1px solid #666;
  }
`
