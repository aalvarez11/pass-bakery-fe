import Coffee from './CoffeeList';

function Menu() {
    return (
        <div id="items-container">
            <h2 id="menu-title">Coffee</h2>
            <Coffee></Coffee>
            <h2 id="menu-title">Breakfast</h2>
            <ul>
                <li>
                    <button name="oatmeal">
                        <span id="button-title">Oatmeal</span><br/>
                        <span id="button-price">$4.00</span>
                    </button>
                </li>
                <li>
                    <button name="toast">
                        <span id="button-title">Toast</span><br/>
                        <span id="button-price">$3.50</span>
                    </button>
                </li>
                <li>
                    <button name="egg-sandwich">
                        <span id="button-title">Egg Sandwich</span><br/>
                        <span id="button-price">$5.50</span>
                    </button>
                </li>
                <li>
                    <button name="egg-cheese-sandwich">
                        <span id="button-title">Egg and Cheese Sandwich</span><br/>
                        <span id="button-price">$6.50</span>
                    </button>
                </li>
            </ul>
            <h2 id="menu-title">Breads</h2>
            <ul>
                <li>
                    <button name="pain-campagne">
                        <span id="button-title">Pain de campagne</span><br/>
                        <span id="button-price">$7.00</span>
                    </button>
                </li>
                <li>
                    <button name="olive-lemon">
                        <span id="button-title">Olive and lemon</span><br/>
                        <span id="button-price">$7.50</span>
                    </button>
                </li>
                <li>
                    <button name="brioche">
                        <span id="button-title">Brioche</span><br/>
                        <span id="button-price">$8.00</span>
                    </button>
                </li>
                <li>
                    <button name="ciabatta">
                        <span id="button-title">Ciabatta</span><br/>
                        <span id="button-price">$5.50</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Menu;