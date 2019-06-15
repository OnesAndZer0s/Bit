Blockly.defineBlocksWithJsonArray([
{
  "type": "css_block",
  "message0": "%1 %2 %3 %4",
  "args0": [
    {
      "type": "field_number",
      "name": "numSelect",
      "value": 1,
      "min": 1,
      "max": 50
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "selector_1",
      "check": "selector"
    },
    {
      "type": "input_statement",
      "name": "declarations",
      "check": "declaration"
    }
  ],
  "inputsInline": true,
  "previousStatement": "css",
  "nextStatement": "css",
  "colour": 45,
  "tooltip": "",
  "mutator":"css_block_select",
  "helpUrl": ""
}
]);

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



Blockly.Extensions.registerMutator('css_block_select',{
  mutationToDom: function() {
},
  domToMutation: function(xmlElement) {
console.log("DOMTOMUT")
}
},
  null, null);
