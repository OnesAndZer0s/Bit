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
  
  var code = safeText(text_block_name) + "\u001FBlockly.Blocks['" + safeText(text_block_name) + "'] = {\ninit: function(){\n" + statements_init + "}\n};\u001FBlockly.JavaScript['" + safeText(text_block_name) + "'] = function(block) {};";
  return code;
};




Blockly.Blocks['workshop_demo'] = {
  init: function() {
  }
};
Blockly.JavaScript['workshop_demo'] = function(block) {
  return "If you want to look through the code, at least give yourself a challenge and look through my programming.";
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
  if (text_tooltip !== '') {text_tooltip = '"'+quote(text_tooltip)+'"'} else {text_tooltip = 'null';}
  var code = 'this.setTooltip('+text_tooltip+');\n';
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
  if (text_helpurl !== '') {text_helpurl = '"'+quote(text_helpurl)+'"'} else {text_helpurl = 'null';}
  var code = 'this.setHelpUrl('+text_helpurl+');\n';
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
  if (text_type !== '') {text_type = '"'+quote(text_type)+'"'} else {text_type = 'null';}
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
  if (text_type !== '') {text_type = '"'+quote(text_type)+'"'} else {text_type = 'null';}
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
  if (text_type !== '') {text_type = '"'+quote(text_type)+'"'} else {text_type = 'null';}
  var code = 'this.setNextStatement(' + checkbox_boolean + ', ' + text_type + ');\n';
  return code;
};



Blockly.Blocks['workshop_setcolor'] = {
  init: function() {
    this.appendDummyInput("line")
        .appendField("set color")
        .appendField(new Blockly.FieldDropdown([["hue","hue"], ["hex","hex"], ["RGB","rgb"], ["HSL","hsl"]]), "type")
        .appendField(new Blockly.FieldNumber(0, 0, 360), "hue");
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
if (dropdown_type == "hex") {color = '"#' + toHexadecimal(block.getFieldValue('hex')) + '"';}
if (dropdown_type == "rgb") {color = '"#' + toHexadecimal([block.getFieldValue('r'),block.getFieldValue('g'),block.getFieldValue('b')], "rgb") + '"';}
if (dropdown_type == "hsl") {color = '"#' + toHexadecimal([block.getFieldValue('h'),block.getFieldValue('s'),block.getFieldValue('l')], "hsl") + '"';}



var code = 'this.setColour('+color+');\n';
  return code;
};




Blockly.Blocks['workspace_setcomment'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set comment")
        .appendField(new Blockly.FieldTextInput(""), "comment");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setcomment'] = function(block) {
  var text_comment = block.getFieldValue('comment');
  if (text_comment !== '') {text_comment = '"'+quote(text_comment)+'"'} else {text_comment = 'null';}
  var code = 'this.setCommentText('+text_comment+');\n';
  return code;
};



Blockly.Blocks['workspace_setconnectionshidden'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set connections hidden")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "connections");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setconnectionshidden'] = function(block) {
  var text_connections = block.getFieldValue('connections') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setConnectionsHidden('+text_connections+');\n';
  return code;
};



Blockly.Blocks['workspace_setdeletable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set deletable")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "delete");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setdeletable'] = function(block) {
  var text_delete = block.getFieldValue('delete') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setDeletable('+text_delete+');\n';
  return code;
};



Blockly.Blocks['workspace_setdisabled'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set disabled")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "disabled");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setdisabled'] = function(block) {
  var text_disabled = block.getFieldValue('disabled') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setDisabled('+text_disabled+');\n';
  return code;
};    


Blockly.Blocks['workspace_setinputsinline'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set inputs inline")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "inline");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setinputsinline'] = function(block) {
  var text_inline = block.getFieldValue('inline') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setInputsInline('+text_inline+');\n';
  return code;
};



Blockly.Blocks['workspace_setinsertionmarker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set insert marker")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "insert");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("once set, it cannot be undone");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setinsertionmarker'] = function(block) {
  var text_insert = block.getFieldValue('insert') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setInsertionMarker('+text_insert+');\n';
  return code;
};



Blockly.Blocks['workspace_setmoveable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set moveable")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "move");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setmoveable'] = function(block) {
  var text_move = block.getFieldValue('move') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setMovable('+text_move+');\n';
  return code;
};



Blockly.Blocks['workspace_setshadow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set shadow")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "shadow");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setshadow'] = function(block) {
  var text_shadow = block.getFieldValue('shadow') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setShadow('+text_shadow+');\n';
  return code;
};



Blockly.Blocks['workspace_setwarningtext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set warning text")
        .appendField(new Blockly.FieldTextInput(""), "warning")
        .appendField(new Blockly.FieldTextInput("id"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setwarningtext'] = function(block) {
  var text_warning = block.getFieldValue('warning'),
      text_id = block.getFieldValue('id');
  if (text_warning !== '') {text_warning = '"'+quote(text_warning)+'"'} else {text_warning = 'null';}
  if (text_id !== "") {text_id = ',"'+text_id+'"';}
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setWarningText('+text_warning+text_id+');\n';
  return code;
};



Blockly.Blocks['workspace_setcollapsed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set collapsed")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "collapse");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['workspace_setcollapsed'] = function(block) {
  var text_collapse = block.getFieldValue('collapse') == "TRUE";
  // TODO: Assemble JavaScript into code variable.
  var code = 'this.setCollapsed('+text_collapse+');\n';
  return code;
};
