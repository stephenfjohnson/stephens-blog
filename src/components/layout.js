import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GlobalStyle } from '../theme/globalStyle';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <Header>
            <h1>
              <Link to={`/`}>Stephen</Link>
            </h1>
          </Header>
          <Content>{children}</Content>
          {/* <footer>47.6736469 x -116.7812795</footer> */}
        </Wrapper>
      </>
    );
  }
}

export default Layout;

const Wrapper = styled.div`
  background-color: #111011;
  /* background: #1f1f1f; */
  display: flex;
  flex-direction: row;
  color: white;
  padding: 6rem 6rem 6rem 2rem;
  min-height: 100vh;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const Header = styled.header`
  /* padding-right: 2rem; */
  h1,
  a {
    color: yellow;
    font-family: Abril Fatface, serif;
    font-weight: 400;
    text-transform: uppercase;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-decoration: none;
    font-size: 80px;
    box-shadow: none;
    @media only screen and (max-width: 800px) {
      font-size: 60px;
      writing-mode: horizontal-tb;
      text-orientation: normal;
      margin: 0 0 2rem 0;
    }
  }
`;

const Content = styled.main`
  background: url('/trees.jpeg') no-repeat center top #22272d;
  /* background-size: cover; */
  background-size: 100% auto;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  @media only screen and (max-width: 800px) {
    padding: 1rem;
  }
`;
