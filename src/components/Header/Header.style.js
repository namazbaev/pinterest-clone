import styled from 'styled-components'

export const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
  }
`
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: #fff;
  color: #000;
`
export const HomeButtons = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  margin-right: 10px;
  cursor: pointer;
`
export const HomePageButton = styled(HomeButtons)`
  background-color: rgb(17,17,17);

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
`
export const FollowingButton = styled(HomeButtons)`
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
export const SearchWrapper = styled.div`
  flex: 1;
`
export const SearchBarWrapper = styled.div`
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
export const IconsWrapper = styled.div`
  margin-left: 10px;
`