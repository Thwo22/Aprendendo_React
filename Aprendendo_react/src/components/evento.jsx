function Evento({numero}) {

    function meuEvento () {
        alert(`opa, fui ativado! ${numero}`)
    }
    return(
        <div>
            <p>clique para disparar um evento</p>
            <button onClick={meuEvento}>ativar</button>
        </div>
    )
}

export default Evento