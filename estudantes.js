import { Aluno } from "./aluno.js";

export let estudantes = []

let aluno1 = new Aluno('João Pessoa', 5, [10, 5])
let aluno2 = new Aluno('Noronha Fernando', 9, [8, 4])
let aluno3 = new Aluno('Pessoa Nakamura', 7, [7, 7])

estudantes.push(aluno1, aluno2, aluno3)