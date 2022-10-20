function BreadList() {
    return(
        <>
            <h2 id="menu-title">Breads</h2>
            <ul>
                <li>
                    <button name="pain-campagne">
                        <span id="button-title">Pain de campagne</span><br/>
                        <span id="button-price">$7.00</span>
                    </button>
                </li>
                <li>
                    <button name="olive-lemon">
                        <span id="button-title">Olive and lemon</span><br/>
                        <span id="button-price">$7.50</span>
                    </button>
                </li>
                <li>
                    <button name="brioche">
                        <span id="button-title">Brioche</span><br/>
                        <span id="button-price">$8.00</span>
                    </button>
                </li>
                <li>
                    <button name="ciabatta">
                        <span id="button-title">Ciabatta</span><br/>
                        <span id="button-price">$5.50</span>
                    </button>
                </li>
            </ul>
        </>
    )
}

export default BreadList;