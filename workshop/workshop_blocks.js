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
  var code = "Blockly.Blocks['" + safeText(text_block_name) + "'] = {\n" + statements_init + "};\u001FBlockly.JavaScript['" + safeText(text_block_name) + "'] = function(block) {};";
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
  var code = 'this.setTooltip("'+quote(text_tooltip,'"')+'");\n';
  return code;
};



Blockly.Blocks['workspace_sethelpurl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set help url")
        .appendField(new Blockly.FieldTextInput(""), "helpurl");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_sethelpurl'] = function(block) {
  var text_helpurl = block.getFieldValue('helpurl');
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setHelpUrl("'+quote(text_helpurl,'"')+'");\n';
  return code;
};




Blockly.Blocks['workspace_setoutput'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set output")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "boolean")
        .appendField(new Blockly.FieldTextInput(""), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setoutput'] = function(block) {
  var checkbox_boolean = block.getFieldValue('boolean') == 'TRUE';
  var text_type = block.getFieldValue('type');
  // RETURN CHANGES BASED ON 
  if (text_type !== '') {text_type = '"'+text_type+'"'} else {text_type = 'null';}
  var code = 'this.setOutput(' + checkbox_boolean + ', ' + text_type + ');\n';
  return code;
};


Blockly.Blocks['workspace_setpreviousstatement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set previous output")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "boolean")
        .appendField(new Blockly.FieldTextInput(""), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setpreviousstatement'] = function(block) {
  var checkbox_boolean = block.getFieldValue('boolean') == 'TRUE';
  var text_type = block.getFieldValue('type');
  // RETURN CHANGES BASED ON 
  if (text_type !== '') {text_type = '"'+text_type+'"'} else {text_type = 'null';}
  var code = 'this.setPreviousStatement(' + checkbox_boolean + ', ' + text_type + ');\n';
  return code;
};



Blockly.Blocks['workspace_setnextstatement'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set next output")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "boolean")
        .appendField(new Blockly.FieldTextInput(""), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);    
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setnextstatement'] = function(block) {
  var checkbox_boolean = block.getFieldValue('boolean') == 'TRUE';
  var text_type = block.getFieldValue('type');
  // RETURN CHANGES BASED ON 
  if (text_type !== '') {text_type = '"'+text_type+'"'} else {text_type = 'null';}
  var code = 'this.setNextStatement(' + checkbox_boolean + ', ' + text_type + ');\n';
  return code;
};



Blockly.Blocks['workshop_setcolor'] = {
  init: function() {
    this.appendDummyInput("line")
        .appendField("set color")
        .appendField(new Blockly.FieldDropdown([["hue","hue"], ["hex","hex"], ["RGB","rgb"], ["HSL","hsl"]]), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
this.getField('type').setValidator(function(option) {
this.sourceBlock_.updateShape_(option);
});
  },
      mutationToDom: function() {
var container = document.createElement('mutation');
console.log(this.getField('hex') !== null);
container.setAttribute('input', this.getFieldValue('type'));
    return container;
  },
  domToMutation: function(xmlElement) {
    this.updateShape_(xmlElement.getAttribute('input'));
  },
  updateShape_: function(input) {
var line = this.getInput('line');
if (input !== "hue" && this.getField('hue') !== null) {line.removeField("hue");}
if (input !== "hex" && this.getField('hex') !== null) {line.removeField("hex");}
if (input !== "rgb" && this.getField('r') !== null) {line.removeField("r");line.removeField("g");line.removeField("b");}
if (input !== "hsl" && this.getField('h') !== null) {line.removeField("h");line.removeField("s");line.removeField("l");}

    if (input == "hue" && this.getField('hue') == null) {
line.appendField(new Blockly.FieldNumber(0, 0, 360), "hue");
}
    if (input == "hex" && this.getField('hex') == null) {
line.appendField(new Blockly.FieldTextInput("000000"), "hex");
line.getField('hex').setValidator(function(option) {
console.log(this.getField('hex') !== null);
});
}   
    if (input == "rgb" && this.getField('r') == null) {
line.appendField(new Blockly.FieldNumber(0, 0, 255), "r");
line.appendField(new Blockly.FieldNumber(0, 0, 255), "g");
line.appendField(new Blockly.FieldNumber(0, 0, 255), "b");
}   
    if (input == "hsl" && this.getField('h') == null) {
line.appendField(new Blockly.FieldNumber(0, 0, 360), "h");
line.appendField(new Blockly.FieldNumber(0, 0, 100), "s");
line.appendField(new Blockly.FieldNumber(0, 0, 100), "l");
}   


}
};
Blockly.JavaScript['workshop_setcolor'] = function(block) {
  var dropdown_type = block.getFieldValue('type'), color;
if (dropdown_type == "hue") {color = block.getFieldValue('hue');}
if (dropdown_type == "hex") {color = block.getFieldValue('hex');}

var code = 'this.setColour('+color+');\n';
  return code;
};
