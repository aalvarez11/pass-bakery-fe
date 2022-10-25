import Coffee from './CoffeeList';
import Breakfast from './BreakfastList';
import Breads from './BreadList';

function Menu(props) {
    return (
        <div id="items-container">
            <Coffee secData={props.data.Coffee}></Coffee>
            <Breakfast secData={props.data.Breakfast}></Breakfast>
            <Breads secData={props.data.Bread}></Breads>
        </div>
    );
}

export default Menu;
