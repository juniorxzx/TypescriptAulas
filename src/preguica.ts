import { Animal } from "./animal";

export class Preguica extends Animal{


    acao(): void {
        console.log(`${this.nome} está subindo na árvore`)
    }


    emitirSom(): void {
        console.log(`${this.nome} está reproduzindo um som desconhecido!!!`)
    }
}