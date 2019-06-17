var elementDrop = [['elementName','ELEMENT'],['aa','bb']],
    attributeDrop = [['attributeName','ATTRIBUTE'],['aa','bb']],
    pseudoDrop = [['active',':active'],['checked',':checked'],['disabled',':disabled'],['empty',':empty'],['enabled',':enabled'],['first child',':first-child'],['first of type',':first-of-type'],['focus',':focus'],['hover',':hover'],['in range',':in-range'],['invalid',':invalid'],['lang',':lang(#) MUTATOR'],['last child',':last-child'],['last of type',':last-of-type'],['link',':link'],['nth child',':nth-child(#) MUTATOR'],['nth last child',':nth-last-child(#) MUTATOR'],['nth last of type',':nth-last-of-type(#) MUTATOR'],['nth of type',':nth-of-type(#) MUTATOR'],['only of type',':only-of-type'],['only child',':only-child'],['optional',':optional'],['read only',':read-only'],['read/write',':read-write'],['required',':required'],['root',':root'],['target',':target'],['valid',':valid'],['visited',':visited']];


Blockly.Blocks['css_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("selectors");
    this.appendStatementInput("selectors")
        .setCheck("selector");
    this.appendDummyInput()
        .appendField("declarations");
    this.appendStatementInput("declarations")
        .setCheck("declaration");
    this.setPreviousStatement(true, "css");
    this.setNextStatement(true, "css");
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_class_selector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("class")
        .appendField(new Blockly.FieldTextInput("class name"), "className");
    this.setPreviousStatement(true, ["selector", "core"]);
    this.setNextStatement(true, ["selector", "core"]);
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_id_selector'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("id name"), "idName");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_join_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("join");
    this.appendStatementInput("element")
        .setCheck("selector");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_order_selectors'] = {
  init: function() {
    this.appendStatementInput("element1")
        .setCheck("selector");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["in","in"], ["parent to","parent"], ["imediately after","after"], ["preceded by","preceded"]]), "typeDrop");
    this.appendStatementInput("element2")
        .setCheck("selector");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_allelement_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("all elements");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_element_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("element")
        .appendField(new Blockly.FieldDropdown(elementDrop), "elementDrop");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_not_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("not");
    this.appendStatementInput("notElement")
        .setCheck("selector");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_with_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("with")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_containing_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("containing")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_starting_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("starting")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_begins_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("begins")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_ends_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("ends")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_attribute_substring_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("attribute")
        .appendField(new Blockly.FieldDropdown(attributeDrop), "attributeName")
        .appendField("substring")
        .appendField(new Blockly.FieldTextInput("attribute value"), "attributeValue");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['css_pseudo_selectors'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pseudo")
        .appendField(new Blockly.FieldDropdown(pseudoDrop), "pseudoDrop");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
  },
      mutationToDom: function() {
    var container = document.createElement('mutation');
    var divisorInput = (true);
    container.setAttribute('divisor_input', divisorInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
    this.updateShape_(divisorInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this Blockly.Block
   */
  updateShape_: function(divisorInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('DIVISOR');
    if (divisorInput) {
      if (!inputExists) {
        this.appendValueInput('DIVISOR')
            .setCheck('Number');
      }
    } else if (inputExists) {
      this.removeInput('DIVISOR');
    }
  }
};


Blockly.JavaScript['css_block'] = function(block) {
//var selec = block.getFieldValue('selectors'), arr = [];
var selec = Blockly.JavaScript.statementToCode(block, 'selectors')
console.log(selec);
if (selec == '') {
selec = '*'
} else {
selec = selec.substring(2, selec.length - 2);
}

  //remove all NULL from list
return selec + ' {\n}';
//should return (SELECTORS) \n{ (DECLARATIONS) \n}
  
  
// may be useful
//Blockly.JavaScript.valueToCode(block, 'FROM', Blockly.JavaScript.ORDER_ADDITION) || '0'
//https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#label
};


Blockly.JavaScript['css_class_selector'] = function(block) {
  var text_classname = block.getFieldValue('className');
text_classname = text_classname.split(' ')[0];
  var code = '.'+text_classname+', ';
  return code;
};

Blockly.JavaScript['css_id_selector'] = function(block) {
  var text_idname = block.getFieldValue('idName');
  text_idname = text_idname.split(' ')[0];
  var code = '#'+text_idname+', ';
  return code;
};

Blockly.JavaScript['css_join_selectors'] = function(block) {
  var statements_element = Blockly.JavaScript.statementToCode(block, 'element');
statements_element = statements_element.substring(2, statements_element.length - 2);
  var code = statements_element.split(', '), dev = ["A","B"];
code.forEach(function(cur,ind,arr){
if (cur[0] == '.') {dev.push(cur);}
else if (cur[0] == "#" && dev[1] == "B") {dev[1] = cur;}
else if (cur[0] !== "#" && cur[0] !== "." && dev[0] == "A") {dev[0] = cur;}

});
if (dev[1] == "B") {dev.splice(1,1);}
if (dev[0] == "A") {dev.splice(0,1);}
code = dev.join("")+", ";
if (statements_element !== '') {
return code;
    }
else {
return '';
    }
};

Blockly.JavaScript['css_order_selectors'] = function(block) {
  var statements_element1 = Blockly.JavaScript.statementToCode(block, 'element1');
  var statements_element2 = Blockly.JavaScript.statementToCode(block, 'element2');
  var dropdown_typedrop = block.getFieldValue('typeDrop');
statements_element1 = statements_element1.substring(2, statements_element1.length - 2);
statements_element2 = statements_element2.substring(2, statements_element2.length - 2);
var change;
  
if (dropdown_typedrop == 'parent') {
change = ' > ';
}
else if (dropdown_typedrop == 'after') {
change = ' + ';
}
else if (dropdown_typedrop == 'preceded') {
change = ' ~ ';       
}
else {
change = ' ';
}
  
var code = statements_element1 + change + statements_element2 + ', ';
if (statements_element1 !== '' && statements_element2 !== '') {
return code;
    }
else {
return '';
    }
};

Blockly.JavaScript['css_allelement_selectors'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '*, ';
  return code;
};

Blockly.JavaScript['css_element_selectors'] = function(block) {
  var dropdown_elementdrop = block.getFieldValue('elementDrop');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_elementdrop + ', ';
  return code;
};

Blockly.JavaScript['css_not_selectors'] = function(block) {
  var statements_notelement = Blockly.JavaScript.statementToCode(block, 'notElement');
  statements_notelement = statements_notelement.substring(2, statements_notelement.length - 2);
// TODO: Assemble JavaScript into code variable.
  var code = ':not('+statements_notelement+'), ';
if (statements_notelement !== '') {
return code;
    }
else {
return '';
    }
};

Blockly.JavaScript['css_attribute_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_with_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_containing_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_starting_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_begins_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_ends_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_attribute_substring_selectors'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['css_pseudo_selectors'] = function(block) {
  var dropdown_pseudodrop = block.getFieldValue('pseudoDrop');
  var statements_pseudo = Blockly.JavaScript.statementToCode(block, 'pseudo');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};
