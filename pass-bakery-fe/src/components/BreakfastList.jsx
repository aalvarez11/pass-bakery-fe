import menuHelpers from "../helpers/menuHelpers";

function BreakfastList() {
    // index for breakfast in menuData's menu array is 1
    const breakfastSection = menuHelpers.getSection(1);
    const generatedHTML = menuHelpers.buildSection(breakfastSection);

    return (
        <>
            {generatedHTML}
        </>
    );
}

export default BreakfastList;
