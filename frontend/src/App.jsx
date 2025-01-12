import { useState } from 'react'
import styled from 'styled-components'
import mountain from './img/mountain.jpg'
import { MainLayout } from './styles/Layout';


function App() {

  
  return (
    <AppStyled bg={mountain}>
    <MainLayout>
<h1>hi</h1>
    </MainLayout>
    </AppStyled>
  )
}
const AppStyled=styled.div`
  height:100vh;
  background-image:url(${props=>props.bg});
  position:relative;
  `;


export default App
