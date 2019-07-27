import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

// import TreeBG from '../c';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;

    return (
      <Wrapper>
        <Header>
          <h1>
            <Link to={`/`}>Stephen</Link>
          </h1>
        </Header>
        <Content>{children}</Content>
        {/* <footer>47.6736469 x -116.7812795</footer> */}
      </Wrapper>
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
`;

const Header = styled.header`
  padding-right: 2rem;
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
  }
`;

const Content = styled.main`
  background: url('/trees.jpeg') no-repeat center center;
  background-size: cover;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
