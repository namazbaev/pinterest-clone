import React from 'react'
import { Wrapper, Container } from './Pin.style'
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