try {
    function writeToLog(msg) {
        try {
            var debugFolder = Folder(Folder.myDocuments.fsName + "/TopNotchTransitions");
            if (!debugFolder.exists) {
                debugFolder.create()
            }
            var date = new Date();
            var logFile = new File(debugFolder.fsName + "/debug.txt");
            var ableToWrite = logFile.open("a");
            if (ableToWrite === false) {
                return !(!alert("Error: 342\nDon't able to write file"));
            }
            logFile.writeln(date.toString() + " : " + decodeURI(msg));
            logFile.close();
            return false;
            try {
                var xLib = new ExternalObject("lib:PlugPlugExternalObject");
            } catch (e) {
                return !(!alert("Error: 308\n" + e.toString()));
            }
            var eventObj = new CSXSEvent();
            eventObj.type = "writeToDebug";
            eventObj.data = JS0N.stringify({
                text: decodeURI(msg),
                userName: Folder("~/").exists && Folder("~/").displayName != "" ? Folder("~/").displayName : "Unknown"
            }, null, 4);
            eventObj.dispatch();
        } catch (e) {
            alert(e.toString() + "\n" + e.line.toString());
        }
        JS0N = {};

        function() {
            "use strict";
            var rx_one = /^[\],:{}\s]*$/;
            var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
            var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
            var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
            var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

            function f(n) {
                return n < 10 ? "0" + n : n;
            }

            function this_value() {
                return this.valueOf();
            }
            if (typeof Date.prototype.toJSON !== "function") {
                Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
                };
                Boolean.prototype.toJSON = this_value;
                Number.prototype.toJSON = this_value;
                String.prototype.toJSON = this_value;
            }

            function quote(string) {
                rx_escapable.lastIndex = 0;
                return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function(a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + "0000" + a.charCodeAt(0).toString(16).slice(-4);
                }) + "\"" : "\"" + string + "\"";
            }

            function str(key, holder) {
                var mind = gap;
                var value = holder[key];
                if (value && typeof value === "object" && typeof value.toJSON === "function") {
                    value = value.toJSON(key);
                }
                if (typeof rep === "function") {
                    value = rep.call(holder, key, value);
                }
                switch (typeof value) {
                    case "string":
                        return quote(value);
                    case "number":
                        return isFinite(value) ? String(value):
                            "null";
                        case "boolean":
                        case "null":
                            return String(value);
                        case "object":
                            if (!value) {
                                return "null";
                            }
                            gap += indent;
                            partial = [];
                            if (Object.prototype.toString.apply(value) === "[object Array]") {
                                length = value.length;
                                for (var i = 0; i < length; i += 1) {
                                    partial[i] = str(i, value) || "null";
                                }
                                v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                                gap = mind;
                                return v;
                            }
                            if (rep && typeof rep === "object") {
                                length = rep.length;
                                for (var i = 0; i < length; i += 1) {
                                    if (typeof rep[i] === "string") {
                                        k = rep[i];
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + gap ? ": " : ":" + v);
                                        }
                                    }
                                }
                            } else {
                                for (var k in value) {
                                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                                        v = str(k, value);
                                        if (v) {
                                            partial.push(quote(k) + gap ? ": " : ":" + v);
                                        }
                                    }
                                }
                            }
                            v = partial.length === 0 ? "{}":
                                gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}":
                                    "{" + partial.join(",") + "}";
                                    gap = mind;
                                    return v;
                }
            }
            if (typeof JS0N.stringify !== "function") {
                meta = {
                    "": "\\b",
                    "	": "\\t",
                    "
": "\\n",
                    "": "\\f",
                    "": "\\r",
                    ""
                    ": "\\\"",
                    "\": "\\\\"
};
JS0N.stringify = function (value, replacer, space) {
gap = "
                    ";
indent = "
                    ";
if (typeof space === "
                    number ") {
for (var i = 0;i < space; i += 1) {
indent += "
                    ";
}
} else {
if (typeof space === "
                    string ") {
indent = space;
}
}
rep = replacer;
if (replacer && typeof replacer !== "
                    function " && typeof replacer !== "
                    object " || typeof replacer.length !== "
                    number ") {
return undefined;
}
return str("
                    ", {
"
                    ": value
});
};
}
if (typeof JS0N.parse !== "
                    function ") {
JS0N.parse = function (text, reviver) {
function walk(holder, key) {
var value = holder[key];
if (value && typeof value === "
                    object ") {
for (var k in value) {
if (Object.prototype.hasOwnProperty.call(value, k)) {
v = walk(value, k);
if (v !== undefined) {
value[k] = v;
} else {
delete value[k];
}
}
}
}
return reviver.call(holder, key, value);
}
text = String(text);
rx_dangerous.lastIndex = 0;
if (rx_dangerous.test(text)) {
text = text.replace(rx_dangerous, function (a) {
return "\\u " + "
                    0000 " + a.charCodeAt(0).toString(16).slice(-4);
});
}
if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "
                "))) {
j = eval(" (" + text + ")");
return typeof reviver === "
                function " ? walk({
"
                ": j
}, "
                ") : j;
}
return undefined;
};
}
}();
}
function () {
var debugFolder = Folder(Folder.myDocuments.fsName + " / TopNotchTransitions ");
if (!debugFolder.exists) {
debugFolder.create()
}
var logFile = new File(debugFolder.fsName + " / debug.txt ");
var ableToWrite = logFile.open("
                w ");
if (!ableToWrite) {
return !(!alert("
                Error: 342\nUnnable able to write file "));
}
logFile.encoding = "
                UTF - 8 ";
var result = logFile.write("
                ");
logFile.close();
}();
} catch (e) {
alert("
                Error during initialization of the Log File " + e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "
                ") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
}
var AEVGLOBAL = {
name: null,
Duration: null,
functionName: null,
selectedLayers: [],
importFile: null,
fontChecker: {
layer: "
                ",
fontName: "
                ",
timer: 1
},
TNTBefore: true
};
var AEVFolderGLOBAL = null;
var AEVExtensionPath = "
                ";
var seSystemFolder = null;
function checkFoldersAvailability() {
writeToLog("\n\n === === === === === FOLDERS === === === === === \n ");
try {
var testFolder = Folder.appData.fsName;
writeToLog("
                Folder.appData loaded ");
} catch (e) {
writeToLog("
                Folder.appData failed to load ");
}
try {
var testFolder = Folder.appPackage.fsName;
writeToLog("
                Folder.appPackage loaded ");
} catch (e) {
writeToLog("
                Folder.appPackage failed to load ");
}
try {
var testFolder = Folder.commonFiles.fsName;
writeToLog("
                Folder.commonFiles loaded ");
} catch (e) {
writeToLog("
                Folder.commonFiles failed to load ");
}
try {
var testFolder = Folder.desktop.fsName;
writeToLog("
                Folder.desktop loaded ");
} catch (e) {
writeToLog("
                Folder.desktop failed to load ");
}
try {
var testFolder = Folder.myDocuments.fsName;
seSystemFolder = testFolder;
writeToLog("
                Folder.myDocuments loaded ");
} catch (e) {
writeToLog("
                Folder.myDocuments failed to load ");
}
try {
var testFolder = Folder.temp.fsName;
writeToLog("
                Folder.temp loaded ");
} catch (e) {
writeToLog("
                Folder.temp failed to load ");
}
try {
var testFolder = Folder.userData.fsName;
seSystemFolder = testFolder;
writeToLog("
                Folder.userData loaded ");
} catch (e) {
writeToLog("
                Folder.userData failed to load ");
}
writeToLog("
                seSystemFolder: " + seSystemFolder.toString());
writeToLog("\n\n === === === === === === === === === === === === === \n ");
return;
}
checkFoldersAvailability();
var sePanelVersion = "
                6.5.9 ";
var current = "~ / Desktop ";
var analyticsManifest = {
productID: "
                SFTLGMH8SLOCNGBY7O1G ",
productVersion: sePanelVersion
};
writeToLog("\n\n === === === === === === === === === === === === === \n ");
writeToLog("
                App version: Premiere Pro " + app.version);
writeToLog("
                OS: " + $.os.toString());
writeToLog("
                Extension version: " + sePanelVersion);
writeToLog("\n\n === === === === === === === === === === === === === \n ");
try {
writeToLog("
                Load Seamless Transitions ");
} catch (e) {
alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "
                ") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
}
writeToLog("
                global.jsx loaded ");
var AEViewerTNT = function (ExternalObject) {
writeToLog("
                Start load start.jsx ");
writeToLog("
                Start load import.jsx ");
writeToLog("
                Start load globalVar.jsx ");
writeToLog("
                Start load libs.jsx ");
writeToLog("
                Start load licenseCheck.jsx ");
writeToLog("
                Start load storage.jsx ");
writeToLog("
                Start load common.jsx ");
writeToLog("
                Start load code.jsx ");
writeToLog("
                Start load files.jsx ");
writeToLog("
                Start load analytics.jsx ");
writeToLog("
                Start load public.jsx ");
writeToLog("
                Srart load settingsPanel.jsx ");
writeToLog("
                Start load panel.jsx ");
function indexOf(array, search) {
var index = -1;
for (var i = 0, var len = array.length; i < len; i++) {
if (array[i] == search) {
return i;
}
}
return index;
}
function shell(command, args) {
for (var i = 1, var len = args.length; i <= len; i++) {
command = command.replace(" {
                    {
                        " + i + "
                    }
                }
                ", "\"" + args[i - 1] + "\"");
            command = command.replace("{" + i + "}", args[i - 1]);
        }
        var res = system.callSystem(command);
        return res;
    }

    function filenameAllowsCondition(f) {
        var hideNames = ["Settings.jsx", "aev_before.jsx", "aev_after.jsx", "(Settings)", "Adobe Premiere Pro Auto-Save", "(Footage)", "folder_bg.png", "folder_preview.png", "Footage", "folder_preview.mp4"];
        return inArray(hideNames, f) ? false : true;
    }
    try {
        function() {
            Undo = {
                _groups: [],
                _currentIndex: null,
                _currentProjPath: null,
                _currentQEProj: null,
                _tempBin: null
            };
            var self = Undo;
            self.start = function() {
                var tempBinName = "STUNDO_" + +new Date();
                self._tempBin = app.project.rootItem.createBin(tempBinName);
                qe.project.undo();
                qe.project.init();
                self._currentQEProj = qe.project;
                self._currentProjPath = app.project.path;
                self._currentIndex = qe.project.undoStackIndex();
            };
            self.end = function() {
                if (self._currentIndex === null) {
                    return false;
                }
                if (app.project.path != self._currentProjPath) {
                    self._currentIndex = null;
                    self._tempBin.deleteBin();
                    return false;
                }
                var endIndex = self._currentQEProj.undoStackIndex();
                self._groups.push([self._currentIndex, endIndex, self._currentProjPath]);
                if (self._groups.length > 32) {
                    self._groups = self._groups.slice(-32);
                }
                self._tempBin.deleteBin();
                self._currentIndex = null;
                self._currentQEProj = null;
            };
            self.onProjectChanged = function(projectId) {
                if (self._currentIndex !== null) {
                    return;
                }
                self._currentIndex = -1;
                var projectPath = app.project.path;
                var failSafeCounter = 0;
                var stackIndex = qe.project.undoStackIndex();
                for (var i = 0; i < self._groups.length; i += 1) {
                    var group = self._groups[i];
                    if (stackIndex >= group[0] && stackIndex <= group[1] && group[2] == projectPath) {
                        if ((stackIndex - group[0]) < (group[1] - stackIndex)) {
                            while (qe.project.undoStackIndex() <= group[1]) {
                                qe.project.redo();
                                if (++failSafeCounter > 32) {
                                    break;
                                }
                            }
                        } else {
                            while (qe.project.undoStackIndex() >= group[0]) {
                                qe.project.undo();
                                if (++failSafeCounter > 32) {
                                    break;
                                }
                            }
                        }
                    }
                    if (failSafeCounter > 32) {
                        break;
                    }
                }
                if (failSafeCounter > 32) {
                    self._groups = [];
                    self._currentIndex = null;
                    return false;
                }
                self._currentIndex = null;
            };
        }();
    } catch (e) {
        alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
    }
    writeToLog("import.jsx loaded");
    var OS = $.os.indexOf("Windows") != -1 ? "windows" : "macos";
    var errorShowed = false;
    var aev_analytics = function(settingsObject) {
        try {
            var aev_json = {};

            function() {
                function f(n) {
                    return n < 10 ? "0" + n : n;
                }

                function this_value() {
                    return this.valueOf();
                }

                function quote(string) {
                    rx_escapable.lastIndex = 0;
                    return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function(a) {
                        var c = meta[a];
                        return typeof c === "string" ? c : "\\u" + "0000" + a.charCodeAt(0).toString(16).slice(-4);
                    }) + "\"" : "\"" + string + "\"";
                }

                function str(key, holder) {
                    var mind = gap;
                    var value = holder[key];
                    if (value && typeof value === "object" && typeof value.toJSON === "function") {
                        value = value.toJSON(key);
                    }
                    if (typeof rep === "function") {
                        value = rep.call(holder, key, value);
                    }
                    switch (typeof value) {
                        case "string":
                            return quote(value);
                        case "number":
                            return isFinite(value) ? String(value):
                                "null";
                            case "boolean":
                            case "null":
                                return String(value);
                            case "object":
                                if (!value) {
                                    return "null";
                                }
                                gap += indent;
                                partial = [];
                                if (Object.prototype.toString.apply(value) === "[object Array]") {
                                    length = value.length;
                                    for (var i = 0; i < length; i += 1) {
                                        partial[i] = str(i, value) || "null";
                                    }
                                    v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                                    gap = mind;
                                    return v;
                                }
                                if (rep && typeof rep === "object") {
                                    length = rep.length;
                                    for (var i = 0; i < length; i += 1) {
                                        if (typeof rep[i] === "string") {
                                            k = rep[i];
                                            v = str(k, value);
                                            if (v) {
                                                partial.push(quote(k) + gap ? ": " : ":" + v);
                                            }
                                        }
                                    }
                                } else {
                                    for (var k in value) {
                                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                                            v = str(k, value);
                                            if (v) {
                                                partial.push(quote(k) + gap ? ": " : ":" + v);
                                            }
                                        }
                                    }
                                }
                                v = partial.length === 0 ? "{}":
                                    gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}":
                                        "{" + partial.join(",") + "}";
                                        gap = mind;
                                        return v;
                    }
                }
                "use strict";
                var rx_one = /^[\],:{}\s]*$/;
                var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
                var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                if (typeof Date.prototype.toJSON !== "function") {
                    Date.prototype.toJSON = function() {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
                    };
                    Boolean.prototype.toJSON = this_value;
                    Number.prototype.toJSON = this_value;
                    String.prototype.toJSON = this_value;
                }
                if (typeof aev_json.stringify !== "function") {
                    meta = {
                        "": "\\b",
                        "	": "\\t",
                        "
": "\\n",
                        "": "\\f",
                        "": "\\r",
                        ""
                        ": "\\\"",
                        "\": "\\\\"
};
aev_json.stringify = function (value, replacer, space) {
gap = "
                        ";
indent = "
                        ";
if (typeof space === "
                        number ") {
for (var i = 0;i < space; i += 1) {
indent += "
                        ";
}
} else {
if (typeof space === "
                        string ") {
indent = space;
}
}
rep = replacer;
if (replacer && typeof replacer !== "
                        function " && typeof replacer !== "
                        object " || typeof replacer.length !== "
                        number ") {
return undefined;
}
return str("
                        ", {
"
                        ": value
});
};
}
if (typeof aev_json.parse !== "
                        function ") {
aev_json.parse = function (text, reviver) {
function walk(holder, key) {
var value = holder[key];
if (value && typeof value === "
                        object ") {
for (var k in value) {
if (Object.prototype.hasOwnProperty.call(value, k)) {
v = walk(value, k);
if (v !== undefined) {
value[k] = v;
} else {
delete value[k];
}
}
}
}
return reviver.call(holder, key, value);
}
text = String(text);
rx_dangerous.lastIndex = 0;
if (rx_dangerous.test(text)) {
text = text.replace(rx_dangerous, function (a) {
return "\\u " + "
                        0000 " + a.charCodeAt(0).toString(16).slice(-4);
});
}
if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "
                    "))) {
j = eval(" (" + text + ")");
return typeof reviver === "
                    function " ? walk({
"
                    ": j
}, "
                    ") : j;
}
return undefined;
};
}
}();
writeToLog("
                    aev_json loaded ");
var _public = {};
var OS = $.os.indexOf("
                    Windows ") != -1 ? "
                    Win " : "
                    Mac ";
var slash = OS == "
                    Win " ? "\\" : " / ";
var analyticsData = {
osName: $.os,
osLanguage: $.locale,
appName: "
                    After Effects ",
appVersion: app.version,
appLanguage: app.isoLanguage,
productID: settingsObject.productID,
productVersion: settingsObject.productVersion,
data: {
buttons_top: {},
folders_top: {},
files_top: {},
settings: {},
custom: {},
errors: {}
}
};
_public.save = function (type, name, value) {
switch(type) {
case "
                    button ":
findAndCreateOrAdd(analyticsData.data.buttons_top, name, value);
break ;
case "
                    top_folder ":
findAndCreateOrAdd(analyticsData.data.folders_top, name, value);
break ;
case "
                    top_file ":
findAndCreateOrAdd(analyticsData.data.files_top, name, value);
break ;
case "
                    custom ":
findAndCreateOrAdd(analyticsData.data.custom, name, value);
break ;
case "
                    settings ":
findAndCreateOrAdd(analyticsData.data.settings, name, value);
break ;
case "
                    error ":
findAndCreateOrAdd(analyticsData.data.errors, name, Number(value));
sendAnalytics(analyticsBin, aev_json.stringify(analyticsData));
break ;
default:
return false;
}
if (saveAnalyticsData() !== true) {

}
};
writeToLog("
                    Analytics.save
                    function loaded ");
_public.afterErrorSending = function (code, error) {
return code == "
                    200 " && error == "
                    true " ? clearAnalyticsData() : false;
};
writeToLog("
                    Analytics.afterErrorSending
                    function loaded ");
initAnalytics();
function initAnalytics() {
analyticsFolder = Folder(seSystemFolder + slash + "
                    AEViewerAnalytics ");
if (!analyticsFolder.exists) {
analyticsFolder.create()
}
var MacBin = "Ïúíþ (!H__PAGEZEROÈ__TEXTÀÀ__text__TEXT\t#\t__stubs__TEXTDD__stub_helper__TEXTHDH__gcc_except_tab__TEXTø\r__const__TEXT¨¨__cstring__TEXTª\nª__unwind_info__TEXT, «¤, «__eh_frame__TEXTÐ­0Ð­x__DATAÀÀ__program_vars__DATAÀ (À__nl_symbol_ptr__DATA(À (ÀV__got__DATA8À8ÀX__la_symbol_ptr__DATA¸À°¸Àh__mod_init_func__DATAhÃhÃ\t__data__DATApÃhpÃ__common__DATAØÇ8H__LINKEDITÐÐÐèÍ\"0Ð88Ðp¨Ø°XÛÀ\ré`ìõ`Pnn|yh¾ /usr/lib/dyld[~*Ër>0¼%å'¸P$\n\n¸* \t8/usr/lib/libcurl.4.dylib0x/usr/lib/libc++.1.dylib8É/usr/lib/libSystem.B.dylib&xë )ìjHåHäðH}HuúÂÁâHòHÑëHÁH9uöHÁèÚQÇèuôUHåSPHóHøH¯ÚHÏHÆHÚè<HØHÄ[]ÃUHåAWAVAUATSHìHµ¤þÿÿIüH½(ÿÿÿL-ñ¶Mu@Lµ¸þÿÿL½ÀþÿÿH ¶HHH¨þÿÿHÀ@H(ÿÿÿHÇ°þÿÿLþèsHÇE°ÇE¸ÿÿÿÿIEHþÿÿH¨þÿÿIÅhL­(ÿÿÿLµ¸þÿÿLÿèLûL=b¶IÇL½ÀþÿÿHÇÿÿÿHÇÿÿÿHÇÿÿÿHÇÿÿÿÇ ÿÿÿWÀ)EÀHÇEÐHuÀHßèuH}ÀèQH½¸þÿÿµ¤þÿÿèuLçHÞèPvHþÿÿH¨þÿÿL­(ÿÿÿLµ¸þÿÿL½ÀþÿÿH½ÿÿÿèHßèKH5µHÆH½¨þÿÿè(H½(ÿÿÿè^LàHÄH[A\\A]A^A_]ÃIÄHþÿÿH¨þÿÿL­(ÿÿÿLµ¸þÿÿL½ÀþÿÿëIÄë<IÄë IÄH}ÀèH½ÿÿÿè{HßèÁH5µHÆH½¨þÿÿèH½(ÿÿÿèÔLçèUHåAWAVAUATSHì8H}ÀD¶.Dè$E¯uHFHEÐMìIÑìëLfHFHEÐHu°¶ÁáM®uLrHUÈIÇHE¸IÑïëHE¸LzLrHUÈMätB1ÛMÿt\"HEÐ¶4L÷LúèÛHÀt\nHÿÃI9ÜuÛëHûÿt}¯HE°u&LpIÑíë%H5¹1ÒH]ÀHßè0HØéLhLp}®u\nHÿEÈHÑm¸ëHMÈHAHE¸HIHMÈLe¸MïHÇÀÿÿÿÿMÿt(MätC¶t>ÿH}ÈLâè@MoÿHÀuÑKD>ÿL)ð¹H)ÙHÁLuÀL÷Hu°HÚIðèâLðHÄ8[A\\A]A^A_]ÃUHåAWAVAUATSHì¸$ÿÿÿHÓAöIýL;ë\rHÇèH{è¡H{L9ÿuêH(ÿÿÿA¾öµ4ÿÿÿE1ä1ÒLïèIÆHÇÁÿÿÿÿIþÿ$E1äL}ÀH]LñLÿLîLâMèèAºHßH5lèëH} LþHÚèÜýÿÿöEÀu\nÆEÁÆEÀëHEÐÆHÇEÈ1öLÿèãHE°HEÐHE HM¨HMÈHEÀWÀ)E HÇE°H} èËHßèÃLÿH5ìèHÀu\n$ÿÿÿÀt2H(ÿÿÿHxH;xtLþèH(ÿÿÿH@ëHÇLþèsMôIÿÄLÿèfLïµ4ÿÿÿLâèãIÆLñL)áIþÿêþÿÿH½pÿÿÿLîLâMèè'H5ZH½8ÿÿÿºèÍH(ÿÿÿH½PÿÿÿHµpÿÿÿH8ÿÿÿè¬üÿÿöpÿÿÿuÆqÿÿÿÆpÿÿÿëHEÆHÇxÿÿÿH½pÿÿÿ1öè£H`ÿÿÿHEHPÿÿÿHXÿÿÿHxÿÿÿHpÿÿÿWÀ)PÿÿÿHÇ`ÿÿÿH½PÿÿÿèsH½8ÿÿÿègH5H½pÿÿÿèèÀu\n$ÿÿÿÀt,H{H;{tHµpÿÿÿè$HCëHµpÿÿÿHßè,rH½pÿÿÿèHÄ¸[A\\A]A^A_]ÃHÃëHÃH}èëH}ÀèâHßè¦HÇèvQHÃëHÃH½8ÿÿÿè¾H½pÿÿÿëÎHÇèQQUHåAWAVATSHìPHûL%X°M$$LeØLuÀL÷èÐL}L÷LþèÇLÿè­HßLþHÂèL;eØuHØHÄP[A\\A^A_]ÃèUHåAWAVAUATSHì(HËH]ÈIÔIÿL}Ðè\rIGHEÀID$HE¸HCHE°E1íëIÅA¶¨u\tHÑèLEÀëIGMGA¶$AÑAáuHÖHÑîLu¸ë\nIt$Mt$HÁL)éÖH9ñÍHötmK(MLÑH)ÙH9ñ±A¿I)÷IÇM9ïMÇEE¶ë¶D9è¸uH9ÆtA¶¶<HÿÀ9ÏtëHÿÃL9ûuÒëfL9ÓtaL)ÃIÝIýÿtUEÉuHÑêëIT$H]ÈD¶AöÀL}Ðu\tIÑèHM°ëLCHKLÿLîèÓ¶¨uHÑèéçþÿÿHCéÞþÿÿHEÐHÄ([A\\A]A^A_]ÃHÃLÿè»HßèUHåAWAVAUATSHìHHÓµýÿÿIýHP®HHEÐH½8ÿÿÿL¥ ýÿÿHä­HHHýÿÿHÀ@H8ÿÿÿLæèÊHÇEÀÇEÈÿÿÿÿL5à­M~L½ýÿÿIÆ@Lµ8ÿÿÿLçè qöuHÿÃëH[H½ýÿÿºHÞè\\K»ÿÿÿÿH½þÿÿtGIuýÿÿH½ýÿÿèõLçèW1ÛHÀu\"HýÿÿH@èH¼ýÿÿ´¸ýÿÿÎè$L½ýÿÿLµ8ÿÿÿLçèÈVH5­HÆH½ýÿÿè©H½8ÿÿÿèñH*­HH;EÐubØHÄH[A\\A]A^A_]ÃHÃL½ýÿÿLµ8ÿÿÿLçèhVëHÃëHÃH5«¬HÆH½ýÿÿè?H½8ÿÿÿèHßèÇèÔUHåAWAVAUATSHìHóIþH=Y¯è$H=Õ³HÞè¯JHpþÿÿLeÈWÀ)EÀHÇEÐLeÀLxpHXxI9ßt=LmÀIW LïLæèuIGHÀt\rIÇIHÀuõëLøLxI9LøuôI9ßuÇH=Ö®è§ÆE¿mH}ÀHu¿èJH5lHÇèÁAÄÆEuH}ÀHuèuJH} HÆèÆÿÿÿhH}ÀHµÿÿÿèRJH}HÆèÞÆ_ÿÿÿpH}ÀHµ_ÿÿÿè/JH½`ÿÿÿHÆè¸Æ?ÿÿÿaH}ÀHµ?ÿÿÿè\tJH½@ÿÿÿHÆèH5ÊL÷è_EäH5¸H½`ÿÿÿèÀtH5H½`ÿÿÿèðÀthH5H½ ÿÿÿH`ÿÿÿèJ¶ ÿÿÿöÂuHµ!ÿÿÿHÑêëH(ÿÿÿHµ0ÿÿÿH} èÙH½ ÿÿÿèH5/H½`ÿÿÿèÀ¿èbèEHÃHÛtöE uHU¡ëA¾è8éÒHU°¾'1ÀHßèEäÀ¶Ð¾/1ÀHßèH5¾H½@ÿÿÿèÀt(ö@ÿÿÿu\tHAÿÿÿëHPÿÿÿ¾\"'1ÀHßèÃ~H¼òÿÿ¾+N1ÀHßè­~¾'1ÀHßLòè~¾4º1ÀHßè~¾+1Ò1ÀHßèv~HpþÿÿHBPHJLHR`HÿÿÿHÿÿÿHÿÿÿHÿÿÿH¾ûN1ÀHßè1~Høþÿÿ¾I'1ÀHßè~Eäu(ö`ÿÿÿu\tHaÿÿÿëHpÿÿÿ¾'1ÀHßèî}WÀ)àþÿÿHÇðþÿÿHH½ÈþÿÿHuèÁHH`þÿÿH½ÈþÿÿHàþÿÿ¾\r1Éè[õÿÿH½Èþÿÿè%~L¥àþÿÿLèþÿÿLÁL)áHÁéiÉ«ªªª1ÒHpþÿÿÉ¥E1ÿHþÿÿ1ÉHpþÿÿO,O4ìC¶ìöÂu\tINHÑêë\nKLìKTìHÇÆÿÿÿÿHÒt+HØHÏ~¶û:t\rHÿÇHÿÊuðHÃëHÒHÃtH)ÏHþöºHßH5¯è#}L½hþÿÿIßºHþÿÿHßH5èþ|H½°þÿÿLöLúHÙèñ÷ÿÿAöufAÇëKDìÆKÇDì1öL÷èð|HÀþÿÿIFH°þÿÿH¸þÿÿINIWÀ)°þÿÿHÇÀþÿÿH½°þÿÿèÇ|Hßè¿|LûHßè´|HàþÿÿBöèu\tJ4èHÿÆëJtèH½pþÿÿL½hþÿÿè|HpþÿÿL¥àþÿÿLèþÿÿIÿÇLÁL)áHÁéiÉ«ªªªHcÉI9Ïnþÿÿ¾''1ÀH`þÿÿHßLµpþÿÿLòè¡{Hßè{L÷è©{Hxþÿÿ¾ 1ÀHßèi{DµxþÿÿHßèT{èm{H½àþÿÿè³]H½@ÿÿÿèß{H½`ÿÿÿèÓ{H}èÊ{H} èÁ{ënHÃë HÃëHÃH½þÿÿè¦{H½þÿÿè{H½àþÿÿèV]H½@ÿÿÿè{H½`ÿÿÿèv{H}èm{H} èd{Hßè|A¾dè|HuÈH}ÀèR]DðHÄ[A\\A]A^A_]ÃHÃHuÈH}Àè-]Hßèã{HÃëHÃë©éIÿÿÿHÇè¤FHÃëHÃëHÃélÿÿÿHÃH½Èþÿÿé@ÿÿÿë®HÃH½ ÿÿÿèÎzé;ÿÿÿUHåAWAVATSI×IöHûL%2¨LçèúzHCD8HCD0HC¶LçèãzØ[A\\A^A_]ÃUHåAVSHìIþWÀ)EÐHÇEàH}¸LöèFzH}ÐHu¸èOøÿÿÃH}¸è:zH=·§èzH=3¬Löè\rCXHH=!¬LöèûBHÀpÆEdHuHÇèUCH} HÆèáyH5H} èqyÀt4H5H}Ðè]yÀt H=Ê«Löè¤BH5âHÇèwyëH=ª«LöèBHuÐHÇèyH=§èØyH5ªH} èyÀtdH5H}ÐèîxÀtP¶]ÐöÃu\rHEÑHEHÑëëHEàHEH]ØH½xÿÿÿHu èyH}HxÿÿÿÞè_õÿÿH½xÿÿÿèyH} èýxH}ÐèôxHÄ[A^]ÃHÃëHÃH} ëHÃH}¸èÎxH}ÐèÅxHßèyHÃH½xÿÿÿè®xëÌUHåAWAVSPIöHûH=¦èäxH=ªHÞè»oH\rªH9ÈH=vªHÞèPAHÃL÷HÞèZxI~HsèMxI~0Hs0è@xHChIFhHC`IF`HCXIFXHCHHKPINPIFHA·L9ótIÆpHspHÃxL÷HÚè©pëE1ÿH=k¥è<xDøHÄ[A^A_]ÃUHåAWAVAUATSPHóIþIÇFIÇFIÇL{E1äëIÿÄ¶È$uHÑéëHKI9ÌóÀLøtHCF¾, Aý!*AEøøwWH\ràHcHÈÿàL÷H5èwë¢AEÞø:w-H¹ H£Ás¾\\L÷è\nwL÷DîèÿvélÿÿÿAý bÿÿÿL÷DîèåvéRÿÿÿL÷H5/è§vé>ÿÿÿL÷H5èvé*ÿÿÿL÷H5\rèvéÿÿÿL÷H5üèkvéÿÿÿHÃL÷èvHßè[wLðHÄ[A\\A]A^A_]Ã)ÿÿÿÿÿÿÿÿÿpÿÿÿ²ÿÿÿÆÿÿÿUHåAWAVSHìØIÖHóIÿIÇGIÇGIÇsHH½ þÿÿè½éÿÿHqH½ þÿÿ1öèæuHHHHþÿÿHHPH@þÿÿH8þÿÿHÇ@HÇ@HÇH57H½8þÿÿèuHHH`þÿÿHHPHXþÿÿHPþÿÿHÇ@HÇ@HÇH½ðýÿÿHÞètuH½þÿÿHµðýÿÿèýÿÿ¶þÿÿöÂuHµ\tþÿÿHÑêëHþÿÿHµþÿÿH½PþÿÿèuHHHxþÿÿHHPHpþÿÿHhþÿÿHÇ@HÇ@HÇH5oH½hþÿÿèµtHHHþÿÿHHPHþÿÿHþÿÿHÇ@HÇ@HÇHsH½ÀýÿÿètH½ØýÿÿHµÀýÿÿèÃüÿÿ¶ØýÿÿöÂuHµÙýÿÿHÑêëHàýÿÿHµèýÿÿH½þÿÿè/tHHH¨þÿÿHHPH þÿÿHþÿÿHÇ@HÇ@HÇH5¦H½þÿÿèßsHHHÀþÿÿHHPH¸þÿÿH°þÿÿHÇ@HÇ@HÇHs0H½ýÿÿèÈsH½¨ýÿÿHµýÿÿèíûÿÿ¶¨ýÿÿöÂuHµ©ýÿÿHÑêëH°ýÿÿHµ¸ýÿÿH½°þÿÿèYsHHHØþÿÿHHPHÐþÿÿHÈþÿÿHÇ@HÇ@HÇH5ãH½Èþÿÿè\tsHHHðþÿÿHHPHèþÿÿHàþÿÿHÇ@HÇ@HÇsPH½xýÿÿèæÿÿ¶xýÿÿöÂuHµyýÿÿHÑêëHýÿÿHµýÿÿH½àþÿÿèrHHHÿÿÿHHPHÿÿÿHøþÿÿHÇ@HÇ@HÇH59H½øþÿÿèGrHHH ÿÿÿHHPHÿÿÿHÿÿÿHÇ@HÇ@HÇsLH½`ýÿÿèÕåÿÿ¶`ýÿÿöÂuHµaýÿÿHÑêëHhýÿÿHµpýÿÿH½ÿÿÿèÕqHHH8ÿÿÿHHPH0ÿÿÿH(ÿÿÿHÇ@HÇ@HÇH5H½(ÿÿÿèqHHHPÿÿÿHHPHHÿÿÿH@ÿÿÿHÇ@HÇ@HÇsXH½Hýÿÿèåÿÿ¶HýÿÿöÂuHµIýÿÿHÑêëHPýÿÿHµXýÿÿH½@ÿÿÿèqHHHhÿÿÿHHPH`ÿÿÿHXÿÿÿHÇ@HÇ@HÇH5ØH½XÿÿÿèÃpHHHMHHPHxÿÿÿHpÿÿÿHÇ@HÇ@HÇH5H½pÿÿÿè|pHHHMHHPHUHMHÇ@HÇ@HÇH½ýÿÿLöèopH½0ýÿÿHµýÿÿèøÿÿ¶0ýÿÿöÂuHµ1ýÿÿHÑêëH8ýÿÿHµ@ýÿÿH}èpHHHM°HHPHU¨HM HÇ@HÇ@HÇH5ÝH} è¿oHHHMÈHHPHUÀHM¸HÇ@HÇ@HÇH5£H}¸èoHHHMàHHPHUØHMÐHÇ@HÇ@HÇAöuAÆGAÆëIGÆIÇG1öLÿèMoHEàIGHEÐHMØIOIWÀ)EÐHÇEàH}Ðè6oH}¸è-oH} è$oH½0ýÿÿèoH½ýÿÿèoH}èoH½pÿÿÿè÷nH½XÿÿÿèënH½HýÿÿèßnH½@ÿÿÿèÓnH½(ÿÿÿèÇnH½`ýÿÿè»nH½ÿÿÿè¯nH½øþÿÿè£nH½xýÿÿènH½àþÿÿènH½ÈþÿÿènH½¨ýÿÿèsnH½ýÿÿègnH½°þÿÿè[nH½þÿÿèOnH½ØýÿÿèCnH½Àýÿÿè7nH½þÿÿè+nH½hþÿÿènH½þÿÿènH½ðýÿÿènH½PþÿÿèûmH½8þÿÿèïmH½ þÿÿèãmLøHÄØ[A^A_]ÃHÃéHÃé\nHÃéöHÃéâHÃéÎHÃéºHÃé¦HÃéHÃé~HÃéjHÃéVHÃéBHÃé.HÃéHÃéHÃéòHÃéÞHÃéÊHÃé¶HÃé¢HÃéHÃë}HÃëlHÃë[HÃëJHÃë<HÃë+HÃëHÃëHÃH}¸èölH} èílH½0ýÿÿèálH½ýÿÿèÕlH}èÌlH½pÿÿÿèÀlH½Xÿÿÿè´lH½Hýÿÿè¨lH½@ÿÿÿèlH½(ÿÿÿèlH½`ýÿÿèlH½ÿÿÿèxlH½øþÿÿèllH½xýÿÿè`lH½àþÿÿèTlH½ÈþÿÿèHlH½¨ýÿÿè<lH½ýÿÿè0lH½°þÿÿè$lH½þÿÿèlH½ØýÿÿèlH½ÀýÿÿèlH½þÿÿèôkH½hþÿÿèèkH½þÿÿèÜkH½ðýÿÿèÐkH½PþÿÿèÄkH½8þÿÿè¸kH½ þÿÿè¬kLÿè¤kHßèhlHÇè87UHåAWAVAUATSHì(IöLuÈHûH=öèÁkH=rLöèL4IÄAÆD$`M|$hHßLæè9kLsIt$L÷è(kL}ÐLuÀH{0H}¸It$0èkID$hHChID$`HC`ID$XHCXID$HIL$PHKPHCHLspL{xHÇHÇCxHÇCpL{pMl$pIÄxë6IU L÷LþèÂ^IEHÀtIÅIEHÀuôëLèLhI9ELèuóM9åuÅH=ýèÎjH}ÐHÿtèÒjHCH8yÇeH=ÔèjH=PHuÈèfH=¸èjHØHÄ([A\\A]A^A_]ÃIÄI7L÷èLH}¸èjH}ÀèýiHßèõiLçè¹jIÄHsxëÍIÄëâIÄëÔUHåAWAVAUATSHìIÔHóIÿH5ê}Lu¨ºL÷è]iH}ÀHÞLòèNßÿÿöufÇëHCÆHÇC1öHßèYiHEÐHCHEÀHMÈHKHWÀ)EÀHÇEÐH}ÀèBiH}¨è9iH5f}LµxÿÿÿºL÷èÖhH}LæLòèÇÞÿÿAö$u\tfAÇ$ëID$ÆIÇD$1öLçèÌhHE ID$HEHMIL$I$WÀ)EHÇE H}è²hH½xÿÿÿè¦hHhÿÿÿHÇpÿÿÿHÇhÿÿÿH`ÿÿÿÆ_ÿÿÿuH½`ÿÿÿHµ_ÿÿÿèÄ1HÇHÞèchÆ^ÿÿÿmH½`ÿÿÿHµ^ÿÿÿè1H5}HÇèhÆ]ÿÿÿpH½`ÿÿÿHµ]ÿÿÿèv1H5F|HÇèÛgÆ\\ÿÿÿhH½`ÿÿÿHµ\\ÿÿÿèM1H5|HÇè²gÆ[ÿÿÿdH½`ÿÿÿHµ[ÿÿÿè$1H5ô{HÇègÆZÿÿÿtH½`ÿÿÿHµZÿÿÿèû0H5{|HÇè`gÆYÿÿÿqH½`ÿÿÿHµYÿÿÿèÒ0H5¢{HÇè7gÆXÿÿÿxH½`ÿÿÿHµXÿÿÿè©0H5y{HÇègL½ÐúÿÿWÀ)@ÿÿÿHÇPÿÿÿH@ÿÿÿ¾ 1ÉLçè6ÞÿÿHµ@ÿÿÿHHÿÿÿH)ðHÁHÁùI¿«ªªªªªªªI¯ÏHù×HøÍE1íH(ÿÿÿL¥ÿÿÿE1öLîHßè§f¶(ÿÿÿ¨uHÑèëH0ÿÿÿHør\\H@ÿÿÿJt(Lçèvfö(ÿÿÿH8ÿÿÿH)ÿÿÿHDÁ@ÿÿÿH½`ÿÿÿHµÿÿÿè©/HÇLæèHfLçè:fHßè2fIÆHµ@ÿÿÿHHÿÿÿH)ðHÁøI¯ÇHÿÈIÅ0I9ÆGÿÿÿL½ÐúÿÿIÇGIÇGIÇWÀ)ðþÿÿHÇÿÿÿÆïþÿÿqH½`ÿÿÿHµïþÿÿè/H5äyHÇè=eÀÆîþÿÿqH½`ÿÿÿHµîþÿÿèã.H½ðþÿÿHÆè~eHØþÿÿHÇàþÿÿHÇØþÿÿWÀ)þÿÿ)þÿÿ)pþÿÿ)`þÿÿHÇ þÿÿHÐþÿÿH½HþÿÿHµðþÿÿèeH½HþÿÿHµ`þÿÿèXìÿÿÃH½HþÿÿèödÛu)Ç¬þÿÿÇ°þÿÿHÇ¸þÿÿÇ¨þÿÿfH½þÿÿHµðþÿÿèªdH½0þÿÿHµ`þÿÿHþÿÿè8îÿÿAö8AÆGAÆé9ÆþÿÿxH½`ÿÿÿHµþÿÿèÆ-H5xHÇèïcÀÆþÿÿxH½`ÿÿÿHµþÿÿè-H½ðþÿÿHÆè0dHøýÿÿHÇþÿÿHÇøýÿÿWÀ)°ýÿÿ) ýÿÿ)ýÿÿ)ýÿÿHÇÀýÿÿHðýÿÿH½hýÿÿHµðþÿÿè½cH½hýÿÿHµýÿÿè\nëÿÿÃH½hýÿÿè¨cÛH½ÈüÿÿHµðþÿÿècH½àüÿÿHµÈüÿÿèæ÷ÿÿöýÿÿÆýÿÿÆýÿÿéIGÆIÇG1öLÿè)cH@þÿÿIGH0þÿÿH8þÿÿIOIWÀ)0þÿÿHÇ@þÿÿH½0þÿÿècH½þÿÿèôbH½ÐþÿÿHµØþÿÿèïDH½þÿÿèÕbH½xþÿÿèÉbH½`þÿÿékH½üÿÿèÝÿÿöðþÿÿu>ÆñþÿÿÆðþÿÿëCÇÌýÿÿÇÐýÿÿHÇØýÿÿÇÈýÿÿféáHÿÿÿÆHÇøþÿÿH½ðþÿÿ1öè/bHüÿÿHÿÿÿHüÿÿHüÿÿHøþÿÿHðþÿÿWÀ)üÿÿHÇüÿÿH½üÿÿèüaH=yèDbH=õHµðþÿÿèË*HÃÆüÿÿuH½`ÿÿÿHµüÿÿè+H{HÆèºaÆ~üÿÿdLµ`ÿÿÿHµ~üÿÿL÷èó*H{0HÆèa1ÿèÎbHCXÇCLÇCPÇCHÿÿÿÿÆC`HÇChHÃpL9ótHµ`ÿÿÿHßHhÿÿÿèöYH=½èaHhüÿÿHÇpüÿÿHÇhüÿÿWÀ) üÿÿ)üÿÿ)üÿÿ)ðûÿÿHÇ0üÿÿH`üÿÿÆPüÿÿH½ØûÿÿHµðþÿÿèÀ`H½ðûÿÿHµØûÿÿèÃÞÿÿ8üÿÿH½Øûÿÿè§`¶ðûÿÿÁáuHÂHÑêëHøûÿÿ@üÿÿ½<üÿÿÖÉÁHÑèéÀHýÿÿÆHÇýÿÿH½ýÿÿ1öè,`HðüÿÿHýÿÿHàüÿÿHèüÿÿHýÿÿHýÿÿWÀ)àüÿÿHÇðüÿÿHýÿÿöýÿÿuÆýÿÿÆýÿÿëH¨ýÿÿÆHÇ ýÿÿ1öHßè®_LµøüÿÿIFHCIINHKHIÇFIÇFIÇL¥°ýÿÿö°ýÿÿuÆ±ýÿÿÆ°ýÿÿëHÀýÿÿÆHÇ¸ýÿÿ1öLçè;_HýÿÿHCID$HHKIL$I$HÇCHÇCHÇHHýÿÿHèýÿÿH@ýÿÿHàýÿÿH8ýÿÿHØýÿÿH(ýÿÿH0ýÿÿHÐýÿÿHÈýÿÿH½ðýÿÿL¥PýÿÿLæèAHµXýÿÿLçè¿@Hßè©^L÷è¡^H½àüÿÿè^H½Èüÿÿè^H½üÿÿHµðþÿÿèj^H½°üÿÿHµýÿÿHüÿÿèøçÿÿAöuAÆGAÆëIGÆIÇG1öLÿè^HÀüÿÿIGH°üÿÿH¸üÿÿIOIWÀ)°üÿÿHÇÀüÿÿH½°üÿÿèñ]H½üÿÿèå]H½ðýÿÿHµøýÿÿèà?H½°ýÿÿèÆ]H½ýÿÿèº]H½ýÿÿé\\Høûÿÿ<üÿÿÆ¿ûÿÿdH½`ÿÿÿHµ¿ûÿÿèã&H½ÀûÿÿHÆèl]H5¤qH½Àûÿÿèù\\ÀH5qH½ðûÿÿèÞ\\Àt{¶ðûÿÿöÃuHñûÿÿH°ûÿÿHÑëëHüÿÿH°ûÿÿHøûÿÿH½ûÿÿHµÀûÿÿèó\\H½°ûÿÿHûÿÿÞè7ÙÿÿH½ûÿÿèÞ\\H5\nqH½ðûÿÿè\\H=Hè]H=ÄHµðþÿÿè%IÇH½ûÿÿLþè\\H½(ûÿÿIwè~\\L­@ûÿÿIw0Lïèk\\IGhHxûÿÿIG`HpûÿÿIGXHhûÿÿIGHIOPH`ûÿÿHXûÿÿLµûÿÿHÇûÿÿHÇûÿÿHÇûÿÿLµûÿÿI_pIÇxL9ût@L¥ûÿÿHS LçLöèPHCHÀt\rHÃHHÀuõëHØHXH9HØuôL9ûuÇ8üÿÿ<üÿÿXûÿÿ@üÿÿ`ûÿÿ\\ûÿÿH½ûÿÿHµðûÿÿè[H½ØúÿÿHµðþÿÿèn[H½ðúÿÿHµûÿÿHØúÿÿL½ÐúÿÿèõäÿÿAöuAÆGAÆëIGÆIÇG1öLÿè[HûÿÿIGHðúÿÿHøúÿÿIOIWÀ)ðúÿÿHÇûÿÿH½ðúÿÿèîZH½ØúÿÿèâZH=çHµðþÿÿè³VH=Lè[H½ûÿÿHµûÿÿè¾<Lïè¨ZH½(ûÿÿèZH½ûÿÿèZH½ÀûÿÿèZH½`üÿÿHµhüÿÿè<H½ üÿÿèeZH½üÿÿèYZH½ðûÿÿèMZH½ðþÿÿèAZH½@ÿÿÿèý;HµhÿÿÿH½`ÿÿÿè0<LøHÄ[A\\A]A^A_]ÃIÆé@IÆé,IÆH½ÿÿÿèîYëIÆH½(ÿÿÿéIÆéìIÆHµûÿÿLçèÑ;Lïè»YH½(ûÿÿè¯YH½ûÿÿè£YH½ÀûÿÿèYH½`üÿÿHµhüÿÿè;H½ üÿÿèxYH½üÿÿèlYH½ðûÿÿè`YérIÆëUIÆH}¨èJYéHÇèá$IÆH½xÿÿÿè.YéwHÇèÅ$éÿÿÿIÆH½Hþÿÿë\nIÆH½þÿÿèYH½ÐþÿÿHµØþÿÿèü:H½þÿÿèâXH½xþÿÿèÖXH½`þÿÿèÊXéÜHÇèa$IÆéIÆé\nÿÿÿIÆéÿÿÿIÆëVIÆH½hýÿÿëoIÆH½üÿÿëcHÇè$$HÇè$IÆH½ØûÿÿéÍþÿÿIÆé²þÿÿIÆéþÿÿIÆH½ØúÿÿèJXH½ûÿÿHµûÿÿéoþÿÿHÇèÓ#IÆH½Èüÿÿè XH½ðýÿÿHµøýÿÿè:H½°ýÿÿèXH½ýÿÿèõWH½ýÿÿèéWH½ðþÿÿèÝWH½ÐúÿÿèÑWH½@ÿÿÿè9HµhÿÿÿH½`ÿÿÿèÀ9L÷èvXHÇèF#HÇè>#HÇè6#IÆH½ûÿÿéÛýÿÿUHå@¶Ç]ÃUHåAWAVAUATSHìÈH½HüÿÿHHHEÐfïÀf0þÿÿf þÿÿfþÿÿÇHþÿÿHÇ@þÿÿfüÿÿHÇüÿÿH½þÿÿè XÀÕ\nHþÿÿ1ÿHÛ¾\nLµÀýÿÿL¥xýÿÿfïÀfàýÿÿfÐýÿÿfÀýÿÿf°ýÿÿf ýÿÿfýÿÿfýÿÿfpýÿÿf`ýÿÿHôýÿÿfÇ@ÇHK¶AøÃHÉ¸tAÈHK HÉA½tDiAÍHK(HÉA¿tDyAÏHpüÿÿHÀ¸HÂHÁêHÁHÁé¶É¶ôIðD¶È1ÀHPÿÿÿHßH5øjè(WHßè&WH½@ýÿÿHÞHÂèUö`ýÿÿuÆaýÿÿÆ`ýÿÿëHpýÿÿÆHÇhýÿÿH`ýÿÿ1öHßèyUHPýÿÿHpýÿÿH@ýÿÿHHýÿÿHhýÿÿH`ýÿÿfïÀf@ýÿÿHÇPýÿÿH½@ýÿÿèDUHßH59jèÉTÀ«LëHÚHÁêHØHÁè¶È¶ÇIÀD¶Ë1ÀHÐþÿÿHßH5jè5VHßè3VH½ ýÿÿHÞHÂèTö¨ýÿÿuÆ©ýÿÿÆ¨ýÿÿëH¸ýÿÿÆHÇ°ýÿÿH¨ýÿÿ1öHßèTH0ýÿÿHCH ýÿÿH(ýÿÿHKHfïÀf ýÿÿHÇ0ýÿÿH½ ýÿÿè[TLûHÚHÁêHØHÁè¶È¶ÇIÀD¶Ë1ÀHPþÿÿHßH53iècUHßèaUH½ýÿÿHÞHÂèÃSöýÿÿuÆýÿÿÆýÿÿëH ýÿÿÆHÇýÿÿHýÿÿ1öHßè´SHýÿÿHCHýÿÿHýÿÿHKHfïÀfýÿÿHÇýÿÿH½ýÿÿèSHpüÿÿHXHÛHßè±TH½àüÿÿHÞHÂèSöÀýÿÿuÆÁýÿÿÆÀýÿÿëHÐýÿÿÆHÇÈýÿÿ1öL÷èSHðüÿÿIFHàüÿÿHèüÿÿINIfïÀfàüÿÿHÇðüÿÿH½àüÿÿèàRLüÿÿHüÿÿHhüÿÿL)ÀHÁøH¹ÍÌÌÌÌÌÌÌH¯ÁÀÌ¶ÀýÿÿIÎIÑîáL¥ÐýÿÿHÁýÿÿLDâÉLcÈLxüÿÿLEµÈýÿÿE1íO|­IÁçC¶L8`È$uHÑéëKL8hL9ñucÀu1Mö%KD8`HÿÀLáLò¶¶89ßu>HÿÀHÿÁHÿÊuëéýMöôK|8pLæLòLÃè,SLxüÿÿIØÀÏIÿÅM9ÍmÿÿÿHhüÿÿH;üÿÿLµÀýÿÿúHßHµ`ýÿÿL¥xýÿÿè¥QLsL÷LæèQL{0LÿHµýÿÿèQLµxüÿÿLsHL÷Hµ¨ýÿÿèiQLk`LïHµÀýÿÿèVQH{xHµØýÿÿèFQHðýÿÿHÁfAfHHHüÿÿ LµÀýÿÿëlMøLÇHµ`ýÿÿL¥xýÿÿLµÀýÿÿèQHüÿÿJ|8HHµ¨ýÿÿèíPHüÿÿJ|80HµýÿÿèÕPëH½üÿÿHµ`ýÿÿL¥xýÿÿèg3HpüÿÿHKAHpüÿÿ¶Àøu1¶Aøu(Çðýÿÿ¶AHD1É\rôýÿÿHÿÁHùuíºH½ÀüÿÿHµôýÿÿèdöxýÿÿuÆyýÿÿÆxýÿÿëHýÿÿÆHÇýÿÿ1öLçèýOHpüÿÿHÐüÿÿID$HÀüÿÿHÈüÿÿIL$I$fïÀfÀüÿÿHÇÐüÿÿH½ÀüÿÿèÈOH[HÛHßè÷PH½ üÿÿHÞHÂèYOöÀýÿÿuÆÁýÿÿÆÀýÿÿëHÐýÿÿÆHÇÈýÿÿ1öL÷èQOH°üÿÿIFH üÿÿH¨üÿÿINIfïÀf üÿÿHÇ°üÿÿH½ üÿÿè&OHüÿÿHüÿÿHPüÿÿH)ØHÁøH¹ÍÌÌÌÌÌÌÌH¯ÁÀ¶ÀýÿÿIÈIÑèáHµÐýÿÿHÁýÿÿHDòHµhüÿÿÉLcÈLXüÿÿLEÈýÿÿL`üÿÿA¼E1öK¶HÁâ¶L`È$uHxüÿÿHÑéëHLhHxüÿÿL9ÁE1ÿIÇÅúÿÿÿÀu<MÀ?HxüÿÿHD`HÿÀHhüÿÿLÂ¶1¶89÷uJHÿÀHÿÁHÿÊuëéMÀHxüÿÿH|pHµhüÿÿLÂè1OL`üÿÿÀLXüÿÿÒIÿÆIÄ M9Î5ÿÿÿHPüÿÿH;üÿÿ%HßHµ`ýÿÿL¥xýÿÿè¦ML{LÿLæèMLs0L÷HµýÿÿèML½xüÿÿLkHLïHµ¨ýÿÿèjML{`LÿHµÀýÿÿèWMH{xHµØýÿÿèGMHðýÿÿHÁfAfHHHüÿÿ LµÀýÿÿéDøF¾¼-úýÿÿAÇIÿÅuìHÇÀúÿÿÿEÿLµÀýÿÿL½xüÿÿ~5úýÿÿB#HüÿÿIÿÄHÿÀuæJ|;L¥xýÿÿLæèÇLHüÿÿðýÿÿB;L¥xýÿÿë!H½üÿÿHµ`ýÿÿL¥xýÿÿLµÀýÿÿè6/HpüÿÿHH½ØýÿÿèlLL÷èdLH½¨ýÿÿèXLH½ýÿÿèLLLçèDLH½`ýÿÿè8LHÛWõÿÿH½þÿÿè%MHüÿÿHüÿÿH)ÁHÁéiÉÍÌÌÌE1ä»É¦L=Ö`L5Ü`E1íH|LþènKÀtSHüÿÿH|LöèVKÀt;HüÿÿLüùtùGu&McífLfB-þÿÿB-þÿÿAÅAý;1IÿÄHüÿÿHüÿÿH)ÁHÁéiÉÍÌÌÌHcÉHÃ I9ÌkÿÿÿfïÀ1Éfo\rø]fo^foØ·\rþÿÿfnÂf8ÁfÛÂfÔÃHÁHù<uÙfpÈNfÔÈfH~ÎHþÿÿ1ÒHötHüÿÿH)ÂHÁêiÂÍÌÌÌ1ÒÀ¸u5HcÂHiðÉB²HÁî Ç÷þÁîÁï÷k÷)ðHÂHÿÁ1ÀHú´uËfHnÀfpÀDfnÈfpÙfþ^]fnþÿÿf`ÈfaÈfoU]fÛÊfpãõfôÛfôäÆÜÆÛØfo%D]fÔàfÔH]ÆÄfþÃfoH]foàfräfÛãfoèfôëfpóõfrãfÛØfþãfpØõfôóÆîÝÆíØfúìfþèfoÝfrÓfråfþëfpÝõfôêfôÚÆëÆíØfúÅfïÁf8à\\f~þÿÿHÀHø<ÿÿÿHµþÿÿº<H½Hüÿÿè¤H½üÿÿèi0H>tHH;EÐ½HHüÿÿHÄÈ[A\\A]A^A_]ÃHpüÿÿéHÇèäHÇèÜHÇèÔHpüÿÿé#HpüÿÿëML½xüÿÿHpüÿÿë1Hpüÿÿë HpüÿÿëHpüÿÿLÿèêHLïèâHL÷èÚHH½xüÿÿèÎHH½PüÿÿèÂHë{HÇè\\HÇèTèIHÇèGHpüÿÿëMLµxüÿÿHpüÿÿë1Hpüÿÿë HpüÿÿëHpüÿÿLïèiHL÷èaHLÿèYHH½xüÿÿèMHHßèEHH½Øýÿÿè9HH½Àýÿÿè-HH½¨ýÿÿè!HH½ýÿÿèHLçè\rHH½`ýÿÿèHH½üÿÿèÝ.H½püÿÿèµHUHåAWAVAUATSHìX þÿÿIôIþH½(ÿÿÿL-orM}@L½¸þÿÿHÀþÿÿHrHHH¨þÿÿHÀ@H(ÿÿÿHÇ°þÿÿHÞèñGHÇE°ÇE¸ÿÿÿÿIEHþÿÿH¨þÿÿIÅhL­(ÿÿÿL½¸þÿÿL½þÿÿHßèGLµþÿÿHÕqHÀHþÿÿHÀþÿÿHÇÿÿÿHÇÿÿÿHÇÿÿÿHÇÿÿÿÇ ÿÿÿWÀ)EÀHÇEÐHuÀHßèø0H}Àè½F þÿÿAÆÀtkH¸þÿÿE1ÿH¸þÿÿH@èÀþÿÿáµÉÀþÿÿH¸þÿÿH@èHÇÐþÿÿH¸þÿÿH@èÇHÿÿÿ0C¶4<HßèFIÿÇM9þwLµþÿÿL÷HÀþÿÿHÞèH1HþÿÿH¨þÿÿL­(ÿÿÿHþÿÿH¸þÿÿHþÿÿHÀþÿÿH½ÿÿÿèïEHßè5FH5tpHÆH½¨þÿÿèFH½(ÿÿÿèHFLðHÄX[A\\A]A^A_]ÃIÆHþÿÿH¨þÿÿL­(ÿÿÿHþÿÿHHþÿÿHÀþÿÿH½ÿÿÿèsEH½ÀþÿÿèµEH5ôoHÆH½¨þÿÿèEH½(ÿÿÿèÈEL÷èFIÆëçIÆëËIÆH}Àè&Eë¥IÆH¸þÿÿéiÿÿÿUHåAWAVAUATSHìØIýA¶E¨uHÑèëIEHøxßH]¨HßLîèÇDH}ÀHÞè®AöEu\tfAÇEëIEÆIÇE1öLïèDHEÐIEHEÀHMÈIMIEWÀ)EÀHÇEÐH}ÀènDH}¨èeDA¶E¨uHÑèëIEHø<uJH]HßèÈìÿÿH½`ÿÿÿHÞè&DH½xÿÿÿHµ`ÿÿÿèH½`ÿÿÿèD¶xÿÿÿ¨uHÑèë1ÛévHEHø<QIuLµyÿÿÿ1ÉEMAáHðtIE¶<È¯ÀDDHHiØHÁë B\\ÚÁêÁûÓiÓÿ)Ð1ÇEÉHòtIU@<\nöxÿÿÿu\rH¼\ryÿÿÿLòëHUH<\n¶?1Ç@<\nHÿÁHù<tÿÿÿA¶UöÂuHÑêëIUIuH½@ÿÿÿèIûÿÿAöEu\tfAÇEëIEÆIÇE1öLïèñBHPÿÿÿIEH@ÿÿÿHHÿÿÿIMIEWÀ)@ÿÿÿHÇPÿÿÿH½@ÿÿÿèÇB¶xÿÿÿöÂuHÑêLöëHUHuH½ ÿÿÿè¶úÿÿöxÿÿÿuÆyÿÿÿÆxÿÿÿëHEÆHÇEH½xÿÿÿ1öèQBH0ÿÿÿHEH ÿÿÿH(ÿÿÿHMHxÿÿÿWÀ) ÿÿÿHÇ0ÿÿÿH½ ÿÿÿè$BA¶E¨uHÑèëIEHøxk¶xÿÿÿ¨uHÑèëHEHøxME1ÿLµÿÿÿL%¾VëL9ÙIÇÄÿÿÿÿL)ÉIÌéüJ½H@¹L÷LîMèèAL÷Læè&AÀt-L÷H5vVèAÀtD¶xÿÿÿAöÃuIÑëLyÿÿÿëL÷èYAéªL]LM¶ÿÿÿöÂuHÑêHµ\tÿÿÿëHÿÿÿHµÿÿÿI9ÓrZHÒA¼tVI9Ó|JAºI)ÒMÚt<MËMÊDLÉA¶Ø¶99ß»uH9Úÿÿÿ¶<¶HÿÃ9øtèHÿÁL9ÑuÐIÇÄÿÿÿÿL÷è¸@Eä³L%UyIÿÇIÿ\náþÿÿ1ÛH½xÿÿÿè@H}è@ØHÄØ[A\\A]A^A_]Ãë'HÃH}¨ë1HÇèHÃë HÃH½`ÿÿÿèK@ëHÃH½xÿÿÿè:@H}è1@Hßèõ@HÇèÅHÇè½UHåAWAVAUATSHì(IþH½xþÿÿèê?D¶½xþÿÿAöÇuIÑïëL½þÿÿH5TH½Hþÿÿºè|?H5ðSH½0þÿÿ1Òèg?H½`þÿÿHµxþÿÿHHþÿÿH0þÿÿèNºÿÿöxþÿÿuÆyþÿÿÆxþÿÿëHþÿÿÆHÇþÿÿH½xþÿÿ1öè:?DûÁëDûÑûHpþÿÿHþÿÿH`þÿÿHhþÿÿHþÿÿHxþÿÿWÀ)`þÿÿHÇpþÿÿH½`þÿÿèü>H½0þÿÿèð>H½Hþÿÿèä>CHAÿýHÇÇÿÿÿÿHMøèm?IÄH½þÿÿHµxþÿÿè©>L¥èýÿÿHÐýÿÿLµàýÿÿ¶þÿÿ¨uL½ØýÿÿHþÿÿHþÿÿHÑèëL½ØýÿÿH þÿÿH(þÿÿHþÿÿÁHþÿÿÀ,HÿÿÿLµ¨þÿÿE1ÿHêhL`@L¥ðýÿÿHÐhHÀHþÿÿH¦hHÀHøýÿÿL­èýÿÿHÇE¨L¥ þÿÿHfhHÁHAHþÿÿHA@HÿÿÿHÇþÿÿHßLöè3>LóLàHÇEÇE ÿÿÿÿH\rShLaL¥þÿÿLqhLµÿÿÿH þÿÿHßèÂ=HþÿÿH¨þÿÿHèþÿÿHÇ@HÇ@HÇ@HÇÇÿÿÿWÀ)E°HÇEÀHßH]°HÞèP'Hßè=H þÿÿH@è¨þÿÿáµÉ¨þÿÿHþÿÿB8EÖºH½ þÿÿHuÖèF$HþÿÿBL9M×ºHÇHu×è&$H½þÿÿHu¨è°<E¨AEL¥þÿÿLµÿÿÿL¥ðýÿÿL¥ þÿÿHþÿÿH¨þÿÿH½èþÿÿèg<Lµ¨þÿÿL÷è¦<H½þÿÿHµøýÿÿè<HÿÿÿHßèº<IÇIÿÅL;½þÿÿ\"þÿÿH½þÿÿè<HÐýÿÿLcðL¥èýÿÿCÆ4L½àýÿÿIÇGIÇGIÇ1ÛHØýÿÿø|A¾4Lÿèµ;HÿÃL9ó|ëLçèM<H½xþÿÿè«;LøHÄ([A\\A]A^A_]ÃIÅL¥þÿÿLµÿÿÿHðýÿÿH þÿÿHþÿÿH¨þÿÿëIÅë<IÅë$IÅH}°èQ;H½èþÿÿèE;H½¨þÿÿè;H½þÿÿHµøýÿÿèh;H½ÿÿÿè;H½þÿÿè;H½xþÿÿè;LïèÆ;IÅLÿèï:ëßIÅëÚIÅëIÅH½0þÿÿèÔ:H½HþÿÿèÈ:ë¸HÇèbUHåAWAVAUATSHì¸Iöû¸ûÕM~LÿèÏ;H}¸LþHÂè4:WÀ)E HÇE°û§LcãA½HpÿÿÿO<îLÿè;HßLþHÂèò9HßH5rNèï9HHHMHHPHUHMHÇ@HÇ@HÇ¶UöÂu\tHÑêHuëHUHuH} è¤9H}èÑ9HßèÉ9IÿÅM9åiÿÿÿH½@ÿÿÿHu¸è¡9H½(ÿÿÿHu è9H½XÿÿÿHµ@ÿÿÿH(ÿÿÿè©ÏÿÿH½(ÿÿÿèw9H½@ÿÿÿèk9¶XÿÿÿöÂuHµYÿÿÿHÑêëH`ÿÿÿHµhÿÿÿH=cè« HÃHHpèHÞH}ÐèÕ8H5pcH}Ðè¿8HHI8¾\nHÇÿÑAÆH}Ðè\\9A¾öHßèü8Hßèú8H½XÿÿÿèÖ8H} èÍ8H}¸èÄ81ÀHÄ¸[A\\A]A^A_]ÃHÃëHÃëHÃH}è8H½pÿÿÿè8H} è8H}¸è|8Hßè@9HÃëHÃH}ÐèÉ8H½XÿÿÿëÇë¨HÃëHÃH½(ÿÿÿèD8H½@ÿÿÿë¨UHåHw]é4UHåAWAVSPHûH¾bHHHIÞIîHHhHHÀ@HCL{HbHÀHCH{XèÍ7Lÿè8H5RbHÆHßèô7L÷HÄ[A^A_]é$8UHåSPHûH{Êè&HHIèH<HÀt1öët ÎHÄ[]éã7UHåAVSHûH÷aHHHHÀ@H H{èpH5½aHÆL³ HßèN7L÷[A^]é7UHåAWAVATSHì IöIüHuØLòè'IÇIHÛu-H}ÀLæLòèõ(HuØH]ÀLçLúHÙèg)HÇEÀHÃ8HØHÄ [A\\A^A_]ÃUHåAWAVATSHìIôIþHuØLâè]-IÇIHÛu>¿@è7HÃA$C HÇC8HÇC0HÇC(HuØL÷LúHÙèl,HÃ(HØHÄ[A\\A^A_]ÃUHåAWAVATSHÓIôIþIÇFIÇFIÇLçè77D¶;AöÇuIÑïëL{HÁLùL÷LæHÂè5öuHÿÃëH[L÷HÞLúèz5Lð[A\\A^A_]ÃHÃL÷è5Hßè]6UHåAWAVAUATSPIÖIôIÿIÇGIÇGIÇA¶$öÃuHÑëL÷è6IÅIÿÄëI\\$L÷è}6IÅMd$ILLÿLæHÚèÜ4LÿLöLêèÚ4LøHÄ[A\\A]A^A_]ÃHÃLÿèó4Hßè·5UHåAWAVSPHóIþHÛtfH3L÷èàÿÿÿHsL÷èÔÿÿÿLs L{8H»¨H³°è±H{hè4H{Pè4Lÿè4L÷è4HßHÄ[A^A_]é5HÄ[A^A_]ÃUHåè5èÞ4UHåAWAVSPHñ^HHHOðHHhHOpHÀ@HHË^HÀHGLðLwpH_HHè4HßèH4H5^HÆLÿè)4L÷HÄ[A^A_]éY4UHåAWAVSPHH@èL<H\rl^HQHL´HQhHHÁ@HLH\\H\r3^HÁHLH|Xèt3Hßèº3H5ù]HÆLÿè3L÷HÄ[A^A_]éË3UHåAWAVSPHûHæ]HHHIÞIîHHhHHÀ@HCL{H²]HÀHCH{Xèõ2Lÿè;3H5z]HÆHßè3L÷èV3HßHÄ[A^A_]é\\3UHåAWAVSPHc]HHHOðHHhHOpHÀ@HH=]HÀHGLðLwpH_HHèt2Hßèº2H5ù\\HÆLÿè2L÷èÕ2LÿHÄ[A^A_]éÛ2UHåAWAVSPHH@èL<H\rÖ\\HQHL´HQhHHÁ@HLH\\H\r\\HÁHLH|XèÞ1Hßè$2H5c\\HÆLÿè2L÷è?2LÿHÄ[A^A_]éE2UHåSPHûHD\\HÀHH{@è1HßHÄ[]éÈ1UHåSPHûH\\HÀHH{@èZ1Hßè 1HßHÄ[]éà1UHåL^0LNXM9ÙsL^XMÙDÀà¡ùu\tøE1ÒÉt<ùuöF@uHN@HÿÁëùusAöÀuMÚL+V(ëHNPMÊI)ÊëLVL+VIÒxKöF@u\tHN@HÿÁëHNPLÈH)ÈL9Ð|-DÁáMÒ­ÉtH~tAöÀMÛHÇGxHÇGpHÇGhHÇG`HÇGXHÇGPHÇGHHÇG@HÇG8HÇG0HÇG(HÇG HÇGHÇGHÇGHÇHÇÿÿÿÿHø]ÃÉtHFLÐHFLN AöÀtIcÂHF(HF0HÇGxHÇGpHÇGhHÇG`HÇGXHÇGPHÇGHHÇG@HÇG8HÇG0HÇG(HÇG HÇGHÇGHÇGHÇLéLÿÿÿUHåSPAÐHûHH1ÉÿP HØHÄ[]ÃUHåHG0HOXH9ÁsHGXHÁ¸ÿÿÿÿöG`t\"Hw H9Îs\rHWHO HÎëHWH9òs¶]ÃUHåHG0LWXI9ÂsHGXIÂLGHW¸ÿÿÿÿI9Ðs@þÿt*öG`uD¶Jÿ@¶ÎD9Éu'HÿÊLGHWLW @2ðëHÿÊLGHWLW 1À]ÃUHåAWAVAUATSHì(AöHûE1äAþÿL{Lk0L+{HC8I9ÅtHSXH{XHK`éA¼ÿÿÿÿöC`ÜHC(HE¸HCXHEÀH{@H}È1öèÛ-¾H}Èöt\nH7HæþHÿÎ1Òèª-HE¸I)ÅH}ÀH)ÇHuÈ¶¨uHÿÆHÑèëHCHHsPHK`HSXHðHs(HC8McíIõLk0H÷H{XIuHuÐH9þH}ÐHBúH?H:öt\"öC@u\tHK@HÿÁëHKPIÏHKL{H{ I9ÅtHs0EuE¶æDàHÄ([A\\A]A^A_]ÃHH@hA¶öHßHÄ([A\\A]A^A_]ÿàHÇè¬-è­-ëÁUHåAVSHH@èHH\r{WHQHL´ HÁ@H H|èéH56WHÆHßèÎ,L÷[A^]é-UHåAVSHûH%WHHHL³ HÀ@H H{èH5äVHÆHßè|,L÷èÈ,Hß[A^]éÔ,UHåAVSHH@èHH\rÃVHQHL´ HÁ@H H|è1H5~VHÆHßè,L÷èb,Hß[A^]én,UHå]éUHåAVSHûHSVHÀHè]»tH{@Hÿtè*,»tH{hHÿtè,Hß[A^]é¿+HÇè,è,ë·IÆHßè¥+L÷èóöÿÿUHåAWAVSPHûLsx1ÀMöt0HH@0HßÿÐAÇL÷è\t,Á1ÀÉu1ÀEÿHDÃHÇCxHÄ[A^A_]ÃHÃL÷èÚ+Hßè´+UHåSPHûèÿÿÿHßHÄ[]éh+UHåAVSIöHûHÿP0H5UL÷èV*HHD¶³HÇÿQ8¶ÈA9ÎÏHÇC8HÇC0HÇC(HÇC HÇCHÇCÀtGÉtH{@HÿtèÊ*HCpHC`HChHC@ÆHÇCpHÇChëNÉu2HC@HKXH9Èt%H{`H{pHChÆèx*HC@ÆëH{`H{pè^*HChÆ[A^]ÃUHåAWAVATSI×IöHûHÇC8HÇC0HÇC(HÇC HÇCHÇC»tH{@Hÿtèç)»tH{hHÿtèÐ)L{`Iÿ\trD£Möt2Eät-Ls@Æë3HCXHC@HÇC`ÆD£ëLÿè)HC@ÆEätÆHÇCpHÇChë9Iÿ¿IMÿH{pMötHÿr\rLshÆëè5)HChÆHØ[A\\A^A_]ÃUHåAWAVAUATSPAÏIÔIöHûI¾HÿHÿP0AÅI~xt?MätEí~5IL÷ÿP0Àu(Aÿs\"I~x1öEí~IcõI¯ôDúè)ÀHÇCxHÇCpHÇChHÇC`HÇCXHÇCPHÇCHHÇC@HÇC8HÇC0HÇC(HÇC HÇCHÇCHÇCHÇHÇÿÿÿÿHØHÄ[A\\A]A^A_]ÃI~xèr(IÆ¹HßLöóH¥HëÇ¿èä'HÃHßèµ'H5¨QHQHßèÛ'UHåAWAVSPIöHûI~xt+IL÷ÿP0ÀuL}I~xI·1Òèè'ÀHÇCxHÇCpHÇChHÇC`HÇCXHÇCPHÇCHHÇC@HÇC8HÇC0HÇC(HÇC HÇCHÇCHÇCHÇHÇÿÿÿÿHØHÄ[A^A_]ÃIÆ¹L÷LþóH¥ºHßLþèG'ëËUHåAWAVAUATSHìIÿH¸PHH]ÐE1íIxÞIHÀîAöÁu:öÁ¶I·H½Pÿÿÿ¹óH¥A¿¢Mw M+wéIG0I;G(tIA½ÿÿÿÿ¾ÿÿÿÿLÿÿPhøÿaM·A½ÿÿÿÿIW@I¿IO`HÑHLöLHÿÿÿÿP(ÃL¥HÿÿÿI@IOxI)ü¾Lâè,&L9àu\nût³ûu:HÀOHéóHHÇÿQ0IOHMwPI)ÎÀ~3HIO I+OH¯ÈIÎëXIxè°%ÀH{OH­é¥MGM;G t.IW@I¿M+GHHµPÿÿÿÿP@HI)ÆMwHM+w@A´ëE1äIxI÷ÞºLöèh%ÀtA½ÿÿÿÿëMEätI¿HµPÿÿÿ¹óH¥IG@IGPIGHAÇIÇG IÇGIÇGE1íH;]ÐuDèHÄ[A\\A]A^A_]Ãè¿$¿è$HÃHßèV$H5INH*NHßè|$UHåAWAVAUATSHì(HûA¿ÿÿÿÿH{xöHßèaHsHöuHuØHM×HKHsHs HK E1öÀu\"HÈH+CHÂHÁê?HÂHÑúHúA¾LFòH9Ît\rD¶>LkéyLkH{L)öLòèR$»tNH{HS L)òH)úL÷HKx¾èî#A¿ÿÿÿÿHÀ/HKJ1LðHÈHSHC F¶<1éH{@HsHHSPH)òèç#HS@HCPH+CHHÐHCHHsX¹H9òtHK`HÊHSPHKpL)ñH)ÂH9ÊHCÑH»L£¹LæóH¥HKx¾HÇèD#A¿ÿÿÿÿHÀH»Hÿ LCHHCHHCPHKHS@N1HKpLHuÈHt$H$LæHÁAÿR øuHC@HKPHCHCHK D¶8ë HEÈIMIÎL9ðtHKLsHC E¶>HE×I9EuIÇEWÀCDøHÄ([A\\A]A^A_]Ã¿è-\"HÃHßèþ!H5ñKHÒKHßè$\"UHå¸ÿÿÿÿHxt=HOH9Os3þÿt%öuD¶Aÿ@¶ÖD9ÂuHÿÉHO@1ðë\tHÿÉHO1À]ÃUHåAWAVAUATSHìHAöHûA¿ÿÿÿÿH{xHßèHs(HK0H{8Aþÿt-HÉuHEØHM×HK0HK(HC8D1HK0HÿÁHK0HS(ëHòIÌI)Ô6H}¨Hu°»t\"HKx¾H×Lâè!L9àéïLK@LMÈH»Hÿ¬HHE¸ëLK@HC`LÈLHuÈHt$H$Hu¸LEÀAÿRAÅH{(H9}À±Aý¹AýLeÈH{@HKxI)ü¾Lâèê L9àu|AýuWHUÀHC0HS(HC8)ÐHcÈHÑHK0H»Hÿaÿÿÿ¿è= HÃHßè H5JHâIHßè4 HE°HC0HC(HE¨HC8E1ÿAþÿEEþDøHÄH[A\\A]A^A_]ÃLc0HKxI)ü¾éµþÿÿUHåöu+HÇG8HÇG0HÇG(¿tHG@HO`ë1Àë#HGhHOpHÁHGHOHO Ç°]ÃUHåöuHÇG HÇGHÇGHG`Hø\tr ¿t1HO@HDÿHO0HO(HG8ë3HÇG8HÇG0HÇG(ëHGhHOpHLÿHG0HG(HO8Ç]ÃUHåAVSHûL3Möt.H{L9÷tHÇèH{èH{L9÷uêL3L÷[A^]é[A^]ÃUHåAVSHóIþHÛt,H3L÷èãÿÿÿHsL÷è×ÿÿÿH{(èÀHß[A^]éP[A^]ÃUHåAWAVSPIöHûL{HsèÿÿÿIHIFHCINHKHÉtINLxIHÇAHÇëL;HÄ[A^A_]ÃUHåAWAVAUATSHìHIõIþI¿II^H)ÃHÁûH¿ÍÌÌÌÌÌÌÌH¯ßHÿÃL9ûvIüL÷èLçIINIVH)ÂHÁúH¯×H¾ËÌÌÌÌÌÌH9òw\rHÒH9ÚHBÓI×MfI)ÄIÁüL¯çHÇEÈHMÐ1ÛMÿtLøHÁàH<è=HÃH]°O$¤IÁäJ<#H}¨H}ÀH}¸K¿HÁàHØHEÈLîèSN|#IuLÿèBJ|#0H}Iu0è0L} J|#HH}IuHèN|#`Iu`Lÿè\tJ|#xIuxèûfAfB#IJ#J# HEÀH]°L÷HÞètHßè*HÄH[A\\A]A^A_]ÃHÃëGHÃë9L} HÃë'HÃëHÃëHÃLÿèH}èH}è{H} èrH}¨èiH}°èÆHßè$UHåLHWL9ÊuHNHÂÀI÷ÙIÇÀ`ÿÿÿHB°HpÿÿÿLR HB¨HhÿÿÿL`ÿÿÿHÇB°HÇB¨HÇB HBÈHALR¸HBÀHALxÿÿÿHÇBÈHÇBÀHÇB¸HBàHA LRÐHBØHALQHÇBàHÇBØHÇBÐHBøHA¸LRèHBðHA°LQ¨HÇBøHÇBðHÇBèHBHAÐLHBHAÈLQÀHÇBHÇBHÇHB(HAèLRHB HAàLQØHÇB(HÇB HÇBfB8fAøHB0HAðHNLÁHNJ\n`ÿÿÿHÂ`ÿÿÿHøÀ¢þÿÿLëHNHLNHGHNHOHFHGHNHOHFHFH]ÃUHåAWAVATSIþMfëFL»`ÿÿÿM~H{ØèrH{ÀèiH{¨è`H{èWHÃxÿÿÿHßèHLÿè@I^L9ãu±I>Hÿt\r[A\\A^A_]é¾[A\\A^A_]ÃUHåAWAVATSIÿM7MötkI_L9ótRL£`ÿÿÿMgH{ØèåH{ÀèÜH{¨èÓH{èÊHÃxÿÿÿHßè»Lçè³I_L9óu±M7L÷[A\\A^A_]é3[A\\A^A_]ÃUHåAWAVAUATSHì8IÖI÷HûH}ÀHÞè}À¹HL`èI|(¸°A#Dø MýuO,7N#B#øÿuUH}¸H}ÐLÆLE°èÉH5dBH}Ðè³HHI8¾ HÇÿÑE¯H}ÐèP¾E¯B#H}¸LE°MþD¾ÈLþLêLñèHÀuHH@èH<t Îè#H}ÀèÆHØHÄ8[A\\A]A^A_]ÃIÆëIÆëIÆH}ÐèÚH}ÀèIßL÷èHLxèLÿèÃèë®HÃèüHßèHÇèÖâÿÿUHåAWAVAUATSHì(DMÔLEÈIÖIõIüIÏM)ïI@HE¸M9õsTHMÀMä»t9AEIL$0I;L$8tHQIT$0Lãë¶ðI$LçÿPhøÿ»IEÜIÿÅM9îIÜu²ëHMÀLãHM¸L9ù~TEÔD¶àI)ÏHÛA¾t5HC0H;C8tHHHK0MÔIÞëHHßDæÿPhøÿA¾LEóIÿÇLóu¸ëIÞH]ÀI9ÝsLMö¸t5AEIN0I;N8tHQIV0Lðë¶ðIL÷ÿPhøÿ¸IEÆIÿÅL9ëIÆu¶ëLðHMÈHÇAHÄ([A\\A]A^A_]ÃUHåAWAVSPHûLs@L÷è»HÇCXC`¨t7A¶öÁuHÑéILIVHKXëHKPHKHHKXHSPHSHSHK ¨t{E¶>AöÇuIÑïKD>HCX¾ëL{HHCPLøHCXHs@HæþHÿÎ1ÒL÷èA¶¨uIÿÆHÑèëHCHLsPLñIÆHK0HK(Ls8öC`t\nIcÇHÁHK0HÄ[A^A_]ÃUHåSPHûF`¨u¨u6HÇCHÇCHÇë0HF0HVXH9ÂsHFXHÂHv(HßëHFHV HßHÆèHØHÄ[]ÃUHåAWAVAUATSPIÖHóIÿMõI)ÝIýïv\nLÿèñëIýwKD-AIÿÇLøëMeIäðLçèÑIGIÌM'MoL9ótHÁHÿÃHÿÁI9ÞuñLèÆHÄ[A\\A]A^A_]ÃUHåAWAVAUATSHì8Hu¨IÿI¼ªªªªªªª\nII_H)ÃHÁûI½«ªªªªªªªI¯ÝHÿÃL9ãvLÿè:IIOIWH)ÂHÁúI¯ÕH¾TUUUUUUH9òw\rHÒH9ÚHBÓIÔMwI)ÆIÁþM¯õHÇEÈHMÐ1ÛMätJåH<@èãHÃH]°O4vJ<óH}ÀH}¸KdHÃHEÈHu¨èJDóHEÀH]°LÿHÞè+HßèµHÄ8[A\\A]A^A_]ÃHÃH}°èHßèUHåLHWL9ÂtNHNHBøHAøLJèHBðHAðLIèHÇBøHÇBðHÇBèHRèHNHÁèHNI9Ðu»LëHNHLFHGHNHOHFHGHNHOHFHFH]ÃUHåAVSHûLsë\rHÇèH{èH{L9÷uêH;Hÿt\t[A^]é[A^]ÃUHåAWAVSHìHûè1H~<HÀHH{`LsHÇCPHÇCHHÇC@¾3èL}àLÿLöèH5ÿ;Lÿè9AÇH}àèíEÿtAL}ØLÿLöèÓH5Ð;LÿèHH}ØèºH»HÿP8HH@1öºHßÿÐHÄ[A^A_]ÃHÇè¿ÜÿÿIÆëIÆH}ØèpHßèPL÷èÆUHåAVSAÖHû1ÀH{xDòâýH\rì%1Àú/$ÿÊúãH=âHcHúÿâH\rÅ%ëyú7ú0toú4·H\r¶%ë]ú8u\tH\r¢%ëOú<H\r£%ë=H\r%ë4H\r%ë+H\r%ë\"H\rg%ëH\ro%ëH\rW%ëH\r`%H÷HÎèHÁHKx1ÀHÉt8D³AöÆt(1öºHÏèÀtH{xè×HÇCx1ÀëHØ[A^]Ã'ÿÿÿúÿÿÿúÿÿÿúÿÿÿlÿÿÿúÿÿÿúÿÿÿÿÿÿuÿÿÿúÿÿÿúÿÿÿÿÿÿ~ÿÿÿúÿÿÿúÿÿÿ©ÿÿÿ'ÿÿÿúÿÿÿúÿÿÿCÿÿÿlÿÿÿúÿÿÿúÿÿÿÿÿÿuÿÿÿúÿÿÿúÿÿÿ¢ÿÿÿ~ÿÿÿUHåAWAVAUATSHì8H_HÛ6Hu ¶AÇAçHÑèHEÐHBHEÈHBHE¸HBHE°ëHÃEÿLmÈLDmÐ¶C AÄAäuIÆIÑîëLs(HS EÿH}¸HD}°Eäu\nHrHUÀëHUÀHs0M9îLêIBÖHÒtHE¨èÜÀHE¨tyëM9õs\rHHÀuéEäuIÞHÑèëHC(IÞH}ÀEÿH]ÈHD]ÐEäuHÿÇëI~0H9ÃHÂHBÓHÒtEÿHu¸HDu°IÄèiÀLàtxë.H9Øs)IFHÀ\tÿÿÿHE L0IÆLðëHÇH>HøëHE L0ë\nHE HHØHÄ8[A\\A]A^A_]ÃUHåAWAVAUATSPIÔIöIÿ¿ÀèiIÅI} Læè¦\rIÆI}8LëHÃ°¾èhI¨M/MwIÇGLøHÄ[A\\A]A^A_]ÃIÆLïèÿ\rL÷è'UHåSPHûHÇAHÇHqH\nHH8t\tHHH\nH{HÎèHÿCHÄ[]ÃUHåSPHøH9ÆFtIH^{u?H{HH9Ùt\rHÉt5ytë-HOHÉtLyuFÆCH9ÇGÆAH9ÇHþu·HÄ[]ÃH93uHßè~H[H{ÆCÆGHÄ[]é(H93tHßèH[H{ÆCÆGHÄ[]é;UHåHGHHOHÉtHyHOHHHOH99tHAëHH8HG]ÃUHåHHHHHÉtHyHOHHHOH99tHAëHHxHG]ÃUHåAWAVSHìIöHûH}ÐHÞèWL}ÐHßLöLúèÁIÆHÇEÐM9þtMÿt!}àt\tI(èLÿè)ëHÇEÐLðHÄ[A^A_]ÃUHåAWAVATSIÖHóIüHÃ¿@èúIÇM<$I\\$AÆD$AAG I(Ivè AAG AÆD$Là[A\\A^A_]ÃHÃIÇ$LÿèHßèÄUHåAVSHìIÖHûIN HUèè*HHÉuHuèHßHÂLñèòLñHÈHÄ[A^]ÃUHåLOI9ñt\r¶D¶V D9Ðs!H97LIñtVMÀt4LÀIÁIAHÀuôë2D¶ÀA¶ÂD9ÀsLHFHÀtHIÂIHÀuõëJHðLHI9LÈtôD¶A¶A D9ÐsKMÀtL\nIÁLÊëPH2HòëHH2ëCHðLPI9LÐuôM9Êt\nA¶B A9ÀsH~tLLÒëHÖHÊ]éXH2HÆHòHÐ]ÃUHåSPHûHÇAHÇHqH\nHH8t\tHHH\nH{HÎèüÿÿHÿCHÄ[]ÃUHåHGHÀt6¶\nëHÐ¶P 9Ñs\nHHÒuíë(¶Ò9Ês)HPHÒuÛHHÀHÆëHÇH>HþëHHÆëHHð]ÃUHåHGHÀt6¶\nëHÐ¶P 9Ñs\nHHÒuíë(¶Ò9Ês)HPHÒuÛHHÀHÆëHÇH>HþëHHÆëHHð]ÃUHåAWAVAUATSPIõHWLwLñèIÇM9÷tjIw E¶eDà$uIÑìëMe¶ÙáuHÑëëI_(ÀuIÿÅëMmÉuHÿÆëIw0L9ãLâHBÓHÒtLïèl\tÀty\nëI9ÜsM÷LøHÄ[A\\A]A^A_]ÃUHåAWAVAUATSHì(HËHÒ¤D¶6E÷AçIÑîHFHEÐHFHEÈHFHEÀH]¸HÓD¶k Dè$uIÑíëLk(EÿLeÐMDæÀu\tH{ HÿÇëH{0M9ìLêIBÔHÒtEÿHuÈHDuÀè¯ÀtxëM9åsH[HÛuë\nHHÒuëH]¸HØHÄ([A\\A]A^A_]ÃUHåAWAVAUATSPI×IôIþI~IINIINHÇAIÇFIÇFHXHÛHDØHÛÆM9üÔAD$ C H{(It$(èÕHßèñIÅL÷HÞèIID$HÀu8LàL`I9$Làuóë2HÇèIëHÃHCHÀuôL÷HÞèèÿÿè7IÄI$HÀuôMíLëqÿÿÿë5It$ L÷è6ID$HÀtIÄI$HÀuôëLàL`I9$LàuóM9üuÆHÄ[A\\A]A^A_]ÃHÃHCHÀuôL÷HÞHÄ[A\\A]A^A_]éýçÿÿHÃè¡Hßè«HÇè{ÑÿÿUHåHO1ÀHÉtUH99t)HÇAHHÒHÈt=HÐHHÒuõHPHÒuìë'HÇHQHÒHÈtHÐHHÒuõHPHÒuì]ÃUHåSPHóHwHöt*¶C ëHÎ¶N 9Ès\nHHÉuíëHNHÉuâHVëHwHòHÙèWûÿÿHØHÄ[]ÃUHåAWAVATSHì HðIþI^HÛt)¶ëHÓ¶S 9Ñs\nHHÒuíëHSHÒuâL{ëI^IßH}ÈLöHÂè%LeÈL÷HÞLúLáèÚúÿÿLàHÄ [A\\A^A_]ÃUHåAWAVATSIÖHóIüHÃ¿@èIÇM<$I\\$AÆD$AAG I(IvèDAAG AÆD$Là[A\\A^A_]ÃHÃIÇ$LÿèÀHßèèUHåSPHûèHûÿÿHS1ÉH9ÐtHßHÆè¹HÈHÄ[]ÃUHåAWAVATSIöIFHÀt\rHÃHHÀuõëLðHXH9HØuôL97uHHÿOHLöèQM~ Mf8I¾¨I¶°èåÿÿI~hèyI~PèpLçèhLÿè`L÷èôHØ[A\\A^A_]ÃUHåAVSHHÀHñtHVHÒtHÑHHÒuõHAHÀuLIE1À1ÀëHñHQHPA°LIIHH9ËtHBëH1ÛH9ùIÆtHZIþDQH9ñtAHVIH~H97tHJëH\nHHHJHVHQHÒtHJVQI9öLDñEÒôMöëEÀtÆ@éÝHQHBH9\nHEÂHH{H9CtYÀuÆCÆGèâõÿÿHI9ÆLDóHXHHÉt\nyHCHÀt\nxÆCHKL9ñtiyuë^ÀuÆCÆGèÄõÿÿHCI9ÆLDóHHHÀt\nxHKHÉtytmÆCHKL9ñtAÀ1ÿÿÿÆAëIÎAÆF[A^]ÃHCHÀtxtÆAÆCHßèKõÿÿH[HCH{OKÆGÆ@[A^]éíôÿÿHÀtxtHCÆ@ÆCHßèÎôÿÿH[HH{OKÆGÆ@[A^]éçôÿÿUHåSPH=[+H5|.HkÿÿHÚèÁHÇú2HÇç2H5Ø2HÙ2HÊ2H=ÈÿÿHÚHÄ[]éÿ%n+ÿ%p+ÿ%r+ÿ%t+ÿ%v+ÿ%x+ÿ%z+ÿ%|+ÿ%~+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ%+ÿ% +ÿ%¢+ÿ%¤+ÿ%¦+ÿ%¨+ÿ%ª+ÿ%¬+ÿ%®+ÿ%°+ÿ%²+ÿ%´+ÿ%¶+ÿ%¸+ÿ%º+ÿ%¼+ÿ%¾+ÿ%À+ÿ%Â+ÿ%Ä+ÿ%Æ+ÿ%È+ÿ%Ê+ÿ%Ì+ÿ%Î+ÿ%Ð+ÿ%Ò+ÿ%Ô+ÿ%Ö+ÿ%Ø+ÿ%Ú+ÿ%Ü+ÿ%Þ+ÿ%à+ÿ%â+ÿ%ä+ÿ%æ+ÿ%è+ÿ%ê+ÿ%ì+ÿ%î+ÿ%ð+ÿ%ò+ÿ%ô+ÿ%ö+ÿ%ø+ÿ%ú+ÿ%ü+ÿ%þ+ÿ%,ÿ%,ÿ%,ÿ%,ÿ%,ÿ%\n,ÿ%,ÿ%,ÿ%,ÿ%,ÿ%,ÿ%,ÿ%,Lá(ASÿ%Ñ(héæÿÿÿhéÜÿÿÿh4éÒÿÿÿhKéÈÿÿÿheé¾ÿÿÿh~é´ÿÿÿhéªÿÿÿh³é ÿÿÿhÍéÿÿÿhééÿÿÿh:éÿÿÿhéxÿÿÿhÖénÿÿÿhédÿÿÿhLéZÿÿÿhzéPÿÿÿhéFÿÿÿhóé<ÿÿÿhHé2ÿÿÿhé(ÿÿÿhïéÿÿÿhBéÿÿÿhé\nÿÿÿhèéÿÿÿh?éöþÿÿhéìþÿÿhåéâþÿÿh5éØþÿÿhéÎþÿÿhØéÄþÿÿh(éºþÿÿheé°þÿÿh£é¦þÿÿhãéþÿÿh&éþÿÿhléþÿÿh¯é~þÿÿhëétþÿÿh'\téjþÿÿhc\té`þÿÿh \téVþÿÿhÞ\téLþÿÿh\néBþÿÿh;\né8þÿÿh\\\né.þÿÿh}\né$þÿÿh\néþÿÿhº\néþÿÿhú\néþÿÿhéüýÿÿh@éòýÿÿhwéèýÿÿhéÞýÿÿhªéÔýÿÿhËéÊýÿÿhåéÀýÿÿhýé¶ýÿÿhé¬ýÿÿh'é¢ýÿÿh>éýÿÿhNéýÿÿhcéýÿÿh|ézýÿÿhépýÿÿhéfýÿÿh§é\\ýÿÿhµéRýÿÿhÃéHýÿÿh×é>ýÿÿhåé4ýÿÿhôé*ýÿÿh\ré ýÿÿh\réýÿÿh%\réýÿÿh4\réýÿÿhC\réøüÿÿhR\réîüÿÿhb\réäüÿÿhr\réÚüÿÿh\réÐüÿÿh\réÆüÿÿh«\ré¼üÿÿÿÃAeË ÐÕ£4ìÿÚ£ßÑ\nüA!ÚbG©È\t\r!\"¼mÿ)'DDzO>ÿ¶4Y£jj\r°ÿhhÇ­<äðöû9X`ßÞ\tóßé¤!w7%<°Aä\nîl7¥Zéÿ¡ ¥ÿL*vÿe%ÿÐN ,¤DM¹¡ZÁlfÿ¬2-*ÿ© 3?¢Õªä²º`Â®ÊºÒóÚ6âêòÉú\tY\n\t\tÎ\t\"\tM*\t2\tÝ:\t?\tRD\tI\tÚN\téS\t\"\tX\tY]\tb\tõ\nÈ\nÿÑÿÐNXX°uµÝw) §IqÿÅ¼55_\niS¼ì\n±_=Í¸¹ÕPîzÝSý°Ã¾$Ê]Sýþ::M«\nýZÞ¼ýû-\tb\t0\n\n\n8}\n\n@QdF\nR@\"-È%ÛHüD%K\rq[\ryá\r:&5`!¡\n£«¬ÿõìmI%Þ\nA%Ñ\n¹\\%£\nÁ%L\nÎ²%ÌÖÛßõïø]Ï%Z\n1Æ%\n9±\t%Ë\tUÚ\t^ô\tn\nw\n©\nN%QIì\r¤ÿÐNh­ª²·:¤Å½ÿ¥BB¥m\n®w]Ô¶ã»×Ì\nìjÌôe£xÿ¥==,U1j!6¹SI,S²·ì¼0EJR\tÿvvÛ\tdf!ky\"J$OÈJÜ§ÿ¢r&fÝÿ¯'WB_fÿS'?ÿêhååö¡!ª/¯@´E¯ÿ}u\tcw$».éL5D=\nGTLÿ)'ÖÖ\tßCÿÖN\\\\Ûè*ÄãÐ4ÿ)'((t0Wÿ)'CCaH4ÿÖNv­{SÎ[Ó^kcÿ)'CCaH4ÿÿÿÿÿÿ\rNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEENSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEENSt3__114basic_ofstreamIcNS_11char_traitsIcEEEENSt3__113basic_filebufIcNS_11char_traitsIcEEEE \tp-?\r\\s \\b\\t\\n\\f\\r{\r\n\"statusCode\": ,\r\n\"data\": \"\",\r\n\"url\": \"\",\r\n\"localFile\": \"\",\r\n\"bytesDownloaded\": ,\r\n\"bytesTotal\": ,\r\n\"startTime\": ,\r\n\"id\": \"\"\r\n}\r\ng0000000000000acde48001122127.0.0.1%li.%li.%li.%liwarr+w+a+wbabrbr+bw+ba+b\nDHÑXQ!aÑXaQQ!Q¨À \t@`D@\t\rÔ¬p9öØn, X*P,¤s>ð¡Nl£×PÀ£ÓUl¤.[¥Æ_ì[`g°¥$jØ¥j¦ x,¦^}¦þ§îH§\n¤§xÐ§¢ü§TX¨U`\n<dö\tÖ\nN\t øh8!ò\"I5S5ãD·G³LR T®T,UhUºU¦V;WâWpX~X$[[]²]f^Ü_ú`a\t~aäab cPd¸eºfnk¾k¤mnootq2s>tuþvèwPxÞxzzÎzÒ{h}ê~rlâXÔþFö\\²4°äÀzRx$l[ÿÿÿÿÿÿ(AC\rB$D¨¯ÿÿÿÿÿÿAC\rzPLRx]4$$[ÿÿÿÿÿÿ ìÿÿÿÿÿÿAC\rP$Ä6¯ÿÿÿÿÿÿ~AC\rF,ìä\\ÿÿÿÿÿÿrAC\rM4´&^ÿÿÿÿÿÿ)ÓëÿÿÿÿÿÿAC\rP,TaÿÿÿÿÿÿmAC\rK4TaÿÿÿÿÿÿìÿÿÿÿÿÿAC\rM4T©bÿÿÿÿÿÿ½ûëÿÿÿÿÿÿAC\rP$ô®ÿÿÿÿÿÿ;AC\rB$®ÿÿÿÿÿÿRAC\rC4ÜÞcÿÿÿÿÿÿ-¯ëÿÿÿÿÿÿAC\rP,|®ÿÿÿÿÿÿmAC\rK,¬È®ÿÿÿÿÿÿ~AC\rK4t¯ÿÿÿÿÿÿ+ìÿÿÿÿÿÿAC\rG,;jÿÿÿÿÿÿKAC\rG4ÜC¯ÿÿÿÿÿÿ¦ãëÿÿÿÿÿÿAC\rJ,jÿÿÿÿÿÿÒËëÿÿÿÿÿÿAC\rJ$¬ÀkÿÿÿÿÿÿØAC\rF4lplÿÿÿÿÿÿWÇëÿÿÿÿÿÿAC\rJ,¤¨mÿÿÿÿÿÿÐ\n¯ëÿÿÿÿÿÿAC\rL4ÔHxÿÿÿÿÿÿº/íÿÿÿÿÿÿAC\rM4ÊyÿÿÿÿÿÿWKíÿÿÿÿÿÿAC\rP$¬éÿÿÿÿÿÿ\nAC\r4lËÿÿÿÿÿÿ7ïÿÿÿÿÿÿAC\rP4¤#ÿÿÿÿÿÿÔ{ðÿÿÿÿÿÿAC\rP4Ü¿ÿÿÿÿÿÿüðÿÿÿÿÿÿAC\rP4¢ÿÿÿÿÿÿ[ñÿÿÿÿÿÿAC\rP4L¦§ÿÿÿÿÿÿñÿÿÿÿÿÿAC\rP$ìB­ÿÿÿÿÿÿAC\rF$¨­ÿÿÿÿÿÿAC\r$<­ÿÿÿÿÿÿyAC\rF$dà­ÿÿÿÿÿÿAC\rF$F®ÿÿÿÿÿÿAC\rF$´¤®ÿÿÿÿÿÿAC\rF$Üþ®ÿÿÿÿÿÿAC\rF$l¯ÿÿÿÿÿÿ.AC\rB$,r¯ÿÿÿÿÿÿ6AC\rB$T¯ÿÿÿÿÿÿAC\r$|\\±ÿÿÿÿÿÿ%AC\rB$¤Z±ÿÿÿÿÿÿGAC\r$Ìz±ÿÿÿÿÿÿlAC\r4¾±ÿÿÿÿÿÿu×ïÿÿÿÿÿÿAC\rM$,ü²ÿÿÿÿÿÿ^AC\rC$T2³ÿÿÿÿÿÿZAC\rC$|d³ÿÿÿÿÿÿfAC\rC$¤¢³ÿÿÿÿÿÿ\nAC\r,d³ÿÿÿÿÿÿy'ïÿÿÿÿÿÿAC\rC,Î³ÿÿÿÿÿÿf+ïÿÿÿÿÿÿAC\rF$,\t´ÿÿÿÿÿÿAC\rB$T\tø³ÿÿÿÿÿÿ AC\rC,|\tð´ÿÿÿÿÿÿ0AC\rG,¬\tðµÿÿÿÿÿÿgAC\rJ$Ü\t(·ÿÿÿÿÿÿAC\rF,\n¸ÿÿÿÿÿÿ\\AC\rP,4\n.ºÿÿÿÿÿÿXAC\rM$d\nV¼ÿÿÿÿÿÿOAC\r,\n~¼ÿÿÿÿÿÿæAC\rM$¼\n4¾ÿÿÿÿÿÿaAC\r$ä\nn¾ÿÿÿÿÿÿAC\r$Ô¾ÿÿÿÿÿÿEAC\rC$4ò¾ÿÿÿÿÿÿCAC\rC$\\¿ÿÿÿÿÿÿbAC\rF4H¿ÿÿÿÿÿÿôÃìÿÿÿÿÿÿAC\rM$¼Áÿÿÿÿÿÿ½AC\r,äÂÿÿÿÿÿÿAC\rG,ìÂÿÿÿÿÿÿAC\rG4ÜFÃÿÿÿÿÿÿ\\sìÿÿÿÿÿÿAC\rM,|jÄÿÿÿÿÿÿcAC\rM$¬ÅÿÿÿÿÿÿéAC\rF$Ô`ÆÿÿÿÿÿÿgAC\rB,ü ÆÿÿÿÿÿÿAC\rJ4ÄþÆÿÿÿÿÿÿ\"ìÿÿÿÿÿÿAC\rM$d\rèÇÿÿÿÿÿÿAC\r$\rRÈÿÿÿÿÿÿ<AC\rC,L\rfÈÿÿÿÿÿÿ¯ëÿÿÿÿÿÿAC\rI$ä\r:Éÿÿÿÿÿÿ!AC\rC,¨ÊÿÿÿÿÿÿAC\rM4Ô\rúËÿÿÿÿÿÿëÿÿÿÿÿÿAC\rJ$tJÌÿÿÿÿÿÿHAC\rB$jÌÿÿÿÿÿÿ²AC\rB$ÄôÌÿÿÿÿÿÿ;AC\r$ìÍÿÿÿÿÿÿ;AC\r$ÍÿÿÿÿÿÿuAC\rI4ÔhÍÿÿÿÿÿÿ|¯êÿÿÿÿÿÿAC\rG$t¬ÍÿÿÿÿÿÿGAC\rG$ÌÍÿÿÿÿÿÿáAC\r$ÄÎÿÿÿÿÿÿHAC\rB$ì¦Îÿÿÿÿÿÿ_AC\r$ÞÎÿÿÿÿÿÿ_AC\r,<Ïÿÿÿÿÿÿ¨AC\rJ,lÏÿÿÿÿÿÿÓAC\rM442Ðÿÿÿÿÿÿs{éÿÿÿÿÿÿAC\rJ$ÔnÑÿÿÿÿÿÿfAC\r$ü¬ÑÿÿÿÿÿÿUAC\rB,$ÚÑÿÿÿÿÿÿAC\rK4ì,Òÿÿÿÿÿÿ|éÿÿÿÿÿÿAC\rG$pÒÿÿÿÿÿÿ3AC\rB,´|ÒÿÿÿÿÿÿAC\rG$äèÒÿÿÿÿÿÿ@AC\rC$ÕÿÿÿÿÿÿcAC\rBØÇàÇèÇðÇÐÆÅ°Æ0Ä8ÇXÆ¸Å°ÃXblv¨²¼ÆÐÚäîø *4>HR\\fpz¢¬¶ÀÊÔÞèòü$.8BLV`jt~¦°ºÄÎØâìö\n(2<FPZdnxà§«ª2 ÅÎ]¦bpðÿÿÿÿÿÿÿ Åa,cÿÿÿÿÿÿÿÿÿÿÿÿÿÿ Åb®cÈÃÄÅ@ÅhÅÅèÄÀÄÄðÃpðÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿpÿÿÿÿÿÿÿÿÿÿÿÿÿÿ ©@ÆDdrd¨d¬fÒfggp©  Ç^Zi`þÿÿÿÿÿÿ`þÿÿÿÿÿÿ Çüh´ipÆèÆÇÆ `þÿÿÿÿÿÿ`þÿÿÿÿÿÿÀ©ÀÇjk k@lpmØnÚo6rtÞtð©\"UGRAVB`5D`JSBSBSAZ0¨pSBRCppppSBSATKpXBpppQ@__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0EvQr \n@__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Evðÿÿÿÿÿÿÿÿ@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0EvP ø@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Evðüÿÿÿÿÿÿÿ ø@__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED0Ev°ûÿÿÿÿÿÿÿ@__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Evðÿÿÿÿÿÿÿÿ@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEvØ@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeEØÿÿÿÿÿÿÿÿ@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv8 ø@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPclÀüÿÿÿÿÿÿÿ@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPcl  ø@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKclýÿÿÿÿÿÿÿ ø@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEvÐüÿÿÿÿÿÿÿ ø@__ZNSt3__14coutE°ñÿÿÿÿÿÿÿ@__ZNSt3__15ctypeIcE2idE@__ZNSt3__15mutexD1Ev@__ZNSt3__17codecvtIcc11__mbstate_tE2idE@__ZNSt8bad_castD1Ev@__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE°\t´@__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE ´ ÐÀ @__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEEØúÿÿÿÿÿÿÿÀ  È@__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE ø@__ZTISt8bad_castñÿÿÿÿÿÿÿ@__ZTVN10__cxxabiv120__si_class_type_infoE¨\n`  Ø @__ZThn16_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED0Evúÿÿÿÿÿÿÿ`@__ZThn16_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Evðÿÿÿÿÿÿÿÿ@__ZTv0_n24_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev@__ZTv0_n24_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Evðÿÿÿÿÿÿÿÿ@__ZTv0_n24_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0EvP ø@__ZTv0_n24_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Evðüÿÿÿÿÿÿÿ ø@__ZTv0_n24_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED0EvØûÿÿÿÿÿÿÿ@__ZTv0_n24_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Evðÿÿÿÿÿÿÿÿ@__ZdaPvðúÿÿÿÿÿÿÿ øÿÿÿÿÿÿÿÿ@__ZdlPv øÿÿÿÿÿÿÿÿ@__Znam øÿÿÿÿÿÿÿÿ@__Znwm øÿÿÿÿÿÿÿÿ@___gxx_personality_v0¨üÿÿÿÿÿÿÿ@___stack_chk_guard@dyld_stub_binderðþÿÿÿÿÿÿÿ@__ZTINSt3__113basic_filebufIcNS_11char_traitsIcEEEEQrÀ@__ZTINSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE þÿÿÿÿÿÿÿ´@__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE¨þÿÿÿÿÿÿÿ@__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEEøûÿÿÿÿÿÿÿÀ @__ZTSNSt3__113basic_filebufIcNS_11char_traitsIcEEEE°@__ZTSNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEEØþÿÿÿÿÿÿÿ@__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEEþÿÿÿÿÿÿÿ@__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEEØþÿÿÿÿÿÿÿ@__ZdaPv°ùÿÿÿÿÿÿÿ øÿÿÿÿÿÿÿÿ@__ZdlPv øÿÿÿÿÿÿÿÿ@__Znam øÿÿÿÿÿÿÿÿ@__Znwm øÿÿÿÿÿÿÿÿr¸@_curl_easy_cleanuprÀ@_curl_easy_getinforÈ@_curl_easy_initrÐ@_curl_easy_performrØ@_curl_easy_setoptrà@_curl_global_cleanuprè@_curl_global_initrð@_curl_slist_appendrø@_curl_slist_free_allr@__ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcmr@__ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKcr@__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEvr@__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEvr @__ZNKSt3__16locale9has_facetERNS0_2idEr¨@__ZNKSt3__16locale9use_facetERNS0_2idEr°@__ZNKSt3__18ios_base6getlocEvr¸@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcmrÀ@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcmmrÈ@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcrÐ@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcmrØ@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKcrà@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmPKcrè@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEmcrð@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKcmrø@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEmr@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEcr@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_r@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_mmRKS4_r@__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Evr @__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5_r¨@__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEErsERmr°@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE3putEcr¸@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEvrÀ@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5writeEPKclrÈ@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryC1ERS3_rÐ@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD1EvrØ@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Evrà@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEirè@__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEjrð@__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED2Evrø@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEEC2Evr@__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Evr@__ZNSt3__15mutex4lockEvr@__ZNSt3__15mutex6unlockEvr@__ZNSt3__16localeC1ERKS0_r @__ZNSt3__16localeD1Evr¨@__ZNSt3__16thread4joinEvr°@__ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEvr¸@__ZNSt3__18ios_base4initEPvrÀ@__ZNSt3__18ios_base5clearEjrÈ@__ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2EvrÐ@__ZNSt8bad_castC1EvrØ@__ZSt9terminatevr@___cxa_allocate_exceptionr@___cxa_begin_catchr@___cxa_end_catchr@___cxa_rethrowr @___cxa_throwr¨@__Unwind_Resumer°@___bzeror¸@___cxa_atexitrÀ@___stack_chk_failrÈ@_exitrÐ@_fcloserØ@_fflushrà@_fopenrè@_freadrð@_freeifaddrsrø@_fseekr@_fseekor@_ftellor@_fwriter@_getifaddrsr @_memchrr¨@_memcmpr°@_memcpyr¸@_memmoverÀ@_sprintfrÈ@_strlenrÐ@_timerØ@_uuid_generate_randomrà@_uuid_unparse_startL_#NXArgºenvironÐmh_execute_headerHZTQ_prognameÖ SNSt3__11jINSt3__11Ò8basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEEº5basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEEÀ4basic_ofstreamIcNS_11char_traitsIcEEEEÆ3basic_filebufIcNS_11char_traitsIcEEEEÌ ÒðÒÀÓðÓ8basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE¢5basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE¨4basic_ofstreamIcNS_11char_traitsIcEEEE®3basic_filebufIcNS_11char_traitsIcEEEE´ À ÀcÄvÊØàèð <( ò©m½­KÒØðÐº×$\nÔü\tÛ\n~<Rn~§z.6&Hlö^Zf\nzf °èÜØPæbFDbô¾Üäêh¢<H²;;v|HâH``¨ÔôfV|4Àd d/fÉcµ^.\\\t£$\\\tõ$(N(.\t$\t-|ì$ N .¤\\$¤$rNr.\r«$\r$)N).?õ$?$mNm.¬$¬X$N.9Ë$9&$½N½.ö$öcÓ$-N-.#@$#$KNK.nT$n$ÒNÒ.@$@$ØNØ.õ$$pNp.I\t$$Ð\nNÐ\n.X*­\t$X*$ºNº.,ý\t$,$WNW.i>N\n$i>b\n$\nN\n.s>\n$s>¡\n-$N.N$Nº$ÔNÔ.×P+$×P$üNü.ÓU$ÓU$[N[..[Ù$.[ß$N.À]Q\r$À]$N.Î]Õ\r$Î]$~N~.L^ $L^$<N<.^\\$^$RNR.Ú^$Ú^$nNn.H_$H_$~N~.Æ_ú$Æ_$N.[`V$[`$§N§.a²$a$N.aò$a$N.a\n$a$zNz.b[$b$N.¦b®$¦b$N.,cù$,c$N.®cJ$®c$N.Dd$Dd$.N..rdå$rd$6N6.¨d-$¨d$N.¬f$¬f$&N&.Òfj$Òf$HNH.gº$g$lNl.g\n$g$vNv.ühY$üh$^N^.Zi$Zi$ZNZ.´iÍ$´i$fNf.j$j$\nN\n.$j@$$j$zNz.ju$j$fNf.k®$k$N. kã$ k$ N .@l($@l$0N0.pmd$pm$hNh.Ønµ$Øn$N.Úo$Úo$\\N\\.6r@$6r$XNX.t}$t$PNP.Þtº$Þt$æNæ.Ävö$Äv$bNb.&w6$&w$N.´ww$´w$FNF.úwÛ$úw$DND.>x$>x$bNb. xg$ xÁ$ôNô.z9$z«$¾N¾.R| $R|$N.Ô|e$Ô|$N.^}¨$^}$\\N\\.º~\t$º~{$dNd.ë$$êNê.Q $$hNh.p $p$N.þ+!$þ$\"N\". ¦!$ $N.²9\"$²$<N<.î\"$î$N.òÔ\"$ò$N.#$$N.\nÂ#$\n$N.b$$$HNH.ÚD%$Ú$²N².%$$;N;.ÇÐ%$Ç$;N;.&$$vNv.x.'$x$|N|.ôJ($ô$HNH.<:)$<$âNâ.H*$$HNH.f+$f$`N`.Æì+$Æ$`N`.&,$&$¨N¨.Î~-$Î$ÔNÔ.¢~.$¢$tNt.m/$$fNf.|,0$|$VNV.Ò÷0$Ò$N.T©1$T$|N|.Ð¸2$Ð$4N4.3$$N. n4$ $@N@.à¬4$à$cNcË4&Ý4&Ôï4&p5&5&Ø&5&ì95&L5&,_5&r5& 5&P5&¤«5&ð¡¾5&l£Ñ5&À£ä5&l¤÷5&¥\n6&°¥6&Ø¥06&¦C6&,¦V6&¦i6&§|6&H§6&¤§¢6&Ð§µ6&ü§É6&X¨Ý6 '7 n7 £7 ×7 Þ7 (8 r8 Ø8 =9 £9 í9 4: {: °: å: 5; j; ; Ò; dß;\\\t1<\tC<¤<\rü<?\t=¬_=9º=ö>#)>nq>@Ê>??X*Ò?,#@i>7@s>M@Nh@×PÀ@ÓUA.[AÀ] AÎ]ëAL^'B^]BÚ^äBH_XCÆ_´C[`DaßDa÷DaHEbE¦bæE,c7F®cFDdÒFrdG¨d~G¬fäGÒf4HgHgÓHühIZiGI´iIjºI$jïIj(Jk]J k¢J@lÞJpm/KØnKÚoºK6r÷Kt4LÞtpLÄv°L&wñL´wUMúwN>xáN x;Oz­OR|òOÔ|5P^}Pº~QnQ¹QpHRþÃR VS²¼SîñSò,TßT\nUaVÚ­VíVÇ.WKXxgYôWZ<e[6\\f\t]Æ«]&^Î_¢`Ia|bÒÆbTÕcÐde ÉeàèeúeÔfpf0fØCfìVfif,|ff ¢fPµf¤Èfð¡Ûfl£îfÀ£gl¤g¥'g°¥:gØ¥Mg¦`g,¦sg¦g§gH§¬g¤§¿gÐ§Ògü§ægX¨úg\tÀhpÃh°ÃRh0ÄhÄiÅgiPÅÍi¸ÅjXÆIj°Æ~jÐÆÎj8ÇkøÇkØÇkàÇkÀÇSk Çk@ÆÏk Ålð©MlÀ©lp©Él ©mðÇm3mèÇ<m \tBmRmmêm*nknn¹n×n$oro¾opWp¤pïp?qq×q rprµrþr3shssÕstJttÅtút/uduuÎuv:vpvªvñv,wjw¨wçw&x]xx¥x½xÕxïxyy4yMyuy®yÊyæyz*z>zOzz·zìz\"{3{]{{Õ{|O||É|}E}M}U}\\}c}l}}}§}¸}Ç}Ô}ê}ü}~\"~5~E~X~j~~~¤~¹~¿~Ç~Ï~Ö~Ý~ê~ñ~ù~\t%-6?GMcq×ØÙÚÛÜÝÞß}~¡©ª­®°±²´µ¶·¸ºÉÊËÌÎÐÑÒÓ|ÍÏÕàáâãäåæçèéêëìíîïðñòóô@«¬¯³¹¿ÔÖ×ØÙÚÛÜÝÞß}~¡©ª­®°±²´µ¶·¸ºÉÊËÌÎÐÑÒÓ|ÍÏÕàáâãäåæçèéêëìíîïðñòó /Volumes/dev/Alex/WebReq/src/webrequest.cpp/Volumes/dev/Alex/WebReq/src/mac/build/webrequest.build/Release/webrequest.build/Objects-normal/x86_64/webrequest.o__Z8callbackPvmmPNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE/Volumes/dev/Alex/WebReq/src/webreq.h__Z11intToStringi/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/sstream/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/istream/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/ios/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/string/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/iosfwd__Z7strTrimRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7___Z8strSplitRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEcRNS_6vectorIS5_NS3_IS5_EEEEb/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/vector/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/memory__Z7newUUIDv__Z10strReplaceRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_S5_/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/algorithm__Z16saveBufferToFilePPKhjNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/fstream/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/ostream__Z19webrequest_internalRNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/__tree/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/map__ZL8xferinfoPvxxxx__Z5tfuncNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z7checkIdNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEER12ResponseData__Z16jsonStringEscapeNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z14responseToJsonRK12ResponseDataNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE__Z12abortRequestNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z10webrequestNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5___Z13OutAsUnsignedc/Volumes/dev/Alex/WebReq/src/machineid.h__Z15os_GetMachineIdv/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/libkern/i386/_OSByteOrder.h/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/iterator__ZL17bufferToHexStringPhj/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/iomanip__Z20os_ValidateMachineIdNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZL17hexStringToStringNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE_main/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/__locale__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEED1Ev__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEE4openEPKcj__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEEixERSB___ZNSt3__13mapIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIhEENS4_INS_4pairIKhS6_EEEEEixEOh/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/new__ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EEPKS6_RKS9___ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE7destroyEPNS_11__tree_nodeIS9_PvEE/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/utility___clang_call_terminate__ZThn16_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZTv0_n24_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZThn16_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZTv0_n24_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/streambuf__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi__ZTv0_n24_NSt3__114basic_ofstreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEED0Ev__ZTv0_n24_NSt3__114basic_ofstreamIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED1Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE5closeEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE6setbufEPcl__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE4syncEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE9underflowEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE9pbackfailEi__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE8overflowEi__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE11__read_modeEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE12__write_modeEv__ZNSt3__113__vector_baseINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEED2Ev__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE13__move_assignERSE_NS_17integral_constantIbLb1EEE__ZNSt3__16vectorI14networkAdapterNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT_/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/__split_buffer__ZNSt3__16vectorI14networkAdapterNS_9allocatorIS1_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS1_RS3_EE/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/type_traits__ZNSt3__114__split_bufferI14networkAdapterRNS_9allocatorIS1_EEED2Ev__ZNSt3__113__vector_baseI14networkAdapterNS_9allocatorIS1_EEED2Ev__ZNSt3__124__put_character_sequenceIcNS_11char_traitsIcEEEERNS_13basic_ostreamIT_T0_EES7_PKS4_m__ZNSt3__116__pad_and_outputIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEEET0_S5_PKT_S8_S8_RNS_8ios_baseES6_/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/../include/c++/v1/locale__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE__ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initIPcEENS_9enable_ifIXsr21__is_forward_iteratorIT_EE5valueEvE4typeES9_S9___ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT___ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS6_RS7_EE__ZNSt3__114__split_bufferINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERNS4_IS6_EEED2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEEC2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE4openEPKcj__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSB___ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEE25__construct_node_with_keyERSB___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSJ_SJ___ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5___ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT___ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE15__insert_uniqueIRKNS_4pairIKhS7_EEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEENS_21__tree_const_iteratorIS8_SP_lEEOT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__construct_nodeIJRKNS_4pairIKhS7_EEEEENS_10unique_ptrINS_11__tree_nodeIS8_PvEENS_22__tree_node_destructorINS5_ISO_EEEEEEDpOT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE20__node_insert_uniqueENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEESJ___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE12__find_equalIS8_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EElEESK_RKT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSI_SI___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE12__find_equalIS8_EERPNS_16__tree_node_baseIPvEESK_RKT___ZNSt3__13mapIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIhEENS4_INS_4pairIKhS6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE4findIS7_EENS_15__tree_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEERKT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE13__lower_boundIS7_EENS_15__tree_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEERKT_SL_SL___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEEEEvT_SM___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE8__detachEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE19__node_insert_multiEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE14__insert_multiERKS8___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__construct_nodeIJRKS8_EEENS_10unique_ptrINS_11__tree_nodeIS8_PvEENS_22__tree_node_destructorINS5_ISL_EEEEEEDpOT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE14__erase_uniqueIS7_EEmRKT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE5eraseENS_21__tree_const_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEE__ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5___GLOBAL__sub_I_webrequest.cppGCC_except_table2GCC_except_table5GCC_except_table7GCC_except_table8GCC_except_table11GCC_except_table14GCC_except_table16GCC_except_table17GCC_except_table19GCC_except_table20GCC_except_table21GCC_except_table22GCC_except_table24GCC_except_table25GCC_except_table26GCC_except_table27GCC_except_table28GCC_except_table50GCC_except_table55GCC_except_table56GCC_except_table71GCC_except_table75GCC_except_table80GCC_except_table83GCC_except_table86GCC_except_table92GCC_except_table100GCC_except_table104__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTSNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTSNSt3__113basic_filebufIcNS_11char_traitsIcEEEE_rlock__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTTNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_14basic_iostreamIcS2_EE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE16_NS_13basic_ostreamIcS2_EE__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTVNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTTNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTCNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE0_NS_13basic_ostreamIcS2_EE__ZTINSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTVNSt3__113basic_filebufIcNS_11char_traitsIcEEEE__ZTINSt3__113basic_filebufIcNS_11char_traitsIcEEEE_responseMap__Z8callbackPvmmPNSt3__112basic_stringIcNS0_11char_traitsIcEENS0_9allocatorIcEEEE__Z11intToStringi__Z7strTrimRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES7___Z8strSplitRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEcRNS_6vectorIS5_NS3_IS5_EEEEb__Z7newUUIDv__Z10strReplaceRKNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5_S5___Z16saveBufferToFilePPKhjNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE__Z19webrequest_internalRNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5___ZL8xferinfoPvxxxx__Z5tfuncNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z7checkIdNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEER12ResponseData__Z16jsonStringEscapeNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z14responseToJsonRK12ResponseDataNSt3__112basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEE__Z12abortRequestNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__Z10webrequestNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEES5___Z13OutAsUnsignedc__Z15os_GetMachineIdv__ZL17bufferToHexStringPhj__Z20os_ValidateMachineIdNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZL17hexStringToStringNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE_main__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEED1Ev__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEE4openEPKcj__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEEixERSB___ZNSt3__13mapIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIhEENS4_INS_4pairIKhS6_EEEEEixEOh__ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EEPKS6_RKS9___ZNSt3__1plIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_12basic_stringIT_T0_T1_EERKS9_PKS6___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE7destroyEPNS_11__tree_nodeIS9_PvEE___clang_call_terminate__ZThn16_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZTv0_n24_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZThn16_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZTv0_n24_NSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEED0Ev__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekoffExNS_8ios_base7seekdirEj__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE7seekposENS_4fposI11__mbstate_tEEj__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9underflowEv__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE9pbackfailEi__ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE8overflowEi__ZTv0_n24_NSt3__114basic_ofstreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__114basic_ofstreamIcNS_11char_traitsIcEEED0Ev__ZTv0_n24_NSt3__114basic_ofstreamIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED1Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE5closeEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE6setbufEPcl__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE7seekoffExNS_8ios_base7seekdirEj__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE7seekposENS_4fposI11__mbstate_tEEj__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE4syncEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE9underflowEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE9pbackfailEi__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE8overflowEi__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE11__read_modeEv__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE12__write_modeEv__ZNSt3__113__vector_baseINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEED2Ev__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE7destroyEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE13__move_assignERSE_NS_17integral_constantIbLb1EEE__ZNSt3__16vectorI14networkAdapterNS_9allocatorIS1_EEE21__push_back_slow_pathIRKS1_EEvOT___ZNSt3__16vectorI14networkAdapterNS_9allocatorIS1_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS1_RS3_EE__ZNSt3__114__split_bufferI14networkAdapterRNS_9allocatorIS1_EEED2Ev__ZNSt3__113__vector_baseI14networkAdapterNS_9allocatorIS1_EEED2Ev__ZNSt3__124__put_character_sequenceIcNS_11char_traitsIcEEEERNS_13basic_ostreamIT_T0_EES7_PKS4_m__ZNSt3__116__pad_and_outputIcNS_19ostreambuf_iteratorIcNS_11char_traitsIcEEEEEET0_S5_PKT_S8_S8_RNS_8ios_baseES6___ZNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strERKNS_12basic_stringIcS2_S4_EE__ZNKSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEE3strEv__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initIPcEENS_9enable_ifIXsr21__is_forward_iteratorIT_EE5valueEvE4typeES9_S9___ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE21__push_back_slow_pathIRKS6_EEvOT___ZNSt3__16vectorINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS4_IS6_EEE26__swap_out_circular_bufferERNS_14__split_bufferIS6_RS7_EE__ZNSt3__114__split_bufferINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEERNS4_IS6_EEED2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEEC2Ev__ZNSt3__113basic_filebufIcNS_11char_traitsIcEEE4openEPKcj__ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSB___ZNSt3__13mapINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataNS_4lessIS6_EENS4_INS_4pairIKS6_S7_EEEEE25__construct_node_with_keyERSB___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSJ_SJ___ZNSt3__127__tree_balance_after_insertIPNS_16__tree_node_baseIPvEEEEvT_S5___ZNSt3__118__tree_left_rotateIPNS_16__tree_node_baseIPvEEEEvT___ZNSt3__119__tree_right_rotateIPNS_16__tree_node_baseIPvEEEEvT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE15__insert_uniqueIRKNS_4pairIKhS7_EEEENS_15__tree_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEENS_21__tree_const_iteratorIS8_SP_lEEOT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__construct_nodeIJRKNS_4pairIKhS7_EEEEENS_10unique_ptrINS_11__tree_nodeIS8_PvEENS_22__tree_node_destructorINS5_ISO_EEEEEEDpOT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE20__node_insert_uniqueENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEESJ___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE12__find_equalIS8_EERPNS_16__tree_node_baseIPvEENS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_SH_EElEESK_RKT___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__insert_node_atEPNS_16__tree_node_baseIPvEERSI_SI___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE12__find_equalIS8_EERPNS_16__tree_node_baseIPvEESK_RKT___ZNSt3__13mapIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEENS_4lessIhEENS4_INS_4pairIKhS6_EEEEE16__find_equal_keyERPNS_16__tree_node_baseIPvEERSA___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE4findIS7_EENS_15__tree_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEERKT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE13__lower_boundIS7_EENS_15__tree_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEERKT_SL_SL___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE14__assign_multiINS_21__tree_const_iteratorIS8_PNS_11__tree_nodeIS8_PvEElEEEEvT_SM___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE8__detachEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE19__node_insert_multiEPNS_11__tree_nodeIS8_PvEE__ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE14__insert_multiERKS8___ZNSt3__16__treeINS_12__value_typeIhNS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEEENS_19__map_value_compareIhS8_NS_4lessIhEELb1EEENS5_IS8_EEE16__construct_nodeIJRKS8_EEENS_10unique_ptrINS_11__tree_nodeIS8_PvEENS_22__tree_node_destructorINS5_ISL_EEEEEEDpOT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE14__erase_uniqueIS7_EEmRKT___ZNSt3__16__treeINS_12__value_typeINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEE12ResponseDataEENS_19__map_value_compareIS7_S9_NS_4lessIS7_EELb1EEENS5_IS9_EEE5eraseENS_21__tree_const_iteratorIS9_PNS_11__tree_nodeIS9_PvEElEE__ZNSt3__113__tree_removeIPNS_16__tree_node_baseIPvEEEEvT_S5___GLOBAL__sub_I_webrequest.cppGCC_except_table2GCC_except_table5GCC_except_table7GCC_except_table8GCC_except_table11GCC_except_table14GCC_except_table16GCC_except_table17GCC_except_table19GCC_except_table20GCC_except_table21GCC_except_table22GCC_except_table24GCC_except_table25GCC_except_table26GCC_except_table27GCC_except_table28GCC_except_table50GCC_except_table55GCC_except_table56GCC_except_table71GCC_except_table75GCC_except_table80GCC_except_table83GCC_except_table86GCC_except_table92GCC_except_table100GCC_except_table104_pvars_rlock__ZTVNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTTNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_14basic_iostreamIcS2_EE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE0_NS_13basic_istreamIcS2_EE__ZTCNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE16_NS_13basic_ostreamIcS2_EE__ZTVNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTVNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTTNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTCNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE0_NS_13basic_ostreamIcS2_EE__ZTVNSt3__113basic_filebufIcNS_11char_traitsIcEEEE_responseMap_NXArgc_NXArgv__ZTINSt3__113basic_filebufIcNS_11char_traitsIcEEEE__ZTINSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTINSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTINSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTSNSt3__113basic_filebufIcNS_11char_traitsIcEEEE__ZTSNSt3__114basic_ofstreamIcNS_11char_traitsIcEEEE__ZTSNSt3__115basic_stringbufIcNS_11char_traitsIcEENS_9allocatorIcEEEE__ZTSNSt3__118basic_stringstreamIcNS_11char_traitsIcEENS_9allocatorIcEEEE___progname__mh_execute_header_environstart__Unwind_Resume__ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE4findEcm__ZNKSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7compareEPKc__ZNKSt3__120__vector_base_commonILb1EE20__throw_length_errorEv__ZNKSt3__121__basic_string_commonILb1EE20__throw_length_errorEv__ZNKSt3__16locale9has_facetERNS0_2idE__ZNKSt3__16locale9use_facetERNS0_2idE__ZNKSt3__18ios_base6getlocEv__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcm__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcmm__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKc__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcm__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6assignEPKc__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6insertEmPKc__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEmc__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7replaceEmmPKcm__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE7reserveEm__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9push_backEc__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5___ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEC1ERKS5_mmRKS4___ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED1Ev__ZNSt3__112basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEaSERKS5___ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__113basic_istreamIcNS_11char_traitsIcEEErsERm__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE3putEc__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5flushEv__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE5writeEPKcl__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryC1ERS3___ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEE6sentryD1Ev__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEED2Ev__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEi__ZNSt3__113basic_ostreamIcNS_11char_traitsIcEEElsEj__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED0Ev__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Ev__ZNSt3__114basic_iostreamIcNS_11char_traitsIcEEED2Ev__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE4syncEv__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5imbueERKNS_6localeE__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE5uflowEv__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6setbufEPcl__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsgetnEPcl__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE6xsputnEPKcl__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEE9showmanycEv__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEEC2Ev__ZNSt3__115basic_streambufIcNS_11char_traitsIcEEED2Ev__ZNSt3__14coutE__ZNSt3__15ctypeIcE2idE__ZNSt3__15mutex4lockEv__ZNSt3__15mutex6unlockEv__ZNSt3__15mutexD1Ev__ZNSt3__16localeC1ERKS0___ZNSt3__16localeD1Ev__ZNSt3__16thread4joinEv__ZNSt3__17codecvtIcc11__mbstate_tE2idE__ZNSt3__18ios_base33__set_badbit_and_consider_rethrowEv__ZNSt3__18ios_base4initEPv__ZNSt3__18ios_base5clearEj__ZNSt3__19basic_iosIcNS_11char_traitsIcEEED2Ev__ZNSt8bad_castC1Ev__ZNSt8bad_castD1Ev__ZSt9terminatev__ZTINSt3__113basic_istreamIcNS_11char_traitsIcEEEE__ZTINSt3__113basic_ostreamIcNS_11char_traitsIcEEEE__ZTINSt3__114basic_iostreamIcNS_11char_traitsIcEEEE__ZTINSt3__115basic_streambufIcNS_11char_traitsIcEEEE__ZTISt8bad_cast__ZTVN10__cxxabiv120__si_class_type_infoE__ZThn16_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED0Ev__ZThn16_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Ev__ZTv0_n24_NSt3__113basic_istreamIcNS_11char_traitsIcEEED0Ev__ZTv0_n24_NSt3__113basic_istreamIcNS_11char_traitsIcEEED1Ev__ZTv0_n24_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED0Ev__ZTv0_n24_NSt3__113basic_ostreamIcNS_11char_traitsIcEEED1Ev__ZTv0_n24_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED0Ev__ZTv0_n24_NSt3__114basic_iostreamIcNS_11char_traitsIcEEED1Ev__ZdaPv__ZdlPv__Znam__Znwm___bzero___cxa_allocate_exception___cxa_atexit___cxa_begin_catch___cxa_end_catch___cxa_rethrow___cxa_throw___gxx_personality_v0___stack_chk_fail___stack_chk_guard_curl_easy_cleanup_curl_easy_getinfo_curl_easy_init_curl_easy_perform_curl_easy_setopt_curl_global_cleanup_curl_global_init_curl_slist_append_curl_slist_free_all_exit_fclose_fflush_fopen_fread_freeifaddrs_fseek_fseeko_ftello_fwrite_getifaddrs_memchr_memcmp_memcpy_memmove_sprintf_strlen_time_uuid_generate_random_uuid_unparsedyld_stub_binder";
                    var WinBin = "MZÿÿ¸@º´\tÍ!¸LÍ!This program cannot be run in DOS mode.\r\r\n$ï ß«Á±_«Á±_«Á±_5av_ªÁ±_Z|_ªÁ±_Z_¹Á±_Zz_¯Á±_Z~_­Á±_«Á°_Á±_W¶_¢Á±_.b_ªÁ±_Í/x_ªÁ±_Í/}_ªÁ±_Rich«Á±_PEdXcµ^ð\" b¬@@`¤ßx àì0è µ8@¿p° .text]  `.rdataRH°J¤@@.dataÀ\nî@À.pdataìô@@.rsrcà ü@@.reloc0þ@BÂÌHì(H\tHÉtHÿPHÀtLºHÈAÿHÄ(ÃÌÌ@SHì Hã¨HÙHöÂtÿÚ¢HÃHÄ [ÃÌDHJHÂÃÌ@SHì0HIØDÂHT$ ÿPHKH9Hu\r9u¸ë3ÀHÄ0[ÃÌÌH;JuD9u¸Ã3ÀÃHÉ¤ÃH\\$WHì03ÛAÈHú\\$ ÿd¡HÇGHÀH_H¤HEÐ8tHÈÿHÿÀ8uøHØLÃHÏèNRH\\$@HÇHÄ0_ÃHu¤Ã@SHì03ÀHÚD$ Aøu#HÇBHBHZ¤D@HËèRëèWÿÿÿHÃHÄ0[ÃÌÌHM¤ÃH\\$WHì03ÛAÈHú\\$ ÿÀ HÇGHÀH_Hâ£HEÐ8tHÈÿHÿÀ8uøHØLÃHÏèQH\\$@HÇHÄ0_ÃH\\$WHì AÈAøHÚÿG ;HÀHòuHròHCHÃH\\$0HÄ _ÃHÄWHì0HÇD$(þÿÿÿHXÚHùd$ HL$0èT9ÓHL$@ÿ6H×HL$0èé9HD$0HcHH¦HD0HD$0HcHhÿÿÿT,HL$HèÖ9HL$PÿËH$ÈÿHÇH$@HÄ0_ÃÌ@SHì HHhÿÿÿHKHcPH¥HhÿÿÿHhÿÿÿHcPDhÿÿÿDdÿÿÿè^9HKÿTHËHÄ [Hÿ%ÌHÄHXHhHpHx ATAVAWHì0d$ IxM`MðHÚLùrI(ëIèHBHÀtYHzrH\nëHÊHzH<rH2ëHòH;÷s2Mät¾MÄHÍÿ:HÀtHÿÆëÝH{rHëHÃH+ðëHÎÿHþÿu(IgIÇGH¡E3ÀIÏAÆèkOéI~InrM6HCHÀtiHøÿvHÉÿëHHÿH{rHëHÃH<Hít-¾LÅIÎÿHÀtH{rHëHÃH;øtHÿÏëÎH{rHëHÃH+øëHÏÿH+þLÆI×LOHËè3H\\$PHl$XHt$`H|$hIÇHÄ0A_A^A\\ÃÌÌÌHÄUVWATAVHh¡HìÀHÇE¿þÿÿÿHXHDëH3ÄHE'IøLñIpIA¼ë H{r\tHÿ LcHcÆHÃ H;ÞuÛHHG3öE3ÀéÂLËL+ÎHUçèo2Le·He¯ÆEA¸Hp HMèûMLEHUçHMÇè±ýÿÿHMçH;ÈtHÐHMçèl1H}ßr\nHMÇÿLeßHe×ÆEÇH}·r\nHMÿqHºHMçèMiÀuHUçHÏèÉ<HsH}ÿr\nHMçÿ<LCÆE A¹HUIÎèRHøÿHØLÆIÎÿÿÿH+ÞLËHUè1Le·He¯ÆEA¸HHMèMLEHUHMÇèÆüÿÿHMH;ÈtHÐHMè0H}ßr\nHMÇÿ¤LeßHe×ÆEÇH}·r\nHMÿHÏHMèbhÀu\rHUHÏèÞ;H}r\nHMÿTHM'H3Ìè`H$øHÄÀA^A\\_^]ÃÌH\\$WHìPHéH3ÄHD$@HùHL$03Û\\$(ÿ#HT$ HL$0ÿHT$ HÇGH_8tHÉÿHÿÁ8\nuøHÙLÃHÏèöKHL$ ÿÏHÇHL$@H3Ìè¿H\\$hHÄP_ÃLÜSVWAVAWHì`IÇC¸þÿÿÿHwèH3ÄHD$XIùIØLñIK°I[ÀMKÈd$0A¿LyHaÆIÉÿE3ÀèSJÇD$03öH{rHëHÓLKLÆIÎèPHðHøÿt$HL$(ÿHd$ LÏLCHÐIÎèÄLHwëµH{r\tHÿÚL{HcÆHr\tHÿ¾LHgÆIÆHL$XH3ÌèºHÄ`A_A^_^[ÃÌÌHÄUVWAVAWHl$HìHÇE`þÿÿÿHX HcçH3ÄHExIØDòHñH]pE3ÿD|$@HÐHD$PHMøÿÇD$@E3ÉE3ÀHT$XHL$PÿHD$PHcHH9 HDPHD$PHcHXÿÿÿTLHD$XHEhHL$Xÿ¥H% HD$XD}àD}ÙHL$XÿuL}èñEÜL}ÐH{rHëHËº\"DBÿîHøHÀÆÆEàD}ÙHL$Xÿ'HWLOLL$0H|$(HT$ LÇHL$XÿúH}è¨ðEÜL}ÐHT$@HL$XÿéHÈèjHøHÈÿÀtL}ÐëH}ÐHL$Xÿ³HL$@HÉtHÿPHÀtLºHÈAÿHD$PHcHHLPE3À3Òÿ¦ëHD$PHcHHLPE3ÀAPÿ)L9}èãMÆHHL$PÿÞHt$XL9}èuIÿë\"HL$Xè<RöØHÿH#þHMèÿrÀIEÿD}àD}ÙHL$XÿùL}èïEÜL}ÐHÿuHD$PHcHHLPE3ÀWÿHD$PHcHH0HDPHD$PHcHXÿÿÿTLHL$Xèò8HL$`ÿKHMøÿaH{r\tHÿ¸3Àë[HD$PHcHHÔHDPHD$PHcHXÿÿÿTLHL$Xè8HL$`ÿïHMøÿH{r\tHÿ\\ÈÿHÇCL{D;HMxH3ÌèV|H$ÈHÄA_A^_^]ÃÌÌÌ@SHì H¨HXÿÿÿH`ÿÿÿHcPH.HXÿÿÿHXÿÿÿHcPDXÿÿÿDTÿÿÿèë7HhÿÿÿÿBHËHÄ [Hÿ%SÌÌÌLÜWATAUAVAWHìàIÇ þÿÿþÿÿÿI[Is HãH3ÄH$ØHÚIxþÿÿHùH$ I¨þÿÿH\r­íÿç3öÀtÈÿaHÓè,H$HHL$PèÌLH\rpíÿ¢Àt\tÈÿ&ÆD$@mHT$@HL$Pè±*HHÈèÖaDèÆD$@uHT$@HL$Pè*A¾L´$ðH´$è@´$ØIÏÿMÏE3ÀHÐH$Øè¯DÆD$@hHT$@HL$Pè>*L´$°H´$¨@´$MÏE3ÀHÐH$èlDÆD$@pHT$@HL$Pèû)L´$pH´$h@´$XMÏE3ÀHÐH$Xè)DÆD$@aHT$@HL$Pè¸)L´$H´$@´$xMÏE3ÀHÐH$xèæCD|$`E3ÀL%IÔHÏèëDEíHOH$Xè`ÀumIÔH$Xèr`ÀuYL$XH$øèÝ`MÏE3ÀHÐH$ØèjPH¼$rH$øÿ<E3ÀIÔH$Xè]DÆD$@tHT$@HL$PèÍ(HxrHHÈÿÊD$HH´$Ht$xH´$»DËE3ÀHH$Øè:IHÀ@ÇH$¸HD$hL´$ÐH´$È@´$¸E3ÀIÔH$¸è¿CL´$H´$@´$øDÃHH$øèCL$¸L$øH$ØH$8è÷ÿÿH$ØH;ÈtHÐH$Øèä&H¼$PrH$8ÿÿH$¸HD$hL´$ÐH´$È@´$¸E3ÀIÔH$¸èûBL´$H´$@´$øA¸HaH$øèÈBL$¸L$øH$ØH$8èÒöÿÿH$ØH;ÈtHÐH$Øè&H¼$PrH$8ÿ8A¹E3ÀHðH$ØèGHcØLËE3ÀH$¸H$Øè&MÏLÃH$8H$Øèe&H$ØH;ÈtHÐH$Øè%H¼$PrH$8ÿ«IÔH$xè]ÀtA¸HZH$xè±AH$xH¼$HC$xt$ E3ÉE3À3Òÿ©LàH$»9t$Hv<DËLD$HSHÈÿ_DËLD$HSIÌÿKDËLD$HSþIÌÿ7H$¸H¼$ÐHC$¸@ÇöØfEÀfAàkfAÀPHt$8t$0ÇD$(Ht$ E3ÉIÌÿïHD$xL$ØH¼$ðLC$Ø@ößÉáL\rZH[EíIEÑHt$8L$0Ht$(Ht$ E3ÉHÈÿ¹HøH$L´$0H´$(@´$A¸1H\tH$èH@H]H$èì[ÀàH$¸HD$hL´$ÐH´$È@´$¸A½EÅHßH$¸èê?L´$H´$@´$øEEH²H$øè¹?L$¸L$øH$H$8èÃóÿÿH$H;ÈtHÐH$è#H¼$PrH$8ÿ)H$¸HD$hL´$ÐH´$È@´$¸MÅHH$¸è!?L´$H´$@´$øA¸HïH$øèî>L$¸L$øH$H$8èøòÿÿH$H;ÈtHÐH$èC\"H¼$PrH$8ÿ^H$H$8èe[MÏE3ÀHÐH$èFJH¼$PrH$8ÿ\\$pL$XH¼$pLC$XH$H¼$0HC$$hD$ D$(HÏÿ$Àft$hHt$ LL$pLD$hº HÏÿËH\rääÿÀtÈÿD$hL¬$AEdH\r»äÿíÀtÈÿq¹ èrHØLL$DA¸ HÓHÏÿ}H\r~äÿ¸ÀtÈÿ4D$DAEhEmxH\rYäÿÀtÈÿEí9t$Dt|D$D@4DD$DL´$ÐH´$È@´$¸HÓH$¸èç<MÏE3ÀH$¸H$ è«HH¼$ÐL¬$3ÿÿÿH$¸ÿqé ÿÿÿHËÿSEítA¿eë+t$DHt$ LL$pLD$Dº HÏÿe9t$DDG|$DD|$`H¼$0rH$ÿ\rL´$0H´$(@´$H¼$ÐrH$¸ÿÜL´$ÐH´$È@´$¸L¬$ë#3öDvD|$`L¤$H¼$L¬$°Hÿt\tHÏÿÙHL$xHÉtÿÉMät\nIÌÿ»H¼$rH$xÿQL´$H´$@´$xH¼$prH$Xÿ L´$pH´$h@´$XH¼$°rH$ÿïL´$°H´$¨@´$H¼$ðrH$Øÿ¾L´$ðH´$è@´$ØH|$PHH;ÛuHL$PèHëYH;ßtYLÃ@8su4HC@8puHØH@8ptôëHCë\rH;Xu\rHØH@@8ptíHØH$HL$Pè­OH;ßu¬H|$PHÏÿ&I}r\nIMÿMuIuAuAÇéH|$PHH\\$xH;ÛuHL$PèÜGë.H;ßt.HL$xèëTLÃH$HL$Pè2OH\\$xH;ßu×H|$PHÏÿ¦H$°H{r\tHÿA¾Ls3öHs@3FdH$ØH3ÌènL$àI[@IsHIãA_A^A]A\\_ÃÌÌ@SHì HÙè2GHHÄ [Hÿ%+ÌÌÌLÜUVWAVAWHì@IÇCÀþÿÿÿI[HÿÕH3ÄHD$8LúHùIKÈE2öH\r;àÿuÀtÈÿñHàHØHpHè~uLHV LÇèê@ÀtHvëHîH6~tÞHÙßH;ètLE H×è¼@ÀuHl$ ëH¶ßHD$ HD$ H9tA¶H×è HÐIÏèaH\rßÿÌÀt\tÈÿPHr\tHÿ'HÇGHgÆAÆHL$8H3ÌèmH$HÄ@A_A^_^]ÃÌÌÌH\\$Ht$WHì HÎÿHúHÙH;ÊtLÎE3ÀèÛ6HW HK H;ÊtLÎE3ÀèÃ6HW@HK@H;ÊtLÎE3Àè«6G`H·C`GdCdGhChHGpHCpGxCxHH»HH;þtHÏèFE3ÀHÖDÀHÏè¢YHt$8HÃH\\$0HÄ _ÃÌÌÌLÜUVWATAVHìPIÇC°þÿÿÿI[HÿÓH3ÄHD$@HÚHùIK¸ISÀd$ HÇAHaÆA¼Ec¨3íE3öH9j¨H{rHëHÃB¾40ÎétkÿÉt^ÿÉtQétCÿÉt6ét!é\rtù-tFà<_wSDÆIÔHÏè4ëCA°\\IÔHÏè4ëàHzë\"HëHpëHsëHfHÏè3AìMôHcÅH;CXÿÿÿH{r\tHÿHÇCHcÆHÇHL$@H3ÌèkH$HÄPA^A\\_^]ÃÌÌÌHÄUVWATAUAVAWH¨¨üÿÿHì HÇEÈþÿÿÿHX HÒH3ÄHIÀHD$(LòHL$8HMÀHEÐ3ÿ|$ wHqHy@9ÇD$ Ht$xH|$p@|$`HËÿLËE3ÀHÐHL$`èU4HT$`HøèþÿÿHD$0AVpH¸èäÿÿLèAVdHxèøãÿÿLàAVhH8èåãÿÿLøHu¸H}°@} IV@LËE3ÀHM èç3HU HøèýÿÿHðHÇEH}@}IV LËE3ÀHMè±3HUH¸èeýÿÿHøHÇD$XHd$PÆD$@LËE3ÀIÖHL$@èw3HT$@HMxè-ýÿÿHØAV`HM8è5ãÿÿLÀHMøèRLøHÐHè]SLÃHÐHXèzSL¾HÐHè3SLÇHÐHèPSL|HÐHØè\tSLÆHÐHMØè)SL=HÐHØèâRMÇHÐHèÿRLûHÐHXè¸RMÄHÐHMXèØRL¼HÐHèRMÅHÐHMè±RLHÐH¸èjRLnHÐHxèSRLD$0HÐH8ènRL:HÐHøè'RLHÐHØèRH|$8H;øtHÐHÏèA¾L9µðr\rHØÿ£A¿L½ð3öHµè@µØL9µr\rHøÿpL½Hµ@µøL9µPr\rH8ÿEL½PHµH@µ8L9µr\rHxÿL½Hµ@µxL9µÐr\rH¸ÿïL½ÐHµÈ@µ¸L9u0r\nHMÿÊL}0Hu(@uL9µ°r\rHÿ¨L½°Hµ¨@µL9upr\nHMXÿL}pHuh@uXL9µpr\rHXÿaL½pHµh@µXL9µ°r\rHÿ6L½°Hµ¨@µL9µðr\rHØÿL½ðHµè@µØL9uðr\nHMØÿæL}ðHuè@uØL9µðr\rHØÿÄL½ðHµè@µØL9µ0r\rHÿL½0Hµ(@µL9µ0r\rHÿnL½0Hµ(@µL9µpr\rHXÿCL½pHµh@µXL9µ°r\rHÿL½°Hµ¨@µL9ur\nHMøÿóL}Hu@uøL9uPr\nHM8ÿ×L}PHuH@u8L9µr\nHMxÿ¸L½Hµ@uxL9µÐr\rH¸ÿL½ÐHµÈ@µ¸L9µr\rHøÿeL½Hµ@µøL9µPr\rH8ÿ:L½PHµH@µ8L9µr\rHxÿL½Hµ@µxL9µÐr\rH¸ÿä~L½ÐHµÈ@µ¸L9µrHøÿ¹~H\\$(L9sr\tHÿ¤~L{Hs@3HÇHH3ÌècH$xHÄ A_A^A]A\\_^]ÃÌÌÌÌLÜWHìIÇCØþÿÿÿI[Is H>ËH3ÄHD$pHÚHñIK¸ISàd$ H\rtÕÿ®{ÀtÈÿ*}HÓèÎÆ@xH¸HÐHÎè@ÇD$ H\r5Õÿg{ÀtÈÿë|Hÿu¹ÿÙ|u¹ÿÈ|HL$0ÿ{óD$PóL$0HT$PHL$0ÿ«|Àt¹ÿ|óD$03ÒHL$0ÿÎzÀt¹ÿg|g~`}ÇF`eH\rÔÿ¹zÀtÈÿ5|HÓè]H\r^ÔÿzÀt\tÈÿ|H{r\tHÿë|HÇCHcÆHÆHL$pH3ÌèãaL$I[ Is(Iã_ÃÌÌHÄHHWHì0HÇ@èþÿÿÿHXHhHp HÚHù½HiHaÆHÎÿLÎE3Àè+HO HiHaÆHS LÎE3Àèb+HO@HiHaÆHS@LÎE3ÀèB+C`G`CdGdChGhHCpHGpCxGxHHHHè2HÇH\\$HHl$PHt$XHÄ0_ÃÌÌÌH\\$Ht$WHì HHùHËè§9Hÿ¦{HXr\nHO@ÿ{3Û¾HwXH_P_@H8r\nHO ÿr{Hw8H_0_ Hr\tHÿW{HwHt$8H_H\\$0HÄ _ÃÌHÄUVWATAUAVAWH¨ÈýÿÿHìHÇE¸þÿÿÿHX HÈH3ÄHðMøLòHñHMÀHUÈLEÐE3äDeEl$LmðLeèDeØA\\$DÃHg}HMØèò*LEØIÖHMøè©ÚÿÿL;ðtHÐIÎèiH}r\nHMøÿzLmLeDeøH}ðr\nHMØÿozLmðLeèDeØLÃHù|HMØè*LEØI×HMøè;ÚÿÿL;øtHÐIÏèû\rH}r\nHMøÿzLmLeDeøH}ðr\nHMØÿzLd$8Ld$@èVEHD$8ÆD$0uHT$0HL$8èHÏÿI;ÆtLÏE3ÀIÖHÈèÓ(ÆD$0mHT$0HL$8ècA¸H}HÈèÊ)ÆD$0pHT$0HL$8è:E3ÀHÈ{HÓHÈè¡)ÆD$0hHT$0HL$8èE3ÀHÓHÈè)ÆD$0dHT$0HL$8èï\rE3ÀHÓHÈè])ÆD$0tHT$0HL$8èÍ\rA¸Hø|HÈè4)ÆD$0qHT$0HL$8è¤\rE3ÀHÓHÈè)ÆD$0xHT$0HL$8è\rE3ÀHÓHÈèð(Ld$pLd$xLeLD$pIÏè-ÚÿÿHD$xHT$pH+ÂHÁøHøiAüHÿÈYIÌHÁáHÑLmLeDeøIÉÿE3ÀHMøèh'H}ìGHcÐHÁâHT$pL­L¥D¥IÉÿE3ÀHè%'HEHELm°Le¨DeA¸Hã{HMè(Ll$`Ld$XDd$HA¸HÁ{HL$Hèó'LMLD$HHHM8è\tÜÿÿHH;ÈtHÐHèVH}Pr\nHM8ÿywHEøH}HCEøPHL$8HAHÙë8P sH@ëHØHD8`téH;Ùt\t:S LmðLeèDeØ HUØH(èo\nH HL$8èKLH HD$ LÃHT$hHL$8è®KH\\$hH½@r\rH(ÿÊvL­@L¥8D¥(H}ðr\nHMØÿ¤vLmðLeèDeØHK(HH;ÈtIÉÿE3ÀHè%H½rHÿ]vH}r\nHMøÿKvÇHcÏHD$xHT$pH+ÂHÁøHÿÈH;È±ýÿÿHqxHÏÿLnLfD&ÇELm0Le(DeÆD$0qHT$0HL$8è£\nHÓHÈèÌAHT$0HL$8ÀÆD$0qè|\nHMH;ÈtLÏE3ÀHÐHMè½$LmxLepDe`L­L¥D¥L­¸L¥°D¥ L¥èL¥ðèÄ@HèLl$`Ld$XDd$HLÏE3ÀHUHL$HèJ$HU`HL$HèìÿÿÀuL¥ÄL¥ÐÇÀfLl$`Ld$XDd$HLÏE3ÀHUHL$Hèý#LD$HHU`HM8èïÿÿH;ðtHÐHÎèH}PrHM8ÿ¶téµÆD$0xè^\tHÓHÈè@ÀxÆD$0xHT$0HL$8è7\tHMH;ÈtLÏE3ÀHÐHMèx#LmxLepDe`L­L¥D¥L­¸L¥°D¥ L¥èL¥ðè?HèLl$`Ld$XDd$HLÏE3ÀHUHL$Hè#HU`HL$Hè»êÿÿÀuL¥ÄL¥ÐÇÀfëNLl$`Ld$XDd$HLÏE3ÀHUHL$Hè¶\"HT$HHPè)õÿÿHÐHM`èëÿÿHPè§÷ÿÿLl$`Ld$XDd$HLÏE3ÀHUHL$Hèh\"LD$HHU`HM8èníÿÿH;ðtHÐHÎèþH}PrHM8ÿ!sé HM8èâÖÿÿHMH;ÈtHÐHMèÉH}Pr\nHM8ÿìrH\r5ÊÿopÀtÈÿëqHUèHØÆD$0uHT$0HL$8èkHK H;ÈtLÏE3ÀHÐè°!ÆD$0dHT$0HL$8è@HK@H;ÈtLÏE3ÀHÐè!3ÉÿrHCpLcd{`DcxL£HÃHD$8H;ØtHËè203ÀDÀHT$8HËèDHqÉHËÿ oÀtÈÿ$qHM`èëD¥ØLl$`Ld$XDd$HLÏE3ÀHUHL$Hèì HT$HHM`èÛÿÿÀMpÈÄÀDÁÄÆD$0dHT$0HL$8èNLmðLeèDeØLÏE3ÀHÐHMØè HÀsHMØèS=ÀuoH¬sHM`è?=Àu[HE`H}xHCE`HD$hLl$`Ld$XDd$HLÏE3ÀHUØHL$Hè- LD$HUpHL$hèsÖÿÿE3ÀHMsHM`è(!HËÿ{nÀtÈÿ÷oHUèHÐHPèôÿÿÀ°È¸Ä´LÏE3ÀHU`HPè Ll$`Ld$XDd$HLÏE3ÀHUHL$Hè}LD$HHPHM8èêÿÿH;ðtHÐHÎèE3À²HM8è~&HUèuHËÿ¬mÀt\tÈÿ0oHPè;ôÿÿE3À²HMØèD&HM`è\"ôÿÿE3À²HMè+&L9d$pt3HL$pÿØnLD$xHT$pèE)HL$pÿ¶oLd$pLd$xLeH|$8HH\\$hH;Ûu,HL$8è-ë%HL$hè:LÃHUHL$8èã4H\\$hH;ßuÛHL$8è_IÎè¦IÏèHÆHðH3ÌèOTH$XHÄA_A^A]A\\_^]ÃÌÌÌÌHL$SHì0HÇD$ þÿÿÿHÙ¸HA3ÉHKHC8HK0K HCXHKPK@HHè,:HHÃHÄ0[ÃHÄUWATAVAWHh¡HìàHÇD$(þÿÿÿHXHpH»H3ÄHE'HòHcù»;û}CÿéHRA¿L}ÿE3öLu÷DuçIÌÿD82uEÆëMÄIÿÀF84u÷HMçèdL}LuDuéHÞL}LuDuD82uMÆëMÄIÿÀF84u÷HMè#LÛqHUHM§è=MÌE3ÀHÐHMèÛ)H}¿r\nHM§ÿµmL}¿Lu·Du§H}r\nHMÿmHÿÃH;ßnÿÿÿHE§HD$ L}¿Lu·Du§MÌE3ÀHUHM§èxL}LuDuMÌE3ÀHUçHMèXLE§HUHMÇèöñÿÿHUÇH\rFjèù<HÈHlÿykH}ßr\nHMÇÿÿlL}ßLu×DuÇH}rHMÿâlH}ÿr\nHMçÿÐl3ÀHM'H3ÌèÚQL$àI[0Is@IãA_A^A\\_]ÃÌÌH\\$WHì HaHÇAÆHzHÚHùsLBIÿÀtÿþkë\nHHH\"HCHGHCHGHcHÇCÆH\\$0HÇHÄ _ÃH\\$WHì HyHúHÙr\tH\tÿlHcHÇCÆHsLGIÿÀtH×HËÿxkë\nHHH'HGHCHGHCHgHÇGHÃH\\$0ÆHÄ _ÃÌÌ@SHì HyHÙr\tH\tÿkHcHÇCÆHÄ [ÃÌ@SHì03ÀHÚHÇBHBHÑHËD$ èhHÃHÄ0[ÃÌÌÌHÄUHh¡HìHÇEÿþÿÿÿHXHxH¸H3ÄHEOHùHHHHØyuDD8A sHIëHÙH\tytèH;ØtC 8sHÇEGHe?ÆE/EHU/HMèþÿÿHUHÏè9?LH HD$ LÃHU÷HÏèa?H]÷H}'r\nHMÿjHÇE'HeÆEH}Gr\nHM/ÿbjHC(HMOH3ÌèjOL$I[I{ Iã]ÃÌHÄUWAVH¨8ÿÿÿHì°HÇD$8þÿÿÿHXHpH·H3ÄH HòH;ÁHxHØE3öD8wu)HW LÆè\"ÀtHëHßH?D8wtÞHÁH;ØtLC HÖèå!ÀÃ¿H|$XLt$PDt$@H|$xLt$pDt$`H}LuDuLuÈLuÐèÑ4HEÈH}øLuðDuàIÉÿE3ÀHÖHMàè^HT$@HMèìÿÿHUàè@LH HD$ LÃHT$0èc@H\\$0HMè=íÿÿH}ør\nHMàÿühH}øLuðDuàHL$@èíÿÿHC@H H3ÌèëML$°I[ Is0IãA^_]ÃÌÌÌHÄHXHhHp HHWAVAWHì HÕ¿E3ÿHêHXHðHøD8{uAHS LÅè§ ÀtH[ëD8tLC HÕè ÀHEûHóHD8{tÆH~¿D8tHXë!HëLC HÕèU ÀtHûHëH[D8{tÞIßHÆH;÷tBHÿÃD8xu4HHD8yuHÁH\tD8ytôëHHë\rH;Au\rHÁHID8ytíHÁH;Çu¾HT$@LÏLÆè¢Hl$PHt$XHÃH\\$HHÄ A_A^_ÃÌÌHÄD@HHWHì0HÇ@èþÿÿÿHXHù`HÖlHHDmHAHÁÿ+eÇD$PH_E3ÀHÓHÏÿeHHcHHxlH9HHcHhÿÿÿT9üHËÿÊdHkHHchcpHÇH\\$HHÄ0_Ã@SHì0d$ HÁHÚè}HÃHÄ0[Ã@SHì öApHOkHÙHt\rHIH\tÿfHC3ÉHHC8HHCPHC HHC@HHCXcpþHKhHËHÄ [Hÿ%AeÌH\\$Hl$Ht$WAVAWHì öApêHÙtÈÿéÏúÿu3ÀéÃöApt(LA@I8tHQhI9sHAXHcIIHCX+ÊHC@HHÒtHCXHcHÊH;ÑhHÒu3öëHCXHc0HCH+0HòHÆ¹ HÑèH;ÁrHÈHÀt¸ÿÿÿH+ÁH;ÆsHÑéuîHÉRÿÿÿL413ÿMötIþÿwIÎÿeHøHÀuÿbÌHCL8HötLÆI×HÏènTHöu<HC H{hH8HC@H8HCXD0HCöCpH8HC8u[H8HCPÇéHK HÇI+ÇHChHC@HHÇI+ÇI+×HHC@H×HHCXÏ+ÊAÎöCptHCH8HC8H HCP8ë/HC@LHC8HHCH8HC8I+×H×HHCPD+ÂAÿÀDöCpt\tIÏÿpdKpHËÿSb@(ÅH\\$@Hl$HHt$PHÄ A_A^_ÃÌH\\$WHì HA8HùÚHHÉt;HGH;v2úÿt:QÿtöGpu\"ÊÿHÏÿbûÿtHG8Hë3ÛÃëÈÿH\\$0HÄ _ÃLI8IHÒtOLQPIcHÂH;Ðs¶ÃöApu6HA@LMÀt*L;ÂwH9QhvL9AhsLAhHAhA+AHA8H¶ÃÈÿÃÌH\\$Ht$WHì IØLA@HòIHùHÀt\nH9AhsHAhöD$P¨LQ8I\nHÉHHaAùuHOhë\rAùuöD$PuHGH+HÙëEÉtHHÛ¾HOHGhH+H;ØªHÏA+Óÿæ`öD$P£LG@I8HGXHcHG8HIIHGX+ÑëwöD$PtaIHÉtYH¡`AùuHOhëAùuHGH+HÙëEÉtHHÛx\"HOHGhH+H;ØHÏA+Óÿ6`ëHëHÛt\nHC`HHffHH\\$0HÆHt$8HÄ _ÃÌH\\$Hl$Ht$WHì IXAéHòILA@HùIHÀt\nH9AhsHAhHß_HH;Ù@öÅtaLO8I9tWHÛHWHGhH+H;ØqHÏA+Óÿ_@öÅt^LG@I8tTHGXHcHG8HIIHGX+Ñë6@öÅt-I8t'HÛx\"HWHGhH+H;ØHÏA+Óÿ_ëHÙHffHl$8HH\\$0HÆHt$@HÄ _ÃÌÌH\\$Ht$WHì HHùHÛtFHqë$H{r\tHÿÈ`HcHÇCÆHÃ H;Þu×Hÿ¦`H'HgHgH\\$0Ht$8HÄ _Ã@WHì0HÇD$ þÿÿÿH\\$PHúHÙHIH;Ñ½H9´H+;HSH;ÊuiHÂH+ÁHÁøHøsYH+HÁùI¸ÿÿÿÿÿÿÿIÀH+ÁHøsH\r`dÿZ]ÌHÿÁH+HÁúHÂHÑèL+ÀL;Âs3ÒëHÐH;ÑHBÑHËèS#HçàH;HKHL$@HL$HHÉt HÇAHaÆIÉÿE3ÀH×è¾é¥HSH;ÊuiHÂH+ÁHÁøHøsYH+HÁùI¸ÿÿÿÿÿÿÿIÀH+ÁHøsH\r¯cÿ©\\ÌHÿÁH+HÁúHÂHÑèL+ÀL;Âs3ÒëHÐH;ÑHBÑHËè¢\"HKHL$@HL$HHÉt HÇAHaÆIÉÿE3ÀH×èHC H\\$PHÄ0_ÃÌÌÌ@SHì H¹H'eHÙHt*HIHH9uHChHSpHHC8HHCP+Ò»tOH»tHËèZHÿ^HËÆÆÿ\\ÈµH£HcxHËHÄ [Hÿ%&]ÌÌHì(HHÉtÿ^HÄ(ÃÌHì(HHÉtÿ¢]HÄ(ÃÌHÄUVWAVAWHh¡HìHÇEÿþÿÿÿHXHÔªH3ÄHE'òHùËÿ;Óu3ÀéÇHA@H8t0HQXLcIÈHH9sAHÿ\nHW@LIHH\nA0ÆéH¿}HGHHH;ÈuLGpMÈHWhHÏÿ[[Hxu@¾ÎHÿ£\\;ÃEÞé4@uçºHUÆE3ÉHMHÇEHEHúHCÁHHMH}HCMHUHCUHMHE÷HD$8HL$0HT$(HEïHD$ LMèLEçHHOxÿãZÀø}HELELMIùICÀLu÷L+ðt&HMIùICÈLMÆºÿx\\L;ðuUÆHEçH9Eïu%MöFÿÿÿH} s4E3ÀAVHMèN\né*ÿÿÿÞëøu¾MçHÿ{[;ÃEÞH}r\nHMÿý[ÃHM'H3ÌèAH$ÐHÄA_A^_^]ÃH\\$Ht$WHì HA8HÙ3öHúHÉt)HCH9s úÿt¶Aÿ;ÂuHËÿYÿÿE÷ÆëzHHÒtkÿÿtfH9sxu@¶Ïÿ[øÿtÇëPLC8HI9t=LK@:IH;ÂtHChHCPHcIHKpIHC8ËHHCP+ÊÁë¯ÈÿH\\$0Ht$8HÄ _ÃÌÌÌH\\$WHì HA8HÙHHÉtHCPHcHÑH;Ês¶ëHHËÿP8øÈÿ;øt\rH×HËÿP ÇH\\$0HÄ _ÃÌHÄUWAWHh¡HìHÇEþÿÿÿHXHpHw§H3ÄHE7HÙHA8HHÉt,HSPLcJH;ÈsA@ÿHK8HHBH¶é½H»uÈÿé«HCHHH;ÈuLCpMÈHShHËÿXH{xu HÿÀYÏÿ;Çc¶øé[HÇE/He'ÆEHÿYÏÿ;Ç!DDÀI×HMè½HMH}/HCMLELCELM'LÉHEHD$8HEøHD$0HE÷HD$(HEÿHD$ HHKxÿWÀ³A;Ç~ø¥L9}'sBë*HE÷H9EHEuRH}/HCELEÿL+À3ÒHMè:\nHÿÉX;Çtbé@ÿÿÿLEH}/LCEMÏI×HM÷ÿÚXë9H}/HCEHMÿ+ÁE'HcøÀ~I+ÿ¾HÿBXHÿ~HMÿëá¶}÷H}/r\nHMÿXÇHM7H3Ìè=L$I[(Is0IãA__]ÃH\\$Hl$VWAVHì HA8L±AéIðHÚHùL90uAùu\nHyxuHÿÎH¹t{èßÀtrHöuýtHDÅHÖÿWÀuQHHT$@ÿWÀu;HWL92uHGhHOpHHG8HHGP+ÉHD$@H#HCCëHªUHccHHHl$PHÃH\\$HHÄ A^_^ÃÌLÜI[IsI{ AVHì H¹I@I0ICMðHúHÙ¢èÀHHT$0ÿîVÀuHötHD@HÖÿ©VÀubHHT$0ÿVÀuLAFHSHH9uHChHKpHHC8HHCP+ÉHD$0H'HGGëH¤THggHHH\\$8Ht$@HÇH|$HHÄ A^ÃH\\$WHì HÙHMÈHÉt|HÒuMÀuEAëE3ÀÿVÀu_H»HËÆÿÆSHÿt HGH{8H{@HCHC HGHCPHCXK­HcxH»HÃë3ÀH\\$0HÄ _ÃÌÌÌH\\$WHì H¹Hùt HËÿÓÿP;ÃtHÿIUÀx3ÛÃH\\$0HÄ _ÃÌÌH\\$WHì HÙHÊè¿&HÈHøÿKTÀtHcxë\rHËH{xÿóRH\\$0HÄ _Ã@SHì Hy HÙr\nHIÿUHcHÇC ÆCHÄ [ÃÌÌÌH\tHÿ%òTÌÌ@SHì HÙHÁ èÙÿÿH{r\tHÿÎTHcHÇCÆHÄ [ÃH\\$Ht$WHì H±hÿÿÿúHHhÿÿÿHKLc@HÛYIhÿÿÿHhÿÿÿLc@EhÿÿÿEdÿÿÿèíÿÿHKÿRHËÿáR@öÇt\tHÎÿ:TH\\$0HÆHt$8HÄ _ÃÌÌÌH\\$WHì ÚHùèPíÿÿöÃt\tHÏÿTHÇH\\$0HÄ _ÃH\\$Ht$WHì H±XÿÿÿúH¨HXÿÿÿH`ÿÿÿLc@HìYIXÿÿÿHXÿÿÿLc@EXÿÿÿETÿÿÿè©ôÿÿHhÿÿÿÿRHËÿR@öÇt\tHÎÿpSH\\$0HÆHt$8HÄ _ÃÌH\\$WHì ÚHùè\\ôÿÿöÃt\tHÏÿ:SHÇH\\$0HÄ _ÃH\\$Hl$Ht$WHì IÈÿ:HêHÙu3ÿëIøHÿÇ<u÷HQHúrHëHÁH;èr<HúrH\tHKH;Ív*HúrHëHÃH+èLÏHÓLÅHËèÂHØé©HCL+ÀL;ÇwH\rVÿÕOÌHÿH48HþþvH\rrVÿ´OÌH;ÖsLÀHÖHËèÄëHöuH!sHúrHëHÃÆHöt:H{rHëHËHÿtHKLÇHÕè>AH{HsrHëHÃÆ0Hl$8Ht$@HÃH\\$0HÄ _ÃÌH\\$Hl$Ht$WHì HÈÿAèLAI+ÀHòHÙH;ÂwH\r°UÿòNÌHÒI<HÿþvH\rUÿÑNÌH9ys\nH×èæëHÿuH!yHyrHëHÁÆHÿtTHKHþuH{rHëHÃ@,ëH{rHëHÃ@¾ÕHÈLÆèK@H{H{rHëHÃÆ8Hl$8Ht$@HÃH\\$0HÄ _ÃH\\$Hl$Ht$WHì HzIèHòHÙI;øsH\rÏTÿéMÌI+øL;ÏIBùH;Êu9JH9AsH\r¨TÿÂMÌHyHArH\tÆ3ÒHËè©éHÿþvH\rcTÿ¥MÌH9ysLAH×è¶ëHÿuH!yHyrHëHÁÆHÿtAH~rH6H{rHëHËHÿtH.LÇè(?H{H{rHëHÃÆ8Hl$8Ht$@HÃH\\$0HÄ _ÃÌÌÌH\\$Ht$WHì IøHòHÙHÒtOHyrHëHÁH;Ðr;HyrH\tHKH;Êv(H{rHëHÃH+ðMÈHÓLÆHËèyþÿÿéIøþvH\rSSÿLÌL9CsLCH×HËè£ëMÀuL!CH{rHëHÃÆHÿt6H{rHëHËHÿtLÇHÖè >H{H{rHëHÃÆ8HÃH\\$0Ht$8HÄ _ÃH\\$WHì HyHÙH;úsH\r¿RÿÙKÌHÇH+ÂI;ÀwHyHQrHëHÁÆëGMÀtBHyrHëHÁI+øHHÇH+Ât\rJLÀÿäMH{H{rHëHÃÆ8HÃH\\$0HÄ _ÃÌÌÌH\\$Hl$Ht$WATAUAVAWHì MøLAMñHòHÙL;ÂVIALd$pI;ÄDH|$xIèIÈH+êI;ïLBýI+ÄH;ÇHBøHÈÿI+ÏH+ÇH;ÁwH\r°QÿòJÌL,9I+ïM;ÅsBIýþvH\rQÿÒJÌL9ks\rIÕHËèäëMíuL!kH{rHëHÃÆI;ÞtqH{rHëHËH{rHëHÃHítH1H0LÅHÏI×ÿ¬LI~rM6H{rHëHÃHÿ!K&H0LÇè<éI;ÿwqH{rHëHËH{rHëHÃHÿtJ!H0LÇÿ<LH{rHëHËH{rHëHÃHí¬H1H0LÅI×HÏéL;æwqH{rHëHËH{rHëHÃHítH1H0LÅHÏI×ÿÀKH{rHëHËH{rHëHÃHÿ0J!H0LÇéJ>I;ÄwoH{rHëHËH{rHëHÃHítH1H0LÅHÏI×ÿFKH{rHëHÓH{rHëHÃHÿ¶I+×IÔH×é|ÿÿÿH{rHëHËH{rHëHÃMÿtJ!H0MÇÿÝJH{rHëHËH{rHëHÃHítH1H0LÅHÏI×ÿ£JH{rHëHËH{rHëHÃLÇM+ÇtJ!H0H×IÏÿiJH{LkrHëHÃHl$XHt$`BÆ(HÃH\\$PHÄ A_A^A]A\\_ÃH\rªNÿÄGÌÌÌÌH\\$Hl$Ht$WAVAWHì IéLúHÙMÉuL;AwIÀéHyL;Çs{I+øL;Ïws¸I+ÁHøHyrHëHÁN4HÿtPA¾LÇIÎÿÐIHðHÀt8Hít!LÅI×HÈè!9ÀtL+öIÿÎIþLvë½H{rHH+óHÆëHÈÿH\\$@Hl$HHt$PHÄ A_A^_ÃÌÌÌH\\$Ht$WHì IøHÙÒt!HyrH1IørHÖè±8HÎÿ~IHt$8HÇCH{ÆH\\$0HÄ _ÃÌÌHL$WHì0HÇD$ þÿÿÿH\\$HHúHÙH!HaèH3ÀDÀH×HËèHÃH\\$HHÄ0_ÃÌÌLL$ LD$HL$VWAVHì H. LòL;L;ÈHxH÷uWHVH\r èXH6HO@èàÌÿÿH8r\nHO ÿHHg0HÇG8HÏÆG ÿH~Hþt°HµH@HªHH H@HH%HIëkM;ÁtcAxIÀu@IHyuHëHÊHztôëIHëL;AuLÁHL$PHIytèHL$PHT$@LÀèqLD$PL;D$XuMIÆHÄ A^_^ÃÌÌH\\$Ht$WHì IxIpMÈHÂrMHzHzrHH;þLÆLBÇ3ÛMÀuÃëIÑHÈè6H;þHcÐËH\\$0ÁÈÿH;þHt$8BÈHÒEÊÉÀHÄ _ÃH\\$UHìHìPH0H3ÄHEøE3ÉöApHÚDMÐu9HA@L9t0LAhL;LBHA HHMØHÇEðL+ÂLMèDMØè÷ÿÿë2öApuHA8HHÒtHAPLcHALÂë½HÇEðLMèDMØHUØHËèÚÿÿH}ðr\nHMØÿFHÃHMøH3Ìè¢+H\\$pHÄP]ÃÌÌÌI;ÐtCH\\$WHì IøHÚH{r\tHÿWFHcHÇCÆHÃ H;ßu×H\\$0HÄ _ÃÌÌÌHÄUAVAWHìHìpHÇEÈþÿÿÿHXHpHx HþH3ÄHEðHù3ÛH9Yx#8HÊÿÿPøÿu2ÀéºHUè]Ð3ÉHMÐHÇEàHEÐHúHCÁXròHMÐH}èHCMÐLEÐLCEÐLMàLÉHEÀHD$ HHOxÿ;CÈÀtÿÉuoëHEÐHUÐLMèIùHCÂLuÀL+ðt$HMÐIùHCÊLMÆHÖÿ-EL;ðu08t%MödÿÿÿE3ÀAVHMÐèóÿÿéOÿÿÿùuë@Þ@ó@ÞH}èr\nHMÐÿÑDÃë¸HMðH3ÌèÔ)L\\$pI[(Is0I{8IãA_A^]ÃÌÌHL$WHì0HÇD$ þÿÿÿH\\$HHÚHùHHLc@ILHHÉtHÿPHHcH|uHLPHÉtÿBHHcH|ÀGHÇH\\$HHÄ0_ÃÌ@SHì HÙÿiAÀu\tHÿ´AHHHcHHLHHÉtHÿPHÄ [ÃHÄHXHhHpHx AVHì HBIñIèLòHÙI;ÀsH\rÇGÿá@ÌI+ÀLAI;ÁHBðHÈÿI+ÀH;ÆwH\rGÿÑ@ÌHöI<0HÿþvH\rnGÿ°@ÌH9ys\nH×èÅëHÿuH!yHyrHëHÁÆHÿtEI~rM6H{rHëHËHötHKI.LÆè32H{H{rHëHÃÆ8Hl$8Ht$@H|$HHÃH\\$0HÄ A^ÃHÄHXHhHpHx AVHì HòHÙHúþvH\r¨Fÿê?Ì3ÿH9QsLAèüëbEÀtGHúsALqI;ÖLBòHyrH)IþrMÆHÕè1HÍÿTBHÇCLsA<ëHÒuHyHyrH@;H\\$0Hl$8H|$HHöHt$@ÀHÄ A^ÃÌÌÌH\\$Ht$WHì HHùHXHó{uCHVHÏèH{@H6r\nHK(ÿÆAHc8HÇC@HËÆC(ÿ¬A~HÞt½HH\\$0Ht$8H@HHHH@HgHÄ _ÃÌÌH\\$Ht$LD$WHì 3öHúA8ptH\rzEÿ|>ÌIHIØL\tA8quIëLÈH@8ptôëMHëM;AuMÁLL$@MIA8qtèLL$@H@8rtLëH@8ptLÂë\rMAL;ËHSA8puIPHH9XuL@ëH9uLëLBHæH9u)A8ptHÊëIIÈëHÈH@8ptôH»HL\r±I9YA8ptHÂëIHIÀëHÁHI@8qtóIAënLJHIL;\tuIÑëIQA8puIPLHIAHLHHFH9XuLHëHCH9uLëLHHCIACAIAAK{ÔHL;@¾Ax³H\nL;ÁÖHJ@8quXÆAHJ@rHHBH@8puHPHBHAH§H;PuHHëHBH;uHëHHHHJHJ@8qîHxuHAxÓHAxôHÆ@L\t@qIAHIA@8puHHHAIAHH;HLHé£@8quYÆAH\n@rHAHHA@8puHPHBHAHÕH;PuHHëHBH;PuHHëHHQHJH\n@8quHAxHx@qLÂHRérþÿÿHAH;HuLHëLIILIHJBAÆBHAÆ@HJHHBH@8puHPHBHAH\"H;PuHHëHBH;uHëHHHé¿Hxu[HAÆ@LI@qIHAI@8puHHHAIAHÀH;HuLHëHAH;uLëLHI\tLIH\nBAÆBHÆ@H\nHAHHA@8puHPHBHAH`H;PuHHëHBH;PuHHëHHQHJAÆ@HK@èÁÿÿH{8r\nHK ÿÚ<HÇC8Hs0HË@s ÿÁ<HHÀt\nHÿÈHóHD$@H\\$0Ht$8HHÇHÄ _ÃH\\$Hl$Ht$WAVAWHì0E3öHúHñHÒt+H¸ÿÿÿÿÿÿÿH;ÐwHÊHÁáÿv<LðHÀuÿh9ÌHVHMÆè¨HL~IïH+ëHÛt4ë$H{r\tHÿ<HcHÇCÆHÃ I;ßu×Hÿê;H\\$PHÁçHåàIþIîL6HnHl$XH~Ht$`HÄ0A_A^_ÃHì(HHHcHHLHHÉtHÿPHÄ(ÃÌHÄL@HPHHSVWAVHì8HÇ@ÈþÿÿÿIðHÙHúHÏIÇÁþÿÿÿI;ùvHúë1LAIÈHÑéH¸«ªªªªªªªH÷çHÑêH;ÊvIÁH+ÁL;ÀJ<vIùHOE3öHÉtHùÿwÿ5;LðHÀuÿ'8ëH\\$`Ht$pH|$hLt$xHötH{rHëHÓHötLÆIÎèî)H{r\tHÿ´:ÆL3H{HsHÿrIÞÆ3HÄ8A^_^[ÃÌÌÌHÄHXHhHp L@WHì 3íHòHùA8htH\r>ÿ7ÌIHIØL\tA8iuIëLÈH@8htôëMHëM;AuMÁLL$@MIA8itèLL$@H@8jtLëH@8htLÂë\rMAL;ËHSA8huIPHH9XuL@ëH9uLëLBLI9u\"A8htHÂëIIÀëHÁH\t@8itôILI9YA8htHÂëIHIÀëHÁHI@8itóIAëjLJHIL;\tuIÑëIQA8huIPLHIAHLHHH9XuLHëHCH9uLëLHHCIACAIAAKA²D8S¶HL;@¥E8PH\nL;ÁÎHJ@8iuTDQHJ@jHHBH@8huHPHBHAHH;PuHHëHBH;uHëHHHHJHJ@8iæHD8PuHAD8PËHAD8PìHDPL\t@iIAHIA@8huHHHAIAHH;HLHé@8iuUDQH\n@jHAHHA@8huHPHBHAHH;PuHHëHBH;PuHHëHHQHJH\n@8iuHAD8PHD8P@iLÂHRéþÿÿHAH;HuLHëLIILIHJBADRHADPHJHHBH@8huHPHBHAHH;PuHHëHBH;uHëHHHé·HD8PuWHADPLI@iIHAI@8huHHHAIAHH;HuLHëHAH;uLëLHI\tLIH\nBADRHDPH\nHAHHA@8huHPHBHAHH;PuHHëHBH;PuHHëHHQHJEPH{@r\nHK(ÿ\"6HÇC@Hk8HË@k(ÿ\t6HGHÀtHÿÈHGHD$@H\\$0Hl$8HHÆHt$HHÄ _ÃÌH\\$Ht$WHì zHÚHñHúuCHWHÎèÖÿÿÿH{@H?r\nHK(ÿ5Hc8HÇC@HËÆC(ÿ5Hßt½H\\$0Ht$8HÄ _ÃÌÌÌH\\$Ht$WHì zHÚHñHúuLHWHÎèÖÿÿÿH?HK@è^¹ÿÿH{8r\nHK ÿ5Hc0HÇC8HËÆC ÿ5Hßt´H\\$0Ht$8HÄ _ÃÌÌHÑH\tE3ÀD8Au9HAD8@u\"HëHÁH\tD8AtôHëHAH9u\rH\nHID8AtêH\nHÂÃHì(¹Hÿµ4HÀuÿª1ÌHHHHÉtHHHHÉtHfÇ@HÄ(ÃÌÌÌHì(¹Øÿq4HÀuÿf1ÌHHHHÉtHHHHÉtHfÇ@HÄ(ÃÌÌÌH\\$Hl$Ht$WHì 3ÛHÍÿ8uûëHýHÿÇ8:uøHyHqrH\tH;÷LÇLBÆMÀuÃëèå\"H;÷ËH\\$0ÁH;÷Ht$@BÍHl$8ÀHcÐEÊÉÀHÄ _ÃÌHÄHHWHì0HÇ@ðþÿÿÿHXHpIðHÙ`èHÇAHaÆÇ@èIPHÿÂHyH;úw)H9Qt#A°èaðÿÿÀtH{H{rHëHÃÆ8H¿5HËèßßÿÿIÉÿE3ÀHÖHËè\rïÿÿHÃH\\$HHt$PHÄ0_ÃÌÌHÄHHWHì0HÇ@ðþÿÿÿHXHpHòHÙ`èHÇAHaÆÇ@èHRHÂHyH;úw)H9Qt#A°è´ïÿÿÀtH{H{rHëHÃÆ8IÉÿE3ÀHÖHËèoîÿÿH5HËè ßÿÿHÃH\\$HHt$PHÄ0_ÃÌH\\$Ht$WHì@IPd$0IØHñHúrIëHÃL\rÝ5L;ÈrAHúrIëHËIHI;Év*HúrIëHÃL+ÈHËHÇD$ è¿HØéÝM@HÈÿI+ÀHøwH\r§5ÿé.ÌIxHÿþvH\r5ÿÑ.ÌH;×s\rH×HËèäõÿÿëHÿuH!{HúrHëHÃÆHÿtuH{rHëHÓH{rHëHËLCMÀt\nHÁÿ¶0H{rHëHËHè4HHæ4HAä4AH{H{rHëHÃÆ8HÓHÎè3ÄÿÿH\\$PHÆHt$XHÄ@_Ã@SHì0d$ HÂHÙHÈIÐè|ÝÿÿHËHÐèùÃÿÿHÃHÄ0[Ã@SHì@HBd$0MÐH+BLÚHÙI9@v$I@I+@H;BrHL$ ÿE3ÉLÂIÊèHëIÉÿE3ÀIÒIËèPìÿÿHÐHËèÃÿÿHÃHÄ@[ÃHÄHHWAVAWHì@HÇ@ÈþÿÿÿHXHp LòHÙ3ÿ|$hLzHLc@It(Hö~\nI;÷vI+÷ë3öHÑHL$(è.ëÿÿ|$0u\n¿é»HHcHD%Àø@t2Höt)HHcHTXHLHÿ´-øÿu\tÏ|$hëHÿÎëÒÿu.I~rM6HHcHMÇIÖHLHÿs-I;Çt¿ë#Höt)HHcHTXHLHÿT-øÿu\tÏ|$hëHÿÎëÒHHcHHd(ë\tH\\$`|$hHHcHHËE3À×ÿt-ÿ5,ÀuHL$(ÿ~,HT$(HHcHHLHHÉtHÿPHÃH\\$pHt$xHÄ@A_A^_ÃÌÌÌHÄWHì@HÇ@ØþÿÿÿHXHp Hñ3ÒHHÿ¹+H¡HD$XH\rÍ+ÿ_-HøHH;xs\nHHHùë3ÛHÛ8X$tÿ+H;xs\nH@Høë3ÛHÛu`H\\$XHÛuVHÖHL$Xÿ¤+Høÿu$HW2HL$(ÿd-HÝYHL$(èßÌH\\$XHþHHËÿPHËèMHL$Pÿé*HÃH\\$`Ht$hHÄ@_ÃÌÌH\\$Ht$WHì HHúHHREÈLÃHñèBE3ÀHCHGHHFHJD8Au4HëHÈHD8@tôH\nHHBHHëHÁHID8AtóHBë\nHHH@H\\$0Ht$8HÄ _ÃHÄHXHpHxLp AWHì I@MùMðHÙI;ÁSH|$PLAI+ÁH;ÇHBøHÈÿI+ÀH;ÇwH\r³0ÿõ)ÌHÿÿI48HþþvH\r0ÿÔ)ÌH9qs\nHÖèéðÿÿëHöuH!qHyrHëHÁÆHö³H{rHëHÓH{rHëHÃLCMÀt\nH8ÿ¶+I;Þu<H{rHëHÓH{rHëHËHÿtCI?MÿLÇLEøI×ÿw+ë*I~rM6H{rHëHËHÿtK>LÇèåH{HsrHëHÃÆ0Ht$8H|$@Lt$HHÃH\\$0HÄ A_ÃH\r/ÿ©(ÌH\\$WHì HúèÒfÇ@HØHÀ tHWHHè¢¾ÿÿHÃH\\$0HÄ _ÃLÜWHìPIÇCØþÿÿÿI[IsIùHÚLÑ3öH9quH$ICÐL\tA°èHÃéÂH\tL;u0A@ A8H$HD$(MÈA°IÊèÔHÃéL;Áu0LIA8A OH$HD$(E3ÀIÊèHÃéUEE8X IÀA8ptMHëAMA8quIAëLÈH@@8ptóë#IPëH;u\rHÂHR@8rtîLÈ@8pLDÊE8Y s@IAHÓIÊ@8pH$HD$(tE3ÀèHÃéÅMÈA°èüHÃé²E8X MÈA8pu4I@@8puLÈH@8ptôëI@ë\rL;Hu\rLÈH@@8ptíLÈL;ÉtE:Y s:I@HÓIÊ@8pH$HD$(tMÈE3ÀèzHÃë3A°èmHÃë&H$HD$ LÏHT$8IÊèóHHHÃH\\$`Ht$hHÄP_ÃÌÌHL$SVWHì0HÇD$ þÿÿÿHòè»HøHD$PfÇ@HX H\\$`H\\$hHÛtHÖHËè/¼ÿÿHV HK è¬ÿÿHÇHÄ0_^[ÃÌLÜMCAVHìPIÇCØþÿÿÿI[IsI{ IñHúE3öL95Ïu#H$ICÐL\r²A°èzHÇéHL;u9IÀ IÑè~àÿÿÀÕH$HD$(LL$pA°H×è5HÇéÓL;ÂuCHRHÂ MÁè<àÿÿÀH$HD$(L\r,MIE3ÀH×èíHÇéIÀ IÑèýßÿÿÀ¤HD$pD8ptHXëAHD8suHCëHØH@D8ptóë#HHëH;u\rHÁHID8qtîHØD8pHDÙHS LÆèßÿÿÀtBHCH×D8pH$HD$(tLËE3ÀèJHÇéèLL$pA°è5HÇéÓHT$pHÂ LÆè@ßÿÿÀLL$pIÙE8qu4IAD8puHØHD8ptôëIAë\rH;Xu\rHØH@D8ptíHØH;û}tLC HÖèáÞÿÿÀt<LL$pIAH×D8pH$HD$(t\rE3ÀèHÇë3LËA°èHÇë#H$HD$ LÎHT$8è;HHHÇH\\$`Ht$hH|$xHÄPA^ÃÌÌÌÌHÄDH L@HPHHSVWHì0HÇ@àþÿÿÿHñH9zu`HÂ èÁ\tHØHD$`HCHL$XACHEûH|$ DL$hLÃHHÎèÿÿÿHDL$hLÃHT$XHRHÎèvÿÿÿHCHÇHÄ0_^[ÃÌÌÌ@SHì HÙ¹Hÿ¨%HÐHÀuÿ\"ÌHHJHHÉtHHHJHÉtHHHÂHÄ [ÃHì(¹Øÿ]%HÈHÀuÿO\"ÌH_|HQHHÒt\nHL|HHQHÒt\nH9|HHÁHÄ(ÃÌÌH\\$WHì HALÑH¹ã8ã8MÙAØHúH;Ár@H\\$XH{@r\nHK(ÿ­$E3ÀHÇC@HËLC8DC(ÿ$H\rú(ÿÌ!ÌLL$XHÿÀE3ÀIBMYIL;ØuLHILIë!ÛtMIL;uLëMKIL;XuLHIAIÑé»HBLXIH;ÁÆIKD8A¾H;PuKHHHÐHHBHD8@uHPHBHAIH;PuHHëHBH;uHëHHHHJHBÆ@HBHHDAHBHHLICHICD8@uHHHAICIH;HuLXëHAH;HuLXëLIKéÙD8Au!Æ@ÆAHBHHDAHBHPé¶H;uMHHÐHAHHAD8@uHPHBHAIH;PuHHëHBH;PuHHëHHQHJHBÆ@HBHHDAHBHHLYIHAID8@uHHHAICIH;HuLXëHAH;uLëLXILYHBD8@;þÿÿIH\\$0LHHHÇÆAHÄ _ÃÌÌÌHÄAVHì@HÇ@èþÿÿÿHXHpHx MÙHúHHBLÊA²E3öD8pu\"ELÈD:@ AÂEÒtHëH@D8ptáIÙEÒtrL;\nu)HD$pHD$(A°HT$PèÙüÿÿHHÆGHÇé«E8qtIYë8ID8puHØH@D8ptóë IAëH;u\rHØH@D8ptîD8sHDØA8C s&HD$pHD$(EÂHT$PèdüÿÿHHÆGHÇë9Ht$pH~@r\nHN(ÿ+!HÇF@Lv8Dv(HÎÿ!HDwHÇH\\$XHt$`H|$hHÄ@A^ÃÌÌ@SHì H\r+xLÚHºöÚKh/IÁEÐH;ÊrIH\\$XHK@èí¤ÿÿH{8r\nHK ÿ¬ E3ÀHÇC8HËLC0DC ÿ H\rù$ÿËÌLL$XHÿÁE3ÀH\r¸wIAH\r¥wH;ÁuLIHwLHwLHë.EÒtLH\rvwH;uL\tëLHH\rawH;AuLIIAIÑéËHBLPI\nH;ÁÎIJD8AÆH;PuOHHHÐHHBHD8@uHPHBHAHùvH;PuHHëHBH;uHëHHHHJHBÆ@HBHHDAHBHHLIBHIBD8@uHHHAIBHvH;HuLPëHAH;HuLPëLIJéáD8Au!Æ@ÆAHBHHDAHBHPé¾H;uQHHÐHAHHAD8@uHPHBHAHvH;PuHHëHBH;PuHHëHHQHJHBÆ@HBHHDAHBHHLQIHAID8@uHHHAIBH©uH;HuLPëHAH;uLëLPI\nLQHBD8@+þÿÿHouMHHIÃÆAHÄ [ÃÌÌÌHÄHHATAVAWHì@HÇ@ØþÿÿÿHXHpHx MùHúH&uHXHðA¶E3äD8cu,HóLC I×èøÕÿÿDðÀtHëH[D8ctÛHçtHÞEötxH;0u/H$HD$(LÎA°HT$`èüÿÿHHÆGHÇéÅD8ftH^ë8HD8`uHØH@D8`tóë HFëH;u\rHØH@D8`tîD8cHDØHS MÇèOÕÿÿÀt,H$HD$(LÎEÆHT$`è\nüÿÿHHÆGHÇëEH´$HN@è\n¡ÿÿH~8r\nHN ÿÉHÇF8Lf0Df HÎÿ°HDgHÇH\\$hHt$pH|$xHÄ@A_A^A\\ÃÌÌÌÌH\\$Ht$WHì IØHòHùH;ÊtHÛtH×HËè·¯ÿÿHÇ HÃ H;þuãHt$8HÃH\\$0HÄ _ÃÌÌÌ@WHì0HÇD$ þÿÿÿH\\$@HúèöÿÿHØHD$P3ÒfPHH HL$XHL$(HÉt'HÁHÇAHQHWIÉÿE3ÀèéÊÿÿHÃH\\$@HÄ0_ÃÌÌHcAüH+ÈéÇÿÿHcAüH+ÈHéxÿ%ÌÌÌHcAüH+ÈHéÿ%HcAüH+ÈHéÿ%ÄHcAüH+Èé|Çÿÿ@SHì HÙ¹è7HÀtH¹lHXHH«lHÄ [ÃÌéÌÿ%Àÿ%Êÿ%Ìÿ%Îÿ%Ðÿ%Òÿ%Ôÿ%Öÿ%Øÿ%ÚÌÌÌÌÌÌÌÌffH;\rÙguHÁÁf÷ÁÿÿuóÃHÁÉé­Ìÿ%2ÿ%<ÿ%>ÌÌ@SHì H=6ru6ºJÿÖHÈHØÿHrHrHÛuCëH#3ÀHÄ [ÃÌÌ@SHì HÙH\räqÿ&HD$8HøÿuHËÿë~¹èäH\r¶qÿøHD$8H\rqÿæHD$@HËÿHÈLD$@HT$8è°HØHL$8ÿðHiqHL$@ÿÞHOq¹èyHÃHÄ [ÃHì(èGÿÿÿH÷ØÀ÷ØÿÈHÄ(ÃÌÿ%ÿ%H\\$Ht$WHì òHÙöÂt+HyøL\r^ºDè/@öÆtHÏè»ÿÿÿHÇëè9@öÆtHËè£ÿÿÿHÃH\\$0Ht$8HÄ _Ãÿ%HHì(¸MZf9èeÿÿt3Éë8HcfÿÿH\rÔeÿÿHÁ8PEuã¹f9HuØ3É¸v\t9øÁ\rdj¹ÿ9HÉÿÿÇH\rpH1pH2pÄoH[©oèÞèÕ=eu\rH\rÅÿ=peÿu\tÉÿÿñ3ÀHÄ(ÃÌÌHì8H\rÕèþÿÿ^oD\rSoÉiHÂiL¯iH iH\riHD$ ÿviÀy\n¹èÄHÄ8ÃÌ@WHì eH%0HH3ÿ3ÀðH±\r<otH;Áu¿ëëå.oøu\nHè{ë?oÀu+ÇoH|H\rUèHÀt¸ÿéðÇähÚnøuHH\rÇèÇ¸nÿu\t3ÀH£nH=«nt\"H\r¢nèEÀtE3ÀAP3ÉHnÿÐH\rhH±HLhHph\rbhè%¨ÿÿOh=hhuÈÿF=;huÿG)hë-!h=:hu\tÈÿ Ì=huÿúgHÄ _ÃHì(èHÄ(é~þÿÿÌÌ@SHì HÙÿ9¹fmèHËè=Rmu\n¹è¹\tÀHÄ [éÿÌÌÌHL$Hì8¹èÀt¹Í)H\r?hèØHD$8H&iHD$8HÀH¶hHiHgHD$@HhÇZg\tÀÇTgÇ^g¸HkÀH\rVgHÇ¸HkÀH\rnbHL ¸HkÀH\rabHL H\rèèþÿÿHÄ8ÃÌÿ%tÿ%vÿ%ÿ%rÌÌHÄLH D@HPSVWAVHì8MñIcøHò`ÈHßH¯ÚHÙHXÿÏ|$pxH+ÞH\\$`HËAÿÖëèÇD$ HÄ8A^_^[ÃÌÌÌH\\$DD$HL$VWAVHì@IñAøLòHÙÿÏ|$pxI+ÞH\\$`HËÿÖëéëH\\$hHÄ@A^_^ÃÌÌHì(H8csmàuxuH àúlæøvù@t3ÀHÄ(Ãè9ÌHì(H\r½ÿÿÿè43ÀHÄ(ÃÌÿ%ÿ%LcA<E3ÉLÒLÁA·@E·XHÀIÀEÛtPL;Òr\nHÊL;ÑrAÿÁHÀ(E;Ërâ3ÀóÃÌÌÌÌÌÌÌÌÌÌÌH\\$WHì HÙH=`ÿÿHÏè4Àt\"H+ßHÓHÏèÿÿÿHÀt@$Áè÷Ðàë3ÀH\\$0HÄ _ÃÌÌÌHÁ¹MZf9t3ÀÃHcH<HÈ3À9PEuºf9QÀóÃÌH\\$ UHìHì H<`HeH»2¢ß-+H;ÃuoHMÿ.HEHEÿÀH1EÿHM ÀH1EÿìE HÁà HMH3E H3EH3ÁH¹ÿÿÿÿÿÿH#ÁH¹3¢ß-+H;ÃHDÁH¹_H\\$HH÷ÐH²_HÄ ]Ã3ÀÃÌH\\$WHì HÏ'H=È'ëHHÀtÿÐHÃH;ßríH\\$0HÄ _ÃH\\$WHì H§'H= 'ëHHÀtÿÐHÃH;ßríH\\$0HÄ _Ãÿ%Úÿ%Üÿ%öÿ%øÿ%úÿ%üÿ%þÿ%ÿ%ÿ%äÿ%Vÿ%HHì(MA8HÊIÑè\r¸HÄ(ÃÌÌÌ@SHì EHÚLÉAãøAöLÑtA@McP÷ØLÑHcÈL#ÑIcÃJHCHHKöAt¶AàðHLÈL3ÊIÉHÄ [éöÿÿÌHÄHXHhHpHx AVHì IY8HòMðHéLCIÑHÎIùèdÿÿÿD[DUAÃAãA¸A#ÀAâfDDØEÛtLÏMÆHÖHÍèÿÿÿDÀH\\$0Hl$8Ht$@H|$HAÀHÄ A^ÃÌÿ%&ÿ%ÿ%ÌÌ@UHì Hê¹èqûÿÿHÄ ]ÃÌ@UHì HêHHÑècüÿÿHÄ ]ÃÌ@UHì Hê} uLMxDEpHUhHM`èûÿÿHÄ ]ÃÌ@UHì HêHM8HM(HE(HHM0HE08csmàtÇE E ëèþÿÿHÄ ]ÃÌÌÌÌÌÌÌÌÌÌÌ@UHì HêH3É8ÀÁÁHÄ ]ÃÌH(éÄËÿÿHT$UHì HêHU`HHcHHÊA°ºÿKH±àÿÿHÄ ]ÃÌ@UHì HêE àÀt\re þHM@èè£ÿÿHÄ ]Ã@UHì HêHUXHM(èPlÿÿHÄ ]ÃHT$UHì HêHMPÿ[3Ò3ÉèVýÿÿ@UHì HêHU`HMhèlÿÿHÄ ]ÃHhé}£ÿÿHT$UHì HêHMPÿ3Ò3Éè\rýÿÿHT$SUWHì HêH] Hû{uDHWHMPèÙÿÿH?H{@r\nHK(ÿËHÇC@Hc8ÆC(HËÿ±Hßt¼3Ò3Éè£üÿÿHT$SUHì8HêHH{@r\nHK(ÿxHÇC@Hc8ÆC(HËÿ^3Ò3ÉèYüÿÿHT$SUHì8HêHHK@èfÿÿH{8r\nHK ÿ%HÇC8Hc0ÆC HËÿ3Ò3ÉèüÿÿHT$SUHì8HêH]pH{@r\nHK(ÿÞ\rHÇC@Hc8ÆC(HËÿÄ\r3Ò3Éè¿ûÿÿHT$SUHì8HêHHK@èÌÿÿH{8r\nHK ÿ\rHÇC8Hc0ÆC HËÿq\r3Ò3ÉèlûÿÿHPHÿ%\nH@éQ¸ÿÿHT$UHì HêHM@è/Ëÿÿ3Ò3Éè2ûÿÿ@UHì HêEPàÀtePþHM@HÁÿHÄ ]ÃH@HÁ Hÿ%-H(Hÿ%ÇH@é'¡ÿÿH@HÁ é¡ÿÿH@HÁ@é¡ÿÿH@éïÐÿÿHhéï ÿÿH@é_·ÿÿH@é× ÿÿH@HÁ éÇ ÿÿH@HÁ@é· ÿÿH@éÿÿHàé ÿÿHàéO·ÿÿHT$UHì HêHMhHMh3ÀHÿÁtHùÿwÿ?HÀuÿ4\tHExHÑÿÿHÄ ]ÃÌHT$SUHì(HêH]`H{r\tHÿØHÇCHcÆ3Ò3ÉèÃùÿÿH@é ÿÿHhéúÿÿ@UHì HêE àÀt\re þHM@è¶ÿÿHÄ ]ÃH0éÈÿÿH0ékÿÿH8é°ÿÿ@UHì HêE àÀt\re þHM0èÿÿHÄ ]Ã@UHì HêHU@HMHèøgÿÿHÄ ]Ã@UHì HêHU@HMHèÜgÿÿHÄ ]ÃHÐéFÿÿ@UHì HêE àÀte þHÀè#ÿÿHÄ ]ÃHøéÿÿH¸éÿÿHxéùÿÿH8éíÿÿHøéáÿÿH¸éÕÿÿHxéÉÿÿH8é½ÿÿHøé±ÿÿHé¥ÿÿHXéÿÿHéÿÿHéÿÿHØéuÿÿHØéiÿÿHØé]ÿÿHéQÿÿHXéEÿÿHXé9ÿÿHé-ÿÿHé!ÿÿH¸éÿÿHxé\tÿÿH8éýÿÿHøéñÿÿHpéåÿÿ@UHì HêE@àÀte@þHMPHÁ¨ÿHÄ ]ÃHPHÁHÿ%ÉHhHÿ%+HPérÿÿH@éfÿÿHPésÿÿHHégÿÿ@UHì HêE0àÀt\re0þHM8èGÿÿHÄ ]ÃHpé5ÿÿH(é)ÿÿHéÿÿH(éÿÿH`éÿÿHÐéùÿÿHÈéíÿÿHØéáÿÿHØéÕÿÿH8é-ÿÿHpéq§ÿÿHøé±ÿÿHé¥ÿÿHéÿÿHØéÿÿH éý²ÿÿ@UHì HêàÀt¥þHÀèXÿÿHÄ ]ÃHéFÿÿH`é:ÿÿH`HÁ é*ÿÿH`HÁ@éÿÿH`éêÿÿH`éÿÿH`HÁ éòÿÿH`HÁ@éâÿÿH`é²ÿÿHPé¦ÿÿH`éÿÿHØé²ÿÿHPéÿÿH°éÿÿHPéò}ÿÿHØéÿÿHévÿÿHXéjÿÿHxé^ÿÿHøéRÿÿHhéFÿÿHhé:ÿÿH¸é.ÿÿHé\"ÿÿHhéÿÿHhé\nÿÿH8éþÿÿH¸éòÿÿHT$UHì@HêHÐzÿÿHÄ@]ÃÌHT$UHì@HêHo|ÿÿHÄ@]ÃÌHé°ÿÿH°é¤ÿÿH0éÿÿHPéÿÿH éÿÿHpétÿÿHì(H\re]ºÿ¢ÀtÈÿH\rsHÄ(é:ìÿÿÌÌHì(èÑÿÿH\rhH]HÄ(éìÿÿH\r¡éìÿÿH\réìÿÿH\riéôëÿÿH%]ÃÌÌÌH%ì\\ÃÌÌÌH\ruéÐëÿÿH\rÍ\\Hÿ%æÌÌHì(L©\\HT$0MÈMèM¼ÿÿH\r\\HÄ(Hÿ%GÌÌÌH5HVÃÌH%H~VÃÌHHvVÃÌ@SHì ë/HHKHfVHÿPHÀtLºHÈAÿHËèGëÿÿH>VHÛuÅHÄ [Ãh÷x÷÷¨÷Â÷Ø÷î÷X÷på¬åÆåèåææ@æbææ¾æææöæçç\"ç.ç:ç|çºç\nèJèèÒèétéªéèé,ênê²êøêZå:ëëÄëì@ì|ìÄìíRííèí0îjîÖîïZïïÞïðlð´ðüð<ññÄñò@òò´òÒò:ååüäÜäÎä¤õ>ø4øøøôóüóô8ôZô~ôôô¢ô¬ô¸ôÂôÌôÔôÜôæôðôþôõõ,õ8õBõLõVõvõ~õõõHø¼õÆõÔõâõòõöööö4öHöVöbönöxööö´öÌöêöþö4÷ó,óóJóó\\ópóÒóÂó®óóØ@­@­@<­@\\­@h­@t­@­@­@@t@Ü@Xcµ^>°¿°³Xcµ^ð¿ð³À@@Ð@p@genericunknown erroriostreamiostream stream errorsystem \tp-?https://http:///Mozilla/5.0POSTGETContent-Type: application/x-www-form-urlencoded\r\n\r\\r\n\\n\r\n\\b\\t\\f}\r\n\"\r\n\"id\": \",\r\n,\r\n\"startTime\": ,\r\n\"bytesTotal\": \",\r\n\"bytesDownloaded\": \",\r\n\"localFile\": \"\",\r\n\"url\": \",\r\n\"data\": \"{\r\n\"statusCode\": g0 \\sstring too longinvalid string positioninvalid map/set<T> iteratorvector<T> too longbad castmap/set<T> too long¨ À@_@(@\"@ÐL@äN@@HO@@@\n@¨O@ Q@@þ@ø@Ã@0@°@¸@X@@d@ÐÄ@d@@p@pÆ@0@l@t@Ø@@d@XÄ@0@@$@X@@d@ Ä@0@@@X@@d@(Ã@¬@ò@@PÃ@Ì_@ìT@U@$U@PW@@(X@X@@\n@ÌZ@¼[@Ä\\@l]@´]@\"`ÉxÉ É \"ÌÊ(Ê0\"ÌpÊÊ0\"ÌàÊË(\"Ì`ËË0\"ØËøË Ì \"ÌÌ¸Ì0\"$Í,Í \"`ÍxÍ Í \"HÎ Î(\"HÎPÎ(\"Î¼ÎÏ \"ÄÏÌÏ \"ÐÐ8\"hÐÐ¨Ð \"¤ÑhÑX\"¤Ñ¬ÑX\"ØÑèÑ \"LÒdÒ \"ÈÒ\tøÒ8\"`ÓpÓ8\"ÀÓ\rðÓ(\"ôÖhÔ \"¸Ô+Õ¸\"ôÖ× \"P×`×`\"¨×6ØÈ\"PÚ`Ú(\" Ú¨Ú(\"èÚÛ%ÐÛ¨\",Ý\\Ý`\"ØÝðÝ@\"PÞ\tpÞH\"ìÞôÞ(p @RSDSýÈ§o©ÐI¤çxl,oC:\\dev\\Alex\\WebReq\\src\\win\\webreq.pdb(ÀÀ@ÀPÀÿÿÿÿ@(Àøÿÿÿÿ@àÃ HÇ ÀHÄÅ0ÿÿÿÿ@ÈÀøÄXPXÆ Á0ÿÿÿÿ@`ÅÄ8Á¸ÂÆ¨ÇÄ8Á¸ÂÆÈÅÈÁ°\tÿÿÿÿ@ Ã ÿÿÿÿ@ ÁàÂÿÿÿÿ@øÁx@àÀxÅ¸ÃPÂPÐÇÃ¨Â(ÃøÁPÃøÿÿÿÿ@àÃ\nÀÆPÿÿÿÿ@ÐÇ¸Å ÿÿÿÿ@ Å  Á ÄøÀ  ÅXÄàÿÿÿÿ@`Áàÿÿÿÿ@`Á° ÃÐÄPÂ`ÇxÀXÿÿÿÿ@XÆÈøÀèÇØÿÿÿÿ@xÂ8ÈxÃÂøÀ0ÆxÁ8Á¸ÂÆ¨Ä8Á¸ÂÆ@ÿÿÿÿ@0ÇÇØxÂpÆø@àÃ(Â0ÆxÁ8Á¸ÂÆ¨Ä8Á¸ÂÆ¸ÃPÂ\tàÅHÅxÿÿÿÿ@àÀ Å`ÇxÀÿÿÿÿ@ÂÇxÁ8Á¸ÂÆ ÿÿÿÿ@HÇøÃ¸ÃPÂ20ðûa`¢b\t2pðBy{¢y\t\tbbàp`0ð+K¢\t4\rràp`ð{Å¢\t\n\n4\n2pð]£\r\r4\t\r2P4Rp2¡ð¹ÿÿÿÿ£ÿÿÿÿÉ@¶£8ðÿÿÿÿ(Tÿÿÿÿ¶£Ã£\n\n2P2¡ð¹%\n%t!d4\rr\rðà\tÀ2¡ºÊ@n¥Xÿÿÿÿ;|¥bP02¡ºt\rd4\trà2¡@ºÊ@'¥Xäÿÿÿÿ5¥bP02¡@º20\"Rp`02¡hºôÊ@ ¤HøÿÿÿÿSÿÿÿÿ ¤/¤2pP02¡hº!!td\r4\r\tà2¡ºtË@Ô¤Xpÿÿÿÿ»ÿÿÿÿÞâ¤bP02¡ºRp`02¡¸ºÿÿÿÿ×£ó£ÿÿÿÿÌ@ÿ£8ÿÿÿÿ7EVdÿÿÿÿÿ£¤\n\n2P2¡¸ºd\r4p2¡àºÿÿÿÿÿÿÿÿ¤Ì@¤XðÿÿÿÿÔÿÿÿÿú¤bP02¡àº\nä\ttd42ðd\r4rp2¡»ÿÿÿÿÁ¥ÿÿÿÿ°lÿÿÿÿ  d4rð\nàp2¡0»ÿÿÿÿ0£Í@<£8ÿÿÿÿ[l=ÿÿÿÿ<£I£f£\n\n2P2¡0»r0d4\nrpd\n4\tRp2¡X»Dÿÿÿÿfd\n4\tRp2¡»ÿÿÿÿt£ÿÿÿÿº2PBd\tT42p bàp`02¡¨»ÿÿÿÿÿÿÿÿäÎøÎ@é¦8@.§Hwÿÿÿÿx*xÿÿÿÿé¦ö¦þ¦ §<§\n\n2P2¡¨»BP02¡¨»\ndT4\nRðàpd42p\nt\tdT42à4\t\nRp2¡Ð»ÿÿÿÿu¦nÿÿÿÿÁnñnÿÿÿÿ1\n#td4ÒðàP¼¡ø»bÿÿÿÿj§ølÿÿÿÿmFnÿÿÿÿ42p\r4\rP8¡H2àp`4\t\nRp2¡ ¼ÿÿÿÿÏ¥Ð@Û¥8ÌiÿÿÿÿûijÿÿÿÿÛ¥è¥\n\n2P2¡ ¼dT4\n2ðàÐÀpdT42p\n\n4\n2pt\td42àT\n4\t2àp`0\t\"d4ðpP¼¡H¼Xÿÿÿÿ\\YZÿÿÿÿ/\t!4\nðàp`P¼¡p¼ÿÿÿÿkª$Uÿÿÿÿ%VWÿÿÿÿ4\nRp2¡¼ÿÿÿÿò§ÿÿÿÿ¨ RÿÿÿÿZSSÿÿÿÿT)Tÿÿÿÿd42p\nd\nT\t42ðàp4\tRp2¡À¼ÿÿÿÿû¥)¦;¦KÿÿÿÿÞKúK'L:Lÿÿÿÿ\ndT\n4\t2ðàp7\t&d<\"4:6àpP¼¡è¼¢ÿÿÿÿ¦¥¦µ¦ÿÿÿÿÅ¦Ñ¦Ý¦ìHÿÿÿÿI¢I®I¿IßIîIJ8Jÿÿÿÿ-t4P¼¡½ÿÿÿÿ¦¦àGÿÿÿÿZHkHHµHÿÿÿÿ5'd$#4\"ð\tàÀpP¼¡8½ÒÿÿÿÿÀ¬Ì¬Ø¬ä¬ð¬ü¬pDÿÿÿÿùDE:EOEbEEÅEåE÷EF5FGFÿÿÿÿ\nR02¡`½Dÿÿÿÿ7DBDMDgDÿÿÿÿ9(4k`ðà\nÐÀp`P¼¡½òÿÿÿÿûªwªªªª§ª³ª¿ªËª×ªãª\nïª*«6«\rB«R«b«n«z«««¦«²«¾«Ê«ì7ÿÿÿÿ.8A8k8¨8Ù89;9z:Õ:;C;\tj;ÿ;\n<G<\ns<´<Ì<)==\r =µ=Ï=s>Ð>å>ú>??¥?@&A±AbBCC-C7CFCCÎC×C  dT\n4\tRp2¡°½ÿÿÿÿI¦U¦e¦t6ÿÿÿÿ»6Û6û6=7ÿÿÿÿ*d4òp¼¡Ø½rÿÿÿÿ§v§À4ÿÿÿÿð4ý4-69(4ðà\nÐÀp`P¼¡¾ÿÿÿÿ6¨*¨_¨k¨w¨¨¨¨§¨³¨\t¿¨\nË¨×¨ã¨\rï¨û¨©©©+©7©C©O©[©g©s©©T-ÿÿÿÿ-«-ý-.#.6.h..Ö.ä.\tñ.\n//2/\rE/\\/l///­/½/Ô/ä/û/0'0>0¢0Í0ø0#1N1j11±1Ü1222N2y2\r¤2Ï2ú2\n%3\tA3]33­3Ø34.4Y4p4)4\nàÀp`P¼¡(¾BÿÿÿÿÌ§À§,ÿÿÿÿ/,<,\r-)4r\nðàp`P¼¡P¾:ÿÿÿÿ¨§*ÿÿÿÿ3*ñ*ÿÿÿÿ8&dE\"4D<ð\nàÐÀp¼¡x¾ÛÿÿÿÿÖ«â«î«ú«¬¬¬*¬6¬B¬N¬Z¬f¬r¬~¬¨Û¼Û@¬X@¥¬XpÿÿÿÿÄÑW¼Ó?\tÎb \n ,!ú\"s#\r¤#<$o$à$÷$v&&'3'd'¾'ï' (Q(()ÿÿÿÿ())ÿÿÿÿ¬\n\nrP2¡x¾0\t\"490\nðàp`P¼¡ ¾zÿÿÿÿ©©Å©×©å©ñ©ÿÿÿÿÙðL|.`ÿÿÿÿt¼ÿÿÿÿ%²\nðàp`0¼¡È¾Zÿÿÿÿªý©\tªÿÿÿÿºË>Z\n4\r\np8¡@/\t!4\nàÀp`P¼¡ð¾²ÿÿÿÿ;ªGªÿÿÿÿSª_ª´ÿÿÿÿ>b¦Ûÿÿÿÿ)MÃÿÿÿÿt\rdT4\nRðàÀ4(&p2¡¿ÿÿÿÿ´§ÿÿÿÿE`ÿÿÿÿ\n\n4\nRpR0`ßÿÿÿÿlÿÿÿÿfhß@ß àÀä°hàóH°Xä>ó8´xäèóX´âhõh²h÷x÷÷¨÷Â÷Ø÷î÷X÷på¬åÆåèåææ@æbææ¾æææöæçç\"ç.ç:ç|çºç\nèJèèÒèétéªéèé,ênê²êøêZå:ëëÄëì@ì|ìÄìíRííèí0îjîÖîïZïïÞïðlð´ðüð<ññÄñò@òò´òÒò:ååüäÜäÎä¤õ>ø4øøøôóüóô8ôZô~ôôô¢ô¬ô¸ôÂôÌôÔôÜôæôðôþôõõ,õ8õBõLõVõvõ~õõõHø¼õÆõÔõâõòõöööö4öHöVöbönöxööö´öÌöêöþö4÷ó,óóJóó\\ópóÒóÂó®óóKERNEL32.dll_Thrd_equalÓ?_Winerror_map@std@@YAPEBDH@ZÀ?_Throw_Cpp_error@std@@YAXH@Z¿?_Throw_C_error@std@@YAXH@Z¾?_Syserror_map@std@@YAPEBDH@Z²?_BADOFF@std@@3_JB÷?cout@std@@3V?$basic_ostream@DU?$char_traits@D@std@@@1@A×?_Xbad_alloc@std@@YAXXZÛ?_Xout_of_range@std@@YAXPEBD@Z¥??1_Lockit@std@@QEAA@XZf??0_Lockit@std@@QEAA@H@ZÚ?_Xlength_error@std@@YAXPEBD@Z\\?uncaught_exception@std@@YA_NXZû?_Getgloballocale@locale@std@@CAPEAV_Locimp@12@XZÎ?_Fiopen@std@@YAPEAU_iobuf@@PEBDHH@Z?id@?$codecvt@DDH@std@@2V0locale@2@Aæ_Mtx_destroy_Thrd_join_Thrd_currentí_Mtx_unlocké_Mtx_lockè_Mtx_initÙ?_Getcat@?$codecvt@DDH@std@@SA_KPEAPEBVfacet@locale@2@PEBV42@@Z?_Osfx@?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAAXXZ?_Init@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAXPEAPEAD0PEAH001@Z?_Init@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAXXZþ?getloc@?$basic_streambuf@DU?$char_traits@D@std@@@std@@QEBA?AVlocale@2@XZ*??0?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAA@XZd?unshift@?$codecvt@DDH@std@@QEBAHAEAHPEAD1AEAPEAD@Z??0?$basic_iostream@DU?$char_traits@D@std@@@std@@QEAA@PEAV?$basic_streambuf@DU?$char_traits@D@std@@@1@@Z??0?$basic_ios@DU?$char_traits@D@std@@@std@@IEAA@XZé?clear@?$basic_ios@DU?$char_traits@D@std@@@std@@QEAAXH_N@Z?_Pninc@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAPEADXZ{?pbump@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAXH@Z?_Gndec@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAPEADXZô?setg@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAXPEAD00@Z©?gbump@?$basic_streambuf@DU?$char_traits@D@std@@@std@@IEAAXH@Z?sputn@?$basic_streambuf@DU?$char_traits@D@std@@@std@@QEAA_JPEBD_J@Z?sputc@?$basic_streambuf@DU?$char_traits@D@std@@@std@@QEAAHD@Zo?out@?$codecvt@DDH@std@@QEBAHAEAHPEBD1AEAPEBDPEAD3AEAPEAD@Z8?in@?$codecvt@DDH@std@@QEBAHAEAHPEBD1AEAPEBDPEAD3AEAPEAD@Z~??1?$basic_iostream@DU?$char_traits@D@std@@@std@@UEAA@XZ£?_Add_vtordisp1@?$basic_istream@DU?$char_traits@D@std@@@std@@UEAAXXZ£?flush@?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAAAEAV12@XZ}?write@?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAAAEAV12@PEBD_J@Zþ??6?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAAAEAV01@H@Z??6?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAAAEAV01@P6AAEAV01@AEAV01@@Z@Z©?_Add_vtordisp2@?$basic_ostream@DU?$char_traits@D@std@@@std@@UEAAXXZ??1?$basic_ostream@DU?$char_traits@D@std@@@std@@UEAA@XZ ??0?$basic_ostream@DU?$char_traits@D@std@@@std@@QEAA@PEAV?$basic_streambuf@DU?$char_traits@D@std@@@1@_N@Zÿ?setstate@?$basic_ios@DU?$char_traits@D@std@@@std@@QEAAXH_N@Z ?_Add_vtordisp1@?$basic_ios@DU?$char_traits@D@std@@@std@@UEAAXXZ{??1?$basic_ios@DU?$char_traits@D@std@@@std@@UEAA@XZ4?imbue@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAAXAEBVlocale@2@@Z:?sync@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAAHXZï?setbuf@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAAPEAV12@PEAD_J@Z?xsputn@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAA_JPEBD_J@Z?xsgetn@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAA_JPEAD_J@ZY?uflow@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAAHXZ?showmanyc@?$basic_streambuf@DU?$char_traits@D@std@@@std@@MEAA_JXZÍ?_Unlock@?$basic_streambuf@DU?$char_traits@D@std@@@std@@UEAAXXZf?_Lock@?$basic_streambuf@DU?$char_traits@D@std@@@std@@UEAAXXZ??1?$basic_streambuf@DU?$char_traits@D@std@@@std@@UEAA@XZ?endl@std@@YAAEAV?$basic_ostream@DU?$char_traits@D@std@@@1@AEAV21@@Zà?always_noconv@codecvt_base@std@@QEBA_NXZ0??Bid@locale@std@@QEAA_KXZ?_Orphan_all@_Container_base0@std@@QEAAXXZMSVCP110.dllUuidToStringAUuidCreateRpcStringFreeARPCRT4.dllwHttpQueryInfoAInternetConnectAÅInternetReadFileÒInternetSetOptionArHttpOpenRequestAyHttpSendRequestA½InternetOpenAInternetCloseHandleWININET.dll­fputcg??1bad_cast@std@@UEAA@XZ??0bad_cast@std@@QEAA@PEBD@Z??0bad_cast@std@@QEAA@AEBV01@@Z-??0exception@std@@QEAA@AEBV01@@Zûmemmove¬_unlock_fileQungetc¡fgetpos_fseeki64÷memchrfflushatoi fgetcºfsetpossetvbufG_lock_file??_V@YAXPEAX@Zù_purecalls??3@YAXPEAX@Zúmemcpy_s¾fwritefclose_time64q??2@YAPEAX_K@ZMSVCR110.dllF_lock«_unlock_calloc_crt__dllonexit`__C_specific_handlerí_onexit\\_XcptFilterð_amsg_exit¥__getmainargsÌ__set_app_typeexitQ_exit_cexit_configthreadlocaleÎ__setusermatherr×_initterm_eÖ_initterm¦__initenvm_fmode_commode__crt_debugger_hook__crtUnhandledException__crtTerminateProcess__crtCapturePreviousContext9?terminate@@YAXXZ!?_type_info_dtor_internal_method@type_info@@QEAAXXZ__crtSetUnhandledExceptionFilter@EncodePointerDecodePointerIsDebuggerPresentIsProcessorFeaturePresent?QueryPerformanceCounter*GetCurrentProcessId.GetCurrentThreadIdûGetSystemTimeAsFileTimeJ_CxxThrowExceptionf__CxxFrameHandler3ømemcmpùmemcpyýmemset`µ@.?AVtype_info@@2¢ß-+Í] ÒfÔÿÿþÿÿÿÿÿÿÿ`µ@.?AV?$basic_iostream@DU?$char_traits@D@std@@@std@@`µ@.?AVbad_cast@std@@`µ@.?AV?$basic_stringstream@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@`µ@.?AVexception@std@@`µ@.?AV?$basic_istream@DU?$char_traits@D@std@@@std@@`µ@.?AVios_base@std@@`µ@.?AV_Iostream_error_category@std@@`µ@.?AV_System_error_category@std@@`µ@.?AV?$basic_filebuf@DU?$char_traits@D@std@@@std@@`µ@.?AV?$basic_ios@DU?$char_traits@D@std@@@std@@`µ@.?AV?$basic_stringbuf@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@`µ@.?AV?$_Iosb@H@std@@`µ@.?AVerror_category@std@@`µ@.?AV_Generic_error_category@std@@`µ@.?AV?$basic_ofstream@DU?$char_traits@D@std@@@std@@`µ@.?AV?$basic_ostream@DU?$char_traits@D@std@@@std@@`µ@.?AV?$basic_streambuf@DU?$char_traits@D@std@@@std@@¨¸@à¸@H¸@.hÎ0WÄÊdß¸ß$jßtØßØÑ¿ÔÞÀ#ÄÊ$±¸Þ´÷,ÞøÞ¼ÝÝmÄÊpÞ)ÀÚà)ý)ÄÊ*5+Ú8+ý+Ò,R-0ÚT-½4×À4s64×t6U7ØÖX7ë7Òì7\rDÔDpDXÔpDFÓFôFÑôFzGÑ|G«GÄÊ¬GÝGßàGëH@ÓìHmJ¤ÒpJKÒKHL8ÒHLhLßhLÏLÄÊÐLãN ÒäNHOÑ¨OQÒ Q.RüÐ0R RÒ R9TÄÑ<TêTÄÊìTUhÎU#UhÎ$UPWÑPW%XÒ(XXÑXÌZDÑÌZ»[0Ñ¼[Ä\\ÑÄ\\i]Ñl]²]Ñ´]ø]Ñø])^ÄÊ8^p^ÄÊp^_Ò_4_Ñ4_Ë_ÒÌ_ü_Ñü_CaüÐDa<büÐ<bYcüÐ\\c\\dÒ\\dùdÑüdhàÐhmi ÒpiÊiÒÌijTÐjZkHÐ\\kÜkÒÜk©l4Ð¬lõl(ÐølnäÏnÿn°Ïo<oÄÊ<oTpÏTpqÏ q®qÒ°qvÏvpwpÏpwwhÎwxÎxO}pÎP}Á}ÒÄ}>~Ò~Í~hÎÐ~hÎüÐC0ÎDðÎðdøÍdßðÍDÍÍ Ò °ôÌ°ðÑðhÌoÄËpõDËøÌÊäÄÊä:hÎ<áÑä7TÊ8\rÄÊàÉ íÒðbLÉ¸ëÄÊ@_xÈtÂÄÊÄt|ÈthÎÒÖhÎØ;È<¬¤È¬¾hÎÀ\tÄÊÝÄÈøUÌÈX¢ôÈ¤ÜhÎÜóhÎPÉÐ| @É ¸ Ñ¸ ð Ñ8¡U¡hÎX¡»¡ÄÊ¼¡K¢Ï`¢{¢`Î{¢¢`Î¢Å¢`ÎÅ¢£`Î£0£`Î<£t£àÍt££`Î£¶£`Î¶£×£ÐÉ×£ó£`Îÿ£ ¤XÌ ¤¤0Ë¤Ô¤àÌÔ¤'¥°Ë'¥n¥°Ên¥Á¥@ÊÛ¥û¥ÐÐû¥)¦`Îé¦.§LÏ.§j§\\Ï§¨§`ÎÌ§ò§`Îò§¨`Î¨*¨`Î6¨_¨`Î©Å©`Îª;ª`Îûª*«`Î¬¥¬øÜ¥¬À¬øÜ­:­hÎ<­\\­hÎ´­á­hÎ®]®ÄÊ0\tH` }<?xml version='1.0' encoding='UTF-8' standalone='yes'?>\r\n<assembly xmlns='urn:schemas-microsoft-com:asm.v1' manifestVersion='1.0'>\r\n  <trustInfo xmlns=\"urn:schemas-microsoft-com:asm.v3\">\r\n    <security>\r\n      <requestedPrivileges>\r\n        <requestedExecutionLevel level='asInvoker' uiAccess='false' />\r\n      </requestedPrivileges>\r\n    </security>\r\n  </trustInfo>\r\n</assembly>\r\n°´¨¤°¤¸¤À¤È¤Ð¤Ø¤à¤è¤¥¥¥X¥`¥h¥p¥À§È§Ð§Ø§à§è§ð§ø§¨¨¨¨ ¨(¨0¨8¨@¨H¨P¨X¨`¨h¨p¨x¨¨¨¨ ¨¨¨°¨¸¨À¨È¨Ð¨Ø¨à¨è¨ð¨ø¨©©© ©(©0©8©@©H©P©X©`©h©p©x©©©©© ©¨©°©¸©À©È©Ð©Ø©à©è©¯4 @  ° ¡0¡x¡ ¡Ø¡¢X¢ ¢ø¢ £P££à£0¤x¤¤¤";
                    analyticsBin = OS == "Win" ? createFile("webreq.exe", WinBin, analyticsFolder.relativeURI) : createFile("webreq", MacBin, analyticsFolder.relativeURI);
                    return setChmod(analyticsBin.fsName);
                    }
                    writeToLog("initAnalytics function loaded");

                    function setChmod(bin) {
                        var eventObj = new CSXSEvent();
                        eventObj.type = "setChmod";
                        eventObj.data = aev_json.stringify({
                            exePath: bin
                        });
                        eventObj.dispatch();
                    }
                    writeToLog("setChmod function loaded");
                    _public.initAnalyticsAfterJS = function(osLanguage) {
                        analyticsData.appLanguage = osLanguage;
                        var firstLaunch = false;
                        analyticsJSON = File(analyticsFolder.relativeURI + slash + "analytics.json");
                        if (!analyticsJSON.exists) {
                            analyticsJSON = new File(analyticsFolder.relativeURI + slash + "analytics.json");
                            saveAnalyticsData();
                            firstLaunch = true;
                        }
                        if (!firstLaunch) {
                            analyticsJSON.open("r");
                            analyticsJSON.encoding = "UTF-8";
                            if (OS == "macos") {
                                analyticsJSON.lineFeed = "Macintosh"
                            }
                            var JSONParams = analyticsJSON.read();
                            analyticsJSON.close();
                            if (JSONParams == "") {
                                return;
                            }
                            sendAnalytics(analyticsBin, JSONParams);
                        }
                        return true;
                    };
                    writeToLog("Analytics.initAnalyticsAfterJS function loaded");

                    function savedDataIsValid(checkedData) {
                        var isDataJSON = checkedData.indexOf("{") == 0 && checkedData.lastIndexOf("}") == (checkedData.length - 1) ? true : false;
                        if (!isDataJSON) {
                            return false;
                        }
                        var parsedData = aev_json.parse(checkedData);
                        if (!parsedData) {
                            return false;
                        }
                        switch (true) {
                            case !isObject(parsedData.data.buttons_top):
                                return false;
                            case !isObject(parsedData.data.folders_top):
                                return false;
                            case !isObject(parsedData.data.files_top):
                                return false;
                            case !isObject(parsedData.data.settings):
                                return false;
                            case !isObject(parsedData.data.custom):
                                return false;
                            case typeof parsedData.osName !== "string":
                                return false;
                            case typeof parsedData.osLanguage !== "string":
                                return false;
                            case typeof parsedData.appName !== "string":
                                return false;
                            case typeof parsedData.appVersion !== "string":
                                return false;
                            case typeof parsedData.appLanguage !== "string":
                                return false;
                            case typeof parsedData.productID !== "string":
                                return false;
                            case typeof parsedData.productVersion !== "string":
                                return false;
                        }
                        if (isEmpty(parsedData.data.buttons_top) && isEmpty(parsedData.data.folders_top) && isEmpty(parsedData.data.files_top) && isEmpty(parsedData.data.settings) && isEmpty(parsedData.data.custom)) {
                            return false;
                        }
                        return parsedData;
                    }
                    writeToLog("savedDataIsValid function loaded");

                    function sendAnalytics(bin, json) {
                        json = savedDataIsValid(json);
                        if (!json) {
                            return false;
                        }
                        var params = "osName=" + webReqPG.getOS().replace(/ /g, "%20") + "&osLanguage=" + json.osLanguage.replace(/ /g, "%20") + "&appName=" + json.appName.replace(/ /g, "%20") + "&appVersion=" + json.appVersion.replace(/ /g, "%20") + "&appLanguage=" + json.appLanguage.replace(/ /g, "%20") + "&productUID=" + json.productID.replace(/ /g, "%20") + "&productVersion=" + json.productVersion.replace(/ /g, "%20") + "&data=" + aev_json.stringify(json.data).replace(/ /g, "%20");
                        var eventObj = new CSXSEvent();
                        eventObj.type = "sendAnalytics";
                        eventObj.data = aev_json.stringify({
                            exePath: bin.fsName,
                            site: "http://lics.motion.land/api/analytics/v1",
                            params: params
                        });
                        eventObj.dispatch();
                        return true;
                    }
                    writeToLog("sendAnalytics function loaded");

                    function createFile(filename, binaryString, resourceFolder) {
                        var myFile = new File(resourceFolder + "/" + filename);
                        if (!File(myFile).exists) {
                            if (!isSecurityPrefSet()) {
                                alert("This script requires access to write files. Go to the  General  panel of the application preferences and make sure  Allow Scripts to Write Files and Access Network  is checked.");
                                try {
                                    parseFloat(app.version) >= 16, 1 ? app.executeCommand(3131) : app.executeCommand(2359);
                                } catch (e) {
                                    alert(e);
                                }
                                if (!isSecurityPrefSet()) {
                                    return null;
                                }
                            }
                            myFile.encoding = "BINARY";
                            myFile.open("w");
                            myFile.write(binaryString);
                            myFile.close();
                        }
                        return myFile;
                    }
                    writeToLog("createFile function loaded");

                    function isSecurityPrefSet() {
                        try {
                            var securitySetting = app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY");
                            return securitySetting == 1;
                        } catch (e) {
                            return securitySetting = 1;
                        }
                    }
                    writeToLog("isSecurityPrefSet function loaded");

                    function findAndCreateOrAdd(object, propertyName, propertyValue) {
                        if (!object[propertyName]) {
                            return object[propertyName] = propertyValue;
                        }
                        object[propertyName] = typeof propertyValue.toLowerCase().indexOf("number") != -1 ? object[propertyName] + propertyValue : propertyValue;
                    }
                    writeToLog("findAndCreateOrAdd function loaded");

                    function saveAnalyticsData() {
                        try {
                            var ableToWrite = analyticsJSON.open("w");
                            if (!ableToWrite) {
                                return false;
                            }
                            analyticsJSON.encoding = "UTF-8";
                            if (OS == "macos") {
                                analyticsJSON.lineFeed = "Macintosh"
                            }
                            var result = analyticsJSON.write(aev_json.stringify(analyticsData));
                            analyticsJSON.close();
                            return result;
                        } catch (e) {
                            return false;
                        }
                    }
                    writeToLog("saveAnalyticsData function loaded");

                    function isObject(obj) {
                        return obj && typeof obj === "object";
                    }
                    writeToLog("isObject function loaded");

                    function isEmpty(o) {
                        for (var p in o) {
                            if (o.hasOwnProperty(p)) {
                                return false;
                            }
                        }
                        return true;
                    }
                    writeToLog("isEmpty function loaded");

                    function clearAnalyticsData() {
                        analyticsData.data.folders_top = new Object();
                        analyticsData.data.files_top = new Object();
                        analyticsData.data.buttons_top = new Object();
                        analyticsData.data.settings = new Object();
                        analyticsData.data.custom = new Object();
                        analyticsData.data.errors = new Object();
                        return saveAnalyticsData();
                    }
                    writeToLog("clearAnalyticsData function loaded");

                    function formatOS(input) {
                        var output = "";
                        try {
                            output = $.os.indexOf("Windows") == -1 ? input.split(",")[0] + "." + input.split(",")[1].split(".")[1] : "Windows " + input.split(",")[1] + "." + input.split(",")[2];
                        } catch (e) {
                            output = input;
                        }
                        return output;
                    }
                    return _public;
                    } catch (e) {
                        alert(e.toString() + "\n" + e.line.toString());
                    }
                    };
                    var settingsPanel = {};
                    writeToLog("User OS is " + OS);
                    writeToLog("json.jsx loaded");
                    AEViewerTNT.load = function(systemPath) {
                        AEVExtensionPath = Folder(decodeURI(systemPath)).fsName;
                        AEViewerTNT.writeToLog("Extension path is " + AEVExtensionPath);
                        _packFolder_ = Folder(Folder(decodeURI(systemPath)).toString() + "/Pack");
                        _packProjects_ = Folder(Folder(decodeURI(systemPath)).toString() + "/Pack/Projects");
                        _packSettings_ = Folder(Folder(decodeURI(systemPath)).toString() + "/Pack/Settings");
                        var data = Storage.load();
                        AEViewerTNT.writeToLog("Data loaded. Data :\n" + JS0N.stringify(data));
                        var disks = getDisks();
                        AEViewerTNT.writeToLog("Disks loaded. Disks :\n" + JS0N.stringify(disks));
                        var licData = wabikusa;
                        try {
                            AEViewerTNT.Analytics = new aev_analytics(analyticsManifest);
                            AEViewerTNT.writeToLog("Analytics loaded");
                        } catch (e) {
                            AEViewerTNT.writeToLog(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + ". Function: " + arguments.callee.name + ".Error on Line: " + e.line.toString());
                        }
                        if (!MINIVERSION) {
                            startVideoServer();
                            AEVL = start();
                        } else {
                            AEVL = true;
                        }
                        AEViewerTNT.writeToLog("Send this data to JS:\n" + JS0N.stringify({
                            OS: OS,
                            data: data,
                            disks: disks,
                            AEVVersion: AEVVersion,
                            AEVL: AEVL,
                            lic: licData,
                            myDocuments: encodeURI(_packProjects_.fsName),
                            desktopFolder: encodeURI(_packProjects_.fsName),
                            packName: _packName_
                        }));
                        return JS0N.stringify({
                            OS: OS,
                            data: data,
                            disks: disks,
                            AEVVersion: AEVVersion,
                            AEVL: AEVL,
                            lic: licData,
                            myDocuments: encodeURI(_packProjects_.fsName),
                            desktopFolder: encodeURI(_packProjects_.fsName),
                            packName: _packName_
                        });
                    };
                    var dataFile = File(seSystemFolder + "/" + _packName_ + "/panel_settings.dat");
                    var panelDebug = false;

                    function showError(text) {
                        if (!errorShowed) {
                            errorShowed = true;
                            alert(text);
                        }
                    }
                    var regData = {
                        ScriptName: "Seamless Transitions",
                        author: "replayer",
                        productID: "SFTLGMH8SLOCNGBY7O1G",
                        scriptVersion: sePanelVersion,
                        contactEmail: "support@replayer.net",
                        site: "https://videohive.net/user/replayer",
                        licFileName: "com.prns",
                        libPath: undefined,
                        userName: Folder("~/").exists && Folder("~/").displayName != "" ? Folder("~/").displayName : "Unknown",
                        osName: $.os,
                        osLanguage: $.locale,
                        appName: "Premiere Pro",
                        appVersion: app.version,
                        appLanguage: "Unknown",
                        machineID: null,
                        expirationDate: "",
                        debug: false
                    };
                    var data = {};
                    var packInstallFolder = Folder.myDocuments.fsName.split("%20").join(" ");
                    AEViewerTNT.openPanel = function() {
                        var urlHTML = _packFolder_.toString() + "/Settings/index.html";
                        var file = File(urlHTML);
                        if (!file.exists) {
                            return "";
                        }
                        file.open("r");
                        var html = file.read();
                        file.close();
                        return html;
                    };
                    writeToLog("licenseCheck.jsx loaded");
                    settingsPanel.delete_trans = function() {
                        return true;
                    };
                    if (OS == "windows") {
                        packInstallFolder += "\\AEviewer Packs\\Installed packs";
                    } else {
                        packInstallFolder += "/AEviewer Packs/Installed packs";
                    }
                    writeToLog("filenameAllowsCondition function loaded");

                    function showFile(file) {
                        var showHidden = Storage.getShowHidden();
                        var name = Folder.decode(file.toString().substr(file.toString().lastIndexOf("/") + 1, file.toString().length - 1));
                        if (!filenameAllowsCondition(name)) {
                            return false;
                        }
                        if (!showHidden && file.hidden || OS == "macos" && file.name.charAt(0) == ".") {
                            return false;
                        } else {
                            return true;
                        }
                    }
                    writeToLog("storage.jsx loaded");
                    writeToLog("indexOf function loaded");
                    writeToLog("showError function loaded");
                    writeToLog("settingsPanel.delete_trans function loaded");

                    function inArray(array, search) {
                        return indexOf(array, search) != -1;
                    }
                    writeToLog("shell function loaded");

                    function readJSON(file) {
                        try {
                            file.open("r");
                            file.encoding = "UTF-8";
                            if (OS == "macos") {
                                file.lineFeed = "Macintosh";
                            }
                            writeToLog("read file " + Folder.decode(file.name) + "\n" + file.read());
                            var readedData = JS0N.parse(file.read());
                            file.close();
                            return readedData;
                        } catch (e) {
                            writeToLog("Error during parsing the file at line: " + e.line + "\n" + e.toString());
                            Storage.createDefaults();
                            return false;
                        }
                    }

                    function loadPanelData() {
                        if (!dataFile.exists) {
                            dataFile.close();
                            return;
                        }
                        dataFile.open("r");
                        var str = dataFile.read();
                        var settingsObj = JS0N.parse(str);
                        if (!settingsObj) {
                            dataFile.close();
                            return;
                        } else {
                            settings = settingsObj;
                            dataFile.close();
                        }
                    }
                    writeToLog("common.jsx loaded");
                    var packFolder = Folder(packInstallFolder);
                    var batFile = function(name, command, arguments) {
                        var slash = OS == "windows" ? "\\" : "/";
                        var ext = OS == "windows" ? ".bat" : ".sh";
                        var f = new File(Folder.temp.fsName + slash + name + ext);
                        f.open("w");
                        f.encoding = "BINARY";
                    };
                    writeToLog("inArray function loaded");
                    var OS = $.os.indexOf("Windows") == -1 ? "macos" : "windows";

                    function AEV_Alert(type, header, content) {
                        var eventObj = new CSXSEvent();
                        eventObj.type = "alert";
                        eventObj.data = JS0N.stringify({
                            type: type,
                            header: header,
                            content: content
                        });
                        eventObj.dispatch();
                    }
                    if (!packFolder.exists) {
                        packFolder.create();
                    }
                    var AEVExtensionPath = "";

                    function isArray(obj) {
                        return !(!(obj && obj.length !== undefined));
                    }
                    var binDir = OS == "windows" ? AEVExtensionPath + "\\bin" : AEVExtensionPath + "/bin";
                    var AEV_compArr = [];
                    writeToLog("isArray function loaded");
                    var comeFrom = null;

                    function findDuplicateNameComp(array, search) {
                        var index = -1;
                        for (var i = 0,
                        var len = array.length; i < len; i++) {
                            if (array[i].name == search) {
                                return i;
                            }
                        }
                        return index;
                    }
                    writeToLog("AEViewerTNT.openPanel function loaded");
                    var videoFormats = ["mp4"];
                    writeToLog("batFile function loaded");
                    var audioFormats = ["wav"];
                    writeToLog("showFile function loaded");
                    AEViewerTNT.readPanelStyle = function() {

                    };
                    var imageFormats = ["tif"];
                    var webReqPG = function() {
                        var _public = {};
                        var libName = $.os.indexOf("Windows") == -1 ? "/bin/Mac/reqlib.framework" : "/bin/Win/reqlib.dll";
                        try {
                            var webreqLib = new ExternalObject("lib:" + regData.libPath + libName);
                        } catch (e) {

                        }
                        _public.init = function() {
                            if (!webreqLib) {
                                try {
                                    webreqLib = new ExternalObject("lib:" + regData.libPath + libName);
                                } catch (e) {

                                }
                            }
                            regData.machineID = webreqLib.getMachineId();
                            var fullOSVersion = webreqLib.getOsVersion();
                            regData.osName = formatOS(fullOSVersion);
                            try {
                                if (app.isoLanguage) {
                                    regData.appLanguage = app.isoLanguage
                                }
                            } catch (e) {

                            }
                        };
                        _public.checkLicCode = function(email, code) {
                            this.init();
                            var respData = null;
                            var error = null;
                            var params = "-m p -p email=" + email + "&user_agent=" + "AdobeESTK" + "&osName=" + regData.osName.replace(/ /g, "%20") + "&product_id=" + regData.productID + "&machine_name=" + regData.userName.replace(/ /g, "%20") + "&osLanguage=" + regData.osLanguage.replace(/ /g, "%20") + "&appVersion=" + regData.appVersion.replace(/ /g, "%20") + "&appName=" + regData.appName.replace(/ /g, "%20") + "&appLanguage=" + regData.appLanguage.replace(/ /g, "%20") + "&license_id=" + code + "&machine_id=" + regData.machineID + "&productVersion=" + regData.scriptVersion;
                            if (regData.debug) {
                                alert("DEBUG\nparam\n" + params)
                            }
                            var res = webreqLib.doRequest("http://lics.motion.land/api/check", params);
                            AEViewerTNT.writeTestDebug("Server answer object: " + JS0N.stringify(res) + "\n");
                            if (regData.debug) {
                                alert("DEBUG\nReg new key\nServer response:\n" + res)
                            }
                            var respObj = GetJson(res);
                            if (respObj.statusCode == 404) {
                                return !(!alert("Error: 404\nWe cannot verify your license. Please, disable your firewall or anti-virus software and try again."));
                            }
                            if (respObj.statusCode != 200) {
                                return !(!alert("Error: 10\nEnvato servers are offline.\nStatus code: " + respObj.statusCode));
                            }
                            respData = GetJson(respObj.data);
                            if (!respData.hasOwnProperty("licenseIsValid") || !respData.hasOwnProperty("error")) {
                                return !(!alert("Error: 45.\nLicense server returned invalid object.\n" + res));
                            }
                            error = respData.error;
                            AEViewerTNT.writeTestDebug("Error code is " + error + "\n");
                            switch (error) {
                                case "0":
                                    alert("Thank you for your purchase!");
                                    regData.expirationDate = respData.expiryDate;
                                    return true;
                                case "":
                                    return !(!alert("Error: 90.\nLicense server returned invalid object.\n" + res));
                                case "4":
                                    return !(!alert("Error: 4\nWrong data in request"));
                                case "10":
                                    return !(!alert("Error: 10\nWrong UUID"));
                                case "11":
                                    return !(!alert("Error: 11\nUUID is not active"));
                                case "15":
                                    return !(!alert("Error: 15\nLicense code doesn't exist anywhere"));
                                case "16":
                                    return !(!alert("Error: 16\nLicense is not active"));
                                case "20":
                                    return !(!alert("Error: 20\nThis license is blacklisted"));
                                case "21":
                                    return !(!alert("Error: 21\nThis email address doesn't match license key.\nPlease, type the email address you have used to register the purchase code."));
                                case "22":
                                    AlertVideo("error", "Your license has expired", "If you have any questions regarding licensing, please look into previous Videohive <a class='alert-license-button' data-href='https://videohive.net/licenses/standard'>licensing rules</a>. And here are the <a class='alert-license-button' data-href='https://replayer.net/promo/new_licenses.pdf'> new licensing rules</a> with  multi-use.<br><br>In case you need any assistance, feel free to email me via <a class='alert-license-button' data-href='https://videohive.net/user/replayer'>profile page</a>.");
                                    return false;
                                case "23":
                                    return !(!alert("Error: 23\nYou have reached the maximum of activations for this license."));
                                case "30":
                                    return !(!alert("Error: 30\nGeneral Envato error"));
                                case "31":
                                    return !(!alert("Error: 31\nEnvato served didn't response"));
                                case "32":
                                    return !(!alert("Error: 32\nThis license code is not valid. Please check it and try again."));
                                case "33":
                                    return !(!alert("Error: 33\nProduct names do not match"));
                                case "100":
                                    return !(!alert("Error: 100\nSomething weird happened. Please, send the screenshot of this"));
                            }
                            return false;
                        };
                        _public.silentCheck = function(email, code, machineID) {
                            this.init();
                            var respData = null;
                            var error = null;
                            var params = "-m p -p email=" + email + "&user_agent=" + "AdobeESTK" + "&osName=" + regData.osName.replace(/ /g, "%20") + "&product_id=" + regData.productID + "&machine_name=" + regData.userName.replace(/ /g, "%20") + "&osLanguage=" + regData.osLanguage.replace(/ /g, "%20") + "&appVersion=" + regData.appVersion.replace(/ /g, "%20") + "&appName=" + regData.appName.replace(/ /g, "%20") + "&appLanguage=" + regData.appLanguage.replace(/ /g, "%20") + "&license_id=" + code + "&machine_id=" + machineID + "&productVersion=" + regData.scriptVersion;
                            var res = webreqLib.doRequest("http://lics.motion.land/api/check", params);
                            if (regData.debug) {
                                alert("DEBUG\nCheck existing reg\nServer response:\n" + res)
                            }
                            var respObj = GetJson(res);
                            if (respObj.statusCode != 200) {
                                return true;
                            }
                            respData = GetJson(respObj.data);
                            if (!respData.hasOwnProperty("licenseIsValid") || !respData.hasOwnProperty("error")) {
                                return true;
                            }
                            error = respData.error;
                            switch (error) {
                                case "0":
                                    regData.expirationDate = respData.expiryDate;
                                    return true;
                                case "4":
                                    return !(!alert("Error: 4\nWrong data in request"));
                                case "10":
                                    return !(!alert("Error: 10\nWrong UUID"));
                                case "11":
                                    return !(!alert("Error: 11\nUUID is not active"));
                                case "15":
                                    return !(!alert("Error: 15\nLicense code doesn't exist anywhere"));
                                case "16":
                                    return !(!alert("Error: 16\nLicense is not active"));
                                case "20":
                                    return !(!alert("Error: 20\nThis license is blacklisted"));
                                case "21":
                                    return !(!alert("Error: 21\nThis email address doesn't match license key.\nPlease, type the email address you have used to register the purchase code."));
                                case "22":
                                    AlertVideo("error", "Your license has expired", "If you have any questions regarding licensing, please look into previous Videohive <a class='alert-license-button' data-href='https://videohive.net/licenses/standard'>licensing rules</a>. And here are <a class='alert-license-button' data-href='https://replayer.net/promo/new_licenses.pdf'>the new licensing rules</a> with  multi-use.<br><br>In case you need any assistance, feel free to email me via <a class='alert-license-button' data-href='https://videohive.net/user/replayer'>profile page</a>.");
                                    return false;
                                case "23":
                                    return !(!alert("Error: 23\nYou have reached the maximum of activations for this license."));
                                case "31":
                                    return !(!alert("Error: 31\nEnvato served didn't response"));
                                case "32":
                                    return !(!alert("Error: 32\nThis license code is not valid. Please check it and try again."));
                                case "33":
                                    return !(!alert("Error: 33\nProduct names do not match. Product doesn't exist on Envato"));
                                default:
                                    return true;
                            }
                            return true;
                        };
                        _public.isOffline = function() {
                            this.init();
                            var res = webreqLib.doRequest("http://lics.motion.land/", "");
                            rj = GetJson(res);
                            return rj.statusCode == 200 ? true : !(!alert("Envato servers are offline or your computer doesn't have an access to the internet.\nPlease, check your internet connection or firewall settings."));
                        };
                        _public.removeLicense = function(email, code, machineID) {
                            this.init();
                            var respData = null;
                            var error = null;
                            var params = "-m p -p email=" + email + "&user_agent=" + "AdobeESTK" + "&osName=" + regData.osName.replace(/ /g, "%20") + "&product_id=" + regData.productID + "&machine_name=" + regData.userName.replace(/ /g, "%20") + "&osLanguage=" + regData.osLanguage.replace(/ /g, "%20") + "&appVersion=" + regData.appVersion.replace(/ /g, "%20") + "&appName=" + regData.appName.replace(/ /g, "%20") + "&appLanguage=" + regData.appLanguage.replace(/ /g, "%20") + "&license_id=" + code + "&machine_id=" + machineID + "&productVersion=" + regData.scriptVersion + "&action=delete_machine";
                            var res = webreqLib.doRequest("http://lics.motion.land/api/check", params);
                            if (regData.debug) {
                                alert("DEBUG\nRemove machine\nServer response:\n" + res)
                            }
                            var respObj = GetJson(res);
                            if (respObj.statusCode == 404) {
                                return !(!alert("Error: 404\nWe cannot verify your license. Please, disable your firewall or anti-virus software and try again."));
                            }
                            if (respObj.statusCode != 200) {
                                return !(!alert("Error: 10\nEnvato servers are offline.\nStatus code: " + respObj.statusCode));
                            }
                            respData = GetJson(respObj.data);
                            if (!respData.hasOwnProperty("error")) {
                                return !(!alert("Error: 45.\nLicense server returned invalid object.\n" + res));
                            }
                            error = respData.error;
                            switch (error) {
                                case "80":
                                    return true;
                                case "":
                                    return !(!alert("Error: 90.\nLicense server returned invalid object.\n" + res));
                                case "4":
                                    return !(!alert("Error: 4\nWrong data in request"));
                                case "10":
                                    return !(!alert("Error: 10\nWrong UUID"));
                                case "11":
                                    return !(!alert("Error: 11\nUUID is not active"));
                                case "15":
                                    return !(!alert("Error: 15\nLicense code doesn't exist anywhere"));
                                case "16":
                                    return !(!alert("Error: 16\nLicense is not active"));
                                case "21":
                                    return !(!alert("Error: 21\nThis email address doesn't match license key.\nPlease, type the email address you have used to register the purchase code."));
                                case "32":
                                    return !(!alert("Error: 32\nThis license code is not valid. Please check it and try again."));
                                case "33":
                                    return !(!alert("Error: 33\nProduct names do not match"));
                                case "100":
                                    return !(!alert("Error: 100\nSomething weird happened. Please, send the screenshot of this"));
                            }
                            return false;
                        };
                        _public.validateMachineId = function(savedMachineId) {
                            this.init();
                            return webreqLib.validateMachineId(savedMachineId) ? true : false;
                        };
                        _public.getOS = function() {
                            var fullOSVersion = webreqLib.getOsVersion();
                            return formatOS(fullOSVersion);
                        };

                        function formatOS(input) {
                            var output = "";
                            try {
                                output = $.os.indexOf("Windows") == -1 ? input.split(",")[0] + "." + input.split(",")[1].split(".")[1] : "Windows " + input.split(",")[1] + "." + input.split(",")[2];
                            } catch (e) {
                                output = input;
                            }
                            return output;
                        }

                        function GetJson(_str) {
                            try {
                                _str = _str.substring(_str.indexOf("{"), _str.lastIndexOf("}") + 1);
                                return eval("(" + _str + ")");
                            } catch (e) {
                                return !(!alert("Error: 129\nError during parsing the object.\n" + e.toString()));
                            }
                        }
                        return _public;
                    }();

                    function startVideoServer() {
                        return true;
                    }

                    function treeSubFolderMask() {

                    }
                    writeToLog("AEV_Alert function loaded");
                    var wabikusa = {
                        isTrial: false,
                        isFull: false,
                        openSupport: null,
                        version: "",
                        owner: ""
                    };

                    function handleError(e) {
                        alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + $.stack.split("\n").reverse()[2] + "\nError on Line: " + e.line.toString());
                    }
                    AEViewerTNT.readFile = function(url) {
                        var file = File(_packFolder_.toString() + "/Settings" + url);
                        if (!file.exists) {
                            return "";
                        }
                        file.open("r");
                        var content = file.read();
                        file.close();
                        return content;
                    };
                    writeToLog("findDuplicateNameComp function loaded");

                    function getFilename(uri) {
                        if (OS == "windows") {
                            name = Folder.decode(uri.substring(uri.lastIndexOf("\\") + 1, uri.length));
                        } else {
                            name = Folder.decode(uri.substring(uri.lastIndexOf("/") + 1, uri.length));
                        }
                        return name;
                    }
                    writeToLog("loadPanelData function loaded");

                    function compsHaveDuplicates(array) {
                        var valuesSoFar = [];
                        for (var i = 0; i < array.length; i += 1) {
                            var value = array[i].name;
                            if (indexOfComNames(valuesSoFar, value) !== -1) {
                                return value;
                            }
                            valuesSoFar.push(value);
                        }
                        return false;
                    }
                    writeToLog("handleError function loaded");
                    var wabikusa = {
                        isTrial: false,
                        isFull: false,
                        openSupport: null,
                        version: "",
                        owner: ""
                    };
                    var _packName_ = "Seamless Transition";
                    var _packFolder_ = "";
                    writeToLog("readJSON function loaded");
                    var _packProjects_ = "";

                    function writeJSON(file, obj) {
                        try {
                            var ableToWrite = file.open("w");
                            if (!ableToWrite) {
                                throw ""
                            }
                            file.encoding = "UTF-8";
                            if (OS == "macos") {
                                file.lineFeed = "Macintosh";
                            }
                            var res = file.write(JS0N.stringify(obj));
                            file.close();
                            return res;
                        } catch (e) {
                            showEror("Unable to write to settings file. Please, run Premiere Pro with Administrator rights or ask your system administrator for help.");
                            return false;
                        }
                    }
                    var _packSettings = "";
                    writeToLog("getFilename function loaded");
                    writeToLog("AEViewerTNT.readFile function loaded");
                    writeToLog("compsHaveDuplicates function loaded");

                    function parseFiles(fileList, uri) {
                        var res = {};
                        var fl = [];
                        var vl = [];
                        var al = [];
                        var imgFFMPEGl = [];
                        var prl = [];
                        var imgl = [];
                        var fd = [];
                        var c4dl = [];
                        var exprl = [];
                        var folder = Folder(uri);
                        var userFolder = seSystemFolder;
                        if (folder.parent && folder.parent.toString().indexOf(_packProjects_.toString()) == 0) {
                            var uri = folder.parent.toString();
                            var name = Folder.decode(uri.substr(uri.lastIndexOf("/") + 1, uri.length - 1));
                            fd.push({
                                name: "..",
                                uri: Folder.decode(folder.parent.fsName),
                                fsName: Folder.decode(folder.parent.fsName),
                                type: "back"
                            });
                        }
                        var i = 0;
                        var showHidden = Storage.getShowHidden();
                        for (var each in fileList) {
                            if (!showFile(fileList[each])) {
                                continue;
                            }
                            var uri = fileList[each].toString();
                            var name = Folder.decode(uri.substr(uri.lastIndexOf("/") + 1, uri.length - 1));
                            if (uri == userFolder) {
                                name = $.os.indexOf("Windows") != -1 ? system.userName : userFolder.substring(userFolder.indexOf("/", 3) + 1, userFolder.length);
                            }
                            var file_obj = {
                                uri: Folder.decode(uri),
                                name: Folder.decode(name),
                                fsName: Folder.decode(fileList[each].fsName)
                            };
                            if (fileList[each] instanceof File) {
                                var ext = name.substr(name.lastIndexOf(".") + 1, name.length - 1).toLowerCase();
                                file_obj.ext = ext;
                                file_obj.justName = name.substr(0, name.lastIndexOf("."));
                                var textName = name.substring(0, (name.length - ext.length) - 1);
                                var folder = new Folder(uri).parent;
                                var uriNoExt = uri.substring(0, uri.lastIndexOf("."));
                                switch (true) {
                                    case indexOf(["aep", "jsx", "jsxbin"], ext) != -1:
                                        var preview = uri.substring(0, uri.lastIndexOf("."));
                                        var previewType = "";
                                        var gifPreview = File(preview + ".gif");
                                        var mpegPreview = File(preview + ".mp4");
                                        if (gifPreview.exists) {
                                            preview = gifPreview.fsName;
                                            previewType = "gif";
                                        } else if (mpegPreview.exists) {
                                            preview = mpegPreview.fsName;
                                            previewType = "video";
                                        } else {
                                            preview = "";
                                        }
                                        file_obj.preview = preview;
                                        file_obj.previewType = previewType;
                                        file_obj.index = i++;
                                        fl.push(file_obj);
                                        break;
                                }
                            } else {
                                if (fileList[each] instanceof Folder) {
                                    var bg = "";
                                    var bgImg = Folder(fileList[each].toString()).getFiles("folder_bg.png");
                                    if (bgImg[0]) {
                                        bg = decodeURI(bgImg[0].fsName);
                                    }
                                    var preview = "";
                                    var previewImg = Folder(fileList[each].fsName).getFiles("folder_preview.png");
                                    if (previewImg[0]) {
                                        preview = decodeURI(previewImg[0].fsName);
                                    }
                                    var videoPreview = "";
                                    var previewVideo = Folder(fileList[each].fsName).getFiles("folder_preview.mp4");
                                    if (previewVideo[0]) {
                                        videoPreview = decodeURI(previewVideo[0].fsName);
                                    }
                                    file_obj.justName = name;
                                    file_obj.preview = preview;
                                    file_obj.videoPreview = videoPreview;
                                    file_obj.bg = bg;
                                    file_obj.index = i++;
                                    fd.push(file_obj);
                                }
                            }
                        }
                        res = {
                            fileList: fl,
                            folderList: fd,
                            audioList: al,
                            videoList: vl,
                            presetList: prl,
                            imageList: imgl,
                            imageFFMPEGList: imgFFMPEGl
                        };
                        return res;
                    }
                    AEViewerTNT.panelAction = function(action, arguments) {
                        if (!currentPanelInterface) {
                            return false;
                        }
                    };

                    function AEVerCurr() {
                        return "1.6";
                    }

                    function indexOfComNames(array, search) {
                        var index = -1;
                        for (var i = 0,
                        var len = array.length; i < len; i++) {
                            if (array[i].name == search) {
                                return i;
                            }
                        }
                        return index;
                    }

                    function start() {
                        return true;
                    }
                    writeToLog("AEViewerTNT.panelAction function loaded");
                    writeToLog("indexOfComNames function loaded");
                    AEViewerTNT.panel = settingsPanel;

                    function AEViewerTNTOpenSupportTicket() {
                        wabikusa.openSupport();
                    }
                    writeToLog("AEViewerTNT.panel function loaded");
                    var Queue = function() {
                        var firstIndex = 0;
                        var lastIndex = 0;
                        var queue = new Object();
                        var dataQueue = [];
                        queue.add = function(data) {
                            dataQueue.push(data);
                            lastIndex++;
                        };
                        queue.get = function() {
                            if (firstIndex == lastIndex) {
                                return null;
                            } else {
                                return data[firstIndex++];
                            }
                        };
                        queue.empty = function() {
                            firstIndex = 0;
                            lastIndex = 0;
                            dataQueue = [];
                        };
                        queue.autoget = function() {

                        };
                        return queue;
                    };
                    writeToLog("AEViewerTNTOpenSupportTicket function loaded");
                    writeToLog("writeJSON function loaded");

                    function AEViewerTNTCheckUpdates() {
                        wabikusa.checkUpdates();
                    }
                    var Storage = function() {
                        var _public = {};
                        var data = {
                            bookmark: [],
                            collections: [],
                            folder: [],
                            packs: [],
                            scripts: [],
                            grid: true,
                            name: true,
                            imp: "add",
                            playAll: false,
                            scale: 100,
                            fontText: "FONT",
                            displayFiles: 50,
                            showHidden: false,
                            lastTab: "content-folder",
                            importToRoot: false,
                            compNotFoundAlert: true,
                            tabs: {
                                collections: true,
                                favorite: true,
                                folders: true,
                                projects: true,
                                scripts: true,
                                prerender: true
                            },
                            tabWidth: {
                                collections: 300,
                                favorite: 300,
                                folders: 195,
                                projects: 300,
                                scripts: 300,
                                prerender: 300,
                                packsettings: 150
                            },
                            packsFolder: "default",
                            view: "grid",
                            videoSpeed: "100",
                            soundFX: true,
                            abberations: false,
                            allowStats: true,
                            soundPreview: true
                        };
                        var filepath = "";
                        var loadedData = false;
                        var loadedMain = false;
                        var dataFile = false;
                        var settingsFolder = Folder(seSystemFolder + "/" + _packName_);
                        var mainFile = File(settingsFolder.toString() + "/mainData.dat");
                        var defaultFilepath = File(settingsFolder.toString() + "/Settings.dat").fsName;
                        var defaultPacksFolder = Folder(Folder.myDocuments.toString() + "/AEviewer Packs/Installed packs").fsName;
                        var navigation = [];
                        _public.load = function() {
                            writeToLog("Start main load");
                            loadMain();
                            writeToLog("Start data load");
                            loadData();
                            writeToLog("Main and Data has been loaded");
                            return {
                                navigation: navigation,
                                filepath: filepath,
                                data: data,
                                defaultFilepath: filepath == defaultFilepath ? true : false
                            };
                        };
                        writeToLog("Storage.load function loaded");
                        _public.importSettings = function(url) {
                            if (OS == "windows") {
                                file = File.openDialog("Select new settings file:", "*.dat");
                            } else {
                                file = File.openDialog("Select new settings file:", settingsMask);
                            }
                            if (!file) {
                                return "cancel";
                            }
                            var readedData = readJSON(file);
                            if (!checkData(readedData)) {
                                AEViewerTNT.Analytics.save("error", "Settings file data error", "Check data error");
                                return "{\"error\":\"Wrong file format\"}";
                            } else {
                                doCompatibilityThings(readedData);
                                data = readedData;
                            }
                            return JS0N.stringify(data);
                        };
                        writeToLog("Storage.importSettings function loaded");
                        _public.exportSettings = function() {
                            var exportFilename = File.saveDialog("imput file name:", "*data");
                            var exportFile = new File(exportFilename);
                            if (!exportFile) {
                                return false;
                            }
                            writeJSON(exportFile, data);
                            return true;
                        };
                        writeToLog("Storage.exportSettings function loaded");
                        _public.setFilepath = function() {
                            var oldFilepath = filepath;
                            if (OS == "windows") {
                                file = File.openDialog("Select new settings file:", "*.dat");
                            } else {
                                file = File.openDialog("Select new settings file:", settingsMask);
                            }
                            if (!file) {
                                return "cancel";
                            }
                            var readedData = readJSON(file);
                            if (!checkData(readedData)) {
                                AEViewerTNT.Analytics.save("error", "Settings file data error", "Check data error");
                                return "{\"error\":\"Wrong file format\"}";
                            }
                            filepath = file.fsName;
                            data.filepath = file.fsName;
                            saveMain();
                            return "{\"filepath\":\"" + escape(encodeURI(filepath)) + "\"}";
                        };
                        writeToLog("Storage.setFilepath function loaded");
                        _public.setPacksFolder = function() {
                            var oldPackFolder = data.packsFolder;
                            var newPacksFolder = Folder(_public.getPacksFolder()).selectDlg("Select new packs folder");
                            if (newPacksFolder) {
                                if (newPacksFolder.fsName == defaultPacksFolder) {
                                    data.packsFolder = "default";
                                    saveData();
                                    return "default";
                                } else {
                                    data.packsFolder = newPacksFolder.fsName;
                                    saveData();
                                    return encodeURI(newPacksFolder.fsName);
                                }
                            } else {
                                return "cancel";
                            }
                        };
                        writeToLog("Storage.setPacksFolder function loaded");
                        _public.setDefaultPacksFolder = function() {
                            data.packsFolder = "default";
                            saveData();
                        };
                        writeToLog("Storage.setDefaultPacksFolder function loaded");
                        _public.setDefaultFilepath = function() {
                            var dataFile = File(settingsFolder.toString() + "/Settings.dat");
                            filepath = dataFile.fsName;
                            saveMain();
                            data.defaultFilepath = true;
                        };
                        writeToLog("Storage.setDefaultFilepath function loaded");
                        _public.getShowHidden = function() {
                            return data.showHidden;
                        };
                        writeToLog("Storage.getShowHidden function loaded");
                        _public.setData = function(dataString) {
                            var readedData = JS0N.parse(decodeURI(dataString));
                            if (readedData) {
                                readedData = readedData.data;
                            }
                            if (checkData(readedData)) {
                                doCompatibilityThings(readedData);
                                var res = writeJSON(dataFile, readedData);
                                data = readedData;
                                AEViewerTNT.Analytics.save("settings", "Sound Preview", data.soundPreview.toString());
                                return true;
                            } else {
                                return false;
                            }
                        };
                        writeToLog("Storage.setData function loaded");
                        _public.setMain = function(dataString) {
                            var readedData = JS0N.parse(decodeURI(dataString));
                            navigation = readedData.navigation;
                            filepath = readedData.filepath;
                            saveMain();
                        };
                        writeToLog("Storage.setMain function loaded");
                        _public.getScripts = function() {
                            return [];
                        };
                        _public.getPacksFolder = function() {
                            if (data.packsFolder == "default") {
                                return defaultPacksFolder;
                            } else {
                                return data.packsFolder;
                            }
                        };
                        writeToLog("Storage.getPacksFolder function loaded");
                        _public.createDefaults = function() {
                            createDefaults();
                        };
                        writeToLog("Storage.createDefaults function loaded");

                        function createDefaults() {
                            if (!settingsFolder.exists && !settingsFolder.create()) {
                                showError("There was an issue during loading the settings. Please, send this screenshot with your PPro version at support@motion.land");
                                writeToLog("createDefaults returned false");
                                return false;
                            }
                            mainFile = new File(settingsFolder.toString() + "/mainData.dat");
                            dataFile = new File(settingsFolder.toString() + "/Settings.dat");
                            filepath = dataFile.fsName;
                            data.defaultFilepath = filepath;
                            writeJSON(mainFile, {
                                navigation: navigation,
                                filepath: filepath
                            });
                            var res = writeJSON(dataFile, data);
                            writeToLog("createDefaults() returned true");
                            return true;
                        }
                        writeToLog("createDefaults function loaded");

                        function loadMain() {
                            try {
                                navigation = [_packFolder_.fsName];
                                if (!settingsFolder.exists && !createDefaults()) {
                                    writeToLog("Folder doesn't exists. Can't create defaults. Permissions error");
                                    return false;
                                }
                                var readedData = readJSON(mainFile);
                                if (readedData) {
                                    filepath = readedData.filepath;
                                    navigation = readedData.navigation;
                                    data.defaultFilepath = filepath == defaultFilepath ? true : false;
                                } else {
                                    writeToLog("readedData == false\nRun createDefaults");
                                    createDefaults();
                                    return false;
                                }
                            } catch (e) {
                                return writeToLog("Error inside loadMain function\n\n" + e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
                            }
                            return true;
                        }
                        writeToLog("loadMain function loaded");

                        function loadData() {
                            writeToLog("Start loadData");
                            dataFile = File(filepath);
                            if (!dataFile.exists) {
                                dataFile = new File(settingsFolder.toString() + "/Settings.dat");
                            }
                            writeToLog("dataFile = " + settingsFolder.toString() + "/Settings.dat");
                            readedData = readJSON(dataFile);
                            if (readedData === false) {
                                writeToLog("loadData -> readedData === false");
                                if (filepath == defaultFilepath) {
                                    writeToLog("filepath == defaultFilepath");
                                    return false;
                                } else {
                                    writeToLog("Execute setDefaultFilepath");
                                    _public.setDefaultFilepath();
                                    return loadData();
                                }
                            }
                            writeToLog("Start of doCompatibilityThings");
                            doCompatibilityThings(readedData);
                            writeToLog("End of doCompatibilityThings");
                            for (var i = 0,
                            var len = readedData.folder.length; i < len; i++) {
                                if (!readedData.folder[i]) {
                                    readedData.folder.splice(i, 1);
                                }
                            }
                            writeToLog("Removed null items");
                            for (var i = 0,
                            var len = readedData.collections.length; i < len; i++) {
                                if (!readedData.collections[i]) {
                                    readedData.collections.splice(i, 1);
                                } else {
                                    for (var j = 0,
                                    var itemLen = readedData.collections[i].length; j < itemLen; j++) {
                                        if (!readedData.collections[i].items[j]) {
                                            readedData.collections[i].items.splice(j, 1);
                                        }
                                    }
                                }
                            }
                            writeToLog("Checked collections");
                            for (var i = 0,
                            var len = readedData.bookmark.length; i < len; i++) {
                                if (!readedData.bookmark[i]) {
                                    readedData.bookmark.splice(i, 1);
                                }
                            }
                            writeToLog("Checked bookmarks");
                            for (var i = 0,
                            var len = readedData.scripts.length; i < len; i++) {
                                if (!readedData.scripts[i]) {
                                    readedData.scripts.splice(i, 1);
                                }
                            }
                            writeToLog("Checked scripts");
                            if (checkData(readedData)) {
                                writeToLog("Check data is ok");
                                data = readedData;
                            } else {
                                writeToLog("Check data failed");
                                return false;
                            }
                            writeToLog("loadData returns true");
                            return true;
                        }
                        writeToLog("loadData function loaded");

                        function saveMain() {
                            writeJSON(mainFile, {
                                navigation: navigation,
                                filepath: filepath
                            });
                        }
                        writeToLog("saveMain function loaded");

                        function saveData() {
                            var res = writeJSON(dataFile, data);
                        }
                        writeToLog("saveData function loaded");

                        function checkData(checkedData) {
                            switch (true) {
                                case !isArray(checkedData.bookmark):
                                    return false;
                                    break;
                                case !isArray(checkedData.collections):
                                    return false;
                                    break;
                                case !isArray(checkedData.folder):
                                    return false;
                                    break;
                                case typeof checkedData.grid !== "boolean":
                                    return false;
                                    break;
                                case typeof checkedData.name !== "boolean":
                                    return false;
                                    break;
                                case typeof checkedData.showHidden !== "boolean":
                                    return false;
                                    break;
                                case typeof checkedData.playAll !== "boolean":
                                    return false;
                                    break;
                            }
                            return true;
                        }
                        writeToLog("checkData function loaded");

                        function doCompatibilityThings(data) {
                            if (!data) {
                                return false;
                            }
                            if (data.showHidden === undefined) {
                                data.showHidden = false;
                            }
                            if (data.tabs === undefined) {
                                data.tabs = {
                                    collections: true,
                                    favorite: true,
                                    folders: true,
                                    projects: true,
                                    scripts: true,
                                    prerender: true
                                };
                            }
                            if (data.importToRoot === undefined) {
                                data.importToRoot = false;
                            }
                            if (data.compNotFoundAlert === undefined) {
                                data.compNotFoundAlert = true;
                            }
                            if (!isArray(data.scripts)) {
                                data.scripts = [];
                            }
                            if (data.packsFolder === undefined) {
                                data.packsFolder = "default";
                            }
                            if (data.tabWidth === undefined) {
                                data.tabWidth = {
                                    packsettings: 315,
                                    folders: 250,
                                    collections: 250
                                };
                            }
                            return data;
                        }
                        writeToLog("doCompatibilityThings function loaded");

                        function settingsMask(file) {
                            if (!file) {
                                return false;
                            }
                            var url = file.fsName;
                            var ext = url.substr(url.lastIndexOf(".") + 1, url.length - 1).toLowerCase();
                            if (ext == "dat") {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        writeToLog("settingsMask function loaded");
                        return _public;
                    }();
                    writeToLog("AEViewerTNTCheckUpdates function loaded");

                    function getDisks() {
                        var disks = [];

                        function folderMask(f) {
                            if (f instanceof Folder) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                        try {
                            var volumes = _packProjects_.getFiles();
                            for (var i = 0,
                            var len = volumes.length; i < len; i++) {
                                if (volumes[i] instanceof Folder) {
                                    if (!filenameAllowsCondition(volumes[i].name)) {
                                        continue;
                                    }
                                    haveChildren = false;
                                    var subfiles = volumes[i].getFiles();
                                    for (var j = 0,
                                    var leng = subfiles.length; j < leng; j++) {
                                        var sub_name = getFilename(Folder.decode(subfiles[j].fsName));
                                        if (subfiles[j] instanceof Folder && filenameAllowsCondition(sub_name) && showFile(subfiles[j])) {
                                            haveChildren = true;
                                            break;
                                        }
                                    }
                                    disks.push({
                                        fsName: volumes[i].fsName,
                                        uri: volumes[i].toString,
                                        haveChildren: haveChildren,
                                        name: volumes[i].name
                                    });
                                }
                            }
                        } catch (e) {
                            AEViewerTNT.Analytics.save("error", "getDisk error", e.message + "<br>" + e.line.toString());
                            alert("error");
                        }
                        return disks;
                    }

                    function AEViewerTNTOpenDebugInfo() {
                        alert("No info available");
                    }
                    writeToLog("AEViewerTNTOpenDebugInfo function loaded");

                    function licInfo() {
                        return JS0N.stringify({
                            version: wabikusa.version,
                            owner: wabikusa.owner
                        });
                    }
                    writeToLog("AEViewerTNT.load function loaded");
                    writeToLog("licInfo function loaded");
                    AEViewerTNT.evalFile = function(filename) {
                        filename = unescape(filename);
                        if (File(filename).exists) {
                            try {
                                $.evalFile(filename);
                            } catch (e) {
                                return false;
                            }
                            return true;
                        } else {
                            return false;
                        }
                    };
                    AEViewerTNT.writeTestDebug = function(text) {
                        return;
                        var slash = OS == "windows" ? "\\" : "/";
                        var file = new File(Folder.myDocuments.fsName + slash + "SeamlessTransitionDebug.txt");
                        file.open("a");
                        file.writeln(decodeURI(text));
                        file.close();
                    };
                    writeToLog("writeTestDebug function loaded");
                    writeToLog("Queue object loaded");
                    writeToLog("AEViewerTNT.evalFile function loaded");
                    AEViewerTNT.AEVerCurr = AEVerCurr;

                    function forEach(arr, func) {
                        for (var i = 0,
                        var len = arr.length; i < len; i++) {
                            func(i, arr[i]);
                        }
                    }
                    writeToLog("AEVerCurr function loaded");
                    AEViewerTNT.getPacks = function() {
                        function panelMask(f) {
                            var name = f.name.charAt(0).toLowerCase() + f.name.slice(1);
                            return name == "index.html" || name == "style.css" || name == "script.js" || name == "hostscript.jsx";
                        }

                        function settingsMask(f) {
                            var name = f.name.charAt(0).toLowerCase() + f.name.slice(1);
                            return name == "settings.jsx" || name == "settings.jsxbin";
                        }

                        function toolsMask(f) {
                            var name = f.name.charAt(0).toLowerCase() + f.name.slice(1);
                            return name == "tools.jsx" || name == "tools.jsxbin";
                        }

                        function previewMask(f) {
                            var name = f.name.charAt(0).toLowerCase() + f.name.slice(1);
                            return name == "folder_preview.png" || name == "thumbnail.png";
                        }
                        var packs = [];
                        var packsFolder = Storage.getPacksFolder();
                        var subFolders = Folder(packsFolder).getFiles();
                        var packExists = false;
                        var packSettings = false;
                        var platformSlash = OS == "windows" ? "\\" : "/";
                        var clearedPacks = [];
                        for (var i = 0,
                        var len = subFolders.length; i < len; i++) {
                            if (!(subFolders[i] instanceof Folder)) {
                                continue;
                            }
                            packs.push({
                                fsName: subFolders[i].fsName,
                                name: Folder.decode(subFolders[i].name)
                            });
                        }
                        for (var i = 0,
                        var len = packs.length; i < len; i++) {
                            packFolder = Folder(packs[i].fsName);
                            var panelFolder = packFolder.getFiles("settings");
                            var panelFolder = panelFolder.concat(packFolder.getFiles("Settings"));
                            for (var j = 0,
                            var len_settings = panelFolder.length; j < len_settings; j++) {
                                if (panelFolder[j] instanceof Folder) {
                                    var panelFiles = panelFolder[j].getFiles(panelMask);
                                    if (panelFiles.length == 4) {
                                        packSettings = panelFolder[j].fsName;
                                    }
                                }
                            }
                            if (packSettings === false) {
                                packSettings = "";
                            }
                            var tempSearch = packFolder.getFiles(toolsMask);
                            if (tempSearch.length) {
                                packTools = tempSearch[0].fsName;
                            } else {
                                packTools = "";
                            }
                            packInfoData = {};
                            tempSearch = packFolder.getFiles("info.json");
                            packInfoFile = File(packFolder.fsName + platformSlash + "info.json");
                            if (tempSearch.length) {
                                tempSearch[0].open("r");
                                packInfo = tempSearch[0].read();
                                tempSearch[0].close();
                                packInfoData = JS0N.parse(packInfo);
                                packInfo = "1";
                            } else {
                                packInfo = "";
                            }
                            if (!packInfoData) {
                                packInfoData = {};
                            }
                            packs[i].settings = packSettings;
                            packs[i].tools = packTools;
                            tempSerach = packFolder.getFiles(previewMask);
                            if (tempSerach.length) {
                                packPreview = tempSerach[0].fsName;
                            } else {
                                packPreview = "";
                            }
                            switch (true) {
                                case !packInfoData.name:
                                    packInfoData.name = Folder.decode(packFolder.name);
                                    break;
                                case !packInfoData.version:
                                    packInfoData.version = "1.0";
                                    break;
                                case !packInfoData.webSite:
                                    packInfoData.webSite = "";
                                    break;
                                case !packInfoData.webSiteName:
                                    packInfoData.webSiteName = "";
                                    break;
                                case !packInfoData.size:
                                    packInfoData.size = "";
                                    break;
                                case !packInfoData.author:
                                    packInfoData.author = "";
                                    break;
                                case !packInfoData.authorURL:
                                    packInfoData.authorURL = "";
                            }
                            packs[i].url = packFolder.fsName;
                            packs[i].info = packInfo;
                            packs[i].preview = packPreview;
                            packs[i].name = packInfoData.name;
                            packs[i].author = packInfoData.author;
                            packs[i].version = packInfoData.version;
                            packs[i].webSite = packInfoData.webSite;
                            packs[i].webSiteName = packInfoData.webSiteName;
                            packs[i].size = packInfoData.size;
                            packs[i].authorURL = packInfoData.authorURL;
                            clearedPacks.push(packs[i]);
                        }
                        return JS0N.stringify(clearedPacks);
                    };
                    writeToLog("Undo anonymous function loaded");
                    AEViewerTNT.importFile = importFile;
                    writeToLog("importFile function loaded");
                    app.enableQE();
                    AEViewerTNT.licInfo = licInfo;
                    writeToLog("licInfo function loaded");
                    writeToLog("Enable QE");
                    AEViewerTNT.openDebugInfo = AEViewerTNTOpenDebugInfo;
                    writeToLog("forEach function loaded");
                    writeToLog("AEViewerTNTOpenDebugInfo function loaded");
                    var previousPosition = false;
                    var chachedFile = false;
                    var numOfClips = 0;

                    function swap(a, b) {
                        var t = a;
                        a = b;
                        b = t;
                    }
                    AEVGLOBAL.importFile = importFile;
                    writeToLog("importFile function loaded");
                    AEViewerTNT.moveFilesIntoBin = moveFilesIntoBin;
                    app.bind("onProjectChanged", Undo.onProjectChanged);
                    writeToLog("moveFilesIntoBin function loaded");
                    writeToLog("OnProjectChange set our function");
                    var AEVVersion = "1.6";
                    writeToLog("swap function loaded");
                    writeToLog("getDisks function loaded");

                    function findBin(parentBin, binName) {
                        for (var i = 0; i < parentBin.children.numItems; i += 1) {
                            if (parentBin.children[i].name == binName) {
                                findedBin = parentBin.children[i];
                            }
                        }
                        if (!findedBin) {
                            parentBin.createBin(binName);
                            findedBin = findBin(parentBin, binName);
                        }
                        return findedBin;
                    }

                    function nameFromFsName(fsName) {
                        if (OS == "windows") {
                            return fsName.substr(fsName.lastIndexOf("\\"));
                        } else {
                            return fsName.substr(fsName.lastIndexOf("/"));
                        }
                    }
                    writeToLog("nameFromFsName function loaded");
                    writeToLog("findBin function loaded");

                    function importFile(file, speed, sound) {
                        if (!app.project.activeSequence) {
                            return "noSeq";
                        }
                        var slash = OS == "windows" ? "\\" : "/";
                        var packProject = "Pack" + slash + "Projects" + slash;
                        var filepathForAnalytics = file.substring(file.indexOf(packProject) + packProject.length);
                        AEViewerTNT.Analytics.save("top_file", filepathForAnalytics, 1);
                        AEViewerTNT.Analytics.save("settings", "speed", speed.toString());
                        AEViewerTNT.Analytics.save("settings", "sound", sound.toString());
                        try {
                            file = decodeURI(file);
                            var proj = app.project;
                            var ext = file.split(".").pop().toLowerCase();
                            app.bind("onProjectChanged", Undo.onProjectChanged);
                            Undo.start();
                            app.enableQE();
                            if (ext === "mogrt") {
                                seq.addTracks(1);
                                var importedClip = proj.activeSequence.importMGT(file, proj.activeSequence.getPlayerPosition(), 0, 0);
                                var importIndex = findPlaceToInsertClip(importedClip, videoTracks);
                                if (importIndex.i) {
                                    videoTracks[importIndex.i].overwriteClip(importedClip.projectItem, importedClip.start.ticks);
                                    deselectAllClips(proj.activeSequence);
                                    videoTracks[importIndex.i].clips[importIndex.j + 1].setSelected(true, true);
                                    seq.removeTracks(1);
                                } else {
                                    deselectAllClips(proj.activeSequence);
                                    importedClip.setSelected(true, true);
                                }
                                Undo.end();
                            } else {
                                if (ext == "jsx") {
                                    previousSequences = {};
                                    for (var i = 0; i < app.project.sequences.numSequences; i += 1) {
                                        var seq = app.project.sequences[i];
                                        previousSequences[seq.sequenceID] = true;
                                    }
                                    var readedFile = $.evalFile(file);
                                    var manage = manageFilePath(AEVGLOBAL.xml, AEVGLOBAL.name, Number(speed), sound == "true");
                                    var indexes = setPlacesForTracks(AEVGLOBAL.duration, AEVGLOBAL.joint, AEVGLOBAL.vHeight, AEVGLOBAL.aHeight, Number(speed));
                                    for (var i = 0; i < app.project.activeSequence.videoTracks.numTracks; i += 1) {
                                        app.project.activeSequence.videoTracks[i].setTargeted(i >= indexes[0], true);
                                        for (var j = 0; j < app.project.activeSequence.videoTracks[i].clips.numItems; j += 1) {
                                            numOfClips += 1;
                                        }
                                    }
                                    for (var i = 0; i < app.project.activeSequence.audioTracks.numTracks; i += 1) {
                                        app.project.activeSequence.audioTracks[i].setTargeted(i >= indexes[1], true);
                                    }
                                    if (app.version.match(/^14\.1\./)) {
                                        var activeSequence = app.project.activeSequence;
                                        var activeProject = getActiveProject();
                                        app.project.activeSequence.close();
                                        activeProject.openSequence(activeSequence.sequenceID);
                                    } else {
                                        qe.project.getActiveSequence().makeCurrent();
                                    }
                                    return JS0N.stringify({
                                        path: AEVExtensionPath,
                                        name: manage.filename,
                                        filepath: manage.filepath
                                    });
                                }
                            }
                        } catch (e) {
                            alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
                        }
                    }

                    function removeFolder(f) {
                        var files = f.getFiles();
                        for (var i = 0,
                        var len = files.length; i < len; i++) {
                            if (files[i] instanceof File) {
                                files[i].remove();
                            } else {
                                if (files[i] instanceof Folder) {
                                    removeFolder(files[i]);
                                }
                            }
                        }
                        f.remove();
                    }
                    writeToLog("removeFolder function loaded");
                    var externalObjectName = "PlugPlugExternalObject";
                    var mylib = new ExternalObject("lib:" + externalObjectName);

                    function Alert(type, header, content) {
                        var eventObj = new CSXSEvent();
                        eventObj.type = "alert";
                        eventObj.data = JS0N.stringify({
                            type: type,
                            header: header,
                            content: content
                        });
                        eventObj.dispatch();
                    }
                    var AEViewerTNT = {};
                    JS0N = {};
                    writeToLog("start.jsx loaded");
                    writeToLog("globalVar.jsx loaded");
                    writeToLog("Alert function loaded");
                    writeToLog("libs.jsx loaded");

                    function AlertVideo(type, header, content, videoContent) {
                        var eventObj = new CSXSEvent();
                        eventObj.type = "alertVideo";
                        eventObj.data = JS0N.stringify({
                            type: type,
                            header: header,
                            content: content,
                            videoContent: videoContent
                        });
                        eventObj.dispatch();
                    }
                    writeToLog("code.jsx loaded");
                    writeToLog("files.jsx loaded");
                    writeToLog("analytics.jsx loaded");
                    writeToLog("AlertVideo function loaded");
                    writeToLog("public.jsx loaded");
                    return AEViewerTNT;
                    writeToLog("AEViewerTNT.getPacks function loaded");
                    writeToLog("imoprtFile function loaded");

                    function findQESeqInBinRec(bin, seqId) {
                        if (!bin) {
                            return null;
                        }
                        for (var i = 0; i < bin.numSequenceItems; i += 1) {
                            var seq = bin.getSequenceAt(i);
                            if (seq.guid == seqId) {
                                return seq;
                            }
                        }
                        for (var j = 0; j < bin.numBins; j += 1) {
                            var childSeq = findQESeqInBinRec(bin.getBinAt(j), seqId);
                            if (childSeq) {
                                return childSeq;
                            }
                        }
                        return null;
                    }
                    AEViewerTNT.treeGetFolders = function(path) {
                        var showHidden = Storage.getShowHidden();
                        var folder = new Folder(path);
                        var fileList = folder.getFiles();
                        var result = [];
                        var userFolder = seSystemFolder;
                        for (var i = 0,
                        var len = fileList.length; i < len; i++) {
                            var uri = Folder.decode(fileList[i].fsName);
                            var name = getFilename(uri);
                            if (uri == userFolder) {
                                name = $.os.indexOf("Windows") != -1 ? system.userName : userFolder.substring(userFolder.indexOf("/", 3) + 1, userFolder.length);
                            }
                            var node = {
                                uri: uri,
                                name: name,
                                hasSubnodes: false
                            };
                            if (!showHidden && fileList[i].hidden || OS == "macos" && fileList[i].name.charAt(0) == ".") {
                                continue;
                            }
                            if (!filenameAllowsCondition(name)) {
                                continue;
                            }
                            if (fileList[i] instanceof File) {
                                continue;
                            }
                            node.type = "folder";
                            result.push(node);
                            var subfiles = Folder(uri).getFiles();
                            for (var j = 0,
                            var leng = subfiles.length; j < leng; j++) {
                                var sub_name = getFilename(Folder.decode(subfiles[j].fsName));
                                if (subfiles[j] instanceof Folder && filenameAllowsCondition(sub_name) && showFile(subfiles[j])) {
                                    node.hasSubnodes = true;
                                    break;
                                }
                            }
                        }
                        return JS0N.stringify(result);
                    };
                    writeToLog("parseFiles function loaded");
                    writeToLog("findQESeqUnBinRec function loaded");

                    function getActiveProject() {
                        try {
                            seq = app.project.activeSequence;
                        } catch (ex) {
                            throw new Error("Can't get the active sequence.")
                        }
                        try {
                            seqTreePath = seq.projectItem.treePath;
                        } catch (ex) {
                            throw new Error("Can't get the active sequence item.")
                        }
                        for (var i = 0; i < app.projects.numProjects; i += 1) {
                            var proj = app.projects[i];
                            if (seqTreePath.indexOf(proj.name) === 1) {
                                return proj;
                            }
                        }
                        return null;
                    }

                    function getFileListSearch(f, searchString) {
                        f = decodeURI(f);
                        searchString = decodeURI(searchString);
                        var data = getFileListSearchRec(f, searchString.toLowerCase(), 0);
                        return JS0N.stringify(data);
                    }
                    writeToLog("getFileListSearch function loaded");

                    function getFileListSearchRec(f, searchString, deep) {
                        var res = {};
                        var fl = [];
                        var fntl = [];
                        var vl = [];
                        var al = [];
                        var imgFFMPEGl = [];
                        var prl = [];
                        var adbl = [];
                        var imgl = [];
                        var psdl = [];
                        var fd = [];
                        var c4dl = [];
                        var exprl = [];
                        var folder = Folder(uri);
                        var userFolder = seSystemFolder;
                        if (deep > 3) {
                            return {
                                fileList: fl,
                                folderList: fd,
                                audioList: al,
                                videoList: vl,
                                presetList: prl,
                                imageList: imgl,
                                imageFFMPEGList: imgFFMPEGl
                            };
                        }
                        var i = 0;
                        var showHidden = Storage.getShowHidden();
                        var folder = new Folder(f);
                        var fileList = folder.getFiles();
                        for (var each in fileList) {
                            if (!showFile(fileList[each])) {
                                continue;
                            }
                            var uri = fileList[each].toString();
                            var name = Folder.decode(uri.substr(uri.lastIndexOf("/") + 1, uri.length - 1));
                            if (uri == userFolder) {
                                name = $.os.indexOf("Windows") != -1 ? system.userName : userFolder.substring(userFolder.indexOf("/", 3) + 1, userFolder.length);
                            }
                            var file_obj = {
                                uri: Folder.decode(uri),
                                name: Folder.decode(name),
                                fsName: Folder.decode(fileList[each].fsName)
                            };
                            if (fileList[each] instanceof File && name.toLowerCase().indexOf(searchString) > -1) {
                                var ext = name.substr(name.lastIndexOf(".") + 1, name.length - 1).toLowerCase();
                                file_obj.ext = ext;
                                file_obj.justName = name.substr(0, name.lastIndexOf("."));
                                var textName = name.substring(0, (name.length - ext.length) - 1);
                                var folder = new Folder(uri).parent;
                                var uriNoExt = uri.substring(0, uri.lastIndexOf("."));
                                switch (true) {
                                    case indexOf(["aep", "jsx", "jsxbin"], ext) != -1:
                                        var preview = uri.substring(0, uri.lastIndexOf("."));
                                        var previewType = "";
                                        var gifPreview = File(preview + ".gif");
                                        var mpegPreview = File(preview + ".mp4");
                                        if (gifPreview.exists) {
                                            preview = gifPreview.fsName;
                                            previewType = "gif";
                                        } else if (mpegPreview.exists) {
                                            preview = mpegPreview.fsName;
                                            previewType = "video";
                                        } else {
                                            preview = "";
                                        }
                                        file_obj.preview = preview;
                                        file_obj.previewType = previewType;
                                        file_obj.index = i++;
                                        fl.push(file_obj);
                                        break;
                                }
                            } else {
                                if (fileList[each] instanceof Folder) {
                                    var innerFiles = getFileListSearchRec(fileList[each].toString(), searchString, deep + 1);
                                    fl = fl.concat(innerFiles.fileList);
                                    al = al.concat(innerFiles.audioList);
                                    vl = vl.concat(innerFiles.videoList);
                                    prl = prl.concat(innerFiles.presetList);
                                    imgl = imgl.concat(innerFiles.imageList);
                                    imgFFMPEGl = imgFFMPEGl.concat(innerFiles.imageFFMPEGList);
                                }
                            }
                        }
                        res = {
                            fileList: fl,
                            folderList: fd,
                            audioList: al,
                            videoList: vl,
                            presetList: prl,
                            imageList: imgl,
                            imageFFMPEGList: imgFFMPEGl
                        };
                        return res;
                    }
                    writeToLog("getActiveProject function loaded");

                    function setPixelRatioForNest(videoPixelRatio, newBin) {
                        try {
                            var finded = false;
                            for (var i = 0; i < app.project.sequences.numSequences; i += 1) {
                                var seq = app.project.sequences[i];
                                if (!previousSequences[seq.sequenceID]) {
                                    app.project.openSequence(seq.sequenceID);
                                    finded = true;
                                    break;
                                }
                            }
                            for (var videoTracksIndex = 0; videoTracksIndex < app.project.activeSequence.videoTracks.numTracks; videoTracksIndex += 1) {
                                for (var clipsIndex = 0; clipsIndex < app.project.activeSequence.videoTracks[videoTracksIndex].clips.numItems; clipsIndex += 1) {
                                    app.project.activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.setOverridePixelAspectRatio(Number(videoPixelRatio[0]), Number(videoPixelRatio[1]));
                                    app.project.activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.moveBin(newBin);
                                }
                            }
                            if (finded) {
                                app.project.activeSequence.close()
                            }
                        } catch (e) {
                            alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
                        }
                    }
                    writeToLog("AEViewerTNT.treeGetFolders function loaded");
                    AEViewerTNT.getFileList = function(f) {
                        f = decodeURI(f);
                        if (!f || Folder(f).toString().indexOf(_packProjects_.toString()) != 0) {
                            cur = _packProjects_.toString();
                            current = cur;
                        } else {
                            cur = f;
                            comeFrom = current;
                            current = f;
                        }
                        var folder = new Folder(cur);
                        if (!folder.exists) {
                            AEViewerTNT.Analytics.save("error", "Folder not found", "Folder path is " + folder.fsName);
                            return "error";
                        }
                        var fileList = folder.getFiles();
                        var fl = [];
                        var fd = [];
                        var vl = [];
                        var al = [];
                        var prl = [];
                        var fntl = [];
                        var adbl = [];
                        var imgl = [];
                        var psdl = [];
                        if (folder.parent) {
                            var uri = folder.parent.toString();
                            var name = uri.substr(uri.lastIndexOf("/") + 1, uri.length - 1).split("%20").join(" ");
                            fd.push({
                                name: "..",
                                uri: Folder.decode(folder.parent.fsName),
                                fsName: Folder.decode(folder.parent.fsName),
                                type: "back"
                            });
                        }
                        var data = parseFiles(fileList, f);
                        var nodesTree = [];
                        var nodesTreeRet = [];
                        var curFolder = new Folder(current);
                        while (curFolder) {
                            nodesTree.push(curFolder.toString());
                            if (OS == "macos" && curFolder.toString() == "~") {
                                break;
                            }
                            curFolder = curFolder.parent;
                        }
                        for (var i = 0,
                        var len = nodesTree.length; i < len; i++) {
                            nodesTreeRet[(len - i) - 1] = nodesTree[i];
                        }
                        var cur = Folder.decode(Folder(current).fsName);
                        data.current = cur;
                        if (comeFrom) {
                            data.comeFrom = comeFrom.toString().split(" ").join("%20");
                        } else {
                            data.comeFrom = "";
                        }
                        data.nodesTree = nodesTreeRet;
                        data.currentUri = encodeURI(current.fsName);
                        data.curFolder = current.fsName;
                        return JS0N.stringify(data);
                    };
                    writeToLog("setPixelRationForNest function loaded");

                    function moveFilesIntoBin(filename) {
                        try {
                            if (previousPosition) {
                                app.project.activeSequence.setPlayerPosition(previousPosition.ticks);
                            }
                            var activeSequence = app.project.activeSequence;
                            var STBin = false;
                            var fileBin = false;
                            var previousNodeID = false;
                            var newNumOfClips = 0;
                            var videoPixelRatio = app.project.activeSequence.getSettings().videoPixelAspectRatio.split(":");
                            STBin = findBin(app.project.rootItem, "Seamless Transitions");
                            if (!STBin || !filename) {
                                return false;
                            }
                            fileBin = findBin(STBin, decodeURI(filename));
                            for (var videoTracksIndex = 0; videoTracksIndex < activeSequence.videoTracks.numTracks; videoTracksIndex += 1) {
                                for (var clipsIndex = 0; clipsIndex < activeSequence.videoTracks[videoTracksIndex].clips.numItems; clipsIndex += 1) {
                                    if (activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].isSelected() && activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem) {
                                        activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.setOverridePixelAspectRatio(Number(videoPixelRatio[0]), Number(videoPixelRatio[1]));
                                        activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.moveBin(fileBin);
                                        if (activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.name.indexOf("Adjustment") != -1 && !previousNodeID || previousNodeID != activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.nodeId && activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.isSequence()) {
                                            previousNodeID = activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].projectItem.nodeId;
                                            setPixelRatioForNest(videoPixelRatio, fileBin);
                                        }
                                    }
                                    newNumOfClips += 1;
                                }
                            }
                            for (var audioTracksIndex = 0; audioTracksIndex < activeSequence.audioTracks.numTracks; audioTracksIndex += 1) {
                                for (var clipsIndex = 0; clipsIndex < activeSequence.audioTracks[audioTracksIndex].clips.numItems; clipsIndex += 1) {
                                    if (activeSequence.audioTracks[audioTracksIndex].clips[clipsIndex].isSelected()) {
                                        activeSequence.audioTracks[audioTracksIndex].clips[clipsIndex].projectItem.moveBin(fileBin);
                                    }
                                }
                            }
                            if (chachedFile) {
                                chachedFile.remove();
                                chachedFile = false;
                            }
                            Undo.end();
                            if (numOfClips == newNumOfClips) {
                                numOfClips = 0;
                                return false;
                            }
                            numOfClips = 0;
                        } catch (e) {
                            alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
                        }
                    }
                    writeToLog("AEViewerTNT.getFileList function loaded");
                    AEViewerTNT.licInfo = function() {
                        return JS0N.stringify({
                            version: wabikusa.version,
                            owner: wabikusa.owner
                        });
                    };
                    writeToLog("AEViewerTNT.licInfo function loaded");
                    AEViewerTNT.openFiles = function(fileString) {
                        var data = JS0N.parse(decodeURI(fileString));
                        var fileList = [];
                        for (var i = 0,
                        var len = data.length; i < len; i++) {
                            fileList.push(File(decodeURI(data[i].uri)));
                        }
                        var res = parseFiles(fileList);
                        res.folderList = [];
                        return JS0N.stringify(res);
                    };
                    writeToLog("webReqPG function loaded");
                    var licManager = function() {
                        try {
                            var _public = {};
                            var prefFile = File(LICgetUFolder() + "/" + regData.licFileName);
                            var libName = $.os.indexOf("Windows") == -1 ? "/bin/Mac/reqlib.framework" : "/bin/Win/reqlib.dll";
                            if (!prefFile.exists) {
                                LICcreateFile(regData.licFileName, "", LICgetUFolder())
                            }
                            prefFile.hidden = false;
                        } catch (e) {
                            writeToLog("Error inside licManager function. " + e.toString() + " At line:" + e.line);
                        }
                        try {
                            var webreqLib = new ExternalObject("lib:" + regData.libPath + libName);
                        } catch (e) {
                            writeToLog("webreqLib was not initialized 1");
                        }
                        _public.tree = function(email, licCode) {
                            try {
                                var _key = licCode;
                                if (!emailIsValid(email)) {
                                    return !(!alert("That does not look like a valid email address.\nPlease enter the same email you used for the first activation or you videohive account."));
                                }
                                if (!_key || _key == "") {
                                    return !(!alert("Please, type your license or purchase code."));
                                }
                                _key = _key.toLocaleLowerCase();
                                _key = _key.replace(/(|\n|\r)/g, "");
                                _key = _key.replace(/ /g, "");
                                AEViewerTNT.writeTestDebug("User key is " + _key + " and email is " + email + "\n");
                                if (!checkCodeFormat(_key)) {
                                    return false;
                                }
                                if (!webReqPG.isOffline()) {
                                    return false;
                                }
                                var ch = licManager.checkCodeOnline(email, _key);
                                AEViewerTNT.writeTestDebug("Server response is " + ch + "\n");
                                if (ch === false) {
                                    return false;
                                }
                                if (ch === true) {
                                    return true;
                                }
                                return false;
                            } catch (e) {
                                writeToLog("Error inside tree function. " + e.toString() + " At line:" + e.line);
                                return !(!alert("Error: 266\n" + e.toString()));
                            }
                            return false;
                        };
                        _public.checkCodeOnline = function(email, _key) {
                            try {
                                var licResp = webReqPG.checkLicCode(email, _key);
                                if (licResp === true) {
                                    this.saveKey(email, _key);
                                    return true;
                                }
                            } catch (e) {
                                writeToLog("Error inside checkCodeOnline function. " + e.toString() + " At line:" + e.line);
                            }
                            return false;
                        };
                        _public.saveKey = function(email, _key) {
                            try {
                                var hash = coder(_key + "\n" + email + "\n" + regData.machineID + "\n" + regData.expirationDate, 1);
                                var keySaved = LICcreateFile(regData.licFileName, hash, LICgetUFolder());
                                if (!keySaved) {
                                    return !(!alert("Premiere Pro doesn't have enough rights to write to save the license.\nPlease, give Premiere Pro more permissions."));
                                }
                            } catch (e) {
                                writeToLog("Error inside saveKey function. " + e.toString() + " At line:" + e.line);
                            }
                            return true;
                        };
                        _public.plant = function(extPath, appLocale) {
                            try {
                                AEViewerTNT.writeTestDebug("\n\n===================\n\n");
                                AEViewerTNT.writeTestDebug("Start check.\n\n\nVersion: " + regData.scriptVersion + "\nApp version: " + regData.appVersion + "\n");
                                if (regData.appLanguage == "Unknown" && appLocale) {
                                    regData.appLanguage = appLocale
                                }
                                AEViewerTNT.writeTestDebug("Start check license\n");
                                if (regData.libPath == undefined) {
                                    regData.libPath = decodeURI(extPath)
                                }
                                AEViewerTNT.writeTestDebug("Lib path is lib:" + regData.libPath + libName + "\n");
                                if (!webreqLib) {
                                    try {
                                        webreqLib = new ExternalObject("lib:" + regData.libPath + libName);
                                    } catch (e) {
                                        AEViewerTNT.writeTestDebug("Error 451 during loading the library\n" + e.toString());
                                    }
                                }
                                if (!this.licenseIsSaved()) {
                                    AEViewerTNT.writeTestDebug("License not saved\n");
                                    return false;
                                }
                                var _key = this.getSavedCode();
                                var _machineID = this.getSavedMachineID();
                                var _email = this.getSavedEmail();
                                AEViewerTNT.writeTestDebug("User key is " + _key + " and email is " + _email + "\n" + "Machine ID: " + _machineID + "\n");
                                var silentCheck = webReqPG.silentCheck(_email, _key, _machineID);
                                if (!silentCheck) {
                                    AEViewerTNT.writeTestDebug("Silent check key failed");
                                    this.saveKey("", "");
                                    return false;
                                } else {
                                    if (silentCheck === true) {
                                        AEViewerTNT.writeTestDebug("Silent check is true\n");
                                        this.saveKey(_email, _key);
                                    }
                                }
                                if (regData.expirationDate == "") {
                                    this.getExpirationDate()
                                }
                                AEViewerTNT.writeTestDebug("Expiration date: " + regData.expirationDate + "\n");
                                if (this.isExpired()) {
                                    return !(!alert("Error: 901\nYour license has expired. To purchase a new one, please visit:\n" + regData.site));
                                }
                            } catch (e) {
                                writeToLog("Error inside plant function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                            return true;
                        };
                        _public.isExpired = function() {
                            try {
                                var date = regData.expirationDate;
                                if (date === "Unlimited" || date == "") {
                                    return false;
                                }
                                if (!date.match(/-/g) || date.match(/-/g).length != 2) {
                                    return !(!alert("Error: 358\nSomething went wrong during checking the date.\n" + date.toString()));
                                }
                                date = date.split("-");
                                var ExpDate = new Date(parseInt(date[0]), parseInt(date[1]), parseInt(date[2]));
                                var isExpired = checkLicenseDate(ExpDate);
                                if (isExpired) {
                                    this.saveKey("", "")
                                }
                            } catch (e) {
                                writeToLog("Error inside plant function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                            return isExpired;
                        };
                        _public.licenseIsSaved = function() {
                            try {
                                var inKey = this.getSavedCode();
                                var machineID = this.getSavedMachineID();
                                if (!inKey || !machineID) {
                                    return false;
                                }
                                var sameMachine = webReqPG.validateMachineId(machineID);
                                if (!sameMachine) {
                                    this.saveKey("", "", "");
                                    return !(!alert("Error: 757\nMachines do not match.\n" + machineID));
                                }
                                if (keyCorrectFormat(inKey)) {
                                    return true;
                                }
                            } catch (e) {
                                writeToLog("Error inside plant function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                            return false;
                        };
                        _public.getSavedCode = function() {
                            var str = readPrefFile();
                            return str ? str.split("\n")[0] : false;
                        };
                        _public.getSavedEmail = function() {
                            var str = readPrefFile();
                            return str ? str.split("\n")[1] : false;
                        };
                        _public.getSavedMachineID = function() {
                            var str = readPrefFile();
                            return str ? str.split("\n")[2] : false;
                        };
                        _public.getExpirationDate = function() {
                            var str = readPrefFile();
                            if (!str) {
                                return false;
                            }
                            var date = str.split("\n")[3];
                            regData.expirationDate = date == "" ? "Unlimited" : date;
                            return JS0N.stringify({
                                date: regData.expirationDate,
                                site: regData.site,
                                contactEmail: regData.contactEmail
                            });
                        };
                        _public.water = function() {
                            try {
                                var email = this.getSavedEmail();
                                var code = this.getSavedCode();
                                var machineID = this.getSavedMachineID();
                                var removedFromServer = webReqPG.removeLicense(email, code, machineID);
                                if (removedFromServer) {
                                    this.saveKey("", "", "");
                                    prefFile.remove();
                                    alert("License has been removed!");
                                    return true;
                                }
                            } catch (e) {
                                writeToLog("Error inside water function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                            return false;
                        };

                        function checkLicenseDate(ExpDate) {
                            var v0 = tt = new Date(Date(0));
                            var t = tt.getFullYear();
                            var t1 = tt.getMonth() + 1;
                            var t2 = tt.getDate();
                            v0 = today = new Date(t, t1, t2);
                            var one_day = 86400000;
                            var todayInMs = parseInt(today, 10) / one_day;
                            var ExpInMs = parseInt(ExpDate, 10) / one_day;
                            return todayInMs >= ExpInMs ? true : false;
                        }

                        function readPrefFile() {
                            try {
                                prefFile.open("r");
                                var content = prefFile.read();
                                prefFile.close();
                                if (content == "") {
                                    return false;
                                }
                                content = coder(content);
                                if (content.indexOf("\n") == -1) {
                                    return !(!alert("Error: 423\nPref file is damaged."));
                                }
                                return content;
                            } catch (e) {
                                writeToLog("Error inside readPrefFile function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                        }

                        function keyCorrectFormat(code) {
                            if (code.length > 36) {
                                return !(!alert("Entered license code is too long.\nMake sure that you don't have any spaces or linebreaks after the license code."));
                            }
                            if (code.length < 36) {
                                return !(!alert("Entered license code is too short.\nMake sure that you have typed correct license code."));
                            }
                            var reg = /-/g;
                            var matches = [];
                            while (found = reg.exec(code)) {
                                matches.push(found[0]);
                            }
                            return matches.length === 4 ? true : false;
                        }
                        var custom64 = {
                            b64: "mLIavEz5lS9QCPxq0uyWKbFZTcBdAtgh1e8UnsoVkirRf67wDNM432pXGjHJYO+/=",
                            encode: function(input) {
                                var output = "";
                                var i = 0;
                                input = custom64._utf8_encode(input);
                                while (i < input.length) {
                                    chr1 = input.charCodeAt(i++);
                                    chr2 = input.charCodeAt(i++);
                                    chr3 = input.charCodeAt(i++);
                                    enc1 = chr1 >> 2;
                                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                                    enc4 = chr3 & 63;
                                    if (isNaN(chr2)) {
                                        enc3 = enc4 = 64;
                                    } else {
                                        if (isNaN(chr3)) {
                                            enc4 = 64;
                                        }
                                    }
                                    output = output + this.b64.charAt(enc1) + this.b64.charAt(enc2) + this.b64.charAt(enc3) + this.b64.charAt(enc4);
                                }
                                return output;
                            },
                            decode: function(input) {
                                var output = "";
                                var i = 0;
                                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
                                while (i < input.length) {
                                    enc1 = this.b64.indexOf(input.charAt(i++));
                                    enc2 = this.b64.indexOf(input.charAt(i++));
                                    enc3 = this.b64.indexOf(input.charAt(i++));
                                    enc4 = this.b64.indexOf(input.charAt(i++));
                                    chr1 = (enc1 << 2) | (enc2 >> 4);
                                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                                    chr3 = ((enc3 & 3) << 6) | enc4;
                                    output = output + String.fromCharCode(chr1);
                                    if (enc3 != 64) {
                                        output = output + String.fromCharCode(chr2);
                                    }
                                    if (enc4 != 64) {
                                        output = output + String.fromCharCode(chr3);
                                    }
                                }
                                output = custom64._utf8_decode(output);
                                return output;
                            },
                            _utf8_encode: function(string) {
                                var utftext = "";
                                for (var n = 0; n < string.length; n += 1) {
                                    var c = string.charCodeAt(n);
                                    if (c < 128) {
                                        utftext += String.fromCharCode(c);
                                    } else if (c > 127 && c < 2048) {
                                        utftext += String.fromCharCode((c >> 6) | 192);
                                        utftext += String.fromCharCode((c & 63) | 128);
                                    } else {
                                        utftext += String.fromCharCode((c >> 12) | 224);
                                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                                        utftext += String.fromCharCode((c & 63) | 128);
                                    }
                                }
                                return utftext;
                            },
                            _utf8_decode: function(utftext) {
                                var string = "";
                                var i = 0;
                                var c = c1 = c2 = 0;
                                while (i < utftext.length) {
                                    c = utftext.charCodeAt(i);
                                    if (c < 128) {
                                        string += String.fromCharCode(c);
                                        i++;
                                    } else if (c > 191 && c < 224) {
                                        c2 = utftext.charCodeAt(i + 1);
                                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                                        i += 2;
                                    } else {
                                        c2 = utftext.charCodeAt(i + 1);
                                        c3 = utftext.charCodeAt(i + 2);
                                        string += String.fromCharCode((((c & 15) << 12) | ((c2 & 63) << 6)) | (c3 & 63));
                                        i += 3;
                                    }
                                }
                                return string;
                            }
                        };

                        function coder(_data, _e) {
                            return _e ? custom64.encode(_data) : custom64.decode(_data);
                        }

                        function LICgetUFolder(a) {
                            try {
                                var scriptFolder = Folder(seSystemFolder);
                                if (!scriptFolder.exists) {
                                    var checkFolder = scriptFolder.create();
                                    if (!checkFolder) {
                                        alert("Error creating user folder");
                                        scriptFolder = Folder.temp;
                                    }
                                }
                                if (a != undefined) {
                                    scriptFolder = Folder(scriptFolder.toString() + "/" + a)
                                }
                                if (!scriptFolder.exists) {
                                    var checkFolder = scriptFolder.create();
                                    if (!checkFolder) {
                                        alert("Error creating user folder ");
                                        scriptFolder = Folder.temp;
                                    }
                                }
                            } catch (e) {
                                writeToLog("Error inside LICgetUFolder function. " + e.toString() + " At line:" + e.line);
                                return false;
                            }
                            return scriptFolder.fsName.toString();
                        }

                        function LICcreateFile(filename, binaryString, resourceFolder) {
                            try {
                                var myFile = new File(resourceFolder + "/" + filename);
                                if (!myFile.exists && regData.appName === "After Effects") {
                                    if (!LICisSecurityPrefSet()) {
                                        if (parseFloat(app.version) >= 16, 1) {
                                            alert("This script requires access to write files.\nOpen After Effects 'Preferences' -> 'Scripting and Expressions' and make sure 'Allow Scripts to Write Files and Access Network' is checked.");
                                            app.executeCommand(3131);
                                        } else {
                                            alert("This script requires access to write files.\nGo to the 'General' panel of the application 'Preferences' and make sure 'Allow Scripts to Write Files and Access Network' is checked.");
                                            app.executeCommand(2359);
                                        }
                                        if (!LICisSecurityPrefSet()) {
                                            return null;
                                        }
                                    }
                                }
                                myFile.encoding = "BINARY";
                                myFile.open("w");
                                myFile.write(binaryString);
                                myFile.close();
                                return myFile;
                            } catch (e) {
                                writeToLog("Error inside LICcreateFile function. " + e.toString() + " At line:" + e.line);
                                return !(!alert("Error during creation of the file\nError:" + e.toString() + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString()));
                            }
                        }

                        function checkCodeFormat(code) {
                            if (code == "") {
                                return !(!alert("Please, paste your purchase code"));
                            }
                            if (!keyCorrectFormat(code)) {
                                return !(!alert("Wrong code format\nPlease, make sure that you have pasted correct license or purchase code.\nYou can find it under the this page:\nhttps://videohive.net/downloads"));
                            }
                            return true;
                        }

                        function emailIsValid(email) {
                            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                        }
                        return _public;
                    }();
                    writeToLog("AEViewerTNT.openFiles function loaded");
                    writeToLog("moveFilesIntoBin function loaded");
                    AEViewerTNT.contextOpen = function(type, url) {
                        url = decodeURI(url);
                        switch (OS) {
                            case "windows":
                                if (type == "folder") {
                                    cmd = "explorer \"" + Folder(url).fsName + "\"";
                                } else {
                                    cmd = "explorer \"" + File(url).fsName + "\"";
                                }
                                system.callSystem(cmd);
                                break;
                            case "macos":
                                var file = new File("/tmp/revealInFinder.sh");
                                file.open("w");
                                file.encoding = "UTF-8";
                                file.lineFeed = "Macintosh";
                                if (type == "folder") {
                                    cmd = "open \"" + Folder(url).fsName + "\"";
                                } else {
                                    cmd = "open -R \"" + File(url).fsName + "\"";
                                }
                                file.write(cmd);
                                file.close();
                                system.callSystem("chmod 755 \"" + file.fsName + "\"");
                                res = system.callSystem("./\"" + file.fsName + "\"");
                                break;
                        }
                    };

                    function isTrackFree(track, startTime, endTime) {
                        for (var i = 0; i < track.clips.numItems; i += 1) {
                            var clip = track.clips[i];
                            if (startTime < clip.end.seconds && clip.start.seconds < endTime) {
                                return false;
                            }
                        }
                        return true;
                    }
                    writeToLog("isTrackFree function loaded");

                    function setPlacesForTracks(clipDuration, clipJoint, vHeight, aHeight, speed) {
                        var videoTracks = app.project.activeSequence.videoTracks;
                        var audioTracks = app.project.activeSequence.audioTracks;
                        var maxCountTrack = Math.max(videoTracks.numTracks, audioTracks.numTracks);
                        previousPosition = app.project.activeSequence.getPlayerPosition();
                        var currentPos = app.project.activeSequence.getPlayerPosition();
                        var newPosition = currentPos.seconds - (clipJoint * (speed / 100));
                        if (newPosition < 0) {
                            newPosition = currentPos.seconds;
                        } else {
                            currentPos.seconds = newPosition;
                            app.project.activeSequence.setPlayerPosition(currentPos.ticks);
                        }
                        var videoFree = Array(maxCountTrack + vHeight);
                        for (var v = 0; v < videoFree.length; v += 1) {
                            videoFree[v] = true
                        }
                        var audioFree = Array(maxCountTrack + aHeight);
                        for (var a = 0; a < audioFree.length; a += 1) {
                            audioFree[a] = true
                        }
                        for (var vV = 0; vV < videoTracks.numTracks; vV += 1) {
                            videoFree[vV] = isTrackFree(videoTracks[vV], newPosition, newPosition + clipDuration);
                        }
                        for (var aA = 0; aA < audioTracks.numTracks; aA += 1) {
                            audioFree[aA] = isTrackFree(audioTracks[aA], newPosition, newPosition + clipDuration);
                        }
                        for (var i = 0; i < videoTracks.numTracks; i += 1) {
                            var availebleVideo = true;
                            for (var j = 0; j < vHeight; j += 1) {
                                if (!videoFree[i + j]) {
                                    availebleVideo = false;
                                    break;
                                }
                            }
                            if (availebleVideo) {
                                vIndex = i;
                                break;
                            }
                        }
                        if (vIndex == undefined) {
                            vIndex = videoTracks.numTracks;
                        }
                        for (var i = 0; i < audioTracks.numTracks; i += 1) {
                            var availebleAudio = true;
                            for (var j = 0; j < aHeight; j += 1) {
                                if (!audioFree[i + j]) {
                                    availebleAudio = false;
                                    break;
                                }
                            }
                            if (availebleAudio) {
                                aIndex = i;
                                break;
                            }
                        }
                        if (aIndex == undefined) {
                            aIndex = audioTracks.numTracks;
                        }
                        if ((vIndex + vHeight) > videoTracks.numTracks || (aIndex + aHeight) > audioTracks.numTracks) {
                            var vTracksToAdd = 0;
                            vTracksToAdd = Math.max(0, (vIndex + vHeight) - videoTracks.numTracks);
                            var vAddIndex = videoTracks.numTracks;
                            var aTracksToAdd = 0;
                            aTracksToAdd = Math.max(0, (aIndex + aHeight) - audioTracks.numTracks);
                            var aAddIndex = audioTracks.numTracks;
                            var aTrackType = 1;
                            qe.project.init();
                            var seqId = app.project.activeSequence.sequenceID;
                            var seq = findQESeqInBinRec(qe.project, seqId);
                            seq.addTracks(vTracksToAdd, vAddIndex, aTracksToAdd, aTrackType, aAddIndex, 0, 0);
                        }
                        return [vIndex, aIndex];
                    }
                    writeToLog("getFileListSearchRec function loaded");
                    writeToLog("AEViewerTNT.contextOpen function loaded");
                    var MINIVERSION = false;
                    AEViewerTNT.getOS = function() {
                        return OS;
                    };
                    writeToLog("AEViewerTNT.getOS function loaded");
                    AEViewerTNT.getAEVFolder = function(folder) {
                        folder = decodeURI(folder);
                        AEVExtensionPath = Folder(folder).toString();
                    };
                    writeToLog("AEViewerTNT.getAEVFolder function loaded");
                    AEViewerTNT.videoServerIsRunnning = function() {
                        return true;
                    };
                    writeToLog("AEViewerTNT.ideoServerIsRunning function loaded");
                    AEViewerTNT.renameFile = function(filename, new_filename, preview) {
                        filename = File.decode(filename);
                        new_filename = File.decode(new_filename);
                        preview = File.decode(preview);
                        var ext = filename.substr(filename.lastIndexOf("."), filename.length - 1);
                        var preview_ext = preview ? preview.substr(preview.lastIndexOf("."), preview.length - 1) : null;
                        var file = File(filename);
                        var preview_file = File(preview);
                        var new_file = File(file.parent.toString() + "/" + new_filename + ext);
                        var new_preview = File(file.parent.toString() + "/" + new_filename + preview_ext);
                        var old_filename = file.name;
                        if (file.exists && !new_file.exists && !new_preview.exists) {
                            if (!file.rename(new_filename + ext)) {
                                return false;
                            }
                            if (preview_file.exists && !preview_file.rename(new_filename + preview_ext)) {
                                file.rename(old_filename);
                                return false;
                            }
                        } else {
                            return false;
                        }
                        return JS0N.stringify({
                            name: encodeURI(new_filename + ext),
                            fsName: encodeURI(file.fsName)
                        });
                    };
                    writeToLog("setPlacesForTracks function loaded");

                    function manageFilePath(xml, name, speed, sound) {
                        var slash = OS == "windows" ? "\\" : "/";
                        var FootagePath = AEVExtensionPath + slash + "Pack" + slash + "Projects" + slash + "Footage";
                        var slashRegexp = OS == "windows" ? /\//g : /\\/g;
                        var replaceWith = OS == "windows" ? "\\" : "/";
                        xmlContent = xml;
                        var strArray = xmlContent.split("\n");
                        var findedVideoMediaSource = false;
                        var findedVideoClip = false;
                        var findAudioTrackGroup = false;
                        var nameHash = randomizeNewSeqID(4);
                        var newMediaURef = randomizeNewSeqID(8) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(12);
                        var newCPGUID = randomizeNewSeqID(8) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(12);
                        for (var i = 0; i < strArray.length; i += 1) {
                            if (strArray[i].indexOf("<CopyPasteSequenceGUID>") != -1) {
                                previousCPGUID = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</CopyPasteSequenceGUID>"));
                                strArray[i] = "<CopyPasteSequenceGUID>" + newCPGUID + "</CopyPasteSequenceGUID>";
                            }
                            if (previousCPGUID && strArray[i].indexOf(previousCPGUID) != -1) {
                                strArray[i] = strArray[i].replace(previousCPGUID, newCPGUID);
                            }
                            if (strArray[i].indexOf("<FilePath>") != -1 && strArray[i].indexOf("$_TNTPR") != -1) {
                                var fullMediaPath = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</FilePath>"));
                                fullMediaPath = fullMediaPath.replace("$_TNTPR", FootagePath);
                                fullMediaPath = fullMediaPath.replace(slashRegexp, replaceWith);
                                strArray[i] = "<FilePath>" + fullMediaPath + "</FilePath>";
                            }
                            if (strArray[i].indexOf("<ActualMediaFilePath>") != -1 && strArray[i].indexOf("$_TNTPR") != -1) {
                                var fullMediaPath = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</ActualMediaFilePath>"));
                                fullMediaPath = fullMediaPath.replace("$_TNTPR", FootagePath);
                                fullMediaPath = fullMediaPath.replace(slashRegexp, replaceWith);
                                strArray[i] = "<ActualMediaFilePath>" + fullMediaPath + "</ActualMediaFilePath>";
                            }
                            if (strArray[i].indexOf("<FrameRect>") !== -1) {
                                strArray[i] = "<FrameRect>0,0," + app.project.activeSequence.frameSizeHorizontal + "," + app.project.activeSequence.frameSizeVertical + "</FrameRect>";
                            }
                            if (strArray[i].indexOf("<VideoMediaSource ") != -1) {
                                findedVideoMediaSource = true;
                            }
                            if (findedVideoMediaSource && strArray[i].indexOf("<Media ObjectURef=") != -1) {
                                previousMediaURef = strArray[i].substring(strArray[i].indexOf("\"") + 1, strArray[i].indexOf("\"/>"));
                            }
                            if (strArray[i].indexOf("</VideoMediaSource>") != -1) {
                                findedVideoMediaSource = false;
                            }
                            if (strArray[i].indexOf(previousMediaURef) != -1) {
                                strArray[i] = strArray[i].replace(previousMediaURef, newMediaURef);
                            }
                            if (strArray[i].indexOf("<VideoClip ") != -1) {
                                findedVideoClip = true;
                            }
                            if (findedVideoClip && strArray[i].indexOf("<ClipID>") != -1) {
                                strArray[i] = "<ClipID>" + randomizeNewSeqID(8) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(4) + "-" + randomizeNewSeqID(12) + "</ClipID>";
                            }
                            if (strArray[i].indexOf("</VideoClip>")) {
                                findedVideoClip = false;
                            }
                            if (strArray[i].indexOf("<Name>Adjustment</Name>") != -1) {
                                strArray[i] = "<Name>Adjustment " + nameHash + "</Name>";
                            }
                            if (strArray[i].indexOf("<ClipName>Adjustment</ClipName>") != -1) {
                                strArray[i] = "<ClipName>Adjustment " + nameHash + "</ClipName>";
                            }
                            if (strArray[i].indexOf("<Name>Adjustment Layer</Name>") != -1) {
                                strArray[i] = "<Name>Adjustment Layer " + nameHash + "</Name>";
                            }
                            if (strArray[i].indexOf("<ClipName>Adjustment Layer</ClipName>") != -1) {
                                strArray[i] = "<ClipName>Adjustment Layer " + nameHash + "</ClipName>";
                            }
                            if (strArray[i].indexOf("<Start>") != -1) {
                                var previousTime = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</Start>"));
                                strArray[i] = "<Start>" + Number(previousTime) * (speed / 100).toString() + "</Start>";
                            }
                            if (strArray[i].indexOf("<End>") != -1) {
                                var previousTime = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</End>"));
                                strArray[i] = "<End>" + Number(previousTime) * (speed / 100).toString() + "</End>";
                            }
                            if (strArray[i].indexOf("<InPoint>") != -1) {
                                var previousTime = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</InPoint>"));
                                strArray[i] = "<InPoint>" + Number(previousTime) * (speed / 100).toString() + "</InPoint>";
                            }
                            if (strArray[i].indexOf("<OutPoint>") != -1) {
                                var previousTime = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</OutPoint>"));
                                strArray[i] = "<OutPoint>" + Number(previousTime) * (speed / 100).toString() + "</OutPoint>";
                            }
                            if (strArray[i].indexOf("<Keyframes>") != -1) {
                                var initString = strArray[i].substring(strArray[i].indexOf(">") + 1, strArray[i].indexOf("</Keyframes>"));
                                if (initString.indexOf(";") != -1) {
                                    var arraysWrapperArray = initString.split(";");
                                    var finalString = "";
                                    for (var j = 0; j < arraysWrapperArray.length; j += 1) {
                                        var tempMass = arraysWrapperArray[j].split(",");
                                        if (tempMass.length == 1) {
                                            continue;
                                        }
                                        tempMass[0] = Number(tempMass[0]) * (speed / 100).toString();
                                        var newPartOfFinalString = tempMass.join(",");
                                        finalString += newPartOfFinalString + ";";
                                    }
                                    strArray[i] = "<Keyframes>" + finalString + "</Keyframes>";
                                } else {
                                    var keyFrameArray = initString.split(",");
                                    keyFrameArray[0] = Number(keyFrameArray[0]) * (speed / 100).toString();
                                    strArray[i] = "<Keyframes>" + keyFrameArray.join(",") + "</Keyframes>";
                                }
                            }
                            if (strArray[i].indexOf("<AudioTrackGroup") !== -1) {
                                findAudioTrackGroup = true;
                            }
                            if (strArray[i].indexOf("</AudioTrackGroup>") !== -1) {
                                findAudioTrackGroup = false;
                            }
                            if (strArray[i].indexOf("<Tracks ") != -1 || strArray[i].indexOf("<Track ") != -1 || strArray[i].indexOf("</Tracks>") != -1 && findAudioTrackGroup && !sound) {
                                strArray[i] = "";
                            }
                        }
                        var newXML = strArray.join("\n");
                        if (!Folder(seSystemFolder + "/Seamless Transition/cache").exists) {
                            Folder(seSystemFolder + "/Seamless Transition/cache").create();
                        }
                        var filepath = Folder(seSystemFolder + "/Seamless Transition/cache") + slash + name + ".prproj";
                        chachedFile = File(filepath);
                        if (!chachedFile.exists) {
                            chachedFile = new File(filepath);
                        }
                        chachedFile.open("w");
                        chachedFile.encoding = "UTF-8";
                        if (OS == "macos") {
                            chachedFile.lineFeed = "Macintosh"
                        }
                        chachedFile.write(newXML);
                        chachedFile.close();
                        return {
                            filename: name,
                            filepath: chachedFile.fsName
                        };
                    }
                    writeToLog("AEViewerTNT.renameFile function loaded");
                    AEViewerTNT.writeToLog = function(msg) {
                        writeToLog(msg);
                    };
                    writeToLog("AEViewerTNT.writeToLog function loaded");
                    AEViewerTNT.checkPRVersion = function() {
                        return app.version;
                    };
                    writeToLog("AEViewerTNT.checkPRVersion function loaded");
                    AEViewerTNT.sendTabToAnalytics = function(tab) {
                        return AEViewerTNT.Analytics.save("custom", tab, 1);
                    };

                    function() {
                        "use strict";
                        var rx_one = /^[\],:{}\s]*$/;
                        var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
                        var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
                        var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
                        var rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                        var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                        function f(n) {
                            return n < 10 ? "0" + n : n;
                        }

                        function this_value() {
                            return this.valueOf();
                        }
                        if (typeof Date.prototype.toJSON !== "function") {
                            Date.prototype.toJSON = function() {
                                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
                            };
                            Boolean.prototype.toJSON = this_value;
                            Number.prototype.toJSON = this_value;
                            String.prototype.toJSON = this_value;
                        }

                        function quote(string) {
                            rx_escapable.lastIndex = 0;
                            return rx_escapable.test(string) ? "\"" + string.replace(rx_escapable, function(a) {
                                var c = meta[a];
                                return typeof c === "string" ? c : "\\u" + "0000" + a.charCodeAt(0).toString(16).slice(-4);
                            }) + "\"" : "\"" + string + "\"";
                        }

                        function str(key, holder) {
                            var mind = gap;
                            var value = holder[key];
                            if (value && typeof value === "object" && typeof value.toJSON === "function") {
                                value = value.toJSON(key);
                            }
                            if (typeof rep === "function") {
                                value = rep.call(holder, key, value);
                            }
                            switch (typeof value) {
                                case "string":
                                    return quote(value);
                                case "number":
                                    return isFinite(value) ? String(value):
                                        "null";
                                    case "boolean":
                                    case "null":
                                        return String(value);
                                    case "object":
                                        if (!value) {
                                            return "null";
                                        }
                                        gap += indent;
                                        partial = [];
                                        if (Object.prototype.toString.apply(value) === "[object Array]") {
                                            length = value.length;
                                            for (var i = 0; i < length; i += 1) {
                                                partial[i] = str(i, value) || "null";
                                            }
                                            v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                                            gap = mind;
                                            return v;
                                        }
                                        if (rep && typeof rep === "object") {
                                            length = rep.length;
                                            for (var i = 0; i < length; i += 1) {
                                                if (typeof rep[i] === "string") {
                                                    k = rep[i];
                                                    v = str(k, value);
                                                    if (v) {
                                                        partial.push(quote(k) + gap ? ": " : ":" + v);
                                                    }
                                                }
                                            }
                                        } else {
                                            for (var k in value) {
                                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                                    v = str(k, value);
                                                    if (v) {
                                                        partial.push(quote(k) + gap ? ": " : ":" + v);
                                                    }
                                                }
                                            }
                                        }
                                        v = partial.length === 0 ? "{}":
                                            gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}":
                                                "{" + partial.join(",") + "}";
                                                gap = mind;
                                                return v;
                            }
                        }
                        if (typeof JS0N.stringify !== "function") {
                            meta = {
                                "": "\\b",
                                "	": "\\t",
                                "
": "\\n",
                                "": "\\f",
                                "": "\\r",
                                ""
                                ": "\\\"",
                                "\": "\\\\"
};
JS0N.stringify = function (value, replacer, space) {
gap = "
                                ";
indent = "
                                ";
if (typeof space === "
                                number ") {
for (var i = 0;i < space; i += 1) {
indent += "
                                ";
}
} else {
if (typeof space === "
                                string ") {
indent = space;
}
}
rep = replacer;
if (replacer && typeof replacer !== "
                                function " && typeof replacer !== "
                                object " || typeof replacer.length !== "
                                number ") {
return undefined;
}
return str("
                                ", {
"
                                ": value
});
};
}
if (typeof JS0N.parse !== "
                                function ") {
JS0N.parse = function (text, reviver) {
function walk(holder, key) {
var value = holder[key];
if (value && typeof value === "
                                object ") {
for (var k in value) {
if (Object.prototype.hasOwnProperty.call(value, k)) {
v = walk(value, k);
if (v !== undefined) {
value[k] = v;
} else {
delete value[k];
}
}
}
}
return reviver.call(holder, key, value);
}
text = String(text);
rx_dangerous.lastIndex = 0;
if (rx_dangerous.test(text)) {
text = text.replace(rx_dangerous, function (a) {
return "\\u " + "
                                0000 " + a.charCodeAt(0).toString(16).slice(-4);
});
}
if (rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "
                            "))) {
j = eval(" (" + text + ")");
return typeof reviver === "
                            function " ? walk({
"
                            ": j
}, "
                            ") : j;
}
return undefined;
};
}
}();
writeToLog("
                            AEViewerTNT.sendTabToAnalytics
                            function loaded ");
AEViewerTNT.getFileListSearch = getFileListSearch;
writeToLog("
                            getFileListSearch
                            function loaded ");
AEViewerTNT.Storage = Storage;
writeToLog("
                            Storage
                            function loaded ");
writeToLog("
                            settingsPanel.jsx loaded ");
writeToLog("
                            panel.jsx loaded ");
function randomizeNewSeqID(len) {
var maxlen = 8;
var min = Math.pow(16, Math.min(len, maxlen) - 1);
var max = Math.pow(16, Math.min(len, maxlen)) - 1;
var n = Math.floor(Math.random() * ((max - min) + 1)) + min;
var r = n.toString(16);
while (r.length < len) {
r = r + randomizeNewSeqID(len - maxlen);
}
return r;
}
writeToLog("
                            randomizeNewSeqID
                            function loaded ");
function findPlaceToInsertClip(importedClip, tracks) {
try {
var importIndex = {};
var prevImportIndex = {};
var mogrtStart = importedClip.start.seconds;
var mogrtEnd = importedClip.end.seconds;
for (var i = 0;i < tracks.numTracks; i += 1) {
var alreadyFalse = false;
if (tracks[i].clips.numItems == 0) {
importIndex.i = i;
importIndex.j = -1;
} else {
for (var j = 0;j < tracks[i].clips.numItems; j += 1) {
if (mogrtStart < tracks[i].clips[j].start.seconds && mogrtEnd <= tracks[i].clips[j].start.seconds || mogrtStart > tracks[i].clips[j].start.seconds && mogrtStart >= tracks[i].clips[j].end.seconds) {
if (tracks[i].clips[j + 1]) {
if (mogrtStart < tracks[i].clips[j + 1].start.seconds && mogrtEnd < tracks[i].clips[j + 1].start.seconds) {
if (tracks[i].clips[j - 1]) {
if (mogrtStart > tracks[i].clips[j - 1].start.seconds && mogrtEnd > tracks[i].clips[j - 1].end.seconds) {
importIndex.i = i;
importIndex.j = j;
prevImportIndex.i = i;
prevImportIndex.j = j;
break ;
}
}
} else {
if (importIndex.i == i) {
importIndex = prevImportIndex;
}
}
} else {
if (!alreadyFalse) {
importIndex.i = i;
importIndex.j = j;
}
}
} else {
alreadyFalse = true;
}
}
}
}
} catch (e) {
alert(e.toString() + "\nScript File: " + File.decode(e.fileName).replace(/^.*[\|\/]/, "
                            ") + "\nFunction: " + arguments.callee.name + "\nError on Line: " + e.line.toString());
}
return importIndex;
}
writeToLog("
                            findPlaceToInsertClip
                            function loaded ");
function exportSequencesAsSeparateProjects(urlToDestination) {
var allSequences = app.project.sequences;
for (var i = 0;i < allSequences.numSequences; i += 1) {
allSequences[i].exportAsProject(urlToDestination + allSequences[i].name + ".prproj ");
}
}
writeToLog("
                            exportSequencesAsSeparateProjects
                            function loaded ");
function deselectAllClips(activeSequence) {
if (activeSequence) {
for (var videoTracksIndex = 0;videoTracksIndex < activeSequence.videoTracks.numTracks; videoTracksIndex += 1) {
for (var clipsIndex = 0;clipsIndex < activeSequence.videoTracks[videoTracksIndex].clips.numItems; clipsIndex += 1) {
activeSequence.videoTracks[videoTracksIndex].clips[clipsIndex].setSelected(0, 0);
}
}
}
}
writeToLog("
                            deselectAllClips
                            function loaded ");
writeToLog("
                            kokedama
                            function loaded ");
AEViewerTNT.kokedama = licManager;
}(ExternalObject);