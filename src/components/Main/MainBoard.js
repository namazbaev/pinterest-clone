import Pin from '../Pin/Pin'
import { Wrapper, Container } from './MainBoard.style'
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