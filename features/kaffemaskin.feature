Feature:
    As a coffee buyer
    I want a basic machine 
    where can choose between 4 types of coffee
    namely: Black, caffe latte, cappucino and espresso
    and pay by using either a creditcard or swish
    because I crave caffeine.

    Scenario Outline: Paying with coins
        Given that the machine is plugged in
        And that water is available
        And that the machine has enough ground coffee
        And the machine has plastic cups
        When the user inserts a <money1> kr coin
        And the user inserts a <money2> kr coin
        And the user inserts a <money3> kr coin
        And the user inserts a <money4> kr coin
        And the user inserts a <money5> kr coin
        And the user inserts a <money6> kr coin
        And presses the "start" button
        Then the user recieves <cup> cup of coffee.

        Examples: Black Coffee
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | 5      | 5      | 5      | 5      | 5      | 0      | 1   |
            | "pollett" | 5   | 5      | 2      | 2      | 0      | 0   |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |
            
        Examples: Caffe Latte
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | 5      | 5      | 5      | 5      | 5      | 0      | 1   |
            | 10     | 5      | "pollett" | 2   | 2      | 0      | 0   |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |

        Examples: Cappucino 
            | money1 | money2 | money3 | money4 | money5 | money6 | cup |
            | 10     | 10     | 5      | 0      | 0      | 0      | 1   |
            | 10     | 5      | 5      | 5      | 0      | 0      | 1   |
            | 5      | 5      | 5      | 5      | 5      | 0      | 1   |
            | 10     | 5      | 5      | 2      | 2      | "pollett" | 0 |
            | 5      | 5      | 5      | 5      | 2      | 1      | 0   |
        
        Examples: Espresso
            | money1    | money2  | money3  | money4 | money5 | money6 | cup |
            | 10        | 10      | 5       | 0      | 0      | 0      | 1   |
            | 10        | 5       | 5       | 5      | 0      | 0      | 1   |
            | 5         | 5       | 5       | 5      | 5      | 0      | 1   |
            | 10        | 5       | 5       | 2      | 2      | 0      | 0   |
            | 5         | 5       | 5       | 5      | 2      | 1      | 0   | 
            | "pollett" | 5       | 5       | 5      | 2      | 2      | 0   |

   
   
   Scenario Outline: Paying with creditcard
        Given that the machine is plugged in
        And that water is available
        And that the machine has enough ground coffee
        And the machine has plastic cups
        When the user uses a creditcard 
        And has enough <balance> 
        And the user buys a <coffee1>
        And the user buys a <coffee2>
        And the user buys a <coffee3>
        And the user buys a <coffee4>
        And presses the "start" button
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
            


            

            