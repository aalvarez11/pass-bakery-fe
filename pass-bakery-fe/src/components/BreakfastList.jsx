import GetCategory from './GetCategory.jsx';
import BuildCategoryList from './BuildCategoryList.jsx';
import GetAndBuildCategory from './GetAndBuildCategory.jsx';

function BreakfastList() {
    // index for breakfast in menuData's menu array is 1
    //const breakfastSection = GetCategory(1);
    //const generatedHTML = BuildCategoryList(breakfastSection);

    return (
        <>
            <GetAndBuildCategory index='1' />
        </>
    );
}

export default BreakfastList;
