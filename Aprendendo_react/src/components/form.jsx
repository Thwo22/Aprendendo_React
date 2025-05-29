function Form() {

    function cadastrarUser(e) {
        e.preventDefault()
        alert("Cadastrou!")
    }
    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form