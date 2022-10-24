import GetCategory from './GetCategory.jsx';
import BuildCategoryList from './BuildCategoryList.jsx';
import GetAndBuildCategory from './GetAndBuildCategory.jsx';

function CoffeeList() {
    // index for coffee in menuData's menu array is 0
    //const coffeeSection = GetCategory(0);
    //const generatedHTML = BuildCategoryList(coffeeSection);

    return(
        <>
            <GetAndBuildCategory index='0' />
        </>
    );
}

export default CoffeeList;
