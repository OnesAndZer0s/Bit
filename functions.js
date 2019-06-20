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

function numToRGB(rgbArr){
return rgbArr.map(function(cur){
if (Number(cur) !== NaN) {
var hex = Number(cur).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
} else {var hex = "00";}
  return hex;
}).join('');
}

function HSLtoRGB(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [ r * 255, g * 255, b * 255 ];
}

function toHexadecimal(inputString,type){
if (type == "rgb") {
return toHexadecimal(numToRGB(inputString));
}
else if (type == "hsl") {
return toHexadecimal(HSLtoRGB(inputString[0],inputString[1],inputString[2]),"rgb");
}
else {
for (var i = 0, x = [], num = 0; i-num <= 5; i++) {
if (inputString[i] == undefined) {x.push("0");} else
if (/[0-9A-Fa-f]/g.test(inputString[i])) {x.push(inputString[i].toUpperCase());} else {num++;}
}
return x.join('');
}
}
