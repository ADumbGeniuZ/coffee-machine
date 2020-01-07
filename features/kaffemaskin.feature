Feature: Coffee Machine
    As a coffee buyer
    I want a basic machine that I can put a 10 kr in and get a black cup of coffee back
    because I crave caffeine.


    Scenario: 
        Given that that the machine is plugged in
        And that water is available
        And that the machine has ground coffee
        And the machine has plastic cups
        When the user inserts a 10 kr coin
        And presses the start button
        Then the machine brewes the coffee
        And the machine dispenses a cup
        And the machine dispenses the coffee
        Then the user recieves a cup of coffee