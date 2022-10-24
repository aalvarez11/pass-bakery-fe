import BuildCategoryList from './BuildCategoryList.jsx';

function BreakfastList(props) {
    return (
        <>
            <BuildCategoryList name={props.secData.name} offerings={props.secData.offerings} />
        </>
    );
}

export default BreakfastList;
