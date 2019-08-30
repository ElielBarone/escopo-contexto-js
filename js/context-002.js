var ww = {
    name: 'W. White',
    sayMyName: function(){
        console.log(this, this.name);
    }

};

var sky = {name: 'Sky'};
var pinkman = {name: 'PinkMan'};

//Setando o contexto antes da função ser executada
ww.sayMyName.bind(sky)();

//Invocando a função, o primeiro argumento será o contexto que a função executará
//ao invocar uma função com .call(contexto, arg1, arg2, arg3)
ww.sayMyName.call(pinkman);

//Invocando a função, o primeiro argumento será o contexto que a função executará
//ao invocar uma função com .apply(contexto, [arg1, arg2, arg3])
ww.sayMyName.apply(ww);
