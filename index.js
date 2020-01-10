// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.userNeedsCoffee = false;
        this.pluggedIn = false;
        this.machineTurnedOn = false;
        this.groundCoffeeAvailable = false;
        this.waterAvailable = false;
        this.amountOfWater = 0; // in litres
        this.amountOfCoffee = 0;
        this.placedCup = false;
        this.insertedMoney = 0;
        this.blippedCreditCard = false;
        this.checkedBalance = false;
        // these two properties in gram
        this.amountOfCoffee = 0;
        // some settings
        this.coffeePerCup = 13; // in grams
        this.pricePerCup1 = 10; // in SEK
        this.pricePerCup2 = 15;
        this.pricePerCup3 = 20;
        this.pricePerCup4 = 25;
    }
    
    userWantsCoffee() {
        this.userNeedsCoffee = true;
    }

    plugIn() {
        this.pluggedIn = true;
    }

    pressStartButton() {
        this.pressedStartButton = true;
    }
      
    checkIfIngredientsExists() {
        this.groundCoffeeAvailable = true;
        this.waterAvailable = true;
    }

    fillWithWater(amount) {
        this.filledWithWater += amount;
    }

    fillWithCoffee(amount) {
        // add amount to total amount of 
        // ground coffee in the machine
        this.amountOfCoffee += amount;
    }

    placeCup() {
        // check if a cup has been placed
        this.placedCup = true;
    }
    
    // user choices

    insertMoney(inserted) {
        // add inserted money to total
        // money inserted so far
        if (typeof inserted !== 'number') {
            throw (new Error('You must insert money not ' + nonMoney));
        }
        this.insertedMoney += inserted;
    }

    blipCreditcard(balance) {
        
    }


    // internals

    checkIfEnoughCoffeeForCup() {
        return this.amountOfCoffee >= this.coffeePerCup;
    }


    brewCoffee() {
        
    }


    dispenseCoffee() {

    }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;
