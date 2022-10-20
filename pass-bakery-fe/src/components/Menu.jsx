import Coffee from './CoffeeList';
import Breakfast from './BreakfastList';
import Breads from './BreadList';

function Menu() {
    return (
        <div id="items-container">
            <Coffee></Coffee>
            <h2 id="menu-title">Breakfast</h2>
            <Breakfast></Breakfast>
            <h2 id="menu-title">Breads</h2>
            <Breads></Breads>
        </div>
    );
}

export default Menu;
