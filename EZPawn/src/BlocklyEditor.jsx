import React, { useEffect, useRef } from 'react';
import Blockly from 'blockly';
import 'blockly/blocks';
import './blocks/sourcepawn';
import './generators/sourcepawn';

let workspaceRef = null;

const BlocklyEditor = () => {
  const blocklyDiv = useRef(null);
  const toolbox = {
    "kind": "flyoutToolbox",
    "contents": [
      { "kind": "block", "type": "controls_if" },
      { "kind": "block", "type": "sourcepawn_print" },
      { "kind": "block", "type": "sourcepawn_function" }
    ]
  };

  useEffect(() => {
    workspaceRef = Blockly.inject(blocklyDiv.current, {
      toolbox: toolbox,
      scrollbars: true,
      trashcan: true
    });
  }, []);

  const exportSP = () => {
    const code = Blockly.SourcePawn.workspaceToCode(workspaceRef);
    const blob = new Blob([code], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "plugin.sp";
    a.click();
  };

  const saveBlocks = () => {
    const xml = Blockly.Xml.workspaceToDom(workspaceRef);
    const xmlText = Blockly.Xml.domToPrettyText(xml);
    const blob = new Blob([xmlText], { type: "text/xml" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "workspace.xml";
    a.click();
  };

  const loadBlocks = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const xml = Blockly.Xml.textToDom(e.target.result);
      Blockly.Xml.domToWorkspace(xml, workspaceRef);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <div className="toolbar">
        <button onClick={exportSP}>Export .sp</button>
        <button onClick={saveBlocks}>Save</button>
        <input type="file" accept=".xml" onChange={loadBlocks} />
      </div>
      <div ref={blocklyDiv} style={{ height: '480px', width: '100%' }} />
    </div>
  );
};

export default BlocklyEditor;
