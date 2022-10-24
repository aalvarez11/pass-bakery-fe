import { menuData } from '../data/menuData.js';

function GetAndBuildCategory(props) {
    let index = props.index;

    // only 3 sections at the moment: coffee, breakfast, bread
    if (index >= 0 && index < 3) {
        var section = menuData.menu[index];
    } else {
        console.log('out of bounds of menu array.');
    }

    // now build the html section using the json data selection
    const name = section.name;
    const offerings = section.offerings;

    return (
        <>
            <h2 class="menu-title">{name}</h2>
            <ul>
            {offerings.map((item, idx) => (
                <li key={idx}>
                <button name={`${item.name}`}>
                    <span class="button-title">{item.name}</span><br/>
                    <span class="button-price">${item.price}</span>
                </button>
                </li>
            ))}
            </ul>
        </>
    );
}

export default GetAndBuildCategory;
