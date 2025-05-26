import Blockly from 'blockly';

Blockly.defineBlocksWithJsonArray([
  {
    "type": "sourcepawn_print",
    "message0": "Print %1",
    "args0": [
      { "type": "input_value", "name": "TEXT", "check": "String" }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Prints text to server console.",
    "helpUrl": ""
  },
  {
    "type": "sourcepawn_function",
    "message0": "function %1",
    "args0": [
      { "type": "field_input", "name": "FUNC_NAME", "text": "MyFunction" }
    ],
    "message1": "Do %1",
    "args1": [
      { "type": "input_statement", "name": "BODY" }
    ],
    "colour": 290,
    "tooltip": "Define a function",
    "helpUrl": "",
    "nextStatement": null,
    "previousStatement": null
  }
]);
