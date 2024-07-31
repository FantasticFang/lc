/**
12. Integer to Roman
中等
相关标签
相关企业
Seven different symbols represent Roman numerals with the following values:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.

 

Example 1:

Input: num = 3749

Output: "MMMDCCXLIX"

Explanation:

3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
 700 = DCC as 500 (D) + 100 (C) + 100 (C)
  40 = XL as 10 (X) less of 50 (L)
   9 = IX as 1 (I) less of 10 (X)
Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
Example 2:

Input: num = 58

Output: "LVIII"

Explanation:

50 = L
 8 = VIII
Example 3:

Input: num = 1994

Output: "MCMXCIV"

Explanation:

1000 = M
 900 = CM
  90 = XC
   4 = IV
 

Constraints:

1 <= num <= 3999
 */


/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let romanString = ''
  function convert(num) {
    if(num === 0) {
      return
    }
    const numString = num.toString()
    if(num >= 1000) {
      romanString += 'M'
      convert(num - 1000)
    } else if(numString[0] === '9') {
      switch (numString.length) {
        case 3:
          romanString += 'CM'
          convert((num + 100) % 1000)
          break
        case 2:
          romanString += 'XC'
          convert((num + 10) % 100)
          break
        case 1:
          romanString += 'IX'
          convert((num + 1) % 10)
          break
      }
    } else if(numString[0] === '4') {
      switch (numString.length) {
        case 3:
          romanString += 'CD'
          convert((num + 100) % 500)
          break
        case 2:
          romanString += 'XL'
          convert((num + 10) % 50)
          break
        case 1:
          romanString += 'IV'
          convert((num + 1) % 5)
          break
      }
    } else if (num >= 500) {
      romanString += 'D'
      convert(num - 500)
    } else if (num >= 100) {
      romanString += 'C'
      convert(num - 100)
    } else if (num >= 50) {
      romanString += 'L'
      convert(num - 50)
    } else if (num >= 10) {
      romanString += 'X'
      convert(num - 10)
    } else if (num >= 5) {
      romanString += 'V'
      convert(num - 5)
    } else if (num >= 1) {
      romanString += 'I'
      convert(num - 1)
    }
  }

  convert(num)

  return romanString
};

intToRoman(1994)