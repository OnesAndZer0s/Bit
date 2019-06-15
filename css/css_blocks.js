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
 this.setMutator("css_block_select");
  }
};

Blockly.JavaScript['css_block'] = function(block) {
var selec = block.getFieldValue('numSelect'), arr = [];
for (var i = 0; i < selec; i++) {
arr.push(block.getFieldValue('selector_'+(i+1) ));
}
  //remove all NULL from list
console.log(arr);

return "console.log('YEET');";
//should return (SELECTORS) \n{ (DECLARATIONS) \n}
  
  
// may be useful
//Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ADDITION) || '0'
//https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#label
};

Blockly.Extensions.registerMutator('css_block_select',
{
mutationToDom: function() {
  var container = document.createElement('mutation');
  var newNum = this.getFieldValue('numSelect'),
      oldNum = 0;
  while (this.getFieldValue('selector_'+(oldNum+1) ) !==  undefined) {
oldNum++
  }
  console.log(oldNum,newNum)
  return container;
},
  
domToMutation: function(xmlElement) {
  var hasDivisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
  this.updateShape_(hasDivisorInput);  // Helper function for adding/removing 2nd input.
}

}, 
null, null);
