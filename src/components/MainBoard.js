import React from 'react'
import Pin from './Pin'
import styled from 'styled-components'
const MainBoard = ({ pins }) => {
  return (
    <Wrapper>
      <Container>
        {pins.map(({ urls }) => <Pin urls={urls} />)}
      </Container>
    </Wrapper>
  )
}
export default MainBoard

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  width: 80%;
  background-color: #fff;
`
