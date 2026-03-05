export class Cliente{
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.#cpf = cpf
        this.endereco = endereco
        this.telefones = new Set()
    }

    get pegarNome(){
        return this.nome
    }

    get pegarCpf(){
        return this.#cpf
    }

    get pegarEnd(){
        return this.endereco
    }

    get pegarTel(){
        return this.telefones
    }


    get pegarNomeUp(){
        return this.nome.toUpperCase()
    }

    get pegarEndUp(){
        return this.endereco.toUpperCase()
    }


    get pegarNomeLow(){
        return this.nome.toLowerCase()
    }

    get pegarEndLow(){
        return this.endereco.toLowerCase()
    }
}

export class Telefone{
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }

    get pegarDDD(){
        return this.ddd
    }

    get pegarNumero(){
        return this.numero
    }
}

export class Endereco{
    constructor(estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }

    get pegarEst(){
        return this.estado
    }

    get pegarCid(){
        return this.cidade
    }

    get pegarRua(){
        return this.rua
    }

    get pegarNum(){
        return this.numero
    }


    get pegarEstUp(){
        return this.estado.toUpperCase()
    }

    get pegarCidUp(){
        return this.cidade.toUpperCase()
    }

    get pegarRuaUp(){
        return this.rua.toUpperCase()
    }

    get pegarEstLow(){
        return this.estado.toLowerCase()
    }

    get pegarCidLow(){
        return this.cidade.toLowerCase()
    }

    get pegarRuaLow(){
        return this.rua.toLowerCase()
    }
}

export class Empresa{
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.cliente = new Set()
        this.telefones = new Set()
    }

    addCliente(cliente){
        this.cliente.add(cliente)
    }
    
    get pegarEnd(){
        return this.endereco
    }

    get pegarRazaoSocial(){ 
        return this.razaoSocial 
    }

    get pegarNomeFantasia(){
        return this.nomeFantasia 
    }

    get pegarCnpj(){ 
        return this.#cnpj 
    }

    get pegarRazaoSocialUp(){ 
        return this.razaoSocial.toUpperCase() 
    }

    get pegarNomeFantasiaUp(){ 
        return this.nomeFantasia.toUpperCase() 
    }

    get pegarRazaoSocialLow(){
        return this.razaoSocial.toLowerCase() 
    }

    get pegarNomeFantasiaLow(){ 
        return this.nomeFantasia.toLowerCase() 
    }

    get mostrarDados(){
        let dadosEmpresa = "-----------------------------\n"
        dadosEmpresa += "Razão Social: " + this.razaoSocial + "\n"
        dadosEmpresa += "Nome Fantasia: " + this.nomeFantasia + "\n"
        dadosEmpresa += "-----------------------------\n"

        this.cliente.forEach(cliente => {
            dadosEmpresa += `Nome: ${cliente.pegarNome}\n`
            dadosEmpresa += `Estado: ${cliente.pegarEnd.pegarEst} `
            dadosEmpresa += `Cidade: ${cliente.pegarEnd.pegarCid} `
            dadosEmpresa += `Rua: ${cliente.pegarEnd.pegarRua} `
            dadosEmpresa += `Número: ${cliente.pegarEnd.pegarNum}\n`

            cliente.pegarTel.forEach(tel => {
                dadosEmpresa += `DDD: ${tel.pegarDDD} `
                dadosEmpresa += `Telefone: ${tel.pegarNumero}\n`
            })

            dadosEmpresa += "-----------------------------\n"
        })
        return dadosEmpresa
    }
}

