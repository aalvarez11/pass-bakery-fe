function BreakfastList() {
    return (
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
    )
}

export default BreakfastList;