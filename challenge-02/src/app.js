import { useState } from 'react';
import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';

const data = [
  {
    id: '1',
    title: 'Aftertaste half and half caramelization, coffee filter.',
    content: 'Variety galão decaffeinated seasonal café au lait sit est kopi-luwak con panna. Americano, half and half and cup mocha galão arabica saucer strong mocha plunger pot.'
  },
  {
    id: '2',
    title: 'Título 2',
    content: '<h4>Conteúdo 2</h4>'
  },
  {
    id: '3',
    title: 'Título 3',
    content: '<h4>Conteúdo 3</h4>'
  }
];

function App () {
  const [title, setTitle] = useState(data[0].title);
  const [content, setContent] = useState(data[0].content);
  
  return (
    <div className="site-wrapper">
      <Header />

      <Menu />
      
      <Sidebar titles={data} />
      
      <Content 
        title={title} 
        content={content} 
      />
      
      <Footer />
    </div>
  );
}

export default App;