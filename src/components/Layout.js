import React from 'react'
import styled, { css } from 'styled-components'

const itemStyle = css`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-size: 30px;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: 70px auto 70px;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 10px;
  background-color: #2196F3;
  height: 100vh;
`

const Header = styled.header`
  ${itemStyle}
  grid-area: header;
`

const Content = styled.main`
  ${itemStyle}
  grid-area: main;
`

const Footer = styled.footer`
  ${itemStyle}
  grid-area: footer;
`

export default ({ children }) => (
  <Container>
    <Header>1</Header>
    <Content>{children}</Content>
    <Footer>2</Footer>
  </Container>
)
