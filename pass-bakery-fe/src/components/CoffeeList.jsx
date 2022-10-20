import menuHelpers from '../helpers/menuHelpers.jsx';

function CoffeeList() {
    // index for coffee in menuData's menu array is 0
    const coffeeSection = menuHelpers.getSection(0);
    const generatedHTML = menuHelpers.buildSection(coffeeSection);

    return(
        <>
            {generatedHTML}
        </>
    );
}

export default CoffeeList;
