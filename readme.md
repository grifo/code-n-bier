# Dojo de 01 de agosto de 2012

## Problema: Lista e soma

Para os números naturais menores que 10 e múltiplos de 3 ou 5 temos 3, 5, 6 e 9. A soma destes múltiplos resulta em 23.

Queremos um algoritmo que, dado um número natural, ele retorne a coleção de todos os múltiplos de 3 e 5 menores que este e a soma destes múltiplos.

**Entrada:** 14

**Saída:** 3, 5, 6, 9, 10, 12, 45

<br>
Problema inspirado em <http://projecteuler.net/problem=1>

## Test Framework e Assertion library

### Mocha
[Mocha](//visionmedia.github.com/mocha/) é um framework de testes que roda em node e browser. O framework permite utilizar diferentes DSLs para escrever os testes, entre elas *BDD* e *TDD*.

Para o Dojo utilizamos a versão para browser com a interface *TDD*.


### Chai Assertion Library
[Chai](//chaijs.com/) é uma biblioteca para *assertion* para node e browser. A biblioteca define diferentes interfaces de testes, entre elas *Should*, *Expect* e *Assert*.

Nossos testes estão escritos com *Assert*, estilo clássico para TDD. 
