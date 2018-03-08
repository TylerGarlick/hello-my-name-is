import React, { Component } from 'react'
import styled from 'styled-components'

const BadgeContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: white;
  width: 600px;
  box-shadow: 0 0 50px 20px rgba(0,0,0, 0.6);
  padding: 0;
`

const RedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
  padding: 32px;
  color: white;
`

const RedFooter = RedContainer.extend`
  min-height: 16px;
`

const WhiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 32px;
  color: black;
`

const HelloContainer = styled.section`
  font-size: 100px;
  font-weight: bold;
  line-height: 100%;
`

const NameIsContainer = styled.div`
  font-size: 36px;
  font-style: italic;
  line-height: 100%;
  margin-bottom: 16px;
`

const NameInput = styled.textarea`
  display: block;
  font-size: 120px;
  font-weight: bold;
  line-height: 100%;
  font-family: 'Amatic SC', cursive;
  height: 140px;
  text-align: center;
  outline: none;
  border: 0;
  background: transparent;
  
  &:hover, &:focus {
    outline: none;
    border: 0;
  }
`

class Badge extends Component {

  state = {
    name: 'Tyler'
  }

  render() {

    const { name } = this.state
    return (
      <BadgeContainer>
        <RedContainer>
          <HelloContainer>Hello</HelloContainer>
          <NameIsContainer>my name is ...</NameIsContainer>
        </RedContainer>
        <WhiteContainer>
          <NameInput type="text" value={name} onChange={e => this.setState({ name: e.target.value })} />
        </WhiteContainer>
        <RedFooter />
      </BadgeContainer>
    )
  }
}

export default Badge
