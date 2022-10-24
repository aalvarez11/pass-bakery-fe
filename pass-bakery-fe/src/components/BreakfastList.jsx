import BuildCategoryList from './BuildCategoryList.jsx';

function BreakfastList() {
    return (
        <>
            <BuildCategoryList name={props.secData.name} offerings={props.secData.offerings} />
        </>
    );
}

export default BreakfastList;
