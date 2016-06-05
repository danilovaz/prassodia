var uniqueRandomArray = require("unique-random-array");
var allJokes = require("./jokes.json");

module.exports = {
    random:random(),
    all:allJokes,
    particular:particular
};

function random(){
    return uniqueRandomArray(allJokes.jokes);
}

function particular(n){
    if(n < 0 || n >= allJokes.jokes.length)
        return "Index out of bound";
    else if(n == null)
        return "Index required";
    else{
        return allJokes.jokes[n];
    }
}
