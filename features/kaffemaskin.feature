Feature:
    As a coffee buyer
    I want a basic machine 
    where can choose between 4 types of coffee
    namely: Black, caffe latte, cappucino and espresso
    and pay by using either a creditcard or swish
    because I crave caffeine.

    Scenario Outline:
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
            | money1  | money2  | cup  |
            | 10      | 0       | 1    |
            | 5       | 5       | 1    |
            | 1       | 1       | 0    |
            
        Examples: Caffe Latte
            | money1  | money2  | money3  | cup  |
            | 10      | 5       | 0       | 1    |
            | 5       | 5       | 5       | 1    |
            | 5       | 2       | 1       | 0    |
            | 10      | 2       | 2       | 0    |

        Examples: Cappucino 
            | money1  | money2  | money3  | money4 | money5  | cup  |
            | 10      | 10      | 0       | 0      | 0       | 1    |
            | 10      | 5       | 5       | 0      | 0       | 1    |
            | 5       | 5       | 5       | 5      | 0       | 1    |
            | 10      | 5       | 2       | 2      | 0       | 0    |
            | 5       | 5       | 5       | 2      | 2       | 0    |
        
        Examples: Espresso
            | money1    | money2  | money3  | money4 | money5 | money6 | cup |
            | 10        | 10      | 5       | 0      | 0      | 0      | 1   |
            | 10        | 5       | 5       | 5      | 0      | 0      | 1   |
            | 5         | 5       | 5       | 5      | 5      | 0      | 1   |
            | 10        | 5       | 5       | 2      | 2      | 0      | 0   |
            | 5         | 5       | 5       | 5      | 2      | 2      | 0   | 
            | "pollett" | 5       | 5       | 5      | 2      | 2      | 0   |


            

            