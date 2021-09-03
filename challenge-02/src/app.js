import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';

function App () {
  const data = [
    {
      id: '1',
      title: 'Título 1',
      content: '<h4>Conteúdo 1</h4>'
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
  
  return (
    <div className="site-wrapper">
      <Header />

      <Menu />
      
      <Sidebar titles={data} />
      
      <Content />
      
      <Footer />
    </div>
  );
}

export default App;