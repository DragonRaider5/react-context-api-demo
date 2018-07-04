import React from 'react'
import styled from 'styled-components'

import DataPane from './components/DataPane/DataPane.js'
import Input from './components/Input/Input.js'

export default (props) => (
  <DataPane {...props} title="Personal Information">
    <Entry>
      <Key>
        Name:
      </Key>
      <Value>
        Max Musterman
      </Value>
    </Entry>

    <Entry>
      <Key>
        Beruf:
      </Key>
      <Value>
        <Input defaultValue='Programmierer' />
      </Value>
    </Entry>

    <Entry>
      <Key>
        Bio:
      </Key>
      <Value>
        <Input defaultValue='I love programming!' multiline />
      </Value>
    </Entry>
  </DataPane>
)

const Entry = styled.div`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`

const Key = styled.span`
  display: block;

  flex: 1 0 0px;
  font-weight: 400;
  color: #333;
`

const Value = styled.div`
  flex: 1 0 0px;
  font-weight: 300;
  color: #333;
`
