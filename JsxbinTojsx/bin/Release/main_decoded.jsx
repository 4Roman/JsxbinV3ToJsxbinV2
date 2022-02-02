function jsxOldNames() {
    alert("Now the buttons in the second tab have the same names as in the video tutorials.");
}

function jsxDefaultNames() {
    alert("Now the buttons in the second tab have default names.");
}

function jsxP2Support() {
    alert("'Portraiture 2' plugin support is on.");
}

function jsxP3Support() {
    alert("'Portraiture 2' plugin support is off. \r'Portraiture 3' plugin support is on.");
}

function urPresent(extensionRoot, globalLink, previewImage) {
    var myName = myInput();

    function myInput() {
        var myWindow = new Window("dialog", undefined, undefined, {
            borderless: false
        });
        var flowers = myWindow.add("image", undefined, File(extensionRoot + previewImage));
        var myInputGroup2 = myWindow.add("group");
        var myText = myInputGroup2.add("statictext", undefined, globalLink);
        myText.justify = "center";
        var myButtonGroup = myWindow.add("group");
        var linkClose = myButtonGroup.add("button", undefined, "Close");
        var linkCopy = myButtonGroup.add("button", undefined, "Copy the link");
        var linkOpen = myButtonGroup.add("button", undefined, "Open in your browser");
        var globalW = 120;
        var globalH = 25;
        linkOpen.preferredSize.width = globalW;
        linkCopy.preferredSize.width = globalW;
        linkClose.preferredSize.width = globalW;
        myText.preferredSize.width = (globalW * 3) + 88;
        linkOpen.preferredSize.height = globalH;
        linkCopy.preferredSize.height = globalH;
        linkClose.preferredSize.height = globalH;
        myText.preferredSize.height = globalH;
        linkOpen.onClick = function() {
            myText.text = "Please check your browser.";
            myWindow.close();
            return tCopy = true;
        };
        linkCopy.onClick = function() {
            myText.text = "The link was copied. Paste it into your browser.";
            myWindow.close();
            return tCopy = false;
        };
        linkClose.onClick = function() {
            myWindow.close();
        };
        myWindow.show();
    }
    return tCopy;
}

function quickHelp() {
    var myName = myInput();

    function myInput() {
        var myWindow = new Window("dialog", undefined, undefined, {
            borderless: false
        });
        var myButtonGroup = myWindow.add("group");
        var linkClose = myButtonGroup.add("button", undefined, "Close help");
        linkClose.onClick = function() {
            var idCls = charIDToTypeID("Cls ");
            var desc435 = new ActionDescriptor();
            var idSvng = charIDToTypeID("Svng");
            var idYsN = charIDToTypeID("YsN ");
            var idN = charIDToTypeID("N   ");
            desc435.putEnumerated(idSvng, idYsN, idN);
            var idDocI = charIDToTypeID("DocI");
            desc435.putInteger(idDocI, 418);
            var idforceNotify = stringIDToTypeID("forceNotify");
            desc435.putBoolean(idforceNotify, true);
            executeAction(idCls, desc435, DialogModes.NO);
            myWindow.close();
        };
        myWindow.show();
    }
}
if (typeof $ == "undefined") {
    $ = {};
}
$._ext = {
    evalFile: function(path) {
        try {
            $.evalFile(path);
        } catch (e) {
            alert("Exception:" + e);
        }
    },
    evalFiles: function(jsxFolderPath) {
        var folder = new Folder(jsxFolderPath);
        if (folder.exists) {
            var jsxFiles = folder.getFiles("*.jsx");
            for (var i = 0; i < jsxFiles.length; i += 1) {
                var jsxFile = jsxFiles[i];
                $._ext.evalFile(jsxFile);
            }
        }
    }
};
$.UltimateRetouch = {
    select_dodge_tool: function() {
        var idslct = charIDToTypeID("slct");
        var desc3 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref2 = new ActionReference();
        var idDdTl = charIDToTypeID("DdTl");
        ref2.putClass(idDdTl);
        desc3.putReference(idnull, ref2);
        executeAction(idslct, desc3, DialogModes.NO);
    },
    select_burn_tool: function() {
        var idslct = charIDToTypeID("slct");
        var desc4 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref3 = new ActionReference();
        var idBrTl = charIDToTypeID("BrTl");
        ref3.putClass(idBrTl);
        desc4.putReference(idnull, ref3);
        executeAction(idslct, desc4, DialogModes.NO);
    },
    select_brush_tool: function() {
        if (ScriptUI.environment.keyboardState.shiftKey) {
            var idslct = charIDToTypeID("slct");
            var desc2 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref1 = new ActionReference();
            var idErTl = charIDToTypeID("ErTl");
            ref1.putClass(idErTl);
            desc2.putReference(idnull, ref1);
            executeAction(idslct, desc2, DialogModes.NO);
        } else {
            var idslct = charIDToTypeID("slct");
            var desc5 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref4 = new ActionReference();
            var idPbTl = charIDToTypeID("PbTl");
            ref4.putClass(idPbTl);
            desc5.putReference(idnull, ref4);
            executeAction(idslct, desc5, DialogModes.NO);
        }
    },
    select_heal_tool: function() {
        var idslct = charIDToTypeID("slct");
        var desc6 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref5 = new ActionReference();
        var idspotHealingBrushTool = stringIDToTypeID("spotHealingBrushTool");
        ref5.putClass(idspotHealingBrushTool);
        desc6.putReference(idnull, ref5);
        executeAction(idslct, desc6, DialogModes.NO);
    },
    select_mixBrush_tool: function() {
        var idslct = charIDToTypeID("slct");
        var desc7 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref6 = new ActionReference();
        var idMixB = charIDToTypeID("MixB");
        ref6.putClass(idMixB);
        desc7.putReference(idnull, ref6);
        executeAction(idslct, desc7, DialogModes.NO);
    },
    select_heal_tool2: function() {
        var idslct = charIDToTypeID("slct");
        var desc3 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref2 = new ActionReference();
        var idmagicStampTool = stringIDToTypeID("magicStampTool");
        ref2.putClass(idmagicStampTool);
        desc3.putReference(idnull, ref2);
        executeAction(idslct, desc3, DialogModes.NO);
    },
    select_clone_tool: function() {
        var idslct = charIDToTypeID("slct");
        var desc8 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref8 = new ActionReference();
        var idClTl = charIDToTypeID("ClTl");
        ref8.putClass(idClTl);
        desc8.putReference(idnull, ref8);
        executeAction(idslct, desc8, DialogModes.NO);
    },
    select_patch_tool: function() {
        if (ScriptUI.environment.keyboardState.shiftKey) {
            var idslct = charIDToTypeID("slct");
            var desc2 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref1 = new ActionReference();
            var idErTl = charIDToTypeID("ErTl");
            ref1.putClass(idErTl);
            desc2.putReference(idnull, ref1);
            executeAction(idslct, desc2, DialogModes.NO);
        } else {
            var idslct = charIDToTypeID("slct");
            var desc10 = new ActionDescriptor();
            var idnull = charIDToTypeID("null");
            var ref10 = new ActionReference();
            var idpatchSelection = stringIDToTypeID("patchSelection");
            ref10.putClass(idpatchSelection);
            desc10.putReference(idnull, ref10);
            var iddontRecord = stringIDToTypeID("dontRecord");
            desc10.putBoolean(iddontRecord, true);
            var idforceNotify = stringIDToTypeID("forceNotify");
            desc10.putBoolean(idforceNotify, true);
            executeAction(idslct, desc10, DialogModes.NO);
        }
    }
};