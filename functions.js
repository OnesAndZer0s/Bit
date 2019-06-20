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
var func = eval(updateFunc);
console.log(func);
console.log(updateFunc);
workspace.addChangeListener(function(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace); if (func !== undefined) {func()};
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
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

 if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b ];
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
