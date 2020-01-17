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

    this.Given(/^that the machine is plugged in$/, function () {
       
        myMachine = new CoffeeMachine();
        
        myMachine.plugIn();

        assert.deepEqual(myMachine.pluggedIn, true, "Expected that the machine is plugged in");
    
    });

    this.Given(/^that the user has pressed the start button$/, function () {
        
        myMachine.pressStartButton();

        assert.strictEqual(myMachine.pressedStartButton, true, "Expected the user to press the start button");
        
    });
    
    this.Given(/^that ground coffee is available$/, function () {
        
        assert.deepEqual(myMachine.checkIfGroundCoffeeExists(myMachine.amountOfCoffee), false,
            "Expected the machine to not have ground coffee");
        
            myMachine.fillWithCoffee(2000) // grams
        

        assert.deepEqual(myMachine.checkIfGroundCoffeeExists(myMachine.amountOfCoffee), true,
            "Expected that ground coffee is available after filling it with 2000 grams of ground coffee");
        
    });

    this.Given(/^that water is available$/, function () {
        
        assert.deepEqual(myMachine.checkIfWaterExists(myMachine.amountOfWater), false,
            "Expected water to not be available");
        
         myMachine.fillWithWater(50) // in litres      
        

        assert.deepEqual(myMachine.checkIfWaterExists(myMachine.amountOfWater), true,
            "Expected water to be available after refilling the machine with 50 litres of water");
        
    });

    this.Given(/^that milk is available$/, function () {
        
        assert.deepEqual(myMachine.checkIfMilkExists(myMachine.amountOfMilk), false,
            "Expected milk to not be available");
        
        myMachine.fillWithMilk(25);
        
        
        assert.deepEqual(myMachine.checkIfMilkExists(myMachine.amountOfMilk), true,
            "Expected milk to be available after refilling the machine");
        
    });

    this.Given(/^that a cup has been placed$/, function () {
        
        assert.deepEqual(myMachine.checkIfCupPlaced(myMachine.cupOnMachine), false,
            "Expected cup to not be placed");
        
        myMachine.placeCup(1);

        assert.deepEqual(myMachine.checkIfCupPlaced(myMachine.cupOnMachine), true,
            "Expected that a cup is placed");
        
    });
   
    this.Given(/^you have used SEK only$/, function (nonSEK) {
        
        global.nonSEK = nonSEK;

        assert.throws(
            function () {
                myMachine.insertMoney(global.nonSek);
            },
                Error, "You must insert a valid Swedish Crown " + nonSek,
                    'Expected the runtime error: "You must insert money not ' + nonSek + '"');
          
    });
    

}