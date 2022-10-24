function BuildCategoryList(section) {
    const name = section.name;
    const offerings = section.offerings;

    return (
        <>
            <h2 className="menu-title">{name}</h2>
            <ul>
            {offerings.map((item, idx) => (
                <li key={idx}>
                <button name={`${item.name}`}>
                    <span className="button-title">{item.name}</span><br/>
                    <span className="button-price">${item.price}</span>
                </button>
                </li>
            ))}
            </ul>
        </>
    );
}

export default BuildCategoryList;
