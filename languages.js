var enUS = {
  // value for true
  true: 'TRUE',
  // value for false
  false: 'FALSE',
  // separates vertical data
  verticalSeparator: ';',
  // separates horizatonal data
  horizontalSeparator: ',',
  // separates function arguments
  argumentSeparator: ',',
  // decimal point in numbers
  decimalSeparator: '.',
  // formula separator when using options.root=true
  formulaSeparator: ';',
  // returns number string that can be parsed by Number()
  reformatNumberForJsParsing: function (n) {
    return n;
  },
  isScientificNotation: function (token) {
    return /^[1-9]{1}(\.[0-9]+)?E{1}$/.test(token);
  }
};

var enEU = {
  ...enUS,
  horizontalSeparator: '.',
  argumentSeparator: ';',
  decimalSeparator: ',',
  reformatNumberForJsParsing: function (n) {
    return n.replace(',', '.');
  },
  isScientificNotation: function (token) {
    return /^[1-9]{1}(,[0-9]+)?E{1}$/.test(token);
  }
};

module.exports = {
  'en-US': enUS,
  'en-EU': enEU,
  'de-DE': {
    ...enEU,
    true: 'WAHR',
    false: 'FALSCH'
  }
};
