import GetCategory from './GetCategory.jsx';
import BuildCategoryList from './BuildCategoryList.jsx';
import GetAndBuildCategory from './GetAndBuildCategory.jsx';

function BreadList() {
    // index for breads in menuData's menu array is 2
    //const breadSection = GetCategory(2);
    //const generatedHTML = BuildCategoryList(breadSection);

    return(
        <>
            <GetAndBuildCategory index='0' />
        </>
    );
}

export default BreadList;
