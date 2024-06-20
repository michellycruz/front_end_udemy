const animal = {
    nome: "bob",
    latir: function(){
        console.log("au au")
    }
}


console.log(animal.nome)

animal.latir()

// 2 - aprofundando em métodos

const pessoa = {
    nome: "Michelly",
    getNome: function(){
        return this.nome
    },
    setNome: function(novoNome){
        this.nome = novoNome
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("Luana")

console.log(pessoa.getNome())

// 4 - mais sobre prototype

const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject))

const mySecondObject = Object.create(myObject);

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"

console.log(bulldog)


// 1 - strict


"use strict";

opa = "teste"