import menuHelpers from "../helpers/menuHelpers";

function BreadList() {
    // index for breads in menuData's menu array is 2
    const breadSection = menuHelpers.getSection(2);
    const generatedHTML = menuHelpers.buildSection(breadSection);

    return(
        <>
            {generatedHTML}
        </>
    );
}

export default BreadList;
