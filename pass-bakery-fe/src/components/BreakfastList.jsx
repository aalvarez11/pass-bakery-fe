import GetCategory from './GetCategory.jsx';
import BuildCategoryList from './BuildCategoryList.jsx';

function BreakfastList() {
    // index for breakfast in menuData's menu array is 1
    const breakfastSection = GetCategory(1);
    const generatedHTML = BuildCategoryList(breakfastSection);

    return (
        <>
            {generatedHTML}
        </>
    );
}

export default BreakfastList;
