// A class that defines how a
// coffee machine shall work

class CoffeeMachine {

    constructor() {
        this.pluggedIn = false;
        this.pressedStartButton = false;
        this.groundCoffeeAvailable = false;
        this.waterAvailable = false;
        this.milkAvailable = false;
        this.amountOfWater = 50; // in litres
        this.amountOfCoffee = 2000; // in grams
        this.amountOfMilk = 25; // in litres
        this.placedCup = false;
        this.chosenCoffeeType = "";
        this.pressedCancelButton = false; 
        this.insertedMoney = 0;
        this.usedCreditCard = false;
        this.checkedBalance = false;
        // some settings
        this.coffeePerCup = 13; // in grams
        this.waterPerCup = 
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
      
    checkIfGroundCoffeeExists() {
        return amountOfCoffee >= this.coffeePerCup
    }

    checkIfWaterExists() {
        return this.amountOfWater >= this.coffeePerCup
    }

    checkIfMilkExists(chosen) {
        if (typeof chosen !== "Caffe Latte", "Cappucino", "Espresso")
            throw (new Error('Milk is not needed for this beverage'));
        
    }

    fillWithWater(amount) {
         this.amountOfWater += amount;
        

    }

    fillWithCoffee(amount) {
         this.amountOfCoffee += amount;
        
        
    }

    fillWithMilk(amount) {
         this.amountOfMilk += amount;
    }

    checkIfCupPlaced() {
        // check if a cup has been placed
        this.placedCup = true;
    }

    placeCup(cup) {
        this.placedCup = cup;
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
