import Item from "./item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari"/>
                <Item marca="chevrolet"/>
                <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List