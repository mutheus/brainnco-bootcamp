import { Header } from './components/header';
import { Menu } from './components/menu';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';

function App () {
  return (
    <div className="site-wrapper">
      <Header />

      <Menu />
      
      <Sidebar />
      
      <Content />
      
      <Footer />
    </div>
  );
}

export default App;