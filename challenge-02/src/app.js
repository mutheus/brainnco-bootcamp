import { useState } from 'react';
import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';

const data = [
  {
    id: 1,
    title: 'Aftertaste half and half caramelization, coffee filter',
    content: 'Variety galão decaffeinated seasonal café au lait sit est kopi-luwak con panna. Americano, half and half and cup mocha galão arabica saucer strong mocha plunger pot.'
  },
  {
    id: 2,
    title: 'Caramelization that whipped cappuccino beans acerbic brewed flavour espresso',
    content: 'Filter so siphon, dark half and half grinder whipped sweet con panna americano cappuccino acerbic. Breve, mazagran skinny so qui crema breve percolator organic bar.'
  },
  {
    id: 3,
    title: 'Título 3',
    content: 'Conteúdo 3'
  }
];

function App () {
  const [title, setTitle] = useState(data[0].title);
  const [content, setContent] = useState(data[0].content);
  
  function handleItemClick (event, id) {
    event.preventDefault();
    
    setTitle(data[id].title);
    setContent(data[id].content);
  }
  
  return (
    <div className="site-wrapper">
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
    </div>
  );
}

export default App;