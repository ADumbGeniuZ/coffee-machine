// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.machineTurnedOn = false;
        this.amountOfWater = 30; // in litres
        this.placedCup = false;
        this.insertedMoney = 0;
        // these two properties in gram
        this.amountOfCoffee = 0;
        // some settings
        this.coffeePerCup = 13; // in grams
        this.pricePerCup1 = 10; // in SEK
        this.pricePerCup2 = 15;
        this.pricePerCup3 = 20;
        this.pricePerCup4 = 25;
    }

    // maintenance

    plugIn() {
        this.pluggedIn = true;
    }

    pressStartButton() {
        this.machineTurnedOn = true;
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

    brewCoffee() {
        // one cup at a time
        // heat water... etc
    }


    dispenseCoffee() {

    }

    checkIfEnoughCoffeeForACup() {
        return this.amountOfCoffee >= this.coffeePerCup;
    }

    checkIfAnyCupsLeft() {
        return this.numberOfCups >= 1;
    }

}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;
