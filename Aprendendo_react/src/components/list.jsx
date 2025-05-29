import PropTypes from "prop-types"
import Item from "./item"

function List () {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="ferrari" ano_lancamento={1985}/>
                <Item marca="chevrolet" ano_lancamento={1964}/>
                <Item marca="Renault" ano_lancamento={1987}/>
                <Item marca={1999} ano_lancamento="1987"/>
                
            </ul>
        </>
    )
}

export default List