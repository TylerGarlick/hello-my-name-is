import React, { Component } from 'react'
import styled from 'styled-components'
import Badge from './components/Badge'

const Container = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Badge />
      </Container>
    )
  }
}

export default App
