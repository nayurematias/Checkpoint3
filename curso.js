import { Aluno } from "./aluno.js";
import { estudantes } from "./estudantes.js"

class Curso {
	constructor(nome, nota, faltas, estudantes) {
		this.nome = nome
		this.nota = nota
		this.faltas = faltas
		this.estudantes = estudantes
	}

	addEstudante(nome, falta, notas) {
		return estudantes.push(new Aluno(nome, falta, notas))
	}

	getEstudante() {
		return this.estudantes
	}

	aprovacao(nome) {
		const estudante = estudante => estudante.nome === nome
		const estudanteFiltrado = estudantes.filter(estudante)
		let mediaEstudante
		let faltasEstudante

		if (estudanteFiltrado.length == 0) {
			return false
		} else {
			mediaEstudante = estudanteFiltrado[0].calcularMedia() 
			faltasEstudante = estudanteFiltrado[0].falta
		}

		if (mediaEstudante >= curso.nota && faltasEstudante < curso.faltas) {
			return true
		} else if ((faltasEstudante == curso.faltas) && (mediaEstudante > curso.nota * 1.1 )) {
			return true
		} else {
			return false
		}
	}

	getAprovados() {
		let lista = []

		this.estudantes.map((estudante) => {
			lista[estudante.nome] = curso.aprovacao(estudante.nome)
		})

		return lista
	}
}

// Adicionar novo Curso
let curso = new Curso('Informatica', 7, 8, estudantes)

// Adicionar Estudantes do Curso
curso.addEstudante('Igor', 8, [7 , 8])
curso.addEstudante('Nayure', 5, [8 , 6])

// Checar aprovação
curso.aprovacao('Nayure')

// Puxar todos os Aprovaods
curso.getAprovados()
