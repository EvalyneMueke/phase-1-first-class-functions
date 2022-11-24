function receivesAFunction(callback){
    return callback();
}

//returnsANamedFunction and hook it 
//name a function first
function multiply(x,y){
    return (x * y);
}

function returnsANamedFunction(){
    return (multiply);
}

// returnsAnAnonymousFunction

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous!")
    }
}