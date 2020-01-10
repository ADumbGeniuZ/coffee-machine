Feature: Kaffemaskin

    As a coffee buyer
    I want a basic machine 
    where I can choose between 4 types of coffee
    namely: Black, caffe latte, cappucino and espresso
    and pay by using either a creditcard or coin
    because I crave caffeine.

    Background: Getting coffee
        Given that I want to buy coffee
        And that ground coffee and water is available
        When I have choosen a coffee type and payment method
        Then I should some get some coffee.
    

    Scenario Outline: Paying with coins
        Given that the machine is plugged in
        And the user presses the "start" button
        And that water is available
        And that the machine has enough ground coffee
        And that a cup has been placed
        And that coffee type and payment method has been chosen
        When the user inserts <money1> kr coin
        And the user inserts <money2> kr coin
        And the user inserts <money3> kr coin
        And the user inserts <money4> kr coin
        And the user inserts <money5> kr coin
        And the user inserts <money6> kr coin
        Then the user recieves <cup> cup of coffee.

        Examples: Black Coffee
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | "pollett" | 5   | 5      | 2      | 2      | 0      | 0   |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |
            
        Examples: Caffe Latte
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | 10     | 5      | "pollett" | 2   | 2      | 0      | 0   |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |

        Examples: Cappucino 
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 2      | 2      | "pollett" | 0 |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |
        
        Examples: Espresso
            | money1    | money2  | money3  | money4 | money5 | money6 | cup |
            | 10        | 10      | 5       | 0      | 0      | 0      | 1   |
            | 10        | 5       | 5       | 5      | 0      | 0      | 1   |
            | 10        | 5       | 5       | 2      | 2      | 0      | 0   |
            | "pollett" | 5       | 5       | 5      | 2      | 2      | 0   |

   
   
   Scenario Outline: Paying with creditcard
        Given that the machine is plugged in
        And presses the "start" button
        And that water is available
        And that the machine has enough ground coffee
        And that a cup has been placed
        When the user uses a creditcard 
        And has enough <balance> 
        When the user presses the button for <coffee1>
        When the user presses the button for <coffee2>
        When the user presses the button for <coffee3>
        When the user presses the button for <coffee4>
        Then the user recieves <cup> cup of coffee.



         Examples: Black Coffee
            | balance  | coffee1  | cup  |
            | 10       | 10       | 1    |
            | 13       | 10       | 1    |
            | 7        | 10       | 0    |
            | 9        | 10       | 0    |
            
        Examples: Caffe Latte
            | balance  | coffee2  | cup  |
            | 20       | 15       | 1    |
            | 40       | 15       | 1    |
            | 10       | 15       | 0    |
            | 14       | 15       | 0    |

        Examples: Cappucino 
            | balance  | coffee3  | cup  | 
            | 214      | 20       | 1    |    
            | 34       | 20       | 1    |    
            | 18       | 20       | 0    |
            | 14       | 20       | 0    |     
         
        Examples: Espresso
            | balance  | coffee4  | cup |
            | 53       | 25       | 1   |
            | 90       | 25       | 1   |
            | 23       | 25       | 0   |
            | 12       | 25       | 0   |
            

    
        
        
                      
            

            