import Pin from './Pin'
import styled from 'styled-components'
const MainBoard = ({ pins }) => {
  return (
    <Wrapper>
      <Container>
        {pins.map(({ urls }, i) => <Pin key={i} urls={urls} />)}
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
  column-count: 5;
  column-gap: 10px;
  margin: 0 auto;
  height: 100%;
  max-width: 1260px;
  background-color: #fff;
`