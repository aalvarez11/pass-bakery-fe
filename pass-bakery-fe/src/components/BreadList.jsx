import BuildCategoryList from './BuildCategoryList.jsx';

function BreadList() {
    return (
        <>
            <BuildCategoryList name={props.secData.name} offerings={props.secData.offerings} />
        </>
    );
}

export default BreadList;
