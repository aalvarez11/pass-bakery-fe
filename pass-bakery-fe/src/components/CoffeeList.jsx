import BuildCategoryList from './BuildCategoryList.jsx';

function CoffeeList(props) {
    return (
        <>
            <BuildCategoryList name={props.secData.name} offerings={props.secData.offerings} />
        </>
    );
}

export default CoffeeList;
