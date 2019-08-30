function emitirSom(){
    console.log(this.som);
}

//Aqui o dono da função é a window
emitirSom();

var gato = {som: "Miauuuur"};
var cachorro = {som: "Que cachorro o quê? eu não sou cachorro não!!"};

gato.emitirSom = emitirSom;
//Aqui o dono da função é o gato
gato.emitirSom();

cachorro.emitirSom = emitirSom;
cachorro.emitirSom();

//Você pode ainda aplicar a mesma função para tipos de objetos, o que apesar de old fashioned pode ser muito útil, ex:
function Teacher(){
    //Quando você instancia um objeto, o contexto é injetado no mesmo, assim você pode setar valores nessa nova instância
    this.som = "Glugluglu";
}

Teacher.prototype.emitirSom = emitirSom;

var webTeacher = new Teacher();
webTeacher.emitirSom();

