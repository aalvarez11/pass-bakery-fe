import { menuData } from './data/menuData';
import TitleNav from './components/TitleNav';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <>
      <TitleNav></TitleNav>
      <hr/>
      <Menu data={menuData.menu}></Menu>
    </>
  );
}

export default App;
