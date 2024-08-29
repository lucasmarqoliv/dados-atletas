# Projeto Atleta

Este projeto é uma aplicação em JavaScript que cria e gerencia informações de atletas, calculando parâmetros como categoria, IMC e média válida das notas. 

## Funcionalidades

- **Calcula a categoria do atleta** com base na idade.
- **Calcula o IMC (Índice de Massa Corporal)** do atleta.
- **Calcula a média válida das notas**, excluindo a maior e a menor nota.
- **Obtém e exibe informações do atleta** como nome, idade, peso, altura, e notas.

## Classe `Atleta`

A classe `Atleta` possui os seguintes atributos e métodos:

### Atributos
- `nome`: Nome do atleta.
- `idade`: Idade do atleta.
- `peso`: Peso do atleta.
- `altura`: Altura do atleta.
- `notas`: Array de notas atribuídas ao atleta.

### Métodos
- `calculaCategoria()`: Calcula e retorna a categoria do atleta com base na idade.
- `calculaIMC()`: Calcula e retorna o IMC do atleta.
- `calculaMediaValida()`: Calcula e retorna a média válida das notas (excluindo a maior e a menor nota).
- `obtemNomeAtleta()`: Retorna o nome do atleta.
- `obtemIdadeAtleta()`: Retorna a idade do atleta.
- `obtemPesoAtleta()`: Retorna o peso do atleta.
- `obtemNotasAtleta()`: Retorna as notas do atleta.
- `obtemCategoria()`: Retorna a categoria do atleta.
- `obtemIMC()`: Retorna o IMC do atleta.
- `obtemMediaValida()`: Retorna a média válida das notas.

Instalação:
Clone o repositório: https://github.com/lucasmarqoliv/dados-atletas.git

Navegue até o diretório do projeto: cd dados-atleta

Execute o código usando um ambiente de JavaScript (por exemplo, Node.js).
