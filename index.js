// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.pressedStartButton = false;
        this.groundCoffeeAvailable = false;
        this.waterAvailable = false;
        this.milkAvailable = false;
        this.amountOfCoffee = 0; // in grams
        this.amountOfWater = 0; // in litres 
        this.amountOfMilk = 0; // in litres
        this.placedCup = false;
        this.cupOnMachine = false;
        this.numberOfCups = 0;
        this.chosenCoffeeType = "";
        this.pressedCancelButton = false;
        this.insertedMoney = 0;
        this.usedCreditCard = false;
        this.checkedBalance = false;
        // some settings
        this.coffeePerCup = 13; // in grams
        this.pricePerCup1 = 10; // in SEK
        this.pricePerCup2 = 15;
        this.pricePerCup3 = 20;
        this.pricePerCup4 = 25;
    }

    plugIn() {

        this.pluggedIn = true;

    }

    pressStartButton() {
        this.pressedStartButton = true;
    }

    checkIfGroundCoffeeExists(amountOfCoffee) {
        return amountOfCoffee >= this.coffeePerCup
    }

    checkIfWaterExists(amountOfWater) {
        return amountOfWater >= this.coffeePerCup
    }

    checkIfMilkExists(amountOfMilk) {
        return amountOfMilk >= this.coffeePerCup
    }

    fillWithCoffee(amount) {
        this.amountOfCoffee += amount;

    }

    fillWithWater(amount) {
        this.amountOfWater += amount;

    }


    fillWithMilk(amount) {
        this.amountOfMilk += amount;
    }

    checkIfCupPlaced(cupOnMachine) {
        // check if a cup has been placed
        if (cupOnMachine === false) {
            return false;
        } else {
            return true;
        }

    }

    placeCup(cup) {
        this.numberOfCups += cup;
    }

    chooseCoffeeType() {
        this.choseCoffeeType = "Black Coffee", "Caffe Latte", "Cappucino", "Espresso";
    }

    // user choices

    insertMoney(inserted) {
        // add inserted money to total
        // money inserted so far
        if (typeof inserted !== 'number' && 'SEK') {
            throw (new Error('You must insert money, not ' + nonMoney &&
                'You must insert a valid swedish crown, not ' + nonSwedishCrown));
        }
        this.insertedMoney += inserted;
    }

    useCreditcard(balance) {
        this.checkedBalance = balance;
    }

    pressCancelButton() {

    }



    // internals

    brewCoffee() {

    }


    dispenseCoffee() {

    }


}

// Export the CoffeeMachine class
module.exports = CoffeeMachine;
