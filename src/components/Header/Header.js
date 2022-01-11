import { useState } from 'react'
import { IconButton } from '@mui/material';
import { Search, Pinterest, Notifications, Textsms, Face, KeyboardArrowDown } from '@mui/icons-material';
import {
  Wrapper, LogoWrapper, HomePageButton, FollowingButton, SearchWrapper, SearchBarWrapper,
  IconsWrapper
} from './Header.style'
const Header = ({ onSubmit }) => {
  const [input, setInput] = useState('')
  const onSearch = e => {
    e.preventDefault()
    onSubmit(input)
  }
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <Pinterest />
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <a href='#'>Homepage</a>
        </HomePageButton>
        <FollowingButton>
          <a href='#'>Following</a>
        </FollowingButton>
        <SearchWrapper>
          <SearchBarWrapper>
            <IconButton>
              <Search />
            </IconButton>
            <form>
              <input type='text' onChange={e => setInput(e.target.value)} />
              <button type="submit" onClick={onSearch}></button>
            </form>
          </SearchBarWrapper>
        </SearchWrapper>
        <IconsWrapper>
          <IconButton><Notifications /></IconButton>
          <IconButton><Textsms /></IconButton>
          <IconButton><Face /></IconButton>
          <IconButton><KeyboardArrowDown /></IconButton>
        </IconsWrapper>
      </Wrapper>
    </>
  )
}
export default Header


