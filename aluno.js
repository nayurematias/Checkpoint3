export { Aluno }

class Aluno {

	constructor(nome, falta, notas) {
		this.nome = nome
		this.falta = falta
		this.notas = notas
	}

	calcularMedia() {
		return this.notas.reduce((t, n) => n+t, 0) / this.notas.length
	}

	faltas() {
		return ++this.falta;
	}

}