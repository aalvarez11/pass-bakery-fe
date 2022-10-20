import { menuData } from '../data/menuData.js';

/** 
 * Helper functions I wrote to help out with generating the menu sections.
 * 
 * getSection could be inside another function, but I kept it as its own
 * for potential use as a catch/validator.
 * 
 * buildSection generates the html using the isolated section from the
 * json, as required
*/

const menuHelpers = {
    getSection: function(index) {
        // only 3 sections at the moment: coffee, breakfast, bread
        if (index >= 0 && index < 3) {
            return menuData.menu[index];
        } else {
            console.log('out of bounds of menu array.');
        }
    },
    buildSection: function(section) {
        const name = section.name;
        const offerings = section.offerings;

        return (
            <>
                <h2 id="menu-title">{name}</h2>
                <ul>
                {offerings.map((item, idx) => (
                    <li key={idx}>
                    <button name={`${item.name}`}>
                        <span id="button-title">{item.name}</span><br/>
                        <span id="button-price">${item.price}</span>
                    </button>
                    </li>
                ))}
                </ul>
            </>
        );
    },
    testPrint: function() {
        console.log('Testing the helper!');
        console.log(menuData);
        //console.log(menuData.menu[0].offerings);
    }
}

export default menuHelpers;
