const { itBlock } = require('./test-helper');

describe('comments in expressions', function () {
  [
    [
      'SUM(1, \n\
        // Comment Test\n\
        SUM(2, \n\
        // Inner Comment Test\n\
        3)\n\
       )',
      [
        ['SUM', 'function', 'start'],
        ['1', 'operand', 'number'],
        [',', 'argument', ''],
        ['Comment Test', 'comment', ''],
        ['SUM', 'function', 'start'],
        ['2', 'operand', 'number'],
        [',', 'argument', ''],
        ['Inner Comment Test', 'comment', ''],
        ['3', 'operand', 'number'],
        ['', 'function', 'stop'],
        ['', 'function', 'stop']
      ]
    ],
    [
      'SUM(1, /* Comment Test */ SUM(2, /* Inner Comment Test */ 3))',
      [
        ['SUM', 'function', 'start'],
        ['1', 'operand', 'number'],
        [',', 'argument', ''],
        ['Comment Test', 'comment', 'inline'],
        ['SUM', 'function', 'start'],
        ['2', 'operand', 'number'],
        [',', 'argument', ''],
        ['Inner Comment Test', 'comment', 'inline'],
        ['3', 'operand', 'number'],
        ['', 'function', 'stop'],
        ['', 'function', 'stop']
      ]
    ]
  ].forEach(itBlock);
});
