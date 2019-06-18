var elementDrop = [['elementName','ELEMENT'],['aa','bb']],
    attributeDrop = [['attributeName','ATTRIBUTE'],['aa','bb']],
    pseudoDrop = [['active',':active'],['checked',':checked'],['disabled',':disabled'],['empty',':empty'],['enabled',':enabled'],['first child',':first-child'],['first of type',':first-of-type'],['focus',':focus'],['hover',':hover'],['in range',':in-range'],['invalid',':invalid'],['lang',':lang(#)'],['last child',':last-child'],['last of type',':last-of-type'],['link',':link'],['nth child',':nth-child(#)'],['nth last child',':nth-last-child(#)'],['nth last of type',':nth-last-of-type(#)'],['nth of type',':nth-of-type(#)'],['only of type',':only-of-type'],['only child',':only-child'],['optional',':optional'],['read only',':read-only'],['read/write',':read-write'],['required',':required'],['root',':root'],['target',':target'],['valid',':valid'],['visited',':visited']],
    langDrop = [['Afar','aa'],['Abkhazian','ab'],['Afrikaans','af'],['Akan','ak'],['Albanian','sq'],['Amharic','am'],['Arabic','ar'],['Aragonese','an'],['Armenian','hy'],['Assamese','as'],['Avaric','av'],['Avestan','ae'],['Aymara','ay'],['Azerbaijani','az'],['Bashkir','ba'],['Bambara','bm'],['Basque','eu'],['Belarusian','be'],['Bengali','bn'],['Bihari','bh'],['Bislama','bi'],['Tibetan','bo'],['Bosnian','bs'],['Breton','br'],['Bulgarian','bg'],['Burmese','my'],['Catalan','ca'],['Czech','cs'],['Chamorro','ch'],['Chechen','ce'],['Chinese','zh'],['Slavonic','cu'],['Chuvash','cv'],['Cornish','kw'],['Corsican','co'],['Cree','cr'],['Welsh','cy'],['Danish','da'],['German','de'],['Maldivian','dv'],['Dutch','nl'],['Dzongkha','dz'],['Greek','el'],['English','en'],['Esperanto','eo'],['Estonian','et'],['Basque','eu'],['Ewe','ee'],['Faroese','fo'],['Persian','fa'],['Fijian','fj'],['Finnish','fi'],['French','fr'],['Frisian','fy'],['Fulah','ff'],['Georgian','ka'],['Gaelic','gd'],['Irish','ga'],['Galician','gl'],['Manx','gv'],['Guarani','gn'],['Gujarati','gu'],['Haitian','ht'],['Hausa','ha'],['Hebrew','he'],['Herero','hz'],['Hindi','hi'],['Hiri Motu','ho'],['Croatian','hr'],['Hungarian','hu'],['Armenian','hy'],['Igbo','ig'],['Icelandic','is'],['Ido','io'],['Nuosu','ii'],['Inuktitut','iu'],['Interlingue','ie'],['Interlingua','ia'],['Indonesian','id'],['Inupiaq','ik'],['Italian','it'],['Javanese','jv'],['Japanese','ja'],['Greenlandic','kl'],['Kannada','kn'],['Kashmiri','ks'],['Georgian','ka'],['Kanuri','kr'],['Kazakh','kk'],['Khmer','km'],['Kikuyu','ki'],['Kinyarwanda','rw'],['Kirghiz','ky'],['Komi','kv'],['Kongo','kg'],['Korean','ko'],['Kuanyama','kj'],['Kurdish','ku'],['Lao','lo'],['Latin','la'],['Latvian','lv'],['Limburgan','li'],['Lingala','ln'],['Lithuanian','lt'],['Luxembourgish','lb'],['Luba-Katanga','lu'],['Ganda','lg'],['Macedonian','mk'],['Marshallese','mh'],['Malayalam','ml'],['Maori','mi'],['Marathi','mr'],['Malay','ms'],['Macedonian','mk'],['Malagasy','mg'],['Maltese','mt'],['Mongolian','mn'],['Maori','mi'],['Nauru','na'],['Navaho','nv'],['South Ndebele','nr'],['North Ndebele','nd'],['Ndonga','ng'],['Nepali','ne'],['Dutch','nl'],['Norwegian Nynorsk','nn'],['Bokmål','nb'],['Norwegian','no'],['Chichewa','ny'],['Occitan','oc'],['Ojibwa','oj'],['Oriya','or'],['Oromo','om'],['Ossetian','os'],['Panjabi','pa'],['Persian','fa'],['Pali','pi'],['Polish','pl'],['Portuguese','pt'],['Pushto','ps'],['Quechua','qu'],['Romansh','rm'],['Romanian','ro'],['Rundi','rn'],['Russian','ru'],['Sango','sg'],['Sanskrit','sa'],['Sinhala','si'],['Slovak','sk'],['Slovenian','sl'],['Sami','se'],['Samoan','sm'],['Shona','sn'],['Sindhi','sd'],['Somali','so'],['Sotho','st'],['Spanish','es'],['Albanian','sq'],['Sardinian','sc'],['Serbian','sr'],['Swati','ss'],['Sundanese','su'],['Swahili','sw'],['Swedish','sv'],['Tahitian','ty'],['Tamil','ta'],['Tatar','tt'],['Telugu','te'],['Tajik','tg'],['Tagalog','tl'],['Thai','th'],['Tibetan','bo'],['Tigrinya','ti'],['Tonga','to'],['Tswana','tn'],['Tsonga','ts'],['Turkmen','tk'],['Turkish','tr'],['Twi','tw'],['Uighur','ug'],['Ukrainian','uk'],['Urdu','ur'],['Uzbek','uz'],['Venda','ve'],['Vietnamese','vi'],['Volapük','vo'],['Welsh','cy'],['Walloon','wa'],['Wolof','wo'],['Xhosa','xh'],['Yiddish','yi'],['Yoruba','yo'],['Zhuang','za'],['Chinese','zh'],['Zulu','zu']];

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

