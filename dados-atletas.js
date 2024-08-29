
class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return ('Infantil')
    }
    if (this.idade >=12 && this.idade <= 13) {
      return ('Juvenil')
    }
    if (this.idade >= 14 && this.idade <= 15) {
        return ('Intermediário')
    }
    if (this.idade >= 16 && this.idade <= 30) {
        return ('Adulto')
    }
    if (this.idade < 9 || this.idade > 30) {
        return ('Sem categoria')
    }
  }
  calculaIMC() {
    let imc = this.peso / (this.altura * this.altura)
    return imc
  }
  calculaMediaValida() {
    let notas_organizadas = this.notas.sort((a,b)=> b - a).slice(1,this.notas.length - 1)
    let soma = 0;
    notas_organizadas.forEach(function(nota){
      soma = soma + nota
    })
    let media = soma / notas_organizadas.length;
    return media
  }
  obtemNomeAtleta() {
    return this.nome
  }
  obtemIdadeAtleta() {
    return this.idade
  }
  obtemPesoAtleta() {
    return this.peso
  }
  obtemNotasAtleta() {
    return this.notas
  }
  obtemCategoria() {
    return this.calculaCategoria()
  }
  obtemIMC() {
    return this.calculaIMC()
  }
  obtemMediaValida() {
    return this.calculaMediaValida()
  }

}
const atleta = new Atleta("Cesar Abascal",
  30, 80, 1.70,
  [10, 9.34, 8.42, 10, 7.88]);

  console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
  console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
  console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
  console.log(`Altura: ${atleta.altura}`);
  console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
  console.log(`Categoria: ${atleta.obtemCategoria()}`);
  console.log(`IMC: ${atleta.obtemIMC()}`);
  console.log(`Média válida: ${atleta.obtemMediaValida().toFixed(8)}`);