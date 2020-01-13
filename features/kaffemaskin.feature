Feature: Kaffemaskin

    As a coffee buyer
    I want a basic machine
    where I can choose between 4 types of coffee
    namely: Black, caffe latte, cappucino and espresso
    and pay by using either a creditcard or coin
    because I crave caffeine.

    Background: Getting coffee
        Given that the machine is plugged in
        And that the user has pressed the start button
        And that ground coffee is available
        And that water is available
        And that milk is available
        And that a cup has been placed
        And you have used SEK only
        And you have used either coins or creditcard
        Then you get a cup of coffee


    Scenario Outline: Paying with coins
        Given that coffee type <beverage> has been chosen
        And the payment method coins has been chosen
        When the user inserts <money1> kr coin
        And the user inserts <money2> kr coin
        And the user inserts <money3> kr coin
        And the user inserts <money4> kr coin
        And the user inserts <money5> kr coin
        And the user inserts <money6> kr coin
        Then the user recieves <cup> cup of coffee.

        Examples: Black Coffee
            | money1    | money2 | money3 | money4 | money5 | money6 | cup | beverage     |
            | 10        | 10     | 5      | 0      | 0      | 0      | 1   | Black Coffee |
            | 10        | 5      | 5      | 5      | 0      | 0      | 1   | Black Coffee |
            | "pollett" | 5      | 5      | 2      | 2      | 0      | 0   | Black Coffee |
            | 5         | 5      | 5      | 5      | 2      | 1      | 0   | Black Coffee |

        Examples: Caffe Latte
            | money1 | money2 | money3    | money4 | money5 | money6 | cup | beverage    |
            | 10     | 10     | 5         | 0      | 0      | 0      | 1   | Caffe Latte |
            | 10     | 5      | 5         | 5      | 0      | 0      | 1   | Caffe Latte |
            | 10     | 5      | "pollett" | 2      | 2      | 0      | 0   | Caffe Latte |
            | 5      | 5      | 5         | 5      | 2      | 1      | 0   | Caffe Latte |

        Examples: Cappucino
            | money1 | money2 | money3 | money4 | money5 | money6    | cup | beverage  |
            | 10     | 10     | 5      | 0      | 0      | 0         | 1   | Cappucino |
            | 10     | 5      | 5      | 5      | 0      | 0         | 1   | Cappucino |
            | 10     | 5      | 5      | 2      | 2      | "pollett" | 0   | Cappucino |
            | 5      | 5      | 5      | 5      | 2      | 1         | 0   | Cappucino |

        Examples: Espresso
            | money1    | money2 | money3 | money4 | money5 | money6 | cup | beverage |
            | 10        | 10     | 5      | 0      | 0      | 0      | 1   | Espresso |
            | 10        | 5      | 5      | 5      | 0      | 0      | 1   | Espresso |
            | 10        | 5      | 5      | 2      | 2      | 0      | 0   | Espresso |
            | "pollett" | 5      | 5      | 5      | 2      | 2      | 0   | Espresso |



    Scenario Outline: Paying with creditcard
        Given that coffee type <beverage> has been chosen
        When the payment method creditcard has been chosen
        And has enough <balance>
        Then the user recieves <cup> cup of coffee.



        Examples: Black Coffee
            | balance | coffee1 | cup | beverage     |
            | 10      | 10      | 1   | Black Coffee |
            | 13      | 10      | 1   | Black Coffee |
            | 7       | 10      | 0   | Black Coffee |
            | 9       | 10      | 0   | Black Coffee |

        Examples: Caffe Latte
            | balance | coffee2 | cup | beverage    |
            | 20      | 15      | 1   | Caffe Latte |
            | 40      | 15      | 1   | Caffe Latte |
            | 10      | 15      | 0   | Caffe Latte |
            | 14      | 15      | 0   | Caffe Latte |

        Examples: Cappucino
            | balance | coffee3 | cup | beverage  |
            | 214     | 20      | 1   | Cappucino |
            | 34      | 20      | 1   | Cappucino |
            | 18      | 20      | 0   | Cappucino |
            | 14      | 20      | 0   | Cappucino |

        Examples: Espresso
            | balance | coffee4 | cup | beverage |
            | 53      | 25      | 1   | Espresso |
            | 90      | 25      | 1   | Espresso |
            | 23      | 25      | 0   | Espresso |
            | 12      | 25      | 0   | Espresso |



    Scenario: User doesn't have enough balance on their creditcard
        Given that the user chooses to pay with a creditcard
        And the user doesn't have enough balance on the card
        Then the user gets an error message


    Scenario Outline: The machine doesn't have enough ingredients for desired beverage
        Given that the user has selected <beverage>
        And there is not enough of <ingredient>
        When you press the <beverage> button
        Then the machine displays <error>

        Examples: Beverages
            | beverage     | ingredient    | error                                     |
            | Black Coffee | ground coffee | "not enough ground coffee, please refill" |
            | Caffe Latte  | water         | "not enough water, please refill"         |
            | Cappucino    | milk          | "not enough milk, please refill"          |
            | Espresso     |               |                                           |



    Scenario: There is not a cup placed
        Given that you need a cup in order for the machine to make the coffee
        And a cup has not been placed
        Then the machine will stop and prompt the user to place a cup


    Scenario: User chose the wrong coffee type

    
    Scenario: User chose the wrong payment method


    Scenario: User payed too much using coins as payment method


