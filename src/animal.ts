export abstract class Animal{
    nome: string
    idade: number
    cor: string

    constructor(
        nome: string,
        idade: number,
        cor: string
    ){
        this.nome = nome
        this.idade = idade
        this.cor = cor
    }

    abstract emitirSom(): void
    
    abstract acao(): void
    
}