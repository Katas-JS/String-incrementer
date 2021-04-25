# String-incrementer
https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript


There are probably shorter ways to do this but this is basically how I proceeded:

1. I extract the numbers into a string.
2. Extract numbers from string into a variable
3. If there are no numbers I make it a 0
4. I extrac text
5. If text is null I make it an empty string
6. I increment the number by 1
7. Create string with new number
8. If the length of the original non incremented numbers string is longer than the new incremented number, then add "0" characters before he number.
9. Add the extracted text to the new ext variable containing the numbers and return

