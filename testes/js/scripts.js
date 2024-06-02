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