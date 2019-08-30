(function(){

    angular.module('iife-module', []).controller('MyController', MyController);

    function MyController(){

        var vm = this; //nomeie o seu contexto

        function whoAmI(){
            console.log(this);
            //aqui this vem do contexto atual, ou seja, do dono da função
        }

        function secureWhoAmI(){
            //aqui evitamos o uso do this, consumindo-o à partir da variável no escopo acima.
            console.log(vm)
        }

        setTimeout(whoAmI, 100);
        setTimeout(secureWhoAmI, 100);
    }

})()