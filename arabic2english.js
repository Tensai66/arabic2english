var singles = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function arabic2english(numeral) {
  var singleDigit = (numeral % 10);
  if (numeral < 20) {
    return singles[numeral];
  } else if (numeral < 100) {
    return (tens[Math.floor(numeral / 10) - 2]) + (singleDigit ? ' ' + singles[singleDigit] : '');
  } else if (numeral < 1000) {
    return (singles[Math.floor(numeral / 100)]) + ' hundred' + (numeral % 100 == 0 ? '' : ' ' + arabic2english(numeral % 100));
  } else {
    return arabic2english(Math.floor(numeral / 1000)) + ' thousand' + ((numeral % 1000 != 0) ? ' ' + arabic2english(numeral % 1000) : '');
  }
}

module.exports = arabic2english;