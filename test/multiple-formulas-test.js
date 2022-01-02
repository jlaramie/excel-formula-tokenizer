const { itBlock } = require('./test-helper');

describe('multiple formulas', function () {
  var options = {
    root: true
  };

  [
    [
      '=1+2;=3+4;=5+6',
      [
        ['', 'root', 'start'],
        ['=', 'formula', 'start'],
        ['1', 'operand', 'number'],
        ['+', 'operator-infix', 'math'],
        ['2', 'operand', 'number'],
        [';', 'formula', 'stop'],
        ['=', 'formula', 'start'],
        ['3', 'operand', 'number'],
        ['+', 'operator-infix', 'math'],
        ['4', 'operand', 'number'],
        [';', 'formula', 'stop'],
        ['=', 'formula', 'start'],
        ['5', 'operand', 'number'],
        ['+', 'operator-infix', 'math'],
        ['6', 'operand', 'number'],
        ['', 'formula', 'stop'],
        ['', 'root', 'stop']
      ],
      options
    ],
    [
      '=1=2;=3=4;=5=6',
      [
        ['', 'root', 'start'],
        ['=', 'formula', 'start'],
        ['1', 'operand', 'number'],
        ['=', 'operator-infix', 'logical'],
        ['2', 'operand', 'number'],
        [';', 'formula', 'stop'],
        ['=', 'formula', 'start'],
        ['3', 'operand', 'number'],
        ['=', 'operator-infix', 'logical'],
        ['4', 'operand', 'number'],
        [';', 'formula', 'stop'],
        ['=', 'formula', 'start'],
        ['5', 'operand', 'number'],
        ['=', 'operator-infix', 'logical'],
        ['6', 'operand', 'number'],
        ['', 'formula', 'stop'],
        ['', 'root', 'stop']
      ],
      options
    ],
    [
      '={{1;2};{3;4}};=if(5=6,7,8)',
      [
        ['', 'root', 'start'],
        ['=', 'formula', 'start'],
        ['ARRAY', 'function', 'start'],
        ['ARRAYROW', 'function', 'start'],
        ['ARRAY', 'function', 'start'],
        ['ARRAYROW', 'function', 'start'],
        ['1', 'operand', 'number'],
        ['ARRAYROW', 'function', 'stop'],
        [';', 'argument', ''],
        ['ARRAYROW', 'function', 'start'],
        ['2', 'operand', 'number'],
        ['ARRAYROW', 'function', 'stop'],
        ['ARRAY', 'function', 'stop'],
        ['ARRAYROW', 'function', 'stop'],
        [';', 'argument', ''],
        ['ARRAYROW', 'function', 'start'],
        ['ARRAY', 'function', 'start'],
        ['ARRAYROW', 'function', 'start'],
        ['3', 'operand', 'number'],
        ['ARRAYROW', 'function', 'stop'],
        [';', 'argument', ''],
        ['ARRAYROW', 'function', 'start'],
        ['4', 'operand', 'number'],
        ['ARRAYROW', 'function', 'stop'],
        ['ARRAY', 'function', 'stop'],
        ['ARRAYROW', 'function', 'stop'],
        ['ARRAY', 'function', 'stop'],
        [';', 'formula', 'stop'],
        ['=', 'formula', 'start'],
        ['if', 'function', 'start'],
        ['5', 'operand', 'number'],
        ['=', 'operator-infix', 'logical'],
        ['6', 'operand', 'number'],
        [',', 'argument', ''],
        ['7', 'operand', 'number'],
        [',', 'argument', ''],
        ['8', 'operand', 'number'],
        ['', 'function', 'stop'],
        ['', 'formula', 'stop'],
        ['', 'root', 'stop']
      ],
      options
    ]
  ].forEach(itBlock);

  describe('i18n', function () {
    describe('de-DE', function () {
      var options = {
        language: 'de-DE',
        root: true
      };

      [
        [
          '={{1;2};{3;4}};=if(5=6;7;8)',
          [
            ['', 'root', 'start'],
            ['=', 'formula', 'start'],
            ['ARRAY', 'function', 'start'],
            ['ARRAYROW', 'function', 'start'],
            ['ARRAY', 'function', 'start'],
            ['ARRAYROW', 'function', 'start'],
            ['1', 'operand', 'number'],
            ['ARRAYROW', 'function', 'stop'],
            [';', 'argument', ''],
            ['ARRAYROW', 'function', 'start'],
            ['2', 'operand', 'number'],
            ['ARRAYROW', 'function', 'stop'],
            ['ARRAY', 'function', 'stop'],
            ['ARRAYROW', 'function', 'stop'],
            [';', 'argument', ''],
            ['ARRAYROW', 'function', 'start'],
            ['ARRAY', 'function', 'start'],
            ['ARRAYROW', 'function', 'start'],
            ['3', 'operand', 'number'],
            ['ARRAYROW', 'function', 'stop'],
            [';', 'argument', ''],
            ['ARRAYROW', 'function', 'start'],
            ['4', 'operand', 'number'],
            ['ARRAYROW', 'function', 'stop'],
            ['ARRAY', 'function', 'stop'],
            ['ARRAYROW', 'function', 'stop'],
            ['ARRAY', 'function', 'stop'],
            [';', 'formula', 'stop'],
            ['=', 'formula', 'start'],
            ['if', 'function', 'start'],
            ['5', 'operand', 'number'],
            ['=', 'operator-infix', 'logical'],
            ['6', 'operand', 'number'],
            [',', 'argument', ''],
            ['7', 'operand', 'number'],
            [',', 'argument', ''],
            ['8', 'operand', 'number'],
            ['', 'function', 'stop'],
            ['', 'formula', 'stop'],
            ['', 'root', 'stop']
          ],
          options
        ]
      ].forEach(itBlock);
    });
  });
});
