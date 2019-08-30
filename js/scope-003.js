function one(){
    var scopeOneItems = ["Fring", "Hank", "Mike"];

    scopeOneItems.forEach(pessoa => {
        let chegouPorUltimo = pessoa;
        console.log("Dentro do bloco for: ", chegouPorUltimo);
    });

    console.log("A última pessoa foi: ", chegouPorUltimo);
    
}

one();