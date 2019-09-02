//aqui você invoca uma fução que ainda não existe
deLorean();

//utilizando uma variável ainda não declarada
console.log(driver)

function deLorean(){
    console.log('deLorean initialized')
}

driver = 'McFly'

//ao executar o código, esta declaração será içada acima da atribuição
var driver;

console.log(`Here is the driver ${driver}`)

function wrongDate(){
    //aqui temos uma variável que será içada, pois ela é criada abaixo em nosso código
    //ao içar a variável, ela atribui um valor default: undefined
    //ATENÇÃO: let e const não são içadas, você receberia o mesmo erro abaixo
    console.log(today);

    //aqui referenciamos uma variável que não existirá em nosso escopo
    //esta variavel não existirá em nosso código, por isso um erro lexico será visto
    console.log(tomorrow);

    var today;
}

wrongDate();

