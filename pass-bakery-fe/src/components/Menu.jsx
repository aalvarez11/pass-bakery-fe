import Coffee from './CoffeeList';
import Breakfast from './BreakfastList';
import Breads from './BreadList';

function Menu(props) {
    // coffee is 0, breakfast is 1, breads are 2
    return (
        <div id="items-container">
            <Coffee secData={props.data[0]}></Coffee>
            <Breakfast secData={props.data[1]}></Breakfast>
            <Breads secData={props.data[2]}></Breads>
        </div>
    );
}

export default Menu;
