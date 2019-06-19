Blockly.Blocks['workshop_block_description'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("name")
        .appendField(new Blockly.FieldTextInput("block_name"), "block_name");
    this.appendStatementInput("init")
        .setCheck(null)
        .appendField("init");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workshop_block_description'] = function(block) {
  var text_block_name = block.getFieldValue('block_name');
  var statements_init = Blockly.JavaScript.statementToCode(block, 'init');
  // TODO: Assemble JavaScript into code variable.
  var code = "Blockly.Blocks['" + safeText(text_block_name) + "'] = {};\u001FBlockly.JavaScript['" + safeText(text_block_name) + "'] = function(block) {};";
  return code;
};



Blockly.Blocks['workspace_settooltip'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set tooltip")
        .appendField(new Blockly.FieldTextInput(""), "tooltip");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_settooltip'] = function(block) {
  var text_tooltip = block.getFieldValue('tooltip');
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setTooltip("+quote(text_tooltip,'"')+")';
  return code;
};
