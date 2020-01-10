// Import our program
// (in this case an instance of a coffee machine
// so that we can run unit tests methods)
let CoffeeMachine = require('../index.js');


// Variables that we want to be able to
// share between different steps
let myMachine;


// Export the step-definitions
// (tests) so that Cucumber can
// read/use them
module.exports = function () {

    this.Given(/^that I want to buy coffee$/, function () {
       
        myMachine = new CoffeeMachine();

        myMachine.userWantsCoffee();

        assert.strictEqual(myMachine.userNeedsCoffee, true,
            "Expected that the user wanted to buy coffee");
        
    });

    this.Given(/^that the machine is plugged in$/, function () {
        
        myMachine.plugIn();

        assert.strictEqual(myMachine.pluggedIn, true, "Expected that the machine is plugged in");
    
    });

    this.Given(/^that the user has pressed the start button$/, function () {
        
        myMachine.pressStartButton();

        assert.strictEqual(myMachine.pressedStartButton, true, "Expected the user to press the start button");
        
    });
    
    this.Given(/^that ground coffee is available$/, function () {
        
        myMachine.checkIfIngredientsExists();

        assert.strictEqual(myMachine.groundCoffeeAvailable, true, "Expected that ground coffee is available");
        
    });

    this.Given(/^that water is available$/, function () {
        
        myMachine.checkIfIngredientsExists();

        assert.strictEqual(myMachine.waterAvailable, true, "Expected that water is available");
        
    });

    this.Given(/^that a cup has been placed$/, function () {
        
        myMachine.placeCup();

        assert.strictEqual(myMachine.placedCup, true, "Expected the user to have placed a cup");
        
    });





}