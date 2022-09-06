import { Animal } from "./animal";

export class Cavalo extends Animal{


    acao(): void {
        console.log(`${this.nome} está correndo`)
    }


    emitirSom(): void {
        console.log(`${this.nome} está relinchando`)
    }
}