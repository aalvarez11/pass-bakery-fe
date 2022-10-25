import { menuData } from './data/menuData';
import TitleNav from './components/TitleNav';
import Menu from './components/Menu';
import './App.css';

function App() {
  const menuObj = {};
  menuData.menu.forEach((item, idx) => {
    menuObj[menuData.menu[idx].name] = item;
  });

  return (
    <>
      <TitleNav></TitleNav>
      <hr/>
      <Menu data={menuObj}></Menu>
    </>
  );
}

export default App;
