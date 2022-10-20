import Coffee from './CoffeeList';
import Breakfast from './BreakfastList';
import Breads from './BreadList';

function Menu() {
    return (
        <div id="items-container">
            <Coffee></Coffee>
            <Breakfast></Breakfast>
            <Breads></Breads>
        </div>
    );
}

export default Menu;
