Blockly.Blocks['css_block'] = {
  init() {
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
  },
  findSelectors_ : function() {
  var i = 0;
    while (this.getInput('selector_' + (i+1) ) !== null) {
i++
    }
  return i;
},
  
  mutationToDom: function() {
      var container = document.createElement('mutation');
     var newNum = this.getFieldValue('numSelect'), 
         oldNum = findSelectors_(),
         arr = [];
    console.log([oldNum,newNum]);
    if (newNum<oldNum) {
   for (var i = 0; i < newNum-oldNum; i++) {
    this.appendValueInput('selector_'+(i+1) );
    }
  }
  if (newNum>oldNum) {
for (var i = 0; i < newNum-oldNum; i++) {
    this.removeInput('selector_'+(i+1) );
    }
}
container.setAttribute('items', 1);
return container;
},
  domToMutation: function(xmlElement) {
console.log("DOMTOMUT")
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

