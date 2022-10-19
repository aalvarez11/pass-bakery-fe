import logo from './images/1p-site-logo.svg';
import bread from './images/bread.jpeg';
import './App.css';

function App() {
  return (
    <body>
        <div id="head-container">
            <div id="title-hours">
                <img src={logo} alt="one pass logo"/>
                <h1>Pass Bakery</h1>
                <p>620 N 25th St, San Francisco, CA</p>
                <h2>Bakery Hours:</h2> 
                <p>Mon-Fri 6AM-5PM PT,<br/>Sat-Sun 7AM-4PM PT</p>
            </div>
            <img id="bread-image" src={bread} alt="fresh baked bread"/>
        </div>
        <hr/>
        <div id="items-container">
            <h2 id="menu-title">Coffee</h2>
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
    </body>
  );
}

export default App;
