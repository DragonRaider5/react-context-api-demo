import React from 'react'
import styled from 'styled-components'

export default ({ children, title, ...restProps }) => (
  <Wrapper>
    <Title>
      { title }
    </Title>

    { children }
  </Wrapper>
)

const Wrapper = styled.div`
  display: block;
  position: relative;

  border: 1px solid #CCC;
  border-radius: 4px;

  padding: 16px;
  padding-top: 20px;
`

const Title = styled.span`
  position: absolute;
  top: -0.5em;
  left: 8px;

  line-height: 1em;
  padding: 0px 8px;

  color: #333;
  background: white;
`
