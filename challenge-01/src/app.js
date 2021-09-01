import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

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