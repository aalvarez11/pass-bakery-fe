function CoffeeList() {
    return(
        <ul>
                <li>
                    <button name="espresso">
                        <span id="button-title">Espresso</span><br/>
                        <span id="button-price">$2.75</span>
                    </button>
                </li>
                <li>
                    <button name="cappuccino">
                        <span id="button-title">Cappuccino</span><br/>
                        <span id="button-price">$3.50</span>
                    </button>
                </li>
                <li>
                    <button name="latte">
                        <span id="button-title">Latte</span><br/>
                        <span id="button-price">$4.00</span>
                    </button>
                </li>
                <li>
                    <button name="drip">
                        <span id="button-title">Drip</span><br/>
                        <span id="button-price">$2.50</span>
                    </button>
                </li>
                <li>
                    <button name="pour-over">
                        <span id="button-title">Pour Over</span><br/>
                        <span id="button-price">$4.75</span>
                    </button>
                </li>
            </ul>
    );
}

export default CoffeeList;