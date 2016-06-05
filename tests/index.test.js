var jokes = require("../index");
var chai = require("chai");
var expect = chai.expect;

describe("jokes",function(){
    describe("random",function(){
        it("should return an object with random quote and corresponding author",function(){
            var randomJoke = jokes.random();
            expect(jokes.all.jokes).to.include(randomJoke);
        });

        it("should return a different object than the previous one every time",function(){
            var prevRandomQuote = jokes.random();
            var newRandomQuote = jokes.random();
            expect(prevRandomQuote).to.be.not.equal(newRandomQuote);
        })
    });

    describe("particular",function(){
        it("should return a particular object",function(){
            var particularQuote = jokes.particular(3);
            expect(jokes.all.jokes[3]).to.be.equal(particularQuote);
        });

        it("should return an appropriate warning if correct parameter not given",function(){
            var wrongIndex = jokes.particular(-1);
            var noIndex = jokes.particular();
            expect(wrongIndex).to.equal("Index out of bound");
            expect(noIndex).to.equal("Index required");
        })
    })
});
