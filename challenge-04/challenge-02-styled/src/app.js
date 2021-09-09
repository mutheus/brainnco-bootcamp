import { useState } from 'react';
import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';
import data from './data'

import GlobalStyle from './global-style';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 
    'header'
    'menu'
    'sidebar'
    'content'
    'footer';
  min-height: 100vh;
  grid-template-rows: auto auto 1fr 2fr auto;
  gap: 4px;
  
  @media (min-width: 599px) {
    grid-template-areas: 
      'header header'
      'menu menu'
      'sidebar content'
      'footer footer';
    grid-auto-columns: 1fr 2fr;
    grid-template-rows: auto auto 1fr auto;
  }
`;

function App () {
  const [title, setTitle] = useState(data[0].title);
  const [content, setContent] = useState(data[0].content);
  
  function handleItemClick (event, id) {
    event.preventDefault();
    
    setTitle(data[id].title);
    setContent(data[id].content);
  }
  
  return (
    <Wrapper>
      <GlobalStyle />
      
      <Header />

      <Menu />
      
      <Sidebar 
        titles={data} 
        handleItemClick={handleItemClick} 
      />
      
      <Content 
        title={title} 
        content={content} 
      />
      
      <Footer />
    </Wrapper>
  );
}

export default App;