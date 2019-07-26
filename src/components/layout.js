import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <Wrapper>
        <Header>
          <h1>
            <Link to={`/`}>Stephen</Link>
          </h1>
        </Header>
        <main>{children}</main>
        <footer>47.6736469 x -116.7812795</footer>
      </Wrapper>
    )
  }
}

export default Layout

const Wrapper = styled.div`
  background: #1f1f1f;
  display: flex;
  flex-direction: row;
  color: white;
`

const Header = styled.header`
  h1,
  a {
    color: yellow;
    font-family: Abril Fatface, serif;
    text-transform: uppercase;
    font-weight: 400;
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-decoration: none;
    font-size: 80px;
  }
`

const Content = styled.main`
  background: red;
`
