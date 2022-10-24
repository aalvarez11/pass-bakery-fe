import { menuData } from '../data/menuData.js';

function GetCategory(index) {
    // only 3 sections at the moment: coffee, breakfast, bread
    if (index >= 0 && index < 3) {
        return menuData.menu[index];
    } else {
        console.log('out of bounds of menu array.');
    }
}

export default GetCategory;
