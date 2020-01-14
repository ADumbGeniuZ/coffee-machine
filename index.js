// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.pressedStartButton = false;
        this.groundCoffeeAvailable = false;
        this.waterAvailable = false;
        this.milkAvailable = false;
        this.amountOfWater = 0; // in litres
        this.amountOfCoffee = 0;
        this.amountOfMilk = 0;
        this.placedCup = false;
        this.choseCoffeeType = "";
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
        
    }

    pressStartButton() {
        
    }
      
    checkIfIngredientExist() {
       

    }

    fillWithWater(amount) {
        
    }

    fillWithCoffee(amount) {
        // add amount to total amount of 
        // ground coffee in the machine
        this.amountOfCoffee += amount;
    }

    fillWithMilk() {

    }

    placeCup() {
        // check if a cup has been placed
        this.placedCup = true;
    }

    chooseCoffeeType() {
      this.choseCoffeeType 
    }

    checkIfEnoughCoffeeForCup() {
        return this.amountOfCoffee >= this.coffeePerCup;
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
