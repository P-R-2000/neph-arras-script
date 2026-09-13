// ==UserScript==
// @name         Arras.io Time Travel
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Restores the Arras.io client before the March 22nd 2018 update.
// @author       P-R-2000, ContentArras, AE0hello (before retiring)
// @match        https://arras.io/
// @match        https://arrax.io/
// @match        https://arras.netlify.app/
// @icon         https://arras.io/favicon/512x512.png
// @grant        none
// ==/UserScript==
// stop the wasm
const _log = console.log;
console.log = function () {
  if (location.search.includes("disable")) return;
  console.log = _log;
  start();
  throw "prevented wasm from running";
}; // load the game code
function start() {
  window.buildDate = 1789299155082;
  document.documentElement.innerHTML = `<!DOCTYPE html><html lang="en" id="mainBody"><head><link href="https://fonts.googleapis.com/css?family=Ubuntu:400,700" rel="stylesheet"> 

<style type="text/css">
    body {
        overflow:hidden;
    }
</style>


    <!-- Meta Properties -->
    <meta charset="UTF-8">
    <title>arras.io beta</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <!-- CSS -->
    <style type="text/css">
    * {
    font-family: Ubuntu;
    font-size: 14px;
}

#turnstile-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.conceal {
    -webkit-text-security: disc;
}

#mainBody {
    background-color: #484848;
}

html, body, canvas {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

h1 {
    padding: 0;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-size: xx-large;
    font-weight: bolder;
}

h2 {
    font-size: small;
    color: #000000;
    font-weight: bold;
    text-align: center;
}

optionsHeader {
    padding: 0;
    padding-bottom: 5px;
    margin: 0;
    font-size: small;
    color: #000000;
    font-weight: bold;
    text-align: center;
}

h3 {
    font-size: small;
    color: #484848;
    font-style: italic;
    text-align: center;
}

h4 {
    font-size: small;
    color: #8ABC3F;
    text-align: center;
}

h5 {
    font-size: x-small;
    color: #484848;
    text-align: center;
}

small {
    font-size: x-small;
}

a:link, a:visited {
    color: #484848;
}
a:hover {
    color: #B5B5B9;
}

ul {
    padding-left: 15px;
    margin-left: 10px;
}

input {
    text-align: center;
    width: 100%;
    padding: 10px;
    border: solid 1px #dcdcdc;
    transition: box-shadow 0.3s, border 0.3s;
    box-sizing: border-box;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    outline: none;
}
    
input.checkbox {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    position: relative;
    top: -2px;
    *overflow: hidden;
}

#playerNameInput {
    padding: 10px;    
    font-size: larger;
}

#playerKeyInput {
    padding: 3px;    
    color: gray;
}

input:focus, input.focus {
    border: solid 1px #CCCCCC;
    box-shadow: 0 0 3px 1px #DDDDDD;
}

div {
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}

#startMenu {
    position: relative;
    margin: auto;
    width: 1150px;
    padding: 10px;
    /* margin-top: 100px; */
    margin-bottom: 100px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    background-color: #DDE6EB;
    box-sizing: border-box;
    overflow: hidden;
}
#startMenuHeader {
    text-align: left;
    width: 100%;
    height: 100%;
}

.startMenuHolder {
    width: 350px;
    height: 340px;
    padding: 10px;
    overflow: hidden;
    display: inline-block;
    vertical-align: text-top;
}

.sliderHolder {
    width: 350px;
    height: 285px;
    overflow: hidden;
}

td {
    width: 50%;
}

table {
    width: 100%;
}

.slider {
    position: relative;
    top: 0px;
    width: 100%;
    -webkit-transition: top 500ms;
    -moz-transition: top 500ms;
    -o-transition: top 500ms;
    transition: top 500ms;
}

#startMenuSlidingContent {
    height: 265px;    
}

#startMenuSlidingTrigger {
    cursor: pointer;
    height: 15px;    
}
#startMenuSlidingTrigger:hover {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

update {
    color: #D83848;
    font-weight: bold;
}

#patchNotesIFrame {
    width: 350px;
    height: 335px;
}

#patchNotes {
    padding: 10px;
    width: 90%;
    height: 100%;
    overflow: auto;
}

#startButton {
    position: relative;
    margin: auto;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: larger;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #B9E87E;
    border: 0;
    border-bottom: 2px solid #8ABC3F;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #8ABC3F;
    box-shadow: inset 0 -2px #8ABC3F;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#startButton:active, #startButton:hover {
    top: 1px;
    background: #8ABC3F;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

form {
    display: inline-block;
}

#bottomHolder {
    text-align: right;
}
#donate {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #B58EFD;
    border: 0;
    border-bottom: 2px solid #8D6ADF;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #8D6ADF;
    box-shadow: inset 0 -2px #8D6ADF;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    
}
#donate:active, #donate:hover {
    top: 1px;
    background: #8D6ADF;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

#pledge {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #f00;
    border: 0;
    border-bottom: 2px solid rgb(230, 1, 1);
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px rgb(230, 1, 1);
    box-shadow: inset 0 -2px rgb(230, 1, 1);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#pledge:active, #pledge:hover {
    top: 1px;
    background: rgb(230, 1, 1);
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#arras {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #8ABC3F;
    border: 0;
    border-bottom: 2px solid #7aa737;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #7aa737;
    box-shadow: inset 0 -2px #7aa737;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#arras:active, #arras:hover {
    top: 1px;
    background: #7aa737;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#startMenuWrapper {
    -webkit-transition: max-height 1s;
    -moz-transition: max-height 1s;
    -ms-transition: max-height 1s;
    -o-transition: max-height 1s;
    transition: max-height 1s;
    overflow: hidden;
    margin-top: 100px;
}

.nopadding {
    padding : 0;
    margin: 0;
}

#startMenu ul {
    margin: 10px;
    padding: 10px;
    margin-top: 0;
}

#startMenu .input-error {
    color: red;
    opacity: 0;
    font-size : 12px;
}

#startMenuWrapper {
    z-index: 2;
}

#gameAreaWrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    opacity: 0;
}

input [type="image"]:focus{
 border:none;
 outline: 1px solid transparent;
 border-style: none;
}

*:focus {
 outline: 1px solid transparent;
 border-style: none;
}
.menuTabs {
  height: 28px;
  margin: 0 8px;
}
.menuTab {
  font: 13px/28px Ubuntu;
  padding: 6px 12px;
  border-radius: 5px 5px 0 0;
  color: #fff !important;
  margin: 0 6px;
}
.menuTab.warning {
  background: #e90;
}
    </style>
    <!-- Version Control is gone 😂😂😂😂😂😂 -->
    <!-- Favicons -->
    <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAuhQTFRFAAAAirw/ibxAirxAirw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/ibxAirw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw/irw+ibs9ibs+ksFNvtqVpcxsksBM0uW1///+7fXip81v/P362urC8Pfn7PTgpMtqiLs8/v79kcBLrdB58vjq6PLZoclljr5Fjr5Gi7xAksFM/f780+a2k8FOsdJ+9fnv5fDUncdfibw+nMZcwNuY1Oa44O3M4u/Q1+i94O3L2Om/s9OC9Pnu5O/Sn8hhxN2e8Pbm/f793OvG6fLa+fv1////3+3KjL1CvdmTmcRX2+rD3evHstOAmMRWjb5FjL1Dpctrx9+k9fnu7vXkrNB4i71Bv9qW+fz25/HYn8hi2OnA+/35xd6hiLs7qM1w+vz2/f77o8to7vXjxt6h+fz1lsNS6fLb4+/RlMJQvdmS4+/QtdSFuteNlcJRzOKr+Pv0ospm0uW2lMFP7/bkyuCn9vrwncde7vXiyeCm9/rxnsdgzeOt9/ry0OSylcJSudeMtdWG5vDV7fXhkcBKt9aJt9aIxN2fnMdd6vPc5PDU4u7Pq891+vz31Oe5p8xujr9G7fThirxAmsVZ0OSz4e7Oqs50qM1x5/HX8/jr0+a36RQ15AAAAG10Uk5TAAAAABhcnLbO4d/JspNNEC2GyvbxvnYeE3rd/mMKLLT8mhs2yyAvzLAaFQh/9VkzyByOZSHStQ5r+e5FpXTDlLfzwJKkc2ntRB/QsQ39ZDHexXz0Vo8HK8cyxq0jKaz4lRlxDAF7921bhOB9TnaMat0AAAABYktHRKPH2u8aAAAACXBIWXMAAA7BAAAOwQG4kWvtAAACj0lEQVQ4y2NggAJGRhZWNnYOTi5uHl4+fkZGBlTAyCggKCScCwUiomLiqEoYJSSlcpGBNIeMLCOSdjl5BWTpvPyCXGFFJUa4vLIKivb8wqLi/FxpHlWoCkY1dVT5ktKy8or83FwNTbAKRi12dPnKquqa2rrcXF5tJpAFOtJo8vWlDY1NzS11ubp6zIwMjPpcMKn83Na29o7Szq7u/Pye3r7+/FwDQ6ACI4j0hAkTJ02eMnXa9PoZ3UD7c2fOmj0nX9qYkcHEFKK9e+68+fOmLFi4aPGSFqCCCUtnLF5Wl2tmzmBhCZZfvqJz5arVa9aWrFu/YeOmgrzNW7Zu256fa2XNYAM2v2HHzl0NuycAw6gub8/Ceetyt+xtBhkkbctgBzagaN/6pROgjq3bf2DJwUPbgL4AAnsGTpABh48cPZYP92nd8c76E3MgfAcGR5DIyc5TdYigmHD6yMbtUL4QWEH+mbPn8pECK+98zYUJMAUgK3LPXzw9AUlB/qXLV6AazBicQFTX1WMoCq5dvwFV4MzgAiQLbt7ajmzFhNsH7kA0SLsyuAEDqu5u573dSPId96cthTDdPRg8vYAmLH+w8iHCjrpHOx9DPeHtA4msCU/2LcvLg8k/ffb8MES5rx8wNv0DQD6fcuvu0jqQkoK6Gy8uv4S6KBCYphgZg3yB7p4z+9XrN2/zJmxevezd5cfvIfLBIaDEzyjBA/LZh49bz34qvT3jYufRzzDHhIZBEmV4BEjF2i/Xvn77Vv793jFYqJsZMkKTfWQU2HETCpcvP725Duad6BhExoiNA2ecCfn5cM/GJyQyIme9JLSsp86ajJo5UwRShdJg0o6i6Z5Y8rdSRmYcB2eWkEt2jgRCGgA7UoeVWjes9wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMi0wNlQxMzoyNzowNyswMDowMAIwJFIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMTItMDZUMTM6Mjc6MDcrMDA6MDBzbZzuAAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTQtMDUtMTIgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn3IbtAAAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQAMTkyDwByhQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAAxOTLTrCEIAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE1MTI1NjY4Mjc4EM9HAAAAD3RFWHRUaHVtYjo6U2l6ZQAwQkKUoj7sAAAAVnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vbW50bG9nL2Zhdmljb25zLzIwMTctMTItMDYvYzhlMTIyMmUxN2RiNGM0OTEyZjg0MTczYWFkMGZiMWIuaWNvLnBuZwFuHsEAAAAASUVORK5CYII=">
</head>
<body oncontextmenu="return false;" id="mainBody">
    <div id="gameAreaWrapper">
        <canvas id="gameCanvas" tabindex="1"></canvas>
        <div id="turnstile-container"></div>
    </div>
    <div id="mainWrapper">
        <div id="startMenuWrapper">
            <div id="menuTabs" class="menuTabs" style="text-align: center;">
                <span class="menuTab warning" id="siteNotice">You are using a legacy build of Arras.io! Check the changelog before using!</span>
            </div>
            <div id="startMenu">
                <div id="twitterHolder" class="startMenuHolder"></div>
                <div class="startMenuHolder">
                    <div class="sliderHolder">
                        <div class="slider" id="startMenuSlidingContent">
                            <center><img src="data:image/png;base64,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"></center>
                            <h1>arras.io beta</h1>
                            <div id="serverName"><h4 class="nopadding">Connecting...</h4></div>
                            <input type="text" autofocus="" tabindex="1" spellcheck="false" placeholder="This is the tale of:" id="playerNameInput" maxlength="24">
                            <input type="text" class="conceal" tabindex="3" placeholder="Token required." id="playerKeyInput" maxlength="64">
                        </div>
                        <div class="slider" id="startMenuSlidingTrigger"><h3 class="nopadding">view options/help 🡲</h3></div>
                        <div class="slider" id="startMenuSlidingContent"> 
                            <br>
                            <optionsheader>Controls:</optionsheader><br>
                            <table>
                                <tbody><tr>
                                    <td><b>E</b>: auto-fire</td>
                                    <td><b>C</b>: auto-spin</td>
                                </tr>
                                <tr>
                                    <td><b>R</b>: disable auto-weapons</td>
                                    <td><b>N</b>: level up (sandbox)</td>
                                </tr>
                            </tbody></table>
                            <optionsheader>Options:</optionsheader>
                            <select id="optColors" tabindex="-1">
                                <option value="normal">Light Colors</option>
                                <option value="dark">Dark Colors</option>
                                <option value="natural">Natural</option>
                                <option value="classic">Classic</option>
                                <option value="forest">Forest (Fan-made)</option>
                                <option value="midnight">Midnight (Fan-made)</option>
                                <option value="pastel">Snow (Fan-made)</option>
                                <option value="ocean">Coral Reef (Fan-made)</option>
                                <option value="badlands">Badlands (Fan-made)</option>
                                <option value="bleach">Bleach (Fan-made)</option>
                            </select>
                            <select id="optBorders" tabindex="-1">
                                <option value="normal">Soft Borders</option>
                                <option value="dark">Dark Borders</option>
                                <option value="neon">Neon Mode</option>
                                <option value="glass">Glass Mode</option>
                            </select>
                            <table>
                                <tbody><tr>
                                    <td><div>
                                        <label><input id="optScreenshotMode" tabindex="-1" class="checkbox" type="checkbox"> Screenshot Mode</label>
                                    </div></td>
                                    <td><div>
                                        <label><input id="optNoPointy" tabindex="-1" class="checkbox" type="checkbox"> Classic Traps</label>
                                    </div></td>
                                </tr><tr>
                                    <td><div>
                                        <label><input id="optFancy" tabindex="-1" class="checkbox" type="checkbox"> Low Graphics</label>
                                    </div></td>
                                    <td><div>
                                        <label><input id="optPredictive" tabindex="-1" class="checkbox" type="checkbox"> Disable Hyperactivity</label>
                                    </div></td>
                                </tr><tr>
                                </tr><tr>
                                    <td><div>
                                        <label><input id="optLevelUp" tabindex="-1" class="checkbox" type="checkbox"> Auto Level Up</label>
                                    </div></td>
                                    <td><div>
                                        <label><input id="optIncognito" tabindex="-1" class="checkbox" type="checkbox"> Incognito Mode</label>
                                    </div></td>
                                </tr><tr>
                                </tr>
                            </tbody></table>
                        </div>    
                    </div>
                    <div style="position: relative; bottom: -10px;">
                        <button id="startButton" tabindex="2">Play</button>
                    </div>
                </div>          
                <div class="startMenuHolder" allowtransparency="true">
                    <iframe id="patchNotesIFrame" seamless="seamless" frameborder="0" srcdoc="<!DOCTYPE html><html lang=&quot;en&quot; id=&quot;mainBody&quot;><head><link href=&quot;https://fonts.googleapis.com/css?family=Ubuntu:400,700&quot; rel=&quot;stylesheet&quot;> 
        

    <!-- Meta Properties -->
    <meta charset=&quot;UTF-8&quot;>
    <title>arras.io changelog</title>
    <style type=&quot;text/css&quot;>
    * {
    font-family: Ubuntu;
    font-size: 14px;
}

#turnstile-container {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.conceal {
    -webkit-text-security: disc;
}

#mainBody {
    background-color: #484848;
}

html, body, canvas {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

h1 {
    padding: 0;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: center;
    font-size: xx-large;
    font-weight: bolder;
}

h2 {
    font-size: small;
    color: #000000;
    font-weight: bold;
    text-align: center;
}

optionsHeader {
    padding: 0;
    padding-bottom: 5px;
    margin: 0;
    font-size: small;
    color: #000000;
    font-weight: bold;
    text-align: center;
}

h3 {
    font-size: small;
    color: #484848;
    font-style: italic;
    text-align: center;
}

h4 {
    font-size: small;
    color: #8ABC3F;
    text-align: center;
}

h5 {
    font-size: x-small;
    color: #484848;
    text-align: center;
}

small {
    font-size: x-small;
}

a:link, a:visited {
    color: #484848;
}
a:hover {
    color: #B5B5B9;
}

ul {
    padding-left: 15px;
    margin-left: 10px;
}

input {
    text-align: center;
    width: 100%;
    padding: 10px;
    border: solid 1px #dcdcdc;
    transition: box-shadow 0.3s, border 0.3s;
    box-sizing: border-box;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    outline: none;
}
    
input.checkbox {
    width: 13px;
    height: 13px;
    padding: 0;
    margin: 0;
    vertical-align: bottom;
    position: relative;
    top: -2px;
    *overflow: hidden;
}

#playerNameInput {
    padding: 10px;    
    font-size: larger;
}

#playerKeyInput {
    padding: 3px;    
    color: gray;
}

input:focus, input.focus {
    border: solid 1px #CCCCCC;
    box-shadow: 0 0 3px 1px #DDDDDD;
}

div {
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}

#startMenu {
    position: relative;
    margin: auto;
    width: 1150px;
    padding: 10px;
    /* margin-top: 100px; */
    margin-bottom: 100px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    background-color: #DDE6EB;
    box-sizing: border-box;
    overflow: hidden;
}
#startMenuHeader {
    text-align: left;
    width: 100%;
    height: 100%;
}

.startMenuHolder {
    width: 350px;
    height: 340px;
    padding: 10px;
    overflow: hidden;
    display: inline-block;
    vertical-align: text-top;
}

.sliderHolder {
    width: 350px;
    height: 285px;
    overflow: hidden;
}

td {
    width: 50%;
}

table {
    width: 100%;
}

.slider {
    position: relative;
    top: 0px;
    width: 100%;
    -webkit-transition: top 500ms;
    -moz-transition: top 500ms;
    -o-transition: top 500ms;
    transition: top 500ms;
}

#startMenuSlidingContent {
    height: 265px;    
}

#startMenuSlidingTrigger {
    cursor: pointer;
    height: 15px;    
}
#startMenuSlidingTrigger:hover {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}

update {
    color: #D83848;
    font-weight: bold;
}

#patchNotesIFrame {
    width: 350px;
    height: 335px;
}

#patchNotes {
    padding: 10px;
    width: 90%;
    height: 100%;
    overflow: auto;
}

#startButton {
    position: relative;
    margin: auto;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    font-size: larger;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #B9E87E;
    border: 0;
    border-bottom: 2px solid #8ABC3F;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #8ABC3F;
    box-shadow: inset 0 -2px #8ABC3F;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#startButton:active, #startButton:hover {
    top: 1px;
    background: #8ABC3F;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

form {
    display: inline-block;
}

#bottomHolder {
    text-align: right;
}
#donate {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #B58EFD;
    border: 0;
    border-bottom: 2px solid #8D6ADF;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #8D6ADF;
    box-shadow: inset 0 -2px #8D6ADF;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    
}
#donate:active, #donate:hover {
    top: 1px;
    background: #8D6ADF;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}

#pledge {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #f00;
    border: 0;
    border-bottom: 2px solid rgb(230, 1, 1);
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px rgb(230, 1, 1);
    box-shadow: inset 0 -2px rgb(230, 1, 1);
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#pledge:active, #pledge:hover {
    top: 1px;
    background: rgb(230, 1, 1);
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#arras {
    position: relative;
    text-decoration: none;
    margin: 2px;
    padding: 5px;
    width: 80px;
    box-sizing: border-box;
    font-size: smaller;
    color: white;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
    background: #8ABC3F;
    border: 0;
    border-bottom: 2px solid #7aa737;
    cursor: pointer;
    -webkit-box-shadow: inset 0 -2px #7aa737;
    box-shadow: inset 0 -2px #7aa737;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
}
#arras:active, #arras:hover {
    top: 1px;
    background: #7aa737;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#startMenuWrapper {
    -webkit-transition: max-height 1s;
    -moz-transition: max-height 1s;
    -ms-transition: max-height 1s;
    -o-transition: max-height 1s;
    transition: max-height 1s;
    overflow: hidden;
    margin-top: 100px;
}

.nopadding {
    padding : 0;
    margin: 0;
}

#startMenu ul {
    margin: 10px;
    padding: 10px;
    margin-top: 0;
}

#startMenu .input-error {
    color: red;
    opacity: 0;
    font-size : 12px;
}

#startMenuWrapper {
    z-index: 2;
}

#gameAreaWrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    opacity: 0;
}

input [type=&quot;image&quot;]:focus{
 border:none;
 outline: 1px solid transparent;
 border-style: none;
}

*:focus {
 outline: 1px solid transparent;
 border-style: none;
}
.menuTabs {
  height: 28px;
  margin: 0 8px;
}
.menuTab {
  font: 13px/28px Ubuntu;
  padding: 6px 12px;
  border-radius: 5px 5px 0 0;
  color: #fff !important;
  margin: 0 6px;
}
.menuTab.warning {
  background: #e90;
}
    </style>
<style type=&quot;text/css&quot;>
    #mainBody {
        background: none;
        background-color: transparent;
    }
</style></head>



<body id=&quot;patchNotes&quot;>
<update><b>READ BEFORE USING</b><ul>
    <li>This Arras.io Client is very far from being finished, expect bugs missing features and more!</li>
    <li>While playing on this client you might get banned so be aware of that!</li>
</ul><hr><br></update>
<b>PATCH 2026.09.12.01</b><ul>
    <li>When saving score, the save code is copied to your clipboard.</li>
    <li>You can now respawn using Enter again.</li>
    <li>Added respawn cooldown.</li>
</ul><hr><br>
<b>PATCH 2026.09.12.01</b><ul>
    <li>Fixed the constant status fetch when no server is selected.</li>
    <li>Added Cloudflare turnsile.</li>
</ul><hr><br>
<b>PATCH 2026.09.09.01</b><ul>
    <li>Added mspt to server speed.</li>
    <li>On spawn you will get 2 extra warning messages.</li>
    <li>Added proper kill credit to the death screen.</li>
    <li>Added the ability to save scores (G) (no save codes!)</li>
    <li>Added the ability button (F)</li>
    <li>Added Self-Destruct (O)</li>
    <li>Added a build date.</li>
</ul><hr><br>
<b>PATCH 2026.09.02.01</b><ul>
    <li>Removed jquery.</li>
    <li>Added auto level up.</li>
</ul><hr><br>
<b>PATCH 2026.09.01.01</b><ul>
    <li>Changed the buttons in the main menu.</li>
    <li>Now when visiting the site for the first time there will be a menu tab.</li>
    <li>Changed chat a bit.</li>
</ul><hr><br>
<b>PATCH 2026.08.31.02</b><ul>
    <li>Changed refresh to reload on the death screen.</li>
    <li>Fixed the minimap player dot.</li>
    <li>Removed the /N/D suffixes from tank names.</li>
    <li>Fixed tank upgrades.</li>
    <li>You can upgrade tanks using the GUI.</li>
    <li>You can upgrade skills using the GUI.</li>
    <li>Traps use their correct shapes.</li>
    <li>Added Chat.</li>
    <li>Fixed Server Speed</li>
</ul><hr><br>
<b>PATCH 2026.08.31.01</b><ul>
    <li>Fixed the death screen.</li>
    <li>Autofire, autospin and override now work.</li>
    <li>Fixed Upgrades, and skill upgrades.</li>
</ul><hr><br></body></html>">Patch notes go here!</iframe>
                </div>
                <div id="bottomHolder">
                    <!-- <h5 class="nopadding" style="margin:0; display:inline"></h5> -->
                    <a href="https://www.youtube.com/@contentarras" id="pledge" target="_top">Youtube</a>    
                    <a href="https://github.com/nepphhh/arrasio" id="donate" target="_top">Project Base</a>
                    <a href="https://arras.io/?disable#x" id="arras" target="_top">Arras.io</a>
                </div>  
            </div>
        </div>
    </div>
    <!-- JS -->
    <!-- <script src="//code.jquery.com/jquery-2.2.0.min.js"></script> -->
    

</body></html>`;
  "use strict";
  (() => {
    var a = {
        BUILD: "2c170ae5c3f70dd0",
        KEY_ESC: 27,
        KEY_ENTER: 13,
        KEY_CHAT: 13,
        KEY_FIREFOOD: 119,
        KEY_SPLIT: 32,
        KEY_LEFT: 65,
        KEY_UP: 87,
        KEY_RIGHT: 68,
        KEY_DOWN: 83,
        KEY_LEFT_ARROW: 37,
        KEY_UP_ARROW: 38,
        KEY_RIGHT_ARROW: 39,
        KEY_DOWN_ARROW: 40,
        KEY_AUTO_SPIN: 67,
        KEY_AUTO_FIRE: 69,
        KEY_OVER_RIDE: 82,
        KEY_UPGRADE_ATK: 49,
        KEY_UPGRADE_HTL: 50,
        KEY_UPGRADE_SPD: 51,
        KEY_UPGRADE_STR: 52,
        KEY_UPGRADE_PEN: 53,
        KEY_UPGRADE_DAM: 54,
        KEY_UPGRADE_RLD: 55,
        KEY_UPGRADE_MOB: 56,
        KEY_UPGRADE_RGN: 57,
        KEY_UPGRADE_SHI: 48,
        KEY_MOUSE_0: 32,
        KEY_MOUSE_1: 86,
        KEY_MOUSE_2: 16,
        KEY_CHOOSE_1: 89,
        KEY_CHOOSE_2: 72,
        KEY_CHOOSE_3: 85,
        KEY_CHOOSE_4: 74,
        KEY_CHOOSE_5: 73,
        KEY_CHOOSE_6: 75,
        KEY_CHOOSE_7: 79,
        KEY_CHOOSE_8: 76,
        KEY_LEVEL_UP: 78,
        KEY_FUCK_YOU: 191,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        gameWidth: 0,
        gameHeight: 0,
        xoffset: -0,
        yoffset: -0,
        gameStart: !1,
        disconnected: !1,
        died: !1,
        kicked: !1,
        continuity: !1,
        startPingTime: 0,
        toggleMassState: 0,
        backgroundColor: "#f2fbff",
        lineColor: "#000000",
        PROTOCOLS: ["arras.io#v1.4+sls+et0", "arras.io"],
        servers: [],
        allServers: [],
        selectedServer: {},
        mockups: {},
        playerList: new Map(),
        messages: []
      },
      b = {
        submitToLocalStorage: a => {
          localStorage.setItem(a + "Value", document.getElementById(a).value);
          localStorage.setItem(a + "Checked", document.getElementById(a).checked);
          return !1;
        },
        retrieveFromLocalStorage: a => {
          document.getElementById(a).value = localStorage.getItem(a + "Value");
          document.getElementById(a).checked = localStorage.getItem(a + "Checked") === "true";
          return !1;
        },
        handleLargeNumber: (b, c = !1) => {
          if (c && b == 0) {
            return "";
          }
          if (b < Math.pow(10, 3)) {
            return "" + b.toFixed(0);
          }
          if (b < Math.pow(10, 6)) {
            return (b / Math.pow(10, 3)).toFixed(2) + "k";
          }
          if (b < Math.pow(10, 9)) {
            return (b / Math.pow(10, 6)).toFixed(2) + "m";
          }
          if (b < Math.pow(10, 12)) {
            return (b / Math.pow(10, 9)).toFixed(2) + "b";
          }
          if (b < Math.pow(10, 15)) {
            return (b / Math.pow(10, 12)).toFixed(2) + "t";
          }
          return (b / Math.pow(10, 15)).toFixed(2) + "q";
        },
        rounder: (a, b = 6) => {
          if (Math.abs(a) < 1e-5) {
            a = 0;
          }
          return +a.toPrecision(b);
        },
        vector: class {
          constructor(a, b) {
            this.X = a;
            this.Y = b;
          }
          get ["x"]() {
            if (isNaN(this.X)) {
              this.X = 0;
            }
            return this.X;
          }
          get ["y"]() {
            if (isNaN(this.Y)) {
              this.Y = 0;
            }
            return this.Y;
          }
          set ["x"](a) {
            this.X = a;
          }
          set ["y"](a) {
            this.Y = a;
          }
          ["null"]() {
            this.X = 0;
            this.Y = 0;
          }
          ["isShorterThan"](a) {
            return this.x * this.x + this.y * this.y <= a * a;
          }
          get ["lengthSquared"]() {
            return Math.pow(this.x, 2) + Math.pow(this.y, 2);
          }
          get ["length"]() {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
          }
          get ["direction"]() {
            return Math.atan2(this.y, this.x);
          }
        },
        timeForHumans: a => {
          let b = a % 60;
          a /= 60;
          a = Math.floor(a);
          let c = a % 60;
          a /= 60;
          a = Math.floor(a);
          let d = a % 24;
          a /= 24;
          a = Math.floor(a);
          let e = a,
            f = "";
          function g(a, b) {
            if (a) {
              f = f + (f === "" ? "" : ", ") + a + " " + b + (a > 1 ? "s" : "");
            }
          }
          g(e, "day");
          g(d, "hour");
          g(c, "minute");
          g(b, "second");
          if (f === "") {
            f = "less than a second";
          }
          return f;
        },
        addArticle: a => {
          return new RegExp("[aeiouAEIOU]", "").test(a[0]) ? "an " + a : "a " + a;
        },
        formatLargeNumber: a => {
          return a.toString().replace(new RegExp("\\B(?=(\\d{3})+(?!\\d))", "g"), ",");
        },
        pullJSON: b => {
          let c = new XMLHttpRequest(),
            d = "/json/" + b + ".json?v=" + a.BUILD;
          console.log("Loading JSON from " + d);
          c.responseType = "json";
          return new Promise((b, a) => {
            c.open("GET", d);
            c.onload = () => {
              b(c.response);
              console.log("JSON load complete.");
            };
            c.onerror = () => {
              a(c.statusText);
              console.log("JSON load failed.");
              console.log(c.statusText);
            };
            c.send();
          });
        },
        ["calculateGunXY"](a) {
          const b = a.angle,
            c = Math.sin(b),
            d = Math.cos(b),
            e = Math.sin(a.y - b + Math.PI * 0.5) * a.x,
            f = -Math.cos(a.y - b + Math.PI * 0.5) * a.x,
            g = d * e - c * f,
            h = c * e + d * f,
            i = g * 10,
            j = h * 10;
          return {
            x: i,
            y: j
          };
        }
      },
      c = new TextDecoder(),
      d = new TextEncoder(),
      e = class {
        constructor(a) {
          this.buffer = new ArrayBuffer(a, {
            maxByteLength: 2 ** 32
          });
          this.view = new DataView(this.buffer);
          this.array = new Uint8Array(this.buffer);
          this.offset = 0;
        }
        ["check"](a) {
          if (this.buffer.byteLength - this.offset < a) {
            this.buffer.resize(this.offset + a);
          }
        }
        ["write"](a) {
          const b = d.encode(a);
          this.check(b.byteLength);
          this.array.set(b, this.offset);
          this.offset += b.byteLength;
        }
        ["writeUint8"](a) {
          this.check(1);
          this.view.setUint8(this.offset, a);
          this.offset++;
        }
        ["writeUint16"](a) {
          this.check(2);
          this.view.setUint16(this.offset, a, !0);
          this.offset += 2;
        }
        ["writeUint32"](a) {
          this.check(4);
          this.view.setUint32(this.offset, a, !0);
          this.offset += 4;
        }
        ["writeFloat"](a) {
          this.check(4);
          this.view.setFloat32(this.offset, a, !0);
          this.offset += 4;
        }
      };
    function f(a, b) {
      return a << b | a >>> 32 - b;
    }
    function g(c, e, g, h, i) {
      c[e] += c[g];
      c[i] = f(c[i] ^ c[e], 16);
      c[h] += c[i];
      c[g] = f(c[g] ^ c[h], 12);
      c[e] += c[g];
      c[i] = f(c[i] ^ c[e], 8);
      c[h] += c[i];
      c[g] = f(c[g] ^ c[h], 7);
    }
    function h(a) {
      const b = new Int32Array(16);
      b.set(a);
      for (let c = 0; c < 10; c++) {
        g(b, 0, 4, 8, 12);
        g(b, 1, 5, 9, 13);
        g(b, 2, 6, 10, 14);
        g(b, 3, 7, 11, 15);
        g(b, 0, 5, 10, 15);
        g(b, 1, 6, 11, 12);
        g(b, 2, 7, 8, 13);
        g(b, 3, 4, 9, 14);
      }
      for (let c = 0; c < 16; c++) b[c] = a[c] + b[c];
      return new Uint8Array(b.buffer);
    }
    function i(a, b) {
      const c = BigInt(a),
        d = 1n << BigInt(b - 1),
        e = 1n << BigInt(b);
      return Number(c & d ? c - e : c);
    }
    function j(a, b) {
      if (a < 0) {
        return a + 2 ** b;
      }
      return a;
    }
    function k(a, b) {
      return {
        number: {
          unsigned: a,
          get ["signed"]() {
            if (!b) {
              return a <= 96 ? a : a - 192;
            }
            return i(a, b);
          },
          get ["bool"]() {
            return a !== 0;
          }
        }
      };
    }
    function l(a) {
      return {
        number: {
          signed: a,
          unsigned: a
        }
      };
    }
    function n(a) {
      return {
        string: {
          value: a
        }
      };
    }
    function o(a) {
      return {
        signed: !0,
        value: a
      };
    }
    function p(a) {
      return {
        unsigned: !0,
        value: a
      };
    }
    var q = class {
        constructor(a) {
          this.key = a;
          this.sentPacketCount = 0n;
          this.receivedPacketCount = 0n;
          const b = new ArrayBuffer(64);
          this.encryptState = new DataView(b);
          this.encryptState.setBigInt64(0, 3684054920433006693n, !0);
          this.encryptState.setBigInt64(8, 7719281312240119090n, !0);
          this.encryptState.setBigInt64(16, this.key[0], !0);
          this.encryptState.setBigInt64(24, this.key[1], !0);
          this.encryptState.setBigInt64(32, this.key[2], !0);
          this.encryptState.setBigInt64(40, this.key[3], !0);
          this.encryptState.setInt32(52, 0, !0);
          this.encryptStateArray = new Int32Array(b);
          const c = new ArrayBuffer(64);
          this.decryptState = new DataView(c);
          this.decryptState.setBigInt64(0, 3684054920433006693n, !0);
          this.decryptState.setBigInt64(8, 7719281312240119090n, !0);
          this.decryptState.setBigInt64(16, this.key[0], !0);
          this.decryptState.setBigInt64(24, this.key[1], !0);
          this.decryptState.setBigInt64(32, this.key[2], !0);
          this.decryptState.setBigInt64(40, this.key[3], !0);
          this.decryptState.setInt32(52, 0, !0);
          this.decryptState.setInt32(60, -2147483648, !0);
          this.decryptStateArray = new Int32Array(c);
        }
        async ["encrypt"](a) {
          this.sentPacketCount++;
          const b = this.sentPacketCount - 1n,
            c = a.length,
            d = new ArrayBuffer(c + 6),
            e = new DataView(d);
          this.encryptState.setInt32(56, Number(BigInt.asIntN(32, b)), !0);
          this.encryptState.setInt32(60, Number(BigInt.asIntN(32, b >> 32n)), !0);
          for (let f = 0; f < c; f += 64) {
            this.encryptState.setInt32(48, f / 64, !0);
            const g = h(this.encryptStateArray);
            for (let i = 0; i < 64 && f + i < c; i++) e.setUint8(f + i, a[f + i] ^ g[i], !0);
          }
          const k = new ArrayBuffer(c + 40),
            l = new DataView(k);
          new Uint8Array(k).set(new Uint8Array(d));
          l.setBigInt64(c, this.key[0], !0);
          l.setBigInt64(c + 8, this.key[1], !0);
          l.setBigInt64(c + 16, this.key[2], !0);
          l.setBigInt64(c + 24, this.key[3], !0);
          l.setBigInt64(c + 32, b, !0);
          const n = await crypto.subtle.digest("SHA-256", k),
            o = new DataView(n);
          e.setInt32(c, o.getInt32(0, !0), !0);
          e.setInt16(c + 4, o.getInt16(4, !0), !0);
          return d;
        }
        ["decrypt"](a) {
          this.receivedPacketCount++;
          const b = this.receivedPacketCount - 1n,
            c = new Uint8Array(a),
            d = c.length,
            e = new ArrayBuffer(d),
            f = new DataView(e);
          this.decryptState.setInt32(56, Number(BigInt.asIntN(32, b)), !0);
          for (let g = 0; g < d; g += 64) {
            this.decryptState.setInt32(48, g / 64, !0);
            const i = h(this.decryptStateArray);
            for (let k = 0; k < 64 && g + k < d; k++) f.setUint8(g + k, c[g + k] ^ i[k], !0);
          }
          return new Uint8Array(e);
        }
        ["decode"](a) {
          const b = new DataView(a.buffer),
            d = [String.fromCharCode(a[0])];
          for (let e = 1; e < a.length; e++) {
            const f = a[e];
            switch (!0) {
              case f <= 191:
                d.push(k(f));
                break;
              case f >= 192 && f <= 223:
                d.push(n(c.decode(a.slice(e + 1, e + 1 + f - 192))));
                e += f - 192;
                break;
              case f >= 224 && f <= 239:
                d.push(k(f - 224 << 8 | a[e + 1], 12));
                e++;
                break;
              case f >= 240 && f < 248:
                d.push(k(f - 240 << 16 | a[e + 1] << 8 | a[e + 2], 19));
                e += 2;
                break;
              case f === 248:
                d.push(k(a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3], 25));
                e += 3;
                break;
              case f === 249:
                d.push(k(16777216 + (a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3]), 25));
                e += 3;
                break;
              case f === 252:
                d.push(k(b.getUint32(e + 1), 32));
                e += 4;
                break;
              case f === 254:
                let g = b.getUint16(e + 1, !0);
                e += 2;
                if (g === 0) {
                  g = b.getUint16(e + 1, !0);
                  e += 4;
                }
                d.push(n(c.decode(a.slice(e + 1, e + 1 + g))));
                e += g;
                break;
              case f === 255:
                d.push(l(b.getFloat32(e + 1, !0)));
                e += 4;
                break;
              default:
                console.log(a);
                console.log(f);
                console.log(e);
                throw "unknown packet code";
            }
          }
          return d;
        }
        ["encode"](a) {
          const b = new e(a.length);
          b.write(a[0]);
          for (let c = 1; c < a.length; c++) {
            let d = a[c];
            switch (typeof d) {
              case "string":
                d.length >= 65536 ? (b.writeUint16(254), b.writeUint8(0), b.writeUint32(d.length), b.write(d)) : d.length >= 32 ? (b.writeUint8(254), b.writeUint16(d.length), b.write(d)) : (b.writeUint8(192 + d.length), b.write(d));
                break;
              case "object":
                let f = d.value;
                if (Number.isInteger(f)) {
                  if (d.unsigned) {
                    if (f <= 191) {
                      b.writeUint8(f);
                    } else {
                      if (f < 2 ** 12) {
                        b.writeUint8(224 + (f >>> 8));
                        b.writeUint8(f & 255);
                      } else {
                        if (f < 2 ** 19) {
                          b.writeUint8(240 + (f >>> 16));
                          b.writeUint8(f >>> 8 & 255);
                          b.writeUint8(f & 255);
                        } else {
                          if (f < 2 ** 24) {
                            b.writeUint8(248);
                            b.writeUint8(f >>> 16);
                            b.writeUint8(f >>> 8 & 255);
                            b.writeUint8(f & 255);
                          } else {
                            if (f < 2 ** 25) {
                              b.writeUint8(249);
                              b.writeUint8(f >>> 16 & 255);
                              b.writeUint8(f >>> 8 & 255);
                              b.writeUint8(f & 255);
                            } else {
                              if (f < 2 ** 32) {
                                b.writeUint8(252);
                                b.writeUint8(f >>> 24);
                                b.writeUint8(f >>> 16 & 255);
                                b.writeUint8(f >>> 8 & 255);
                                b.writeUint8(f & 255);
                              } else {
                                throw "unknown packet number type";
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    if (f >= -95 && f <= 96) {
                      b.writeUint8(f >= 0 ? f : f + 192);
                    } else {
                      if (f >= -(2 ** 11) && f < 2 ** 11) {
                        f = j(f, 12);
                        b.writeUint8(224 + (f >>> 8));
                        b.writeUint8(f & 255);
                      } else {
                        if (f >= -(2 ** 18) && f < 2 ** 18) {
                          f = j(f, 19);
                          b.writeUint8(240 + (f >>> 16));
                          b.writeUint8(f >>> 8 & 255);
                          b.writeUint8(f & 255);
                        } else {
                          if (f >= -(2 ** 24) && f < 2 ** 24) {
                            f = j(f, 25);
                            b.writeUint8(f & 16777216 ? 249 : 248);
                            b.writeUint8(f >>> 16 & 255);
                            b.writeUint8(f >>> 8 & 255);
                            b.writeUint8(f & 255);
                          } else {
                            if (f >= -(2 ** 31) && f < 2 ** 31) {
                              f = j(f, 32);
                              b.writeUint8(252);
                              b.writeUint8(f >>> 24);
                              b.writeUint8(f >>> 16 & 255);
                              b.writeUint8(f >>> 8 & 255);
                              b.writeUint8(f & 255);
                            } else {
                              throw "unknown packet number type";
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  b.writeUint8(255);
                  b.writeFloat(f);
                }
                break;
              default:
                throw "unknown packet data type";
            }
          }
          return new Uint8Array(b.buffer);
        }
      },
      r = {
        ["k"](a = "", b = "", c = "") {
          return ["k", a, b, c];
        },
        ["T"](a) {
          return ["T", JSON.stringify(a)];
        },
        ["p"]() {
          return ["p"];
        },
        ["s"](a = "", b = "", {
          autoLevelUp: c,
          incognito: d
        } = {}) {
          return ["s", a, b, p(c | d << 1)];
        },
        ["e"](a, b) {
          return ["e", a, b];
        },
        ["R"](a, b) {
          return ["R", a, b];
        },
        ["G"](a, b) {
          return ["G", a, b, ""];
        },
        ["U"](a) {
          return ["U", p(a)];
        },
        ["x"](a, b = "add", c) {
          switch (b) {
            case "add":
              return ["x", p(a), o(-1)];
            case "max":
              return ["x", p(a), o(255)];
            case "set":
              return ["x", p(a), o(c)];
          }
        },
        ["C"](a, b, {
          up: c,
          down: d,
          left: e,
          right: f,
          lmb: g,
          rmb: h
        } = {}) {
          return ["C", o(a), o(b), p(c | d << 1 | e << 2 | f << 3 | g << 4 | h << 6)];
        },
        ["t"](a) {
          return ["t", p(["autofire", "autospin", "override", "reverse"].indexOf(a))];
        },
        ["L"]() {
          return ["L"];
        },
        0(a, b) {
          return ["0", a, p(b)];
        },
        ["M"](a) {
          return ["M", a];
        },
        ["P"](a, b) {
          return ["P", p(["promote", "demote", "kick"].indexOf(a)), p(b)];
        },
        ["K"]() {
          return ["K"];
        },
        ["A"]() {
          return ["A"];
        },
        ["D"]() {
          return ["D"];
        }
      },
      s = {
        ["R"](a) {
          let b = 0;
          const c = Object.fromEntries(a[b++].string.value.split(",").map(a => {
              return a.split("=");
            })),
            d = a[b++].number.signed,
            e = a[b++].number.signed,
            f = a[b++].number.signed,
            g = a[b++].number.signed,
            h = a[b++].string.value,
            i = a[b++].number.unsigned,
            j = a[b++].number.unsigned,
            k = Array(j).fill().map(() => {
              return Array(i);
            });
          for (let l = 0; l < j; l++) for (let n = 0; n < i; n++) k[l][n] = a[b++].number.signed;
          return {
            info: c,
            roomX1: d,
            roomY1: e,
            roomX2: f,
            roomY2: g,
            tiles: k
          };
        },
        ["u"](a) {
          let b = 0;
          const c = {
              bodyX: a[b++].number.signed,
              bodyY: a[b++].number.signed,
              bodyFov: a[b++].number.unsigned,
              killed: [],
              removed: [],
              changed: []
            },
            d = a[b++].number.unsigned;
          if (d & 1 << 0) {
            c.mspt = a[b++].number.unsigned;
          }
          if (d & 1 << 1) {
            c.speed = a[b++].number.unsigned;
          }
          if (d & 1 << 2) {
            c.mockupIndex = a[b++].number.unsigned;
            b++;
          }
          if (d & 1 << 3) {
            c.color = a[b++].number.signed;
            c.id = a[b++].number.unsigned;
          }
          if (d & 1 << 4) {
            c.score = a[b++].number.unsigned;
          }
          if (d & 1 << 5) {
            c.kills = {
              player: a[b++].number.unsigned,
              assist: a[b++].number.unsigned,
              boss: a[b++].number.unsigned,
              food: a[b++].number.unsigned
            };
          }
          if (d & 1 << 6) {
            c.skillPoints = a[b++].number.unsigned;
          }
          if (d & 1 << 7) {
            c.maxSkills = [];
            for (let e = 0; e < 10; e++) c.maxSkills.push(a[b++].number.unsigned);
          }
          if (d & 1 << 8) {
            c.skills = [];
            for (let e = 0; e < 10; e++) c.skills.push(a[b++].number.unsigned);
          }
          if (d & 1 << 9) {
            const f = a[b++].number.unsigned;
            c.upgrades = [];
            for (let e = 0; e < f; e++) c.upgrades.push(a[b++].number.unsigned);
          }
          if (d & 1 << 10) {
            c.partyCode = a[b++].string.value;
          }
          if (d & 1 << 11) {
            c.operatorLevel = a[b++].number.unsigned;
          }
          while (a[b].number.signed !== -1) c.killed.push({
            id: a[b++].number.unsigned
          });
          b++;
          while (a[b].number.signed !== -1) c.removed.push({
            id: a[b++].number.unsigned
          });
          b++;
          function g() {
            const c = {},
              d = a[b++].number.unsigned;
            if (d & 1 << 0) {
              c.vx = a[b++].number.signed / 4;
              c.vy = a[b++].number.signed / 4;
            }
            if (d & 1 << 1) {
              c.vfacing = a[b++].number.signed * Math.PI / 512;
            }
            if (d & 1 << 2) {
              c.index = a[b++].number.unsigned;
            }
            if (d & 1 << 3) {
              c.guns = {};
              while (a[b].number.signed !== -1) {
                const e = a[b++].number.unsigned,
                  f = a[b++].number.unsigned,
                  h = {};
                if (f & 1 << 0) {
                  h.time = a[b++].number.unsigned;
                }
                if (f & 1 << 1) {
                  h.power = a[b++].number.unsigned;
                }
                c.guns[e] = h;
              }
              b++;
            }
            if (d & 1 << 4) {
              c.turrets = {};
              while (a[b].number.signed !== -1) {
                const j = a[b++].number.unsigned;
                c.turrets[j] = g();
              }
              b++;
            }
            if (d & 1 << 5) {
              const k = a[b++].number.unsigned;
              c.autoSpin = Boolean(k & 1 << 0);
              c.reverseTank = Boolean(k & 1 << 1);
              Boolean(k & 1 << 2);
              c.invuln = Boolean(k & 1 << 3);
              c.damage = Boolean(k & 1 << 4);
              Boolean(k & 1 << 5);
            }
            if (d & 1 << 6) {
              c.health = a[b++].number.unsigned / 255;
            }
            if (d & 1 << 7) {
              c.shield = a[b++].number.unsigned / 255;
            }
            if (d & 1 << 8) {
              c.alpha = a[b++].number.unsigned / 255;
            }
            if (d & 1 << 9) {
              c.size = a[b++].number.unsigned * 0.0625;
            }
            if (d & 1 << 10) {
              c.score = a[b++].number.unsigned;
            }
            if (d & 1 << 11) {
              c.name = a[b++].string.value;
            }
            if (d & 1 << 12) {
              c.color = a[b++].number.signed;
            }
            if (d & 1 << 13) {
              c.layer = a[b++].number.signed;
            }
            return c;
          }
          while (b < a.length - 1) {
            const h = a[b++].number.unsigned,
              i = g();
            i.id = h;
            c.changed.push(i);
          }
          return c;
        },
        ["w"](a) {
          return {
            playerId: a[0].string.value
          };
        },
        ["P"](a) {
          const b = [],
            c = [];
          let d = 0;
          const e = a[d++].number.unsigned;
          for (let f = 0; f < e; f++) b.push({
            socketId: a[d++].number.unsigned
          });
          const g = a[d++].number.unsigned;
          for (let f = 0; f < g; f++) {
            const h = a[d++].number.unsigned,
              i = a[d++].number.unsigned,
              k = a[d++].string.value,
              l = a[d++].number.signed;
            c.push({
              socketId: h,
              self: Boolean(i & 1),
              operatorLevel: i >> 1,
              name: k,
              mockupIndex: l
            });
          }
          return {
            removed: b,
            changed: c
          };
        },
        ["m"](a) {
          return {
            message: a[0].string.value
          };
        },
        ["J"](a) {
          const b = {};
          let c = 0;
          const d = a[c++].number.unsigned;
          for (let e = 0; e < d; e++) {
            const f = {};
            f.mockupIndex = a[c++].number.unsigned;
            f.name = a[c++].string.value;
            f.scoreText = a[c++].string.value;
            f.color = a[c++].number.signed;
            f.shape = a[c++].number.signed;
            if (f.shape === 2048) {
              const g = a[c++].number.unsigned;
              f.shape = [];
              for (let h = 0; h < g; h++) f.shape.push([a[c++].number.signed, a[c++].number.signed]);
            }
            f.entityType = a[c++].number.unsigned;
            f.shootsType = a[c++].number.unsigned;
            f.offset = a[c++].number.signed;
            f.size = a[c++].number.signed;
            const i = a[c++].number.unsigned;
            f.upgrades = [];
            for (let h = 0; h < i; h++) f.upgrades.push({
              tier: a[c++].number.unsigned,
              mockupIndex: a[c++].number.unsigned
            });
            const l = a[c++].number.unsigned;
            f.guns = [];
            for (let h = 0; h < l; h++) f.guns.push({
              x: a[c++].number.signed,
              y: a[c++].number.signed,
              length: a[c++].number.signed,
              width: a[c++].number.signed,
              aspect: a[c++].number.signed,
              angle: a[c++].number.signed
            });
            const n = a[c++].number.unsigned;
            f.turrets = [];
            for (let h = 0; h < n; h++) f.turrets.push({
              mockupIndex: a[c++].number.unsigned,
              scale: a[c++].number.signed,
              offset: a[c++].number.signed,
              direction: a[c++].number.signed,
              renderOnTop: a[c++].number.bool,
              angle: a[c++].number.signed
            });
            b[f.mockupIndex] = f;
          }
          return {
            mockups: b
          };
        },
        ["C"](a) {
          return {
            input: a[0].string.value
          };
        },
        ["e"](a) {
          return {
            id: a[0].string.value,
            code: a[1].string.value
          };
        },
        ["G"](a) {
          return {
            id: a[0].string.value,
            sitekey: a[1].string.value
          };
        },
        ["p"]() {
          return {};
        },
        ["b"](a) {
          const b = [],
            c = [],
            d = [],
            e = [],
            f = [],
            g = [];
          let h = 0,
            i = a[h++].number;
          i.signed === -1 ? i = i.signed : i = i.unsigned;
          for (let k = 0; k < i; k++) b.push({
            id: a[h++].number.unsigned
          });
          let l = a[h++].number;
          l.signed === -1 ? l = l.signed : l = l.unsigned;
          for (let k = 0; k < l; k++) c.push({
            id: a[h++].number.unsigned,
            type: a[h++].number.unsigned,
            x: a[h++].number.signed / 255,
            y: a[h++].number.signed / 255,
            color: a[h++].number.signed,
            size: a[h++].number.unsigned
          });
          let n = a[h++].number;
          n.signed === -1 ? n = n.signed : n = n.unsigned;
          for (let k = 0; k < n; k++) d.push({
            id: a[h++].number.unsigned
          });
          let o = a[h++].number;
          o.signed === -1 ? o = o.signed : o = o.unsigned;
          for (let k = 0; k < o; k++) e.push({
            id: a[h++].number.unsigned,
            x: a[h++].number.signed / 255,
            y: a[h++].number.signed / 255,
            color: a[h++].number.signed
          });
          let p = a[h++].number;
          p.signed === -1 ? p = p.signed : p = p.unsigned;
          for (let k = 0; k < p; k++) f.push({
            id: a[h++].number.unsigned
          });
          let q = a[h++].number;
          q.signed === -1 ? q = q.signed : q = q.unsigned;
          for (let k = 0; k < q; k++) g.push({
            id: a[h++].number.unsigned,
            score: a[h++].number.unsigned,
            mockupIndex: a[h++].number.unsigned,
            name: a[h++].string.value,
            color: a[h++].number.signed,
            barColor: a[h++].number.signed
          });
          return {
            minimapChanged: c,
            minimapRemoved: b,
            teamMinimapChanged: e,
            teamMinimapRemoved: d,
            leaderboardChanged: g,
            leaderboardRemoved: f
          };
        },
        ["c"](a) {
          return {
            bodyX: a[0].number.signed,
            bodyY: a[1].number.signed,
            bodyFov: a[2].number.unsigned
          };
        },
        ["M"](a) {
          return {
            entityId: a[0].number.unsigned,
            message: a[1].string.value,
            isGlobal: a[2].number.bool
          };
        },
        ["K"](a) {
          return {
            reason: a[0].string.value
          };
        },
        ["F"](a) {
          let b = 0;
          const c = a[b++].number.unsigned,
            d = a[b++].number.unsigned,
            e = a[b++].number.unsigned,
            f = a[b++].number.unsigned,
            g = a[b++].number.unsigned,
            h = a[b++].number.unsigned,
            i = a[b++].number.unsigned,
            j = a[b++].number.unsigned,
            l = {};
          switch (j) {
            case 1:
              l.amount = a[b++];
              break;
            case 2:
              l.amount = a[b++];
              l.name = a[b++];
              break;
          }
          const n = a[b++].number.unsigned,
            o = [],
            p = n === 0 ? a[b++].number.unsigned : 0;
          for (let q = 0; q < p; q++) o.push({
            name: a[b++].string.value,
            tank: a[b++].string.value
          });
          const r = a[b++].number.unsigned,
            s = a[b++].number.unsigned,
            t = a[b++].number.unsigned,
            u = a[b++].string.value;
          return {
            time: c,
            timeAlive: e,
            score: d,
            kills: {
              player: f,
              assist: g,
              boss: h,
              food: i
            },
            killInfo: {
              type: ["none", "food", "player"][j],
              ...l
            },
            killers: o,
            deathType: ["killed", "dumb_death", "self_destruct", "surrender_control", "save_score"][n],
            serverActivity: r,
            serversTraveled: s,
            respawnTime: t + 2e3,
            saveCode: u
          };
        },
        ["r"](a) {
          return {
            server: a[0].string.value,
            travelToken: a[1].string.value
          };
        },
        ["k"](a) {
          return {
            playerToken: a[0].string.value
          };
        }
      },
      t = class {
        constructor(b) {
          this.directionLock = !1;
          this.target = a.target;
          this.reenviar = !0;
          this.socket = a.socket;
          this.directions = [];
          var c = this;
          this.cv = document.getElementById("gameCanvas");
          this.cv.width = a.screenWidth;
          this.cv.height = a.screenHeight;
          this.cv.addEventListener("mousemove", this.gameInput, !1);
          this.cv.addEventListener("keydown", this.keyboardDown, !1);
          this.cv.addEventListener("keyup", this.keyboardUp, !1);
          this.cv.addEventListener("mousedown", this.mouseDown, !1);
          this.cv.addEventListener("mouseup", this.mouseUp, !1);
          this.cv.parent = c;
          a.canvas = this;
        }
        ["keyboardDown"](b) {
          switch (b.keyCode) {
            case 13:
              {
                if (!a.died) {
                  let c = prompt("Chat Message");
                  if (c === null || c === "") {
                    return;
                  }
                  if (c.startsWith("/")) {
                    let d = c.substring(1).split(" ");
                    if (d[0] == "pl") {
                      if (d[1] == null) {
                        for (let e of a.playerList.values()) a.messages.push({
                          text: "" + e.name + " " + (e.operatorLevel == 0 ? "[PL]" : e.operatorLevel == 1 ? "[AC]" : e.operatorLevel == 2 ? "[AS]" : e.operatorLevel == 3 ? "[AO]" : ""),
                          status: 2,
                          alpha: 0,
                          time: Date.now()
                        });
                      } else {
                        if (d[1] == Number(d[1])) {
                          if (d[1] < 0 || d[1] > 3) {
                            return;
                          }
                          for (let e of a.playerList.values()) {
                            if (e.operatorLevel !== Number(d[1])) {
                              continue;
                            }
                            a.messages.push({
                              text: "" + e.name + " " + (e.operatorLevel == 0 ? "[PL]" : e.operatorLevel == 1 ? "[AC]" : e.operatorLevel == 2 ? "[AS]" : e.operatorLevel == 3 ? "[AO]" : ""),
                              status: 2,
                              alpha: 0,
                              time: Date.now()
                            });
                          }
                        }
                      }
                      a.messages.push({
                        text: "Player List:",
                        status: 2,
                        alpha: 0,
                        time: Date.now()
                      });
                      a.messages.push({
                        text: "Operator Level: " + (d[1] == 0 ? "[PL]" : d[1] == 1 ? "[AC]" : d[1] == 2 ? "[AS]" : d[1] == 3 ? "[AO]" : "[Unknown]"),
                        status: 2,
                        alpha: 0,
                        time: Date.now()
                      });
                    }
                    return;
                  }
                  this.parent.socket.talk(r.M(c));
                }
                if (a.died) {
                  if (a.respawnTime <= 0) {
                    this.parent.socket.talk(r.s(a.playerName));
                    a.died = !1;
                  }
                }
              }
              break;
            case a.KEY_UP_ARROW:
            case a.KEY_UP:
              this.parent.socket.cmd.set("up", !0);
              break;
            case a.KEY_DOWN_ARROW:
            case a.KEY_DOWN:
              this.parent.socket.cmd.set("down", !0);
              break;
            case a.KEY_LEFT_ARROW:
            case a.KEY_LEFT:
              this.parent.socket.cmd.set("left", !0);
              break;
            case a.KEY_RIGHT_ARROW:
            case a.KEY_RIGHT:
              this.parent.socket.cmd.set("right", !0);
              break;
            case a.KEY_MOUSE_0:
              this.parent.socket.cmd.set("lmb", !0);
              break;
            case a.KEY_MOUSE_1:
              this.parent.socket.cmd.set("mmb", !0);
              break;
            case a.KEY_MOUSE_2:
              this.parent.socket.cmd.set("rmb", !0);
              break;
            case a.KEY_LEVEL_UP:
              this.parent.socket.talk(r.L());
              break;
            case 71:
              this.parent.socket.talk(r.D());
            case 70:
              this.parent.socket.talk(r.A());
            case 79:
              this.parent.socket.talk(r.K());
          }
          if (!b.repeat) {
            switch (b.keyCode) {
              case a.KEY_AUTO_SPIN:
                this.parent.socket.talk(r.t("autospin"));
                break;
              case a.KEY_AUTO_FIRE:
                this.parent.socket.talk(r.t("autofire"));
                break;
              case a.KEY_OVER_RIDE:
                this.parent.socket.talk(r.t("override"));
                break;
            }
            if (a.canSkill) {
              switch (b.keyCode) {
                case a.KEY_UPGRADE_ATK:
                  this.parent.socket.talk(r.x(0, "add", 1));
                  break;
                case a.KEY_UPGRADE_HTL:
                  this.parent.socket.talk(r.x(1, "add", 1));
                  break;
                case a.KEY_UPGRADE_SPD:
                  this.parent.socket.talk(r.x(2, "add", 1));
                  break;
                case a.KEY_UPGRADE_STR:
                  this.parent.socket.talk(r.x(3, "add", 1));
                  break;
                case a.KEY_UPGRADE_PEN:
                  this.parent.socket.talk(r.x(4, "add", 1));
                  break;
                case a.KEY_UPGRADE_DAM:
                  this.parent.socket.talk(r.x(5, "add", 1));
                  break;
                case a.KEY_UPGRADE_RLD:
                  this.parent.socket.talk(r.x(6, "add", 1));
                  break;
                case a.KEY_UPGRADE_MOB:
                  this.parent.socket.talk(r.x(7, "add", 1));
                  break;
                case a.KEY_UPGRADE_RGN:
                  this.parent.socket.talk(r.x(8, "add", 1));
                  break;
                case a.KEY_UPGRADE_SHI:
                  this.parent.socket.talk(r.x(9, "add", 1));
                  break;
              }
            }
            if (a.canUpgrade) {
              switch (b.keyCode) {
                case a.KEY_CHOOSE_1:
                  this.parent.socket.talk(r.U(0));
                  break;
                case a.KEY_CHOOSE_2:
                  this.parent.socket.talk(r.U(1));
                  break;
                case a.KEY_CHOOSE_3:
                  this.parent.socket.talk(r.U(2));
                  break;
                case a.KEY_CHOOSE_4:
                  this.parent.socket.talk(r.U(3));
                  break;
                case a.KEY_CHOOSE_5:
                  this.parent.socket.talk(r.U(4));
                  break;
                case a.KEY_CHOOSE_6:
                  this.parent.socket.talk(r.U(5));
                  break;
                case a.KEY_CHOOSE_7:
                  this.parent.socket.talk(r.U(6));
                  break;
                case a.KEY_CHOOSE_8:
                  this.parent.socket.talk(r.U(7));
                  break;
              }
            }
          }
        }
        ["keyboardUp"](b) {
          switch (b.keyCode) {
            case a.KEY_UP_ARROW:
            case a.KEY_UP:
              this.parent.socket.cmd.set("up", !1);
              break;
            case a.KEY_DOWN_ARROW:
            case a.KEY_DOWN:
              this.parent.socket.cmd.set("down", !1);
              break;
            case a.KEY_LEFT_ARROW:
            case a.KEY_LEFT:
              this.parent.socket.cmd.set("left", !1);
              break;
            case a.KEY_RIGHT_ARROW:
            case a.KEY_RIGHT:
              this.parent.socket.cmd.set("right", !1);
              break;
            case a.KEY_MOUSE_0:
              this.parent.socket.cmd.set("lmb", !1);
              break;
            case a.KEY_MOUSE_1:
              this.parent.socket.cmd.set("mmb", !1);
              break;
            case a.KEY_MOUSE_2:
              this.parent.socket.cmd.set("rmb", !1);
              break;
          }
        }
        ["mouseDown"](b) {
          switch (b.button) {
            case 0:
              let c = {
                  x: b.clientX,
                  y: b.clientY
                },
                d = a.clickables.stat.check(c);
              if (d !== -1) {
                this.parent.socket.talk(r.x(d, "add", 1));
              } else {
                if (a.clickables.skipUpgrades.check(c) !== -1) {
                  a.clearUpgrades();
                } else {
                  let e = a.clickables.upgrade.check(c);
                  e !== -1 ? this.parent.socket.talk(r.U(e)) : this.parent.socket.cmd.set("lmb", !0);
                }
              }
              break;
            case 1:
              this.parent.socket.cmd.set("mmb", !0);
              break;
            case 2:
              this.parent.socket.cmd.set("rmb", !0);
              break;
          }
        }
        ["mouseUp"](a) {
          switch (a.button) {
            case 0:
              this.parent.socket.cmd.set("lmb", !1);
              break;
            case 1:
              this.parent.socket.cmd.set("mmb", !1);
              break;
            case 2:
              this.parent.socket.cmd.set("rmb", !1);
              break;
          }
        }
        ["gameInput"](b) {
          this.parent.target.x = b.clientX - this.width / 2;
          this.parent.target.y = b.clientY - this.height / 2;
          a.target = this.parent.target;
          a.statHover = a.clickables.hover.check({
            x: b.clientX,
            y: b.clientY
          }) === 0;
        }
      },
      u = t,
      v = {
        normal: {
          teal: "#7ADBBC",
          lgreen: "#B9E87E",
          orange: "#E7896D",
          yellow: "#FDF380",
          lavender: "#B58EFD",
          pink: "#EF99C3",
          vlgrey: "#E8EBF7",
          lgrey: "#AA9F9E",
          guiwhite: "#FFFFFF",
          black: "#484848",
          blue: "#3CA4CB",
          green: "#8ABC3F",
          red: "#E03E41",
          gold: "#EFC74B",
          purple: "#8D6ADF",
          magenta: "#CC669C",
          grey: "#A7A7AF",
          dgrey: "#726F6F",
          white: "#DBDBDB",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.65
        },
        classic: {
          teal: "#8EFFFB",
          lgreen: "#85E37D",
          orange: "#FC7676",
          yellow: "#FFEB8E",
          lavender: "#B58EFF",
          pink: "#F177DD",
          vlgrey: "#CDCDCD",
          lgrey: "#999999",
          guiwhite: "#FFFFFF",
          black: "#525252",
          blue: "#00B0E1",
          green: "#00E06C",
          red: "#F04F54",
          gold: "#FFE46B",
          purple: "#768CFC",
          magenta: "#BE7FF5",
          grey: "#999999",
          dgrey: "#545454",
          white: "#C0C0C0",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.5
        },
        dark: {
          teal: "#8975B7",
          lgreen: "#1BA01F",
          orange: "#C46748",
          yellow: "#B2B224",
          lavender: "#7D56C5",
          pink: "#B24FAE",
          vlgrey: "#1E1E1E",
          lgrey: "#3C3A3A",
          guiwhite: "#000000",
          black: "#E5E5E5",
          blue: "#379FC6",
          green: "#30B53B",
          red: "#FF6C6E",
          gold: "#FFC665",
          purple: "#9673E8",
          magenta: "#C8679B",
          grey: "#635F5F",
          dgrey: "#73747A",
          white: "#11110F",
          guiblack: "#FFFFFF",
          paletteSize: 10,
          border: 0.15
        },
        natural: {
          teal: "#76C1BB",
          lgreen: "#AAD35D",
          orange: "#E09545",
          yellow: "#FFD993",
          lavender: "#939FFF",
          pink: "#D87FB2",
          vlgrey: "#C4B6B6",
          lgrey: "#7F7F7F",
          guiwhite: "#FFFFFF",
          black: "#373834",
          blue: "#4F93B5",
          green: "#00B659",
          red: "#E14F65",
          gold: "#E5BF42",
          purple: "#8053A0",
          magenta: "#B67CAA",
          grey: "#998F8F",
          dgrey: "#494954",
          white: "#A5B2A5",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.2
        },
        forest: {
          teal: "#884AA5",
          lgreen: "#8C9B3E",
          orange: "#D16A80",
          yellow: "#97596D",
          lavender: "#499855",
          pink: "#60294F",
          vlgrey: "#DDC6B8",
          lgrey: "#7E949E",
          guiwhite: "#FFFFE8",
          black: "#665750",
          blue: "#807BB6",
          green: "#A1BE55",
          red: "#E5B05B",
          gold: "#FF4747",
          purple: "#BAC674",
          magenta: "#BA78D1",
          grey: "#998866",
          dgrey: "#529758",
          white: "#7DA060",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.7
        },
        midnight: {
          teal: "#2B9098",
          lgreen: "#4BAA5D",
          orange: "#345678",
          yellow: "#CDC684",
          lavender: "#89778E",
          pink: "#A85C90",
          vlgrey: "#CCCCCC",
          lgrey: "#A7B2B7",
          guiwhite: "#BAC6FF",
          black: "#091F28",
          blue: "#123455",
          green: "#098765",
          red: "#000013",
          gold: "#566381",
          purple: "#743784",
          magenta: "#B29098",
          grey: "#555555",
          dgrey: "#649EB7",
          white: "#444444",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.6
        },
        pastel: {
          teal: "#89BFBA",
          lgreen: "#B5D17D",
          orange: "#E5E0E0",
          yellow: "#B5BBE5",
          lavender: "#939FFF",
          pink: "#646DE5",
          vlgrey: "#B2B2B2",
          lgrey: "#7F7F7F",
          guiwhite: "#FFFFFF",
          black: "#383835",
          blue: "#AEAEFF",
          green: "#AEFFAE",
          red: "#FFAEAE",
          gold: "#FFFFFF",
          purple: "#C3C3D8",
          magenta: "#FFB5FF",
          grey: "#CCCCCC",
          dgrey: "#A0A0B2",
          white: "#F2F2F2",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.35
        },
        space: {
          teal: "#4788F3",
          lgreen: "#AF1010",
          orange: "#FF0000",
          yellow: "#82F850",
          lavender: "#FFFFFF",
          pink: "#57006C",
          vlgrey: "#FFFFFF",
          lgrey: "#272727",
          guiwhite: "#000000",
          black: "#7F7F7F",
          blue: "#0E1B92",
          green: "#0AEB80",
          red: "#C2B90A",
          gold: "#3E7E8C",
          purple: "#285911",
          magenta: "#A9707E",
          grey: "#6F6A68",
          dgrey: "#2D0738",
          white: "#000000",
          guiblack: "#FFFFFF",
          paletteSize: 10,
          border: 0.25
        },
        nebula: {
          teal: "#38B06E",
          lgreen: "#22882E",
          orange: "#D28E7F",
          yellow: "#D5D879",
          lavender: "#E084EB",
          pink: "#DF3E3E",
          vlgrey: "#F0F2CC",
          lgrey: "#7D7D7D",
          guiwhite: "#C2C5EF",
          black: "#161616",
          blue: "#9274E6",
          green: "#89F470",
          red: "#E08E5D",
          gold: "#ECDC58",
          purple: "#58CBEC",
          magenta: "#EA58EC",
          grey: "#7E5713",
          dgrey: "#303030",
          white: "#555555",
          guiblack: "#EAEAEA",
          paletteSize: 10,
          border: 0.5
        },
        bleach: {
          teal: "#00FFFF",
          lgreen: "#00FF00",
          orange: "#FF3200",
          yellow: "#FFEC00",
          lavender: "#FF24A7",
          pink: "#FF3CBD",
          vlgrey: "#FFF186",
          lgrey: "#918181",
          guiwhite: "#F1F1F1",
          black: "#5F5F5F",
          blue: "#0025FF",
          green: "#00FF00",
          red: "#FF0000",
          gold: "#FFFA23",
          purple: "#3100FF",
          magenta: "#D4D3D3",
          grey: "#838383",
          dgrey: "#4C4C4C",
          white: "#FFFEFE",
          guiblack: "#080808",
          paletteSize: 10,
          border: 0.4
        },
        ocean: {
          teal: "#76EEC6",
          lgreen: "#41AA78",
          orange: "#FF7F50",
          yellow: "#FFD250",
          lavender: "#DC3388",
          pink: "#FA8072",
          vlgrey: "#8B8886",
          lgrey: "#BFC1C2",
          guiwhite: "#FFFFFF",
          black: "#12466B",
          blue: "#4200AE",
          green: "#0D6338",
          red: "#DC4333",
          gold: "#FEA904",
          purple: "#7B4BAB",
          magenta: "#5C246E",
          grey: "#656884",
          dgrey: "#D4D7D9",
          white: "#3283BC",
          guiblack: "#000000",
          paletteSize: 10,
          border: 0.3
        },
        badlands: {
          teal: "#F9CB9C",
          lgreen: "#F1C232",
          orange: "#38761D",
          yellow: "#E69138",
          lavender: "#B7B7B7",
          pink: "#78866B",
          vlgrey: "#6AA84F",
          lgrey: "#B7B7B7",
          guiwhite: "#A4C2F4",
          black: "#000000",
          blue: "#0C5A9E",
          green: "#6E8922",
          red: "#5B0000",
          gold: "#783F04",
          purple: "#591C77",
          magenta: "#20124D",
          grey: "#2F1C16",
          dgrey: "#999999",
          white: "#543517",
          guiblack: "#CFE2F3",
          paletteSize: 10,
          border: 0.4
        }
      },
      w = document.createElement("script");
    w.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    w.defer = !0;
    document.head.appendChild(w);
    var x = {
        graphical: {
          screenshotMode: !1,
          borderChunk: 6,
          barChunk: 5,
          mininumBorderChunk: 3,
          deathBlurAmount: 3,
          darkBorders: !1,
          fancyAnimations: !0,
          colors: "normal",
          pointy: !0,
          fontSizeBoost: 1,
          neon: !1
        },
        game: {
          autoLevelUp: !1,
          incognito: !1
        },
        gui: {
          expectedMaxSkillLevel: 9
        },
        lag: {
          unresponsive: !1,
          memory: 60
        }
      },
      y = [1, 1, 1];
    for (A = 3; A < 17; A++) {
      let z = 2 * Math.PI / A;
      y.push(Math.sqrt(z * (1 / Math.sin(z))));
    }
    var A;
    y = new Proxy(y, {
      get: function (a, b) {
        if (!(b in a) && !isNaN(b)) {
          let c = 2 * Math.PI / b;
          a[b] = Math.sqrt(c * (1 / Math.sin(c)));
        }
        return a[b];
      }
    });
    var B = (() => {
        let c = [1, 1, 1];
        for (let e = 3; 256 > e; e++) {
          let f = 2 * Math.PI / e;
          c.push(Math.sqrt(f / Math.sin(f)));
        }
        return f => {
          if ("number" !== typeof f || !Number.isInteger(f)) {
            return 1;
          }
          f = Math.abs(f);
          return 256 > f ? c[f] : 1;
        };
      })(),
      C = {},
      D = (() => {
        function a(a) {
          return a.toString(16);
        }
        function b(a) {
          return parseInt(a, 16);
        }
        return (c, d, e = 0.5) => {
          if (e === 1) {
            return d;
          }
          if (e === 0) {
            return c;
          }
          var f = "#";
          for (var g = 1; g <= 6; g += 2) {
            var h = b(d.substr(g, 2)),
              i = b(c.substr(g, 2)),
              j = a(Math.floor(i + (h - i) * e));
            while (j.length < 2) j = "0" + j;
            f += j;
          }
          return f;
        };
      })();
    function E(a) {
      switch (a) {
        case 0:
          return C.teal;
        case 1:
          return C.lgreen;
        case 2:
          return C.orange;
        case 3:
          return C.yellow;
        case 4:
          return C.lavender;
        case 5:
          return C.pink;
        case 6:
          return C.vlgrey;
        case 7:
          return C.lgrey;
        case 8:
          return C.guiwhite;
        case 9:
          return C.black;
        case 10:
          return C.blue;
        case 11:
          return C.green;
        case 12:
          return C.red;
        case 13:
          return C.gold;
        case 14:
          return C.purple;
        case 15:
          return C.magenta;
        case 16:
          return C.grey;
        case 17:
          return C.dgrey;
        case 18:
          return C.white;
        case 19:
          return C.guiblack;
        default:
          return "#FF0000";
      }
    }
    function F(a) {
      let b = x.graphical.neon ? C.white : C.black;
      if (x.graphical.darkBorders) {
        return b;
      }
      return D(a, b, C.border);
    }
    function G(a, b) {
      x.graphical.neon ? (a.fillStyle = F(b), a.strokeStyle = b) : (a.fillStyle = b, a.strokeStyle = F(b));
    }
    function H(b, c = 16) {
      let d = a.mockups[b];
      return {
        time: 0,
        index: b,
        x: d?.offset || 0.2,
        y: d?.offset || 0.2,
        vx: 0,
        vy: 0,
        size: d?.size || 2,
        realSize: d?.realSize || 3,
        color: c,
        render: {
          status: {
            getFade: () => {
              return 1;
            },
            getColor: () => {
              return "#FFFFFF";
            },
            getBlend: () => {
              return 0;
            },
            health: {
              get: () => {
                return 1;
              }
            },
            shield: {
              get: () => {
                return 1;
              }
            }
          }
        },
        facing: d?.facing || 0,
        shape: d?.shape || 0,
        name: d?.name || "Missingno",
        score: 0,
        tiggle: 0,
        layer: d?.layer || 0,
        guns: {
          length: d?.guns.length,
          getPositions: () => {
            let b = [];
            d?.guns.forEach(() => {
              return b.push(0);
            });
            return b;
          },
          update: () => {}
        },
        turrets: d?.turrets.map(b => {
          let c = H(b.index);
          c.realSize = c.realSize / c.size * d?.size * b.sizeFactor;
          c.size = d?.size * b.sizeFactor;
          c.angle = b.angle;
          c.offset = b.offset;
          c.direction = b.direction;
          c.facing = b.direction + b.angle;
          return c;
        })
      };
    }
    a.clickables = (() => {
      let a = (() => {
        function a() {
          let a = {
              x: 0,
              y: 0,
              w: 0,
              h: 0
            },
            b = !1;
          return {
            set: (c, d, e, f) => {
              a.x = c;
              a.y = d;
              a.w = e;
              a.h = f;
              b = !0;
            },
            check: c => {
              let d = Math.round(c.x - a.x),
                e = Math.round(c.y - a.y);
              return b && d >= 0 && e >= 0 && d <= a.w && e <= a.h;
            },
            hide: () => {
              b = !1;
            }
          };
        }
        return b => {
          let c = [];
          for (let d = 0; d < b; d++) c.push(a());
          return {
            place: (b, ...d) => {
              if (b >= c.length) {
                console.log(b);
                console.log(c);
                throw new Error("Trying to reference a clickable outside a region!");
              }
              c[b].set(...d);
            },
            hide: () => {
              c.forEach(b => {
                return b.hide();
              });
            },
            check: b => {
              return c.findIndex(c => {
                return c.check(b);
              });
            }
          };
        };
      })();
      return {
        stat: a(10),
        upgrade: a(20),
        hover: a(1),
        skipUpgrades: a(1)
      };
    })();
    a.statHover = !1;
    a.upgradeHover = !1;
    var I = {
        id: -1,
        x: a.screenWidth / 2,
        y: a.screenHeight / 2,
        vx: 0,
        vy: 0,
        renderx: a.screenWidth / 2,
        rendery: a.screenHeight / 2,
        renderv: 1,
        slip: 0,
        view: 1,
        time: 0,
        screenWidth: a.screenWidth,
        screenHeight: a.screenHeight,
        target: {
          x: a.screenWidth / 2,
          y: a.screenHeight / 2
        }
      },
      J = [],
      K = [],
      L = 0,
      M = {
        latency: 0,
        lag: 0,
        rendertime: 0,
        updatetime: 0,
        lastlag: 0,
        lastrender: 0,
        rendergap: 0,
        lastuplink: 0
      },
      N = 0,
      O = 0,
      P = 0,
      Q = {
        x: I.x,
        y: I.y
      },
      R = [[18]],
      S = 0,
      T = {
        getStatNames: a => {
          switch (a) {
            case 1:
              return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Engine Acceleration", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            case 2:
              return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Respawn Rate", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            case 3:
              return ["Body Damage", "Max Health", "Drone Speed", "Drone Health", "Drone Penetration", "Drone Damage", "Max Drone Count", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            case 4:
              return ["Body Damage", "Max Health", "Swarm Speed", "Swarm Health", "Swarm Penetration", "Swarm Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            case 5:
              return ["Body Damage", "Max Health", "Placement Speed", "Trap Health", "Trap Penetration", "Trap Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            case 6:
              return ["Body Damage", "Max Health", "Weapon Speed", "Weapon Health", "Weapon Penetration", "Weapon Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
            default:
              return ["Body Damage", "Max Health", "Bullet Speed", "Bullet Health", "Bullet Penetration", "Bullet Damage", "Reload", "Movement Speed", "Shield Regeneration", "Shield Capacity"];
          }
        },
        skills: [{
          amount: 0,
          color: "purple",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "pink",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "blue",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "lgreen",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "red",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "yellow",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "green",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "teal",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "gold",
          cap: 1,
          softcap: 1
        }, {
          amount: 0,
          color: "orange",
          cap: 1,
          softcap: 1
        }],
        points: 0,
        upgrades: [],
        playerid: -1,
        __s: (() => {
          let a = 0,
            b = 0,
            c = 0,
            d = ah(0, 10);
          return {
            setScore: a => {
              if (a) {
                d.set(a);
                if (b > d.get()) {
                  c = 0;
                  b = 0;
                }
              } else {
                d = ah(0, 10);
                c = 0;
              }
            },
            update: () => {
              a = Math.ceil(1.8 * Math.pow(c + 1, 1.8) - 2 * c + 1);
              if (d.get() - b >= a) {
                b += a;
                c++;
              }
            },
            getProgress: () => {
              return a ? Math.min(1, Math.max(0, (d.get() - b) / a)) : 0;
            },
            getScore: () => {
              return d.get();
            },
            getLevel: () => {
              return c;
            }
          };
        })(),
        type: 0,
        fps: 0,
        color: 0,
        accel: 0,
        topspeed: 1
      };
    a.clearUpgrades = () => {
      T.upgrades = [];
    };
    var U = (() => {
        let b = {};
        function c(b = "", c = 0, d = 0) {
          let e = 0,
            f = ah(0, 10);
          return {
            update: (b, c) => {
              e = b;
              f.set(c);
            },
            publish: () => {
              let g = a.mockups[e];
              return {
                image: H(e, d),
                position: g.position,
                barcolor: E(c),
                label: b === "" ? g.name : b + " - " + g.name,
                score: f.get()
              };
            }
          };
        }
        return {
          get: () => {
            let c = [],
              a = 1;
            for (let d in b) {
              if (!b.hasOwnProperty(d)) {
                continue;
              }
              let f = b[d].publish();
              c.push(f);
              if (f.score > a) {
                a = f.score;
              }
            }
            c.sort((c, d) => {
              return d.score - c.score;
            });
            return {
              data: c,
              max: a
            };
          },
          remove: c => {
            if (b["_" + c] === void 0) {
              console.log("Warning: Asked to removed an unknown leaderboard entry.");
              return -1;
            }
            delete b["_" + c];
          },
          add: a => {
            let d = c(a.name, a.barcolor, a.color);
            d.update(a.index, a.score);
            b["_" + a.id] = d;
          },
          update: c => {
            if (b["_" + c.id] === void 0) {
              console.log("Warning: Asked to update an unknown leaderboard entry.");
              return -1;
            }
            b["_" + c.id].update(c.index, c.score);
          },
          purge: () => {
            b = {};
          }
        };
      })(),
      V = () => {
        return Math.max(a.screenWidth / I.renderv, a.screenHeight / I.renderv / 9 * 16);
      };
    a.target = Q;
    a.player = I;
    a.canUpgrade = !1;
    a.canSkill = !1;
    a.message = "";
    a.time = 0;
    a.mobile = new RegExp("Android|webOS|iPhone|iPad|iPod|BlackBerry", "i").test(navigator.userAgent);
    var W = "Unknown Server",
      X = -1;
    function Y(b) {
      fetch(b).then(b => {
        if (!b.ok) {
          console.error("Failed to load servers");
        }
        return b.json();
      }).then(b => {
        a.servers = Z(b.status);
        a.allServers = b.status;
        aa();
      })["catch"](b => {
        console.error(b);
      });
    }
    Y("https://qrp6ujau11f36bnm-c.uvwx.xyz:8443/2222/status");
    function Z(a) {
      if (!a) {
        return console.log("no data twin");
      }
      const b = Object.values(a);
      return b.filter(a => {
        return a.name && a.name.length < 3 && a.online;
      });
    }
    function aa() {
      a.selectedServer = a.allServers[location.hash.slice(1)];
      W = "#" + a.selectedServer.name + " :" + a.selectedServer.code + ":";
      document.getElementById("serverText").innerHTML = W;
      location.hash = a.selectedServer.name;
    }
    window.onhashchange = aa;
    document.getElementById("serverName").innerHTML = "<h4 style=\"font-size:xx-small\"><span class=\"nopadding\" id=\"serverText\">" + W + "</span> <a id=\"serverSwitcher\" style=\"cursor:pointer\"><u>Switch</u></a></h4>";
    document.getElementById("serverSwitcher").addEventListener("click", () => {
      if (!a.servers || a.servers.length === 0) {
        return;
      }
      X = (X + 1) % a.servers.length;
      a.selectedServer = a.servers[X];
      location.hash = a.selectedServer.name;
    });
    if (localStorage.getItem("afterFirstVisit") === "true") {
      document.getElementById("siteNotice").remove();
    }
    if (!localStorage.getItem("afterFirstVisit")) {
      localStorage.setItem("afterFirstVisit", !0);
    }
    var ab = !0;
    document.getElementById("startMenuSlidingTrigger").onclick = () => {
      ab ? (ab = !1, document.getElementById("startMenuSlidingTrigger").innerHTML = "<h3 class=\"nopadding\">close options/help \uD83E\uDC76</h3>", document.querySelectorAll(".slider").forEach(a => {
        return a.style.top = "-265px";
      })) : (ab = !0, document.getElementById("startMenuSlidingTrigger").innerHTML = "<h3 class=\"nopadding\">view options/help \uD83E\uDC72</h3>", document.querySelectorAll(".slider").forEach(a => {
        return a.style.top = "0px";
      }));
    };
    b.retrieveFromLocalStorage("playerNameInput");
    b.retrieveFromLocalStorage("playerKeyInput");
    b.retrieveFromLocalStorage("optScreenshotMode");
    b.retrieveFromLocalStorage("optPredictive");
    b.retrieveFromLocalStorage("optFancy");
    b.retrieveFromLocalStorage("optColors");
    b.retrieveFromLocalStorage("optNoPointy");
    b.retrieveFromLocalStorage("optBorders");
    b.retrieveFromLocalStorage("optLevelUp");
    b.retrieveFromLocalStorage("optIncognito");
    if (document.getElementById("optColors").value === "") {
      document.getElementById("optColors").value = "normal";
    }
    if (document.getElementById("optBorders").value === "") {
      document.getElementById("optBorders").value = "normal";
    }
    document.getElementById("startButton").onclick = () => {
      return ap();
    };
    document.onkeydown = b => {
      var c = b.which || b.keyCode;
      if (c === a.KEY_ENTER && (a.dead || !a.gameStart)) {
        ap();
      }
    };
    window.addEventListener("resize", () => {
      I.screenWidth = ac.width = a.screenWidth = window.innerWidth;
      I.screenHeight = ac.height = a.screenHeight = window.innerHeight;
    });
    window.canvas = new u();
    var ac = window.canvas.cv,
      ad = ac.getContext("2d"),
      ae = document.createElement("canvas"),
      af = ae.getContext("2d");
    af.imageSmoothingEnabled = !1;
    function ag(b, c, d, e = !1) {
      let f = V();
      d += x.graphical.borderChunk;
      if (e) {
        f *= 2;
        return b > -a.screenWidth / f - d && b < a.screenWidth / f + d && c > -a.screenHeight / f - d && c < a.screenHeight / f + d;
      }
      return b > -d && b < a.screenWidth / f + d && c > -d && c < a.screenHeight / f + d;
    }
    function ah(a, b, c = 3) {
      let d = Date.now(),
        e = a,
        f = a;
      return {
        set: b => {
          if (a !== b) {
            f = e;
            a = b;
            d = Date.now();
          }
        },
        get: () => {
          let g = (Date.now() - d) / 1e3;
          e = g < b ? f + (a - f) * Math.pow(g / b, 1 / c) : a;
          return e;
        }
      };
    }
    var ai = [],
      aj = 0,
      ak = 0,
      al = (() => {
        let a = [];
        return {
          get: () => {
            if (!a.length) {
              return 0;
            }
            var b = a.reduce(function (c, d) {
              return c + d;
            });
            return b / a.length;
          },
          add: b => {
            a.push(b);
            if (a.length > x.lag.memory) {
              a.splice(0, 1);
            }
          }
        };
      })(),
      am = () => {
        return Date.now() - aj - ak;
      },
      I = {
        vx: 0,
        vy: 0,
        lastvx: 0,
        lastvy: 0,
        renderx: I.x,
        rendery: I.y,
        lastx: I.x,
        lasty: I.y,
        target: window.canvas.target,
        name: "",
        lastUpdate: 0,
        time: 0
      },
      an = (() => {
        let b = 0,
          c = 0,
          d = 0,
          e = 0;
        return {
          reset: () => {
            b = 0;
            c = 0;
          },
          get: () => {
            if (x.lag.unresponsive) {
              return {
                x: 0,
                y: 0
              };
            }
            return {
              x: b,
              y: c
            };
          },
          iterate: f => {
            if (a.died || a.gameStart) {
              return 0;
            }
            let h = T.accel / T.topSpeed,
              i = Math.sqrt(f.x * f.x + f.y * f.y);
            d += T.accel * f.x / i;
            e += T.accel * f.y / i;
            let j = Math.sqrt(d * d + e * e);
            if (j > 0 && h) {
              let k = j / (h / S + 1);
              d = k * d / j;
              e = k * e / j;
            }
            b += d;
            c += e;
          }
        };
      })(),
      ao = (() => {
        window.WebSocket = window.WebSocket || window.MozWebSocket;
        const c = (() => {
          const c = (() => {
            let c = 0,
              a = [];
            return {
              next: () => {
                if (c >= a.length) {
                  console.log(a);
                  throw new Error("Trying to crawl past the end of the provided data!");
                } else {
                  return a[c++];
                }
              },
              set: b => {
                a = b;
                c = 0;
              }
            };
          })();
          return {
            begin: a => {
              return c.set(a);
            },
            data: (() => {
              const c = (() => {
                const a = (() => {
                  function a(a) {
                    a.isUpdated = !0;
                    if (a.motion || a.position) {
                      a.motion -= 0.2 * a.position;
                      a.position += a.motion;
                      if (a.position < 0) {
                        a.position = 0;
                        a.motion = -a.motion;
                      }
                      if (a.motion > 0) {
                        a.motion *= 0.5;
                      }
                    }
                  }
                  return b => {
                    let c = [];
                    for (let d = 0; d < b; d++) c.push({
                      motion: 0,
                      position: 0,
                      isUpdated: !0
                    });
                    return {
                      getPositions: () => {
                        return c.map(b => {
                          return b.position;
                        });
                      },
                      update: () => {
                        return c.forEach(a);
                      },
                      saveConfig: (b, d) => {
                        let a = c[b];
                        if (!a.configLoaded) {
                          a.configLoaded = !0;
                          a.time = d.time ?? 0;
                          a.power = d.power ?? 0;
                        }
                      },
                      fire: b => {
                        if (c[b].isUpdated) {
                          c[b].motion += Math.sqrt(c[b].power) / 20;
                        }
                        c[b].isUpdated = !1;
                      },
                      length: c.length
                    };
                  };
                })();
                function b() {
                  let a = "normal",
                    b = am();
                  return {
                    set: c => {
                      if (c !== a || a === "injured") {
                        if (a !== "dying") {
                          b = am();
                        }
                        a = c;
                      }
                    },
                    getFade: () => {
                      return a === "dying" || a === "killed" ? 1 - Math.min(1, (am() - b) / 300) : 1;
                    },
                    getColor: () => {
                      return "#FFFFFF";
                    },
                    getBlend: () => {
                      let c = a === "normal" || a === "dying" ? 0 : 1 - Math.min(1, (am() - b) / 80);
                      if (am() - b > 500 && a === "injured") {
                        a = "normal";
                      }
                      return c;
                    }
                  };
                }
                return (d, e) => {
                  const f = e == null,
                    g = d.index != null;
                  f ? e = {
                    x: 0,
                    y: 0,
                    facing: 0
                  } : (e.render.draws = !0, e.render.lastx = e.x, e.render.lasty = e.y, e.render.lastvx = e.vx, e.render.lastvy = e.vy, e.render.lastf = e.facing, e.render.lastRender = I.time);
                  for (const [h, i] of Object.entries(d)) {
                    if (["guns", "turrets"].includes(h)) {
                      continue;
                    }
                    e[h] = i;
                  }
                  if (d.vx != null) {
                    e.x += d.vx;
                  }
                  if (d.vy != null) {
                    e.y += d.vy;
                  }
                  if (d.vfacing != null) {
                    e.facing += d.vfacing;
                  }
                  if (d.name != null) {
                    e.nameplate = !0;
                  }
                  if (f) {
                    e.render = {
                      draws: !0,
                      expandsWithDeath: e.drawsHealth,
                      lastRender: I.time,
                      x: e.x,
                      y: e.y,
                      lastx: e.x - M.rendergap * x.roomSpeed * (1e3 / 30) * e.vx,
                      lasty: e.y - M.rendergap * x.roomSpeed * (1e3 / 30) * e.vy,
                      lastvx: e.vx,
                      lastvy: e.vy,
                      lastf: e.facing,
                      f: e.facing,
                      h: e.health,
                      s: e.shield,
                      interval: M.rendergap,
                      slip: 0,
                      status: b(),
                      health: ah(e.health, 0.5, 5),
                      shield: ah(e.shield, 0.5, 5)
                    };
                  }
                  if (d.health != null) {
                    e.render.health.set(d.health);
                  }
                  if (d.shield != null) {
                    e.render.shield.set(d.shield);
                  }
                  if (d.damage != null) {
                    e.render.status.set(d.damage ? "injured" : "normal");
                  }
                  if (d.guns != null) {
                    const j = Object.entries(d.guns);
                    if (g) {
                      e.guns = a(j.length);
                      for (const [k, l] of j) e.guns.saveConfig(k, {
                        time: l.time,
                        power: l.power
                      });
                    }
                    for (const [k, l] of j) e.guns.fire(k);
                  }
                  if (d.turrets != null) {
                    const n = Object.entries(d.turrets);
                    if (g) {
                      e.turrets = [];
                      for (const [k, o] of n) e.turrets[k] = c(o);
                    } else {
                      for (const [k, o] of n) c(o, e.turrets[k]);
                    }
                  }
                  return e;
                };
              })();
              return (a, b, d) => {
                for (const e of a) {
                  const f = J.find(a => {
                    return a.id === e.id;
                  });
                  f != null ? c(e, f) : J.push(c(e));
                }
                for (const {
                  id: g
                } of d) {
                  const h = J.findIndex(a => {
                    return a.id === g;
                  });
                  if (h >= 0) {
                    J.splice(h, 1);
                  }
                }
                for (const {
                  id: g
                } of b) {
                  const f = J.find(a => {
                    return a.id === g;
                  });
                  f.render.status.set(f.health === 1 ? "dying" : "killed");
                  f.dead = !0;
                }
                for (let i = 0; i < J.length; i++) {
                  const f = J[i];
                  if (!f.dead) {
                    continue;
                  }
                  if (f.render.status.getFade() === 0 || !ag(f.render.x - I.renderx, f.render.y - I.rendery, f.size, !0)) {
                    if (f.render.textobjs != null) {
                      f.render.textobjs.forEach(a => {
                        return a.remove();
                      });
                    }
                    J.splice(i, 1);
                    i--;
                  }
                }
                J.sort((d, e) => {
                  let f = d.layer - e.layer;
                  if (!f) {
                    f = e.id - d.id;
                  }
                  if (!f) {
                    throw new Error("tha fuq is up now");
                  }
                  return f;
                });
              };
            })(),
            gui: c => {
              if (c.mspt != null) {
                T.fps = c.mspt;
              }
              if (c.mockupIndex != null) {
                T.type = c.mockupIndex;
              }
              if (c.color != null) {
                T.color = c.color;
              }
              if (c.id != null) {
                T.playerid = c.id;
              }
              if (c.score != null) {
                T.__s.setScore(c.score);
              }
              if (c.skillPoints != null) {
                T.points = c.skillPoints;
              }
              if (c.upgrades != null) {
                T.upgrades = c.upgrades;
              }
              if (c.maxSkills != null) {
                for (let a = 0; a < T.skills.length; a++) T.skills[a].cap = T.skills[a].softcap = c.maxSkills[a];
              }
              if (c.skills != null) {
                for (let a = 0; a < T.skills.length; a++) T.skills[a].amount = c.skills[a];
              }
              if (c.speed != null) {
                T.topspeed = T.accel = c.speed;
              }
            },
            minimap: (() => {
              let b = (() => {
                function b(b, c) {
                  return b[0] === c[0] && b[1] === c[1] && b[2] === c[2];
                }
                return () => {
                  let d = c.next(),
                    e = c.next() * a.gameWidth / 255,
                    f = c.next() * a.gameHeight / 255,
                    g = c.next();
                  switch (d) {
                    case -1:
                      {
                        let h = K.findIndex(d => {
                          return b(d, [e, f, g]);
                        });
                        h === -1 ? console.log("Warning: Remove request for a minimap node we were not aware of.") : K.splice(h, 1);
                      }
                      break;
                    case 1:
                      {
                        K.push([e, f, g]);
                      }
                      break;
                    default:
                      console.log("Unknown minimap update request.");
                  }
                };
              })();
              return () => {
                for (let a = 0, d = c.next(); a < d; a++) b();
              };
            })(),
            leaderboard: () => {
              let a = !1,
                b = c.next();
              if (b === -1) {
                U.purge();
              } else {
                for (let d = 0, e = b; d < e; d++) U.remove(c.next());
              }
              for (let d = 0, e = c.next(); d < e; d++) {
                let f = c.next();
                if (f < 0) {
                  let g = {
                    id: -f,
                    score: c.next(),
                    index: c.next(),
                    name: c.next(),
                    color: c.next(),
                    barcolor: c.next()
                  };
                  U.add(g);
                } else {
                  let h = U.update({
                    id: f,
                    score: c.next(),
                    index: c.next()
                  });
                  if (h === -1) {
                    a = !0;
                  }
                }
              }
              return a;
            }
          };
        })();
        return d => {
          let e = new WebSocket("wss://" + d + "/?a=3&b=" + a.BUILD + "&t=" + Math.floor(Date.now() / 1e3), a.PROTOCOLS);
          e.binaryType = "arraybuffer";
          e.open = !1;
          e.cmd = (() => {
            let d = !1,
              f = {
                up: !1,
                down: !1,
                left: !1,
                right: !1,
                lmb: !1,
                mmb: !1,
                rmb: !1
              };
            return {
              set: (e, g) => {
                if (typeof f[e] !== "undefined") {
                  f[e] = g;
                }
                d = !0;
              },
              talk: () => {
                d = !1;
                let g = V();
                e.talk(r.C(Math.round(window.canvas.target.x / g), Math.round(window.canvas.target.y / g), f));
              },
              check: () => {
                return d;
              },
              getMotion: () => {
                return {
                  x: f.right - f.left,
                  y: f.down - f.up
                };
              }
            };
          })();
          let f;
          e.talk = async d => {
            if (!e.open) {
              return 1;
            }
            e.send(await f.encrypt(f.encode(d)));
          };
          e.addEventListener("open", () => {
            e.send(new Uint8Array([0, 1, 0, 1, ...Uint8Array.fromHex(a.BUILD).toReversed()]));
          });
          e.addEventListener("message", async d => {
            const g = await crypto.subtle.importKey("raw", d.data.slice(0, 32), "X25519", !1, []),
              c = await crypto.subtle.generateKey("X25519", !1, ["deriveBits"]),
              b = await crypto.subtle.deriveBits({
                name: "X25519",
                "public": g
              }, c.privateKey, 256);
            f = new q(new BigInt64Array(b));
            e.addEventListener("message", h);
            e.send(await crypto.subtle.exportKey("raw", c.publicKey));
            e.open = !0;
            a.message = "Something happened";
            e.talk(r.k("", a.playerKey));
            console.log("Token submitted to the server for validation.");
            e.ping = d => {
              e.talk(r.p(d));
            };
            e.commandCycle = setInterval(() => {
              if (e.cmd.check()) {
                e.cmd.talk();
              }
            });
          }, {
            once: !0
          });
          const g = new TextEncoder();
          async function h(d) {
            const h = f.decode(f.decrypt(d.data.slice(0, -6))),
              i = h.shift();
            if (!s[i]) {
              throw "Unknown packet type " + i;
            }
            const k = s[i](h);
            switch (i) {
              case "w":
                {
                  a.messages.push({
                    text: "You are using an build that dates back to 2018. Expect bugs and missing features!",
                    status: 2,
                    alpha: 0,
                    time: Date.now()
                  });
                  e.talk(r.s(a.playerName, "", {
                    autoLevelUp: x.game.autoLevelUp || !1,
                    incognito: x.game.incognito || !1
                  }));
                  e.talk(r.p());
                  break;
                }
              case "p":
                {
                  e.talk(r.p());
                  break;
                }
              case "u":
                {
                  if (k.id != null) {
                    a.gameStart = !0;
                  }
                  c.gui(k);
                  c.data(k.changed, k.killed, k.removed);
                  I.lastx = I.x;
                  I.lasty = I.y;
                  I.lastvx = I.vx;
                  I.lastvy = I.vy;
                  I.x = k.bodyX;
                  I.y = k.bodyY;
                  I.view = k.bodyFov;
                  M.rendergap = Date.now() - I.lastUpdate;
                  I.lastUpdate = Date.now();
                  if (isNaN(I.renderx)) {
                    I.renderx = I.x;
                  }
                  if (isNaN(I.rendery)) {
                    I.rendery = I.y;
                  }
                  an.reset();
                  e.cmd.talk();
                  P++;
                  break;
                }
              case "R":
                {
                  a.gameWidth = k.roomX2 - k.roomX1;
                  a.gameHeight = k.roomY2 - k.roomY1;
                  R = k.tiles;
                  x.roomSpeed = 1;
                  break;
                }
              case "c":
                {
                  I.renderx = I.x = k.bodyX;
                  I.rendery = I.y = k.bodyY;
                  I.renderv = I.view = k.bodyFov;
                  break;
                }
              case "e":
                {
                  const {
                      id: l,
                      code: o
                    } = k,
                    p = new Function(o),
                    q = p().toString();
                  e.talk(r.e(l, q));
                  break;
                }
              case "C":
                {
                  const {
                    input: t
                  } = k;
                  let u = "";
                  for (let v = 0; v < 64 ** 6; v++) {
                    let w = v;
                    u = "";
                    for (let z = 0; z < 6; z++) {
                      u = String.fromCharCode(w % 64 + 48) + u;
                      w = Math.floor(w / 64);
                    }
                    if (new Uint16Array(await crypto.subtle.digest("SHA-256", g.encode(u + t)), 0, 1)[0] === 0) {
                      break;
                    }
                  }
                  e.talk(r.R(t, u));
                  break;
                }
              case "G":
                {
                  const A = turnstile.render("#turnstile-container", {
                    sitekey: k.sitekey,
                    callback: function (d) {
                      turnstile.remove(A);
                      e.talk(r.G(k.id, d));
                    }
                  });
                  break;
                }
              case "J":
                {
                  for (const [B, C] of Object.entries(k.mockups)) {
                    C.name = C.name.replace("/D", "").replace("/N", "");
                    switch (C.shape) {
                      case 1027:
                        C.shape = -3;
                        break;
                      case 1028:
                        C.shape = -4;
                        break;
                      case 1029:
                        C.shape = -5;
                        break;
                    }
                    a.mockups[B] = C;
                    let D = a.mockups[B];
                    if (typeof D.shape === "number") {
                      D.realSize = b.rounder(D.size * y[Math.floor(Math.abs(D.shape))]);
                    }
                    if (D.guns.length) {
                      for (let E of D.guns) {
                        const F = b.calculateGunXY(E);
                        let G = new b.vector(F.x, F.y);
                        E.direction = G.direction;
                        E.offset = G.length / 10;
                      }
                    }
                  }
                  break;
                }
              case "K":
                {
                  a.message = k.reason || "Unknown";
                  a.disconnected = !0;
                  break;
                }
              case "F":
                {
                  console.log(k);
                  if (k.saveCode) {
                    prompt("Your save code is " + k.saveCode + "!\nIt has been automatically copied to your clipboard!", k.saveCode);
                    navigator.clipboard.writeText(k.saveCode);
                  }
                  if (k.respawnTime) {
                    const H = Date.now() + k.respawnTime,
                      K = setInterval(() => {
                        a.respawnTime = Math.max(-1, H - Date.now());
                        if (a.respawnTime < 0) {
                          clearInterval(K);
                        }
                      }, 50);
                  }
                  a.finalScore = ah(0, 4);
                  a.finalScore.set(k.score);
                  a.finalLifetime = ah(0, 5);
                  a.finalLifetime.set(k.timeAlive);
                  a.finalKills = [ah(0, 3), ah(0, 4.5), ah(0, 2.5)];
                  a.finalKills[0].set(k.kills.player);
                  a.finalKills[1].set(k.kills.assist);
                  a.finalKills[2].set(k.kills.boss);
                  a.finalKillers = [];
                  for (let v = 0; v < k.killers.length; v++) a.finalKillers.push(k.killers[v]);
                  a.died = !0;
                }
                break;
              case "m":
                {
                  a.messages.push({
                    text: k.message || "",
                    status: 2,
                    alpha: 0,
                    time: Date.now()
                  });
                }
                break;
              case "M":
                {
                  const L = J.find(d => {
                    return d.id == k.entityId;
                  });
                  if (L) {
                    (L.chatMsgs ??= []).push([k.message, Date.now()]);
                  }
                }
                break;
              case "P":
                {
                  const N = Array.isArray(k.changed) ? k.changed : [k.changed];
                  for (const O of N) if (O && O.socketId != null) {
                    const Q = a.playerList.get(O.socketId) || {};
                    a.playerList.set(O.socketId, {
                      ...Q,
                      ...O
                    });
                  }
                  const S = Array.isArray(k.removed) ? k.removed : [k.removed];
                  for (const O of S) if (O && O.socketId != null) {
                    a.playerList["delete"](O.socketId);
                  }
                }
                break;
            }
            return;
          }
          e.onclose = function d() {
            e.open = !1;
            a.disconnected = !0;
            clearInterval(e.commandCycle);
            window.onbeforeunload = () => {
              return !1;
            };
            console.log("Socket closed.");
          };
          e.onerror = function d(e) {
            console.log("WebSocket error: " + e);
            a.message = "Socket error. Maybe another server will work.";
          };
          return e;
        };
      })();
    function ap() {
      b.submitToLocalStorage("optScreenshotMode");
      x.graphical.screenshotMode = document.getElementById("optScreenshotMode").checked;
      b.submitToLocalStorage("optFancy");
      x.graphical.pointy = !document.getElementById("optNoPointy").checked;
      b.submitToLocalStorage("optNoPointy");
      x.graphical.fancyAnimations = !document.getElementById("optFancy").checked;
      b.submitToLocalStorage("optPredictive");
      x.lag.unresponsive = document.getElementById("optPredictive").checked;
      b.submitToLocalStorage("optLevelUp");
      x.game.autoLevelUp = document.getElementById("optLevelUp").checked;
      b.submitToLocalStorage("optIncognito");
      x.game.incognito = document.getElementById("optIncognito").checked;
      b.submitToLocalStorage("optBorders");
      switch (document.getElementById("optBorders").value) {
        case "normal":
          x.graphical.darkBorders = x.graphical.neon = !1;
          break;
        case "dark":
          x.graphical.darkBorders = !0;
          x.graphical.neon = !1;
          break;
        case "glass":
          x.graphical.darkBorders = !1;
          x.graphical.neon = !0;
          break;
        case "neon":
          x.graphical.darkBorders = x.graphical.neon = !0;
          break;
      }
      b.submitToLocalStorage("optColors");
      let c = document.getElementById("optColors").value;
      C = v[c === "" ? "normal" : c];
      let d = document.getElementById("playerNameInput"),
        e = document.getElementById("playerKeyInput");
      b.submitToLocalStorage("playerNameInput");
      b.submitToLocalStorage("playerKeyInput");
      a.playerName = I.name = d.value;
      a.playerKey = e.value.replace(new RegExp("(<([^>]+)>)", "ig"), "").substring(0, 64);
      a.screenWidth = window.innerWidth;
      a.screenHeight = window.innerHeight;
      document.getElementById("startMenuWrapper").style.maxHeight = "0px";
      document.getElementById("gameAreaWrapper").style.opacity = 1;
      if (!a.socket) {
        a.socket = ao(a.selectedServer.host);
      }
      if (!a.animLoopHandle) {
        aC();
      }
      window.canvas.socket = a.socket;
      K = [];
      setInterval(() => {
        return an.iterate(a.socket.cmd.getMotion());
      }, 1e3 / 30);
      document.getElementById("gameCanvas").focus();
    }
    function aq(b, c) {
      ad.fillStyle = b;
      ad.globalAlpha = c;
      ad.fillRect(0, 0, a.screenWidth, a.screenHeight);
      ad.globalAlpha = 1;
    }
    var ar = (() => {
        let a = document.createElement("div");
        document.body.appendChild(a);
        return (b, c, d = !1) => {
          c += x.graphical.fontSizeBoost;
          var e, f;
          a.style.font = "bold " + c + "px Ubuntu";
          a.style.padding = "0";
          a.style.margin = "0";
          a.style.position = "absolute";
          a.style.visibility = "hidden";
          a.innerHTML = b;
          e = a.clientWidth;
          f = a.clientHeight;
          return d ? {
            width: e,
            height: f
          } : e;
        };
      })(),
      as = (() => {
        let a = (a = null) => {
            let b = !0;
            return {
              update: c => {
                let d = !1;
                if (a == null) {
                  d = !0;
                } else {
                  if (typeof c != typeof a) {
                    d = !0;
                  }
                  switch (typeof c) {
                    case "number":
                    case "string":
                      {
                        if (c !== a) {
                          d = !0;
                        }
                      }
                      break;
                    case "object":
                      {
                        if (Array.isArray(c)) {
                          if (c.length !== a.length) {
                            d = !0;
                          } else {
                            for (let e = 0, f = c.length; e < f; e++) if (c[e] !== a[e]) {
                              d = !0;
                            }
                          }
                          break;
                        }
                      }
                    default:
                      console.log(c);
                      throw new Error("Unsupported type for a floppyvar!");
                  }
                }
                if (d) {
                  b = !0;
                  a = c;
                }
              },
              publish: () => {
                return a;
              },
              check: () => {
                if (b) {
                  b = !1;
                  return !0;
                }
                return !1;
              }
            };
          },
          b = 0;
        return () => {
          let c = document.createElement("canvas"),
            d = "textCanvasNo" + b++;
          c.setAttribute("id", d);
          let e = c.getContext("2d");
          e.imageSmoothingEnabled = !1;
          let f = [a(""), a(0), a(0), a(1), a("#FF0000"), a("left")],
            g = f.map(c => {
              return c.publish();
            }),
            h = 0,
            i = 0;
          return {
            draw: (c, d, g, a, b, j = "left", k = !1, l = 1) => {
              a += x.graphical.fontSizeBoost;
              f[0].update(c);
              f[1].update(d);
              f[2].update(g);
              f[3].update(a);
              f[4].update(b);
              f[5].update(j);
              if (f.some(c => {
                return c.check();
              })) {
                let n = Math.max(3, a / 5),
                  o = ar(c, a - x.graphical.fontSizeBoost, !0);
                e.canvas.height = o.height + 2 * n;
                e.canvas.width = o.width + 2 * n;
                switch (j) {
                  case "left":
                  case "start":
                    h = n;
                    break;
                  case "center":
                    h = e.canvas.width / 2;
                    break;
                  case "right":
                  case "end":
                    h = e.canvas.width - n;
                    break;
                }
                i = e.canvas.height / 2;
                e.lineWidth = n;
                e.font = "bold " + a + "px Ubuntu";
                e.textAlign = j;
                e.textBaseline = "middle";
                e.strokeStyle = C.black;
                e.fillStyle = b;
                e.lineCap = "round";
                e.lineJoin = "round";
                e.strokeText(c, h, i);
                e.fillText(c, h, i);
              }
              ad.save();
              ad.imageSmoothingEnabled = !1;
              ad.drawImage(e.canvas, d - h, g - i * (1.05 + !k * 0.45));
              ad.restore();
            },
            remove: () => {
              var c = document.getElementById(d);
              if (c != null) {
                c.parentNode.removeChild(c);
              }
            }
          };
        };
      })();
    function at(a, b, c, d, e = !1) {
      switch (e) {
        case !0:
          ad.strokeRect(a, b, c, d);
          break;
        case !1:
          ad.fillRect(a, b, c, d);
          break;
      }
    }
    function au(a, b, c, d) {
      ad.beginPath();
      ad.lineTo(Math.round(a) + 0.5, Math.round(b) + 0.5);
      ad.lineTo(Math.round(c) + 0.5, Math.round(d) + 0.5);
      ad.closePath();
      ad.stroke();
    }
    function av(a, b, c, d, e) {
      ad.beginPath();
      ad.lineTo(a, c);
      ad.lineTo(b, c);
      ad.lineWidth = d;
      ad.strokeStyle = e;
      ad.closePath();
      ad.stroke();
    }
    var aw = (() => {
      function b(b, c, a, d, e, f = 0, g = !0) {
        f += e % 2 ? 0 : Math.PI / e;
        b.beginPath();
        if (!e) {
          b.arc(c, a, d, 0, 2 * Math.PI);
        } else {
          if (e < 0) {
            if (x.graphical.pointy) {
              b.lineJoin = "miter";
            }
            let h = 1 - 6 / e / e;
            e = -e;
            b.moveTo(c + d * Math.cos(f), a + d * Math.sin(f));
            for (let i = 0; i < e; i++) {
              var j = (i + 1) / e * 2 * Math.PI,
                k = (i + 0.5) / e * 2 * Math.PI,
                l = {
                  x: c + d * h * Math.cos(k + f),
                  y: a + d * h * Math.sin(k + f)
                },
                n = {
                  x: c + d * Math.cos(j + f),
                  y: a + d * Math.sin(j + f)
                };
              b.quadraticCurveTo(l.x, l.y, n.x, n.y);
            }
          } else {
            if (e > 0) {
              for (let i = 0; i < e; i++) {
                let o = i / e * 2 * Math.PI,
                  q = c + d * Math.cos(o + f),
                  r = a + d * Math.sin(o + f);
                b.lineTo(q, r);
              }
            }
          }
        }
        b.closePath();
        b.stroke();
        if (g) {
          b.fill();
        }
        b.lineJoin = "round";
      }
      function c(b, c, a, d, e, f, g) {
        let i = [];
        i = f > 0 ? [e * f, e] : [e, -e * f];
        let j = [Math.atan2(i[0], d), Math.atan2(i[1], d)],
          k = [Math.sqrt(d * d + i[0] * i[0]), Math.sqrt(d * d + i[1] * i[1])];
        b.beginPath();
        b.lineTo(c + k[0] * Math.cos(g + j[0]), a + k[0] * Math.sin(g + j[0]));
        b.lineTo(c + k[1] * Math.cos(g + Math.PI - j[1]), a + k[1] * Math.sin(g + Math.PI - j[1]));
        b.lineTo(c + k[1] * Math.cos(g + Math.PI + j[1]), a + k[1] * Math.sin(g + Math.PI + j[1]));
        b.lineTo(c + k[0] * Math.cos(g - j[0]), a + k[0] * Math.sin(g - j[0]));
        b.closePath();
        b.stroke();
        b.fill();
      }
      return (d, e, f, h, i = 1, j = 0, k = !1, l = !1, n = !1, o = f.render) => {
        let p = l ? l : ad,
          q = n ? 1 : o.status.getFade(),
          r = i * h * f.size,
          s = a.mockups[f.index],
          u = d,
          v = e,
          w = n === !1 ? f : n;
        if (o.expandsWithDeath) {
          r *= 1 + 0.5 * (1 - q);
        }
        if (x.graphical.fancyAnimations && l != af && q !== 1) {
          p = af;
          p.canvas.width = p.canvas.height = r * s.offset + h * 20;
          u = p.canvas.width / 2 - r * s.offset * s.offset * Math.cos(j) / 4;
          v = p.canvas.height / 2 - r * s.offset * s.offset * Math.sin(j) / 4;
        }
        p.lineCap = "round";
        p.lineJoin = "round";
        if (w.turrets.length === s.turrets.length) {
          for (let z = 0; z < s.turrets.length; z++) {
            let A = s.turrets[z];
            if (A.layer === 0) {
              let F = A.direction + A.angle + j,
                H = A.offset * r;
              aw(u + H * Math.cos(F), v + H * Math.sin(F), A, h, r / h / A.size * A.sizeFactor, w.turrets[z].facing + k * j, k, p, w.turrets[z], o);
            }
          }
        } else {
          throw new Error("Mismatch turret number with mockup.");
        }
        w.guns.update();
        p.lineWidth = Math.max(x.graphical.mininumBorderChunk, h * x.graphical.borderChunk);
        G(p, D(C.grey, o.status.getColor(), o.status.getBlend()));
        if (w.guns.length === s.guns.length) {
          let I = w.guns.getPositions();
          for (let z = 0; z < s.guns.length; z++) {
            let J = s.guns[z],
              K = I[z] / (J.aspect === 1 ? 2 : 1),
              L = J.offset * Math.cos(J.direction + J.angle + j) + (J.length / 2 - K) * Math.cos(J.angle + j),
              M = J.offset * Math.sin(J.direction + J.angle + j) + (J.length / 2 - K) * Math.sin(J.angle + j);
            c(p, u + r * L, v + r * M, r * (J.length / 2 - (J.aspect === 1 ? K * 2 : 0)), r * J.width / 2, J.aspect, J.angle + j);
          }
        } else {
          throw new Error("Mismatch gun number with mockup.");
        }
        p.globalAlpha = 1;
        G(p, D(E(f.color), o.status.getColor(), o.status.getBlend()));
        const N = s.shape === 4 ? B(s.shape) * 1.13 : B(s.shape);
        b(p, u, v, r * N, s.shape, j);
        if (w.turrets.length === s.turrets.length) {
          for (let z = 0; z < s.turrets.length; z++) {
            let A = s.turrets[z];
            if (A.layer === 1) {
              let F = A.direction + A.angle + j,
                H = A.offset * r;
              aw(u + H * Math.cos(F), v + H * Math.sin(F), A, h, r / h / A.size * A.sizeFactor, w.turrets[z].facing + k * j, k, p, w.turrets[z], o);
            }
          }
        } else {
          throw new Error("Mismatch turret number with mockup.");
        }
        if (l == !1 && p != ad) {
          ad.save();
          ad.globalAlpha = q;
          ad.imageSmoothingEnabled = !1;
          ad.filter = "blur(" + Math.round(x.graphical.deathBlurAmount - x.graphical.deathBlurAmount * q) + "px)";
          ad.drawImage(p.canvas, d - u, e - v);
          ad.restore();
        }
      };
    })();
    function ax(c, d, e, f) {
      ad.globalAlpha = Math.pow(e.render.status.getFade(), 2);
      let g = e.size * f,
        h = a.mockups[e.index],
        i = g / h.size * h.realSize;
      {
        let j = e.render.health.get(),
          k = e.render.shield.get();
        if (j < 1 || k < 1) {
          let l = d + 1.1 * i + 15;
          av(c - g, c + g, l, 3 + x.graphical.barChunk, C.black);
          av(c - g, c - g + 2 * g * j, l, 3, C.lgreen);
        }
      }
      if (e.chatMsgs) {
        const n = Date.now();
        e.chatMsgs = e.chatMsgs.filter(c => {
          return n - c[1] <= 1e4;
        });
        if (e.chatMsgs.length === 0) {
          e.chatMsgs = null;
        } else {
          let o = 1.2;
          for (let p = e.chatMsgs.length - 1; p >= 0; p--) {
            let q = ar(e.chatMsgs[p][0], 18);
            ad.globalAlpha = 0.65;
            av(c - q / 2 - 3, c + q / 2 + 3, d - i - (o + 1) * 30, 25, e.color ? E(e.color) : C.blue);
            ad.globalAlpha = 1;
            let r = as();
            r.draw(e.chatMsgs[p][0], c, d - i - (o + 1) * 30, 18, C.guiwhite, "center", !0);
            o++;
          }
        }
      }
      if (e.nameplate && e.id !== T.playerid) {
        if (e.render.textobjs == null) {
          e.render.textobjs = [as(), as()];
        }
        e.name !== "\0" ? (e.render.textobjs[0].draw(e.name, c, d - i - 30, 16, C.guiwhite, "center"), e.render.textobjs[1].draw(b.handleLargeNumber(e.score, !0), c, d - i - 16, 8, C.guiwhite, "center")) : (e.render.textobjs[0].draw("a spoopy \uD83D\uDC7B", c, d - i - 30, 16, C.lavender, "center"), e.render.textobjs[1].draw(b.handleLargeNumber(e.score, !0), c, d - i - 16, 8, C.lavender, "center"));
        if (e.name === "ContentArras" || e.name === "pr2000") {
          e.render.textobjs[0].draw(e.name, c, d - i - 30, 16, C.lavender, "center");
          e.render.textobjs[1].draw(b.handleLargeNumber(e.score, !0), c, d - i - 16, 8, C.lavender, "center");
        }
      }
    }
    window.requestAnimFrame = (() => {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {};
    })();
    window.cancelAnimFrame = (() => {
      return window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    })();
    var ay = (() => {
        const c = ah(0, 0.7, 1.5),
          d = ah(0, 2, 3);
        function e() {
          var c = [];
          return (d, e, f, g, i, j) => {
            c.push(d);
            while (c.length > g) c.splice(0, 1);
            let k = Math.min(...c),
              a = Math.max(...c),
              b = a - k;
            if (a > 0 && k < 0) {
              av(e, e + g, f + i * a / b, 2, C.guiwhite);
            }
            ad.beginPath();
            let l = -1;
            c.forEach(d => {
              !++l ? ad.moveTo(e, f + i * (a - d) / b) : ad.lineTo(e + l, f + i * (a - d) / b);
            });
            ad.lineWidth = 1;
            ad.strokeStyle = j;
            ad.stroke();
          };
        }
        const f = (() => {
            function c(c, d, e, f, g, h) {
              let i = Math.cos((1 + h) * Math.PI);
              return 0.5 * (((1 + h) * e + c) * (i + 1) + (-h * f + d) * (1 - i));
            }
            function d(c, d, e, f, g, h) {
              return d + (d - c) * h;
            }
            function e(c, d) {
              let e = function (c, d) {
                  return (c % d + d) % d;
                },
                f = d - c;
              return e(f + Math.PI, 2 * Math.PI) - Math.PI;
            }
            return () => {
              let f = 0,
                g = 0,
                h = 0;
              return {
                set: (c = I.time, d = M.rendergap) => {
                  f = Math.max(am() - c - 80, -d);
                  if (f > 150 && f < 1e3) {
                    f = 150;
                  }
                  if (f > 1e3) {
                    f = 1e3 * 1e3 * Math.sin(f / 1e3 - 1) / f + 1e3;
                  }
                  g = f / d;
                  h = x.roomSpeed * 30 * f / 1e3;
                },
                predict: (e, i, j, k) => {
                  return f >= 0 ? d(e, i, j, k, h, g) : c(e, i, j, k, h, g);
                },
                predictFacing: (f, h) => {
                  return f + (1 + g) * e(f, h);
                },
                getPrediction: () => {
                  return f;
                }
              };
            };
          })(),
          g = e(),
          h = e(),
          i = e(),
          j = (() => {
            function c(c) {
              return Math.log(4 * c + 1) / Math.log(5);
            }
            let d = [];
            for (let e = 0; e < x.gui.expectedMaxSkillLevel * 2; e++) d.push(c(e / x.gui.expectedMaxSkillLevel));
            return c => {
              return d[c];
            };
          })(),
          k = {
            skillNames: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            skillKeys: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            skillValues: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            skillPoints: as(),
            score: as(),
            name: as(),
            "class": as(),
            debug: [as(), as(), as(), as(), as(), as(), as(), as()],
            lbtitle: as(),
            leaderboard: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            upgradeNames: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            upgradeKeys: [as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as(), as()],
            skipUpgrades: as()
          };
        return e => {
          let l = 0;
          O++;
          let n, o;
          {
            let p = f();
            p.set();
            l = p.getPrediction();
            I.renderx = I.x;
            I.rendery = I.y;
            n = e * I.renderx;
            o = e * I.rendery;
          }
          {
            aq(C.white, 1);
            aq(C.guiblack, 0.1);
            let q = R[0].length,
              r = R.length,
              s = 0;
            R.forEach(l => {
              let p = 0;
              l.forEach(l => {
                let t = Math.max(0, e * p * a.gameWidth / q - n + a.screenWidth / 2 - e * a.gameWidth / 2),
                  u = Math.max(0, e * s * a.gameHeight / r - o + a.screenHeight / 2 - e * a.gameHeight / 2),
                  v = Math.min(a.screenWidth, e * (p + 1) * a.gameWidth / q - n + a.screenWidth / 2 - e * a.gameWidth / 2),
                  w = Math.min(a.screenHeight, e * (s + 1) * a.gameHeight / r - o + a.screenHeight / 2 - e * a.gameHeight / 2);
                ad.globalAlpha = 1;
                ad.fillStyle = x.graphical.screenshotMode ? C.guiwhite : C.white;
                ad.fillRect(t, u, v - t, w - u);
                ad.globalAlpha = 0.3;
                ad.fillStyle = x.graphical.screenshotMode ? C.guiwhite : E(l);
                ad.fillRect(t, u, v - t, w - u);
                p++;
              });
              s++;
            });
            ad.lineWidth = 1;
            ad.strokeStyle = x.graphical.screenshotMode ? C.guiwhite : C.guiblack;
            ad.globalAlpha = 0.04;
            ad.beginPath();
            let t = 30 * e;
            for (let u = (a.screenWidth / 2 - n) % t; u < a.screenWidth; u += t) {
              ad.moveTo(u, 0);
              ad.lineTo(u, a.screenHeight);
            }
            for (let v = (a.screenHeight / 2 - o) % t; v < a.screenHeight; v += t) {
              ad.moveTo(0, v);
              ad.lineTo(a.screenWidth, v);
            }
            ad.stroke();
            ad.globalAlpha = 1;
          }
          {
            J.forEach(function l(q) {
              if (!q.render.draws) {
                return 1;
              }
              let r = f();
              q.render.status.getFade() === 1 ? r.set() : r.set(q.render.lastRender, q.render.interval);
              q.render.x = q.x;
              q.render.y = q.y;
              q.render.f = q.id === T.playerid && !q.twiggle ? Math.atan2(Q.y, Q.x) : q.facing;
              let s = q.id === T.playerid ? 0 : e * q.render.x - n,
                t = q.id === T.playerid ? 0 : e * q.render.y - o;
              s += a.screenWidth / 2;
              t += a.screenHeight / 2;
              aw(s, t, q, e, 1, q.render.f);
            });
            if (!x.graphical.screenshotMode) {
              J.forEach(function l(p) {
                let q = p.id === T.playerid ? 0 : e * p.render.x - n,
                  r = p.id === T.playerid ? 0 : e * p.render.y - o;
                q += a.screenWidth / 2;
                r += a.screenHeight / 2;
                ax(q, r, p, e);
              });
            }
          }
          let w = 200 / Math.max(a.screenWidth, a.screenHeight * 16 / 9),
            z = 20;
          T.__s.update();
          let A = U.get(),
            B = A.max;
          {
            let F = 4,
              G = 18,
              u = a.screenWidth / 2,
              v = z;
            for (let s = a.messages.length - 1; s >= 0; s--) {
              let N = a.messages[s],
                P = N.text,
                S = P;
              if (N.textobj == null) {
                N.textobj = as();
              }
              if (N.len == null) {
                N.len = ar(S, G - 4);
              }
              ad.globalAlpha = 0.5 * N.alpha;
              av(u - N.len / 2, u + N.len / 2, v + G / 2, G, C.black);
              ad.globalAlpha = Math.min(1, N.alpha);
              N.textobj.draw(S, u, v + G / 2, G - 4, C.guiwhite, "center", !0);
              v += F + G;
              if (N.status > 1) {
                v -= (F + G) * (1 - Math.sqrt(N.alpha));
              }
              if (N.status > 1) {
                N.status -= 0.05;
                N.alpha += 0.05;
              } else {
                if (s === 0 && Date.now() - N.time > 1e4) {
                  N.status -= 0.05;
                  N.alpha -= 0.05;
                  if (N.alpha <= 0) {
                    a.messages[0].textobj.remove();
                    a.messages.splice(0, 1);
                  }
                }
              }
            }
            ad.globalAlpha = 1;
          }
          {
            a.canSkill = !!T.points;
            c.set(0 + (a.canSkill || a.died || a.statHover));
            a.clickables.stat.hide();
            let F = 4,
              G = 15,
              V = 35,
              X = w * a.screenWidth,
              Y = X,
              u = -z - 2 * X + c.get() * (2 * z + 2 * X),
              v = a.screenHeight - z - G,
              Z = 11,
              aa = T.getStatNames(a.mockups[T.type].statnames || -1);
            T.skills.forEach(function e(l) {
              Z--;
              let n = aa[Z - 1],
                o = l.amount,
                p = C[l.color],
                q = l.softcap,
                r = l.cap;
              if (q) {
                X = Y;
                let s = x.gui.expectedMaxSkillLevel,
                  t = q > s,
                  w = q < r;
                if (t) {
                  s = q;
                }
                av(u + G / 2, u - G / 2 + X * j(q), v + G / 2, G - 3 + x.graphical.barChunk, C.black);
                av(u + G / 2, u + G / 2 + (X - V) * j(q), v + G / 2, G - 3, C.grey);
                av(u + G / 2, u + G / 2 + (X - V) * j(o), v + G / 2, G - 3.5, p);
                if (w) {
                  ad.lineWidth = 1;
                  ad.strokeStyle = C.grey;
                  for (let z = q + 1; z < s; z++) au(u + (X - V) * j(z), v + 1.5, u + (X - V) * j(z), v - 3 + G);
                }
                ad.strokeStyle = C.black;
                ad.lineWidth = 1;
                for (let z = 1; z < o + 1; z++) au(u + (X - V) * j(z), v + 1.5, u + (X - V) * j(z), v - 3 + G);
                X = Y * j(s);
                let A = o == r ? p : !T.points || q !== r && o == q ? C.grey : C.guiwhite;
                k.skillNames[Z - 1].draw(n, Math.round(u + X / 2) + 0.5, v + G / 2, G - 5, A, "center", !0);
                k.skillKeys[Z - 1].draw("[" + Z % 10 + "]", Math.round(u + X - G * 0.25) - 1.5, v + G / 2, G - 5, A, "right", !0);
                if (A === C.guiwhite) {
                  a.clickables.stat.place(Z - 1, u, v, X, G);
                }
                if (o) {
                  k.skillValues[Z - 1].draw(A === p ? "MAX" : "+" + o, Math.round(u + X + 4) + 0.5, v + G / 2, G - 5, p, "left", !0);
                }
                v -= G + F;
              }
            });
            a.clickables.hover.place(0, 0, v, 0.8 * X, 0.8 * (a.screenHeight - v));
            if (T.points !== 0) {
              k.skillPoints.draw("x" + T.points, Math.round(u + X - 2) + 0.5, Math.round(v + G - 4) + 0.5, 20, C.guiwhite, "right");
            }
          }
          {
            let F = 4,
              X = 1.65 * w * a.screenWidth,
              G = 25,
              u = (a.screenWidth - X) / 2,
              v = a.screenHeight - z - G;
            ad.lineWidth = 1;
            av(u, u + X, v + G / 2, G - 3 + x.graphical.barChunk, C.black);
            av(u, u + X, v + G / 2, G - 3, C.grey);
            av(u, u + X * T.__s.getProgress(), v + G / 2, G - 3.5, C.gold);
            k["class"].draw("Level " + T.__s.getLevel() + " " + a.mockups[T.type].name, u + X / 2, v + G / 2, G - 4, C.guiwhite, "center", !0);
            G = 14;
            v -= G + F;
            av(u + X * 0.1, u + X * 0.9, v + G / 2, G - 3 + x.graphical.barChunk, C.black);
            av(u + X * 0.1, u + X * 0.9, v + G / 2, G - 3, C.grey);
            av(u + X * 0.1, u + X * (0.1 + 0.8 * (B ? Math.min(1, T.__s.getScore() / B) : 1)), v + G / 2, G - 3.5, C.green);
            k.score.draw("Score: " + b.handleLargeNumber(T.__s.getScore()), u + X / 2, v + G / 2, G - 2, C.guiwhite, "center", !0);
            ad.lineWidth = 4;
            k.name.draw(I.name, Math.round(u + X / 2) + 0.5, Math.round(v - 10 - F) + 0.5, 32, C.guiwhite, "center");
          }
          {
            let X = w * a.screenWidth,
              G = X,
              u = a.screenWidth - X - z,
              v = a.screenHeight - G - z;
            ad.globalAlpha = 0.5;
            let q = R[0].length,
              r = R.length,
              s = 0;
            R.forEach(e => {
              let l = 0;
              e.forEach(e => {
                ad.fillStyle = E(e);
                at(u + l++ * X / q, v + s * G / r, X / q, G / r);
              });
              s++;
            });
            ad.fillStyle = C.grey;
            at(u, v, X, G);
            K.forEach(e => {
              e[2] === 17 ? (ad.fillStyle = D(E(e[2]), C.black, 0.5), ad.globalAlpha = 0.8, at(u + e[0] / a.gameWidth * X, v + e[1] / a.gameHeight * G, 1, 1)) : (ad.strokeStyle = D(E(e[2]), C.black, 0.5), ad.lineWidth = 1, ad.globalAlpha = 1, at(u + e[0] / a.gameWidth * X - 1, v + e[1] / a.gameWidth * G - 1, 3, 3, !0), ad.lineWidth = 3);
            });
            ad.globalAlpha = 1;
            ad.lineWidth = 1;
            ad.strokeStyle = C.black;
            at(u + (I.x / a.gameWidth + 0.5) * X - 1, v + (I.y / a.gameHeight + 0.5) * G - 1, 3, 3, !0);
            ad.lineWidth = 3;
            ad.fillStyle = C.black;
            at(u, v, X, G, !0);
            at(u, v - 40, X, 30);
            h(al.get(), u, v - 40, X, 30, C.teal);
            i(M.rendergap, u, v - 40, X, 30, C.pink);
            g(l, u, v - 40, X, 30, C.yellow);
            k.debug[6].draw("Build Date: " + new Date(window.buildDate).toLocaleString(), u + X, v - 50 - 6 * 14, 10, C.guiwhite, "right");
            k.debug[5].draw("Prediction: " + Math.round(l) + "ms", u + X, v - 50 - 5 * 14, 10, C.guiwhite, "right");
            k.debug[4].draw("Update Rate: " + M.updatetime + "Hz", u + X, v - 50 - 4 * 14, 10, C.guiwhite, "right");
            k.debug[3].draw("Latency: " + M.latency + "ms", u + X, v - 50 - 3 * 14, 10, C.guiwhite, "right");
            k.debug[2].draw("Client FPS: " + M.rendertime, u + X, v - 50 - 2 * 14, 10, C.guiwhite, "right");
            k.debug[1].draw("Server Speed: " + Math.min(100, 1e3 / 30 / T.fps * 100).toFixed(2) + "%" + (1e3 / 30 / T.fps * 100 < 100 ? " OVERLOADED!" : "") + " (" + T.fps.toFixed(2) + " mspt)", u + X, v - 50 - 1 * 14, 10, 1e3 / 30 / T.fps * 100 >= 30 ? C.guiwhite : C.orange, "right");
            k.debug[0].draw(W, u + X, v - 50, 10, C.guiwhite, "right");
          }
          {
            let F = 4,
              X = w * a.screenWidth,
              G = 14,
              u = a.screenWidth - X - z,
              v = z + G + 7,
              s = 0;
            A.data.forEach(e => {
              av(u, u + X, v + G / 2, G - 3 + x.graphical.barChunk, C.black);
              av(u, u + X, v + G / 2, G - 3, C.grey);
              let l = Math.min(1, e.score / B);
              av(u, u + X * l, v + G / 2, G - 3.5, e.barcolor);
              k.leaderboard[s++].draw(e.label + ": " + b.handleLargeNumber(Math.round(e.score)), u + X / 2, v + G / 2, G - 5, C.guiwhite, "center", !0);
              let n = G / e.offset,
                o = u - 1.5 * G - n * e.offset * 0.707,
                p = v + 0.5 * G + n * e.offset * 0.707;
              aw(o, p, e.image, 1 / n, n * n / e.image.size, -Math.PI / 4, !0);
              v += F + G;
            });
          }
          {
            d.set(0 + (a.canUpgrade || a.upgradeHover));
            let ab = d.get();
            a.clickables.upgrade.hide();
            if (T.upgrades.length > 0) {
              a.canUpgrade = !0;
              var ac = function (e) {
                switch (e) {
                  case 0:
                    return "y";
                  case 1:
                    return "h";
                  case 2:
                    return "u";
                  case 3:
                    return "j";
                  case 4:
                    return "i";
                  case 5:
                    return "k";
                  case 6:
                    return "o";
                  case 7:
                    return "l";
                  default:
                    return "";
                }
              };
              let ae = 8,
                X = w * a.screenWidth / 2 * 1,
                G = X,
                u = ab * 2 * z - z,
                v = z,
                af = u,
                ag = 0,
                ah = v,
                Z = 0;
              L += 0.01;
              let ai = 10,
                s = 0;
              T.upgrades.forEach(function e(l) {
                if (v > ah) {
                  ah = v;
                }
                ag = u;
                a.clickables.upgrade.place(s++, u, v, X, G);
                ad.globalAlpha = 0.5;
                ad.fillStyle = E(ai);
                at(u, v, X, G);
                ad.globalAlpha = 0.1;
                ad.fillStyle = E(-10 + ai++);
                at(u, v, X, G * 0.6);
                ad.fillStyle = C.black;
                at(u, v + G * 0.6, X, G * 0.4);
                ad.globalAlpha = 1;
                let n = H(l, T.color),
                  o = a.mockups[l].offset,
                  p = 0.6 * X / 3.25,
                  q = u + 0.5 * X - p * o * Math.cos(L),
                  r = v + 0.5 * G - p * o * Math.sin(L);
                aw(q, r, n, 1, p / n.size, L, !0);
                k.upgradeNames[s - 1].draw(n.name, u + 0.9 * X / 2, v + G - 6, G / 8 - 3, C.guiwhite, "center");
                k.upgradeKeys[s - 1].draw("[" + ac(Z) + "]", u + X - 4, v + G - 6, G / 8 - 3, C.guiwhite, "right");
                ad.strokeStyle = C.black;
                ad.globalAlpha = 1;
                ad.lineWidth = 3;
                at(u, v, X, G, !0);
                Z++ % 2 ? (v -= G + ae, u += ab * (X + ae)) : v += G + ae;
              });
              let aj = 14,
                N = "Don't Upgrade",
                ak = ar(N, aj - 3) + 10,
                an = af + (ag + X + ae - af) / 2,
                ao = ah + G + ae;
              av(an - ak / 2, an + ak / 2, ao + aj / 2, aj + x.graphical.barChunk, C.black);
              av(an - ak / 2, an + ak / 2, ao + aj / 2, aj, C.white);
              k.skipUpgrades.draw(N, an, ao + aj / 2, aj - 2, C.guiwhite, "center", !0);
              a.clickables.skipUpgrades.place(0, an - ak / 2, ao, ak, aj);
            } else {
              a.canUpgrade = !1;
              a.clickables.upgrade.hide();
              a.clickables.skipUpgrades.hide();
            }
          }
          M.lastrender = am();
        };
      })(),
      az = (() => {
        let c = {
            taunt: as(),
            level: as(),
            score: as(),
            time: as(),
            kills: as(),
            death: as(),
            playagain: as()
          },
          d = () => {
            let c = [Math.round(a.finalKills[0].get()), Math.round(a.finalKills[1].get()), Math.round(a.finalKills[2].get())],
              d = c[0] + 0.5 * c[1] + 3 * c[2];
            return (d === 0 ? "\uD83C\uDF3C" : d < 4 ? "\uD83C\uDFAF" : d < 8 ? "\uD83D\uDCA5" : d < 15 ? "\uD83D\uDCA2" : d < 25 ? "\uD83D\uDD25" : d < 50 ? "\uD83D\uDCA3" : d < 75 ? "\uD83D\uDC7A" : d < 100 ? "\uD83C\uDF36\uFE0F" : "\uD83D\uDCAF") + (c[0] || c[1] || c[2] ? " " + (c[0] ? c[0] + " kills" : "") + (c[0] && c[1] ? " and " : "") + (c[1] ? c[1] + " assists" : "") + ((c[0] || c[1]) && c[2] ? " and " : "") + (c[2] ? c[2] + " visitors defeated" : "") : " A true pacifist") + ".";
          },
          e = () => {
            let c = "";
            a.finalKillers.length ? (c = "\uD83D\uDD2A Succumbed to", !a.finalKillers[0].name ? (a.finalKillers.forEach(d => {
              c += " " + b.addArticle(d.tank) + " and";
            }), c = c.slice(0, -4) + ".") : (a.finalKillers.forEach(d => {
              c += " " + (d.name || "Unnamed") + "'s " + d.tank + " and";
            }), c = c.slice(0, -4) + ".")) : c += "\uD83E\uDD37 Well that was kinda dumb huh";
            return c;
          };
        return () => {
          aq(C.black, 0.25);
          let f = a.screenWidth / 2,
            g = a.screenHeight / 2 - 50,
            h = H(T.type, T.color || 16),
            i = 140,
            j = a.mockups[T.type].offset,
            k = i / 3,
            l = a.screenWidth / 2 - k * j * 0.707,
            n = a.screenHeight / 2 - 35 + k * j * 0.707;
          aw(l - 190 - i / 2, n - 10, h, 1.5, 0.5 * k / h.realSize, -Math.PI / 4, !0);
          c.taunt.draw("lol you died", f, g - 80, 8, C.guiwhite, "center");
          c.level.draw("Level " + T.__s.getLevel() + " " + a.mockups[T.type].name + ".", f - 170, g - 30, 24, C.guiwhite);
          c.score.draw("Final score: " + b.formatLargeNumber(Math.round(a.finalScore.get())), f - 170, g + 25, 50, C.guiwhite);
          c.time.draw("\u231A Survived for " + b.timeForHumans(Math.round(a.finalLifetime.get())) + ".", f - 170, g + 55, 16, C.guiwhite);
          c.kills.draw(d(), f - 170, g + 77, 16, C.guiwhite);
          c.death.draw(e(), f - 170, g + 99, 16, C.guiwhite);
          a.respawnTime > 0 ? c.playagain.draw("Wait " + (a.respawnTime / 1e3).toFixed(1) + " seconds to play again!", f, g + 125, 16, C.guiwhite, "center") : c.playagain.draw("Press enter to play again!", f, g + 125, 16, C.guiwhite, "center");
        };
      })(),
      aA = (() => {
        let b = {
          connecting: as(),
          message: as()
        };
        return () => {
          aq(C.white, 0.5);
          b.connecting.draw("Connecting...", a.screenWidth / 2, a.screenHeight / 2, 30, C.guiwhite, "center");
          b.message.draw(a.message, a.screenWidth / 2, a.screenHeight / 2 + 30, 15, C.lgreen, "center");
        };
      })(),
      aB = (() => {
        let b = {
          disconnected: as(),
          message: as()
        };
        return () => {
          aq(D(C.red, C.guiblack, 0.3), 0.25);
          b.disconnected.draw("\uD83D\uDC80 Disconnected. \uD83D\uDC80", a.screenWidth / 2, a.screenHeight / 2, 30, C.guiwhite, "center");
          b.message.draw(a.message, a.screenWidth / 2, a.screenHeight / 2 + 30, 15, C.orange, "center");
        };
      })();
    function aC() {
      a.animLoopHandle = window.requestAnimFrame(aC);
      I.renderv += (I.view - I.renderv) / 30;
      var b = x.graphical.screenshotMode ? 2 : V();
      ad.lineCap = "round";
      ad.lineJoin = "round";
      ad.filter = "none";
      if (a.gameStart && !a.disconnected) {
        a.time = am();
        if (a.time - N > 1e3) {
          a.socket.ping(a.time);
          N = a.time;
          M.rendertime = O;
          O = 0;
          M.updatetime = P;
          P = 0;
        }
        M.lag = a.time - I.time;
      }
      if (a.gameStart) {
        ay(b);
      } else {
        if (!a.disconnected) {
          aA();
        }
      }
      if (a.died) {
        az();
      }
      if (a.disconnected) {
        aB();
      }
    }
  })();
}