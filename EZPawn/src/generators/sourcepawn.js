import Blockly from 'blockly';

Blockly.SourcePawn = new Blockly.Generator('SourcePawn');

Blockly.SourcePawn.addReservedWords('var,let,const,if,else,return,function');

Blockly.SourcePawn['sourcepawn_print'] = function(block) {
  const msg = Blockly.SourcePawn.valueToCode(block, 'TEXT', Blockly.SourcePawn.ORDER_NONE) || '""';
  return 'PrintToServer(' + msg + ');\n';
};

Blockly.SourcePawn['sourcepawn_function'] = function(block) {
  const name = block.getFieldValue('FUNC_NAME');
  const body = Blockly.SourcePawn.statementToCode(block, 'BODY');
  return 'public void ' + name + '() {\n' + body + '}\n';
};

Blockly.SourcePawn.scrub_ = function(block, code) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  return code + (nextBlock ? Blockly.SourcePawn.blockToCode(nextBlock) : '');
};
