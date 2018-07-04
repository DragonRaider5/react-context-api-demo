import React from 'react'
import styled from 'styled-components'

import PersonalInformation from './PersonalInformation.js'

export default () => (
  <Wrapper>
    <Heading>
      Welcome
    </Heading>

    <PersonalInformation />
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 16px;
`

const Heading = styled.h1`
  margin-top: 0px;
`
