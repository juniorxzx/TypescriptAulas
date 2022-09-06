
import { Cachorro } from "./src/cachorro";
import { Cavalo } from "./src/cavalo";
import { Preguica } from "./src/preguica";

let cavalo = new Cavalo("Pedro", 12, "Branco")
let cachorro = new Cachorro("Bob", 3, "Dourado")
let preguica = new Preguica("Xis", 30, "Cinza")

cavalo.emitirSom()
cachorro.emitirSom()
preguica.emitirSom()