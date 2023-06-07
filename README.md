# Roman-Numerals-Converter 💱
Convert decimal numbers to Roman numerals :one: :two: :three:

## Overview
We all learned about Roman Numerals back at school, right? And, though being that old, they have survived the passing of time among all these years. Using JavaScript, I developed a complex algorithm that converts any decimal number below 4,000 to Roman Numerals. There's even a click-to-copy button!

## PROGRAMMING LANGUAGES USED
- HTML5
- CSS3
- JavaScript ES6
- Bootstrap

## CONVERTER LOGIC
Below you'll find the logic behind my converter!

### JavaScript algorithm
Since Roman Numerals were originally "hardcoded" — more letters were needed to further express larger numbers, resulting in longer and longer numbers — the algorithm relies on a JavaScript `enum` (object) were letters are assigned to its decimal value.
⚠️: a Roman numeral cannot appear more than three times in a row.
<br></br>
JavaScript doesn't have a built-in enum data type, even though enum data type is widely used in many programming languages. A common approach to express an enum in JavaScript (and which I've chosen for my project) is by creating an object and preventing any modification on it with `Object.freeze()` method.
The algorithm works as follows:
1. Following Roman numerals structure, the introduced decimal number is converted to a string, split in units, tens, hundreds and thousands, and finally assigned to an `array`.
    <br></br>
    > 23 => [2, 3]
   <br></br>
2. A `for` `loop` interates through the whole `array` and performs various actions:
   - First number is multiplied by 1, second number by 10, third number by 100 and fourth number by 1,000. This action is handled by the variable `counter`, whose initial value is 1 and is multiplied by 10 on each iteration.
   <br></br>
   > 1,922 => 1,000 + 900 + 20 + 2
   <br></br>
   - Each number is checked in the `enum` object. If the object contains that numbers, its assigned value (decimal number) is pushed into a new `array` with `.unshift()` method; i.e., relies on object lookups.
   - If the number equals 0, no action is performed on it.
   - If the number is not found in said object, it is divided by the current value of `counter`. Its quotient equals the number of times that letter should be added.
   <br></br>
   > 3,354 => 3,000 is not found in the `enum` object, so
   > 3,000 / 1,000 = 3
   > 1,000 = M
   > M must be pushed into the array 3 times
   <br></br>
