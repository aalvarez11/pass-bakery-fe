import { menuData } from "../data/menuData";
import TitleNav from "./TitleNav";
import Menu from "./Menu";

function BakeryMain(props) {
  const menuObj = {};
  menuData.menu.map((item, idx) => {
    menuObj[menuData.menu[idx].name] = item;
  });

  return (
    <div className={props.className}>
      <TitleNav></TitleNav>
      <Menu data={menuObj}></Menu>
    </div>
  );
}

export default BakeryMain;
