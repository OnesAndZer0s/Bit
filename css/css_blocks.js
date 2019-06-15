Blockly.Blocks['css_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(1, 1, 50), "numSelect");
    this.appendValueInput("selector_1")
        .setCheck("selector");
    this.appendStatementInput("declarations")
        .setCheck("declaration");
    this.setInputsInline(true);
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
