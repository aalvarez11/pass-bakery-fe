import GetCategory from './GetCategory.jsx';
import BuildCategoryList from './BuildCategoryList.jsx';

function BreadList() {
    // index for breads in menuData's menu array is 2
    const breadSection = GetCategory(2);
    const generatedHTML = BuildCategoryList(breadSection);

    return(
        <>
            {generatedHTML}
        </>
    );
}

export default BreadList;
