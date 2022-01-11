import React from 'react'
import { IconButton } from '@mui/material';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from 'styled-components'
const Header = () => {
  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <IconButton>
            <PinterestIcon />
          </IconButton>
        </LogoWrapper>
        <HomePageButton>
          <a href='#'>Homepage</a>
        </HomePageButton>
        <FollowingButton>
          <a href='#'>Following</a>
        </FollowingButton>
        {/* <SearchWrapper>
        <SearchBarWrapper></SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper></IconsWrapper> */}
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