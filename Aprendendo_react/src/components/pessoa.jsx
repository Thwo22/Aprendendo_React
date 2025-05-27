function Pessoa({nome, profissao, idade, foto}) {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h1>nome: {nome}</h1>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa