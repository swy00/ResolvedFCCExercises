/*
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
    const valorDecimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const numeroRomano = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; 
    
    let numConvertido='';
    
    for (let i=0; i < valorDecimal.length; i++) {
      while (valorDecimal[i] <= num) {
        numConvertido += numeroRomano[i];
        num -= valorDecimal[i];
      }
    }
   return numConvertido;
  }
  
  convertToRoman(36);