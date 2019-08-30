var ww = {
    name: 'W. White',

    sayMyName: function(){
        console.log(this, this.name);
    }

};

setTimeout(ww.sayMyName, 1000)