# Roman-Numerals-Converter 💱
Convert decimal numbers to Roman numerals :one: :two: :three:

## Overview
We all learned about Roman numerals back at school, right? And, though being that old, they have survived the passing of time among all these years.  
Using JavaScript, I developed a complex algorithm that converts any decimal number below 4,000 to Roman numerals. There's even a click-to-copy button!

## PROGRAMMING LANGUAGES USED
- HTML5
- CSS3
- JavaScript ES6
- Bootstrap

## CONVERTER LOGIC
Below you'll find the logic behind my converter! 〽️

### Input Validation
When user input is submitted, a function checks whether it fulfils certain requirements, which are described as follows:
- Numbers must be smaller than 4,000 (**not included**). So, 3,999 is the largest number we can express with Roman numerals.
- Letters and non-alphanumeric characters (",") are not accepted.
- Floated point numbers cannot be expressed in Roman numerals. Therefore, they are not accepted either.

### JavaScript algorithm
Since Roman numerals were originally "hardcoded" — more letters were needed to further express larger numbers, resulting in longer and longer numbers — the algorithm relies on a JavaScript `enum` (object) where letters are assigned to their decimal value accordingly.  
⚠️: a Roman numeral cannot appear more than three times in a row.
<br></br>
JavaScript doesn't have a built-in `enum` data type, even though they are widely used in many programming languages. A common approach to express an `enum` in JavaScript (and the one I've chosen in my project) is by creating an object and preventing any modification to it with `Object.freeze()` method.
The algorithm works as follows:
1. Following Roman numerals structure, the introduced decimal number is converted to a string, split in units, tens, hundreds and thousands, and finally assigned to an `array`.
    <br></br>
    > 23 => [2, 3]
2. A `for` `loop` iterates through the whole `array` and performs various actions:
   - The first number is multiplied by 1, the second number by 10, the third number by 100 and the fourth number by 1,000. This action is handled by the variable `counter`, whose initial value is 1 and is multiplied by 10 on each iteration.
   <br></br>
   > 1,922 => 1,000 + 900 + 20 + 2
   - Each number is checked in the `enum` object. If the object contains that number, its assigned value (decimal number) is pushed into a new `array` with `.unshift()` method; i.e., the function relies on object lookups.
   - If the number equals 0, no action is performed on it.
   - If the number is not found in said object, it is divided by the current value of `counter`. Its quotient equals the number of times that letter should be added.
   <br></br>
   > 3,354 => 3,000 is not found in the `enum` object, so <br></br>
   > 3,000 / 1,000 = 3 <br></br>
   > 1,000 = M <br></br>
   > "M" must be pushed into the array 3 times
3. Finally, the `array` is converted into `string` with `.join()` method and returned
