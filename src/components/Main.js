import React from 'react'
import styled from 'styled-components'

const onResize = e => {
  const sidebar = document.querySelector('.sidebar')
  const resize = e => {
    const size = e.pageX - sidebar.getBoundingClientRect().left

    if (size > 200 && size < 500) {
      sidebar.style.width = size + 'px'
    }
  }
  const stop = () => window.removeEventListener('mousemove', resize)

  e.preventDefault()
  window.addEventListener('mousemove', resize)
  window.addEventListener('mouseup', stop)
}

const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #549633;
`

const Aside = styled.aside`
  position: relative;
  width: 300px;
  font-size: 14px;
  text-align: initial;
  background-color: rgba(255, 255, 255, 0.8);
`

const Dragbar = styled.div`
  position: absolute;
  right: 0;
  width: 5px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  cursor: ew-resize;
`

const Sidebar = ({ children, onResize }) => (
  <Aside className='sidebar' style={{display: 'flex'}}>
    <div style={{width: '100%'}}>{children}</div>
    <Dragbar onMouseDown={onResize} />
  </Aside>
)

const Content = styled.article`
  z-index: 1;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.8);
`

export default ({ children }) => (
  <Container>
    <Sidebar onResize={onResize}>{children}</Sidebar>
    <Content>111111111111</Content>
  </Container>
)
