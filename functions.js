function initBlockly(div,options,updateFunc){
  var blocklyArea = document.getElementById(div);
  var blocklyDiv = document.createElement('div');
  blocklyDiv.style.position = "absolute";
  blocklyArea.appendChild(blocklyDiv);
  var workspace = Blockly.inject(blocklyDiv,options);
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);
workspace.addChangeListener(function(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);+eval(updateFunc);
});
return workspace;
}

function safeText(text){
var x = text.replace(/\W/g, '_');
if (text == '') {x = "_";}
return x
}

function quote(text,quoteType){

return text;
}

function toHexadecimal(inputString,type){
if (type == "rgb") {
inputString = inputString.map(function(cur){
var hex = Number(cur).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
});
console.log(inputString);
return inputString;
}
else if (type == "hsl") {
return ""
}
else {
for (var i = 0, x = [], num = 0; i-num <= 5; i++) {
if (inputString[i] == undefined) {x.push("0");} else
if (/[0-9A-Fa-f]/g.test(inputString[i])) {x.push(inputString[i].toUpperCase());} else {num++;}
}
return x.join('');
}
}
