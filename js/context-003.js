//1 - Veja esta função simples
function myFx(){    
    console.log("Escopo Isolado da função myFx");
}

//2 - vamos simplificar, remova o nome da função
const myFx = function(){
    console.log("Escopo Isolado da função anônima setada na variável.");
}

//Execução comum
myFx();

//3 - Uma alternativa que produz o mesmo resultado
(myFx)();

//4 - Agora vamos simplificar ainda mais, declarando a função anonimamente.
(function(){
    console.log("Escopo Isolado da função anônima");
});

//5 - Enfim executamos a função anônima, adicionando um parênteses a frente da declaração
(function(){
    console.log("Nosso código executado imediatamente e protegido pelo escopo da função");
})();