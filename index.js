// A class that defines how a coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.connectedToWater = false;
        this.amountOfCoffee = 0;
        this.numberOfCups = 0;
        this.insertedMoney = 0;
        this.pressedStartButton = false;
        this.brewedCoffee = false;
        this.dispensedCup = false;
    }

    // maintenance

    plugIn() {
        this.pluggedIn = true;
    }

    connectToWater() {
        this.connectedToWater = true;
    }

    fillWithCoffee(amount) {
        // amount in grams
        this.amountOfCoffee = 13;

    }

    fillWithCups(amount) {
        // amount (number of cups)
        this.numberOfCups = 10;
    }

    // user choices

    insertMoney(inserted) {
        //   money inserted
        this.insertedMoney = 10;
    }

    pressStartButton() {
        this.pressedStartButton = true;
    }

    // internal functions

    brewCoffee() {
        //   one cup at a time
        // heat water...etc
        this.brewedCoffee = true;
    }

    dispenseCup() {

    }

    dispenseCoffee() {

    }
}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;
