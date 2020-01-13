- Substantiv* 
  * Liknar variabler
  * Finns för varje instans av en klass
  * Nå/ändra/skapa en property genom this.propertyName

  * Ofta flaggor (booleaner true/false)
  * Eller håller reda på mängder etc (nummer)
  * Eller något annat

  * Får bara sättas inuti metoder i JS
  * Sätts ofta till initiala värden i constructor-metoden
  * constructor-metoden körs varje man gör en instans av en klass
  * med new

  * Fungerar som minnen för saker vi behöver komma ihåg
    mellan olika metoder
### Properties (egenskaper, fields) 
        
        pluggedIn
        type: boolean
        initial value: false;

        pressedStartButton
        type: boolean
        inital value: false;

        groundCoffeeAvailable
        type: boolean
        initial value: false

        waterAvailable(boolean)
        initial value: false

        milkAvailable(boolean)
        initial value: false

        amountOfWater(number: litres)
        initial value: 0

        amountOfCoffee(number: grams)
        initial value: 0

        amountOfMilk(number: litres)
        initial value: 0

        placedCup(boolean) 
        initial value: false
        

        chosenCoffeeType(string)
        initial value ""

        insertedMoney(number)
        initial value: 0


        usedCreditCard(boolean)
        initial value: false

        checkedBalance(boolean)
        initial value: false;

       

        


* Metoder är saker man gör (Verb)

### Methods  

    plugIn() 
        
    

    pressStartButton() 
        
    
      
    checkIfIngredientsExists() en för varje? kaffe, mjölk, vatten
        
    

    fillWithWater(amount) 
        
    
    fillWithMilk(amount)
    

    fillWithCoffee(amount) 
        
      
    

    placeCup() 
        
        
    

    chooseCoffeeType() 
      
    
    
    // user choices

    insertMoney(inserted) 
        
        
        
    

    useCreditcard()
    returns true if enough balance 
        
    


    // internals

    checkIfEnoughCoffeeForCup() 
       
    


    brewCoffee() 
        
    


    dispenseCoffee() 

    
