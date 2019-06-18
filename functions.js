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
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
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

}
