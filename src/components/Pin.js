import React from 'react'
import styled from 'styled-components'

const Pin = ({ urls }) => {
  return (
    <Wrapper>
      <Container>
        <img src={urls?.regular} />
      </Container>
    </Wrapper>
  )
}
export default Pin

const Wrapper = styled.div`
  display: inline-flex;
  padding: 8px;

`
const Container = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 236px;
  cursor: pointer;

  img {
    width: 100%;
    display: flex;
    cursor: zoom-in;
    border-radius: 16px;
    object-fit: cover;
  }
`
