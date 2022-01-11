import { useState } from 'react'
import { IconButton } from '@mui/material';
import { Search, Pinterest, Notifications, Textsms, Face, KeyboardArrowDown } from '@mui/icons-material';
import styled from 'styled-components'
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: #fff;
  color: #000;
`
const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`
const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  margin-right: 10px;
  cursor: pointer;
`
const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17,17,17);

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`
const FollowingButton = styled(HomeButtons)`
  background-color: #fff;
  a {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
  }
  :hover {
    background-color: #e1e1e1;
  }
`
const SearchWrapper = styled.div`
  flex: 1;
`
const SearchBarWrapper = styled.div`
  display:flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;
  background-color: #efefef;

  form {
    display: flex;
    flex: 1;
  }
  form > input {
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
    background-color: transparent;
    :focus {
      outline: none;
    }
  }
  form > button {
    display: none;
  }
`
const IconsWrapper = styled.div`
  margin-left: 10px;
`