Blockly.Blocks['css_join_selector'] = {
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

Blockly.Blocks['css_order_selector'] = {
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

Blockly.Blocks['css_allelement_selector'] = {
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

Blockly.Blocks['css_element_selector'] = {
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

Blockly.Blocks['css_not_selector'] = {
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

Blockly.Blocks['css_attribute_selector'] = {
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

Blockly.Blocks['css_attribute_with_selector'] = {
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

Blockly.Blocks['css_attribute_containing_selector'] = {
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

Blockly.Blocks['css_attribute_starting_selector'] = {
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

Blockly.Blocks['css_attribute_begins_selector'] = {
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

Blockly.Blocks['css_attribute_ends_selector'] = {
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

Blockly.Blocks['css_attribute_substring_selector'] = {
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

Blockly.Blocks['css_pseudo_selector'] = {
  init: function() {
    this.appendDummyInput("line")
        .appendField("pseudo")
        .appendField(new Blockly.FieldDropdown(pseudoDrop), "pseudoDrop");
    this.setPreviousStatement(true, "selector");
    this.setNextStatement(true, "selector");
    this.setColour(345);
 this.setTooltip("https://www.w3schools.com/css/css_pseudo_classes.asp");
 this.setHelpUrl("");
    this.getField('pseudoDrop').setValidator(function(option) {
var input = 0;
if (option.indexOf("#") !== -1) {
input++
if (option == ":lang(#)") {
input++
}
}    
this.sourceBlock_.updateShape_(input);
  });
  },
      mutationToDom: function() {
var container = document.createElement('mutation'),
input = 0;
if (this.getFieldValue('pseudoDrop').indexOf("#") !== -1) {
input++
if (this.getFieldValue('pseudoDrop') == ":lang(#)") {
input++
}
}
    container.setAttribute('input', input);
    return container;
  },
  domToMutation: function(xmlElement) {
    this.updateShape_(xmlElement.getAttribute('input'));
  },
  updateShape_: function(input) {
/** 
0 - no input
1 - number input
2 - language input
*/
    if (input == 0) {
if (this.getField('lang') !== null) {this.getInput('line').removeField("lang");}
if (this.getField('num') !== null) {this.getInput('line').removeField("num");}
}
    if (input == 1) {
if (this.getField('num') == null) {this.getInput('line').appendField(new Blockly.FieldNumber(0, 0), "num");}
if (this.getField('lang') !== null) {this.getInput('line').removeField("lang");}
}
    if (input == 2) {
if (this.getField('lang') == null) {this.getInput('line').appendField(new Blockly.FieldDropdown(langDrop), "lang");}
if (this.getField('num') !== null) {this.getInput('line').removeField("num");}
}

}

};






















Blockly.JavaScript['css_block'] = function(block) {
//var selec = block.getFieldValue('selectors'), arr = [];
var selec = Blockly.JavaScript.statementToCode(block, 'selectors');
var decl = Blockly.JavaScript.statementToCode(block, 'delarations');
if (selec == '') {
selec = '*'
} else {
selec = selec.substring(2, selec.length - 2);
}

  //remove all NULL from list
return '\n' + selec + ' {\n'+decl+'}';
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

Blockly.JavaScript['css_join_selector'] = function(block) {
  var statements_element = Blockly.JavaScript.statementToCode(block, 'element');
statements_element = statements_element.substring(2, statements_element.length - 2);
  var code = statements_element.split(', '), 
elmt="", id="", clss = [], func=[];
code.forEach(function(cur,ind,arr){
if (cur[0] == '.') {clss.push(cur);}
else if (cur[0] == ':') {func.push(cur);}
else if (cur[0] == '#' && id == "") {id = cur;}
else if (elmt == "") {elmt = cur;}

});
code = elmt+id+clss.join('')+func.join('')+", ";
if (statements_element !== '') {
return code;
    }
else {
return '';
    }
};

Blockly.JavaScript['css_order_selector'] = function(block) {
  var statements_element1 = Blockly.JavaScript.statementToCode(block, 'element1');
  var statements_element2 = Blockly.JavaScript.statementToCode(block, 'element2');
  var dropdown_typedrop = block.getFieldValue('typeDrop');
statements_element1 = statements_element1.substring(2, statements_element1.length - 2);
statements_element2 = statements_element2.substring(2, statements_element2.length - 2);
var change;
if (dropdown_typedrop == 'parent') {change = ' > ';}
else if (dropdown_typedrop == 'after') {change = ' + ';}
else if (dropdown_typedrop == 'preceded') {change = ' ~ ';}
else {change = ' ';}
  
var code = statements_element1 + change + statements_element2 + ', ';
if (statements_element1 !== '' && statements_element2 !== '') {return code;} else {return '';}
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

Blockly.JavaScript['css_not_selector'] = function(block) {
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

Blockly.JavaScript['css_attribute_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '], ';
  return code;
};

Blockly.JavaScript['css_attribute_with_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '='+ text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_attribute_containing_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '~='+ text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_attribute_starting_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '|='+ text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_attribute_begins_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '^='+ text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_attribute_ends_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '$=' + text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_attribute_substring_selector'] = function(block) {
  var text_attributename = block.getFieldValue('attributeName');
  var text_attributevalue = block.getFieldValue('attributeValue');
  // TODO: Assemble JavaScript into code variable.
  var code = '[' + text_attributename + '*='+ text_attributevalue +'], ';
  return code;
};

Blockly.JavaScript['css_pseudo_selector'] = function(block) {
  var drop = block.getFieldValue('pseudoDrop');
  if (drop.indexOf("#") !== -1) {
      if (drop == ":lang(#)") {drop = drop.replace("#",block.getFieldValue('lang')); }
      else {drop = drop.replace("#",block.getFieldValue('num')); }
}
  var code = drop+', ';
  return code;
};













Blockly.Blocks['css_align_declaration'] = {
  init: function() {
    this.appendDummyInput("line")
        .appendField("align")
        .appendField(new Blockly.FieldDropdown([["content","content"], ["items","items"], ["self","self"]]), "drop")
        .appendField("   ")
        .appendField(new Blockly.FieldDropdown([["stretch","stretch"],["center","center"],["flex start","flex-start"],["flex end","flex-end"],["space between","space-between"],["space around","space-around"]]), "content");
        //.appendField(new Blockly.FieldDropdown([["EDIT","MUTATE"]]), "result");
    this.setPreviousStatement(true, "declaration");
    this.setNextStatement(true, "declaration");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
 this.getField('drop').setValidator(function(option) {
this.sourceBlock_.updateShape_(option);
  });
  },
      mutationToDom: function() {
var container = document.createElement('mutation');
    container.setAttribute('input', this.getFieldValue('drop'));
    return container;
  },
  domToMutation: function(xmlElement) {
    this.updateShape_(xmlElement.getAttribute('input'));
  },
  updateShape_: function(input) {
if( this.getField('content') !== null && input !== "content" ){this.getInput('line').removeField('content');}
else if( this.getField('items') !== null && input !== "items" ){this.getInput('line').removeField('items');}
else if( this.getField('self') !== null && input !== "self" ){this.getInput('line').removeField('self');}

if( input == "content" && this.getField('content') == null ) {this.getInput('line').appendField(new Blockly.FieldDropdown([["stretch","stretch"],["center","center"],["flex start","flex-start"],["flex end","flex-end"],["space between","space-between"],["space around","space-around"]]), "content");}
else if ( input == "items" && this.getField('items') == null) {this.getInput('line').appendField(new Blockly.FieldDropdown([["stretch","stretch"],["center","center"],["flex start","flex-start"],["flex end","flex-end"],["baseline","baseline"]]), "items");}
else if ( input == "self" && this.getField('self') == null) {this.getInput('line').appendField(new Blockly.FieldDropdown([["auto","auto"],["stretch","stretch"],["center","center"],["flex start","flex-start"],["flex end","flex-end"]]), "self");}
      
}

};















Blockly.JavaScript['css_align_declaration'] = function(block) {
  var drop = block.getFieldValue('drop');
  var result;
  if (drop == "content") {result = block.getFieldValue('content')} else if (drop == "items") {result = block.getFieldValue('items')} else if (drop == "self") {result = block.getFieldValue('self')}
  var code = 'align-' + drop + ": " + result + ";";
  return code;
};
