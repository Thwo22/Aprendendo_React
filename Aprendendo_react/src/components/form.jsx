import { useState } from  "react"

function Form() {

    function cadastrarUser(e) {
        e.preventDefault()
        console.log(`usuario ${name} foi cadastrado usando a senha ${password}`)
        alert("Cadastrou!")
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="ame">Nome:</label>
                    <input type="text" 
                    id="name"
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" 
                    id="password" name="password" 
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form