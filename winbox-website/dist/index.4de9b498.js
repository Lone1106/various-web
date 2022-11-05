// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2Rsls":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2751c5c64de9b498";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4pp4s":[function(require,module,exports) {
var _winbox = require("winbox");
const work = document.getElementById("work");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const workContent = document.querySelector(".work-content");
const aboutContent = document.querySelector(".about-content");
const contactContent = document.querySelector(".contact-content");
about.addEventListener("click", ()=>{
    new WinBox({
        title: "My Work",
        background: "#40c057",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        border: 4,
        mount: aboutContent
    });
});
work.addEventListener("click", ()=>{
    new WinBox({
        title: "My Work",
        background: "#40c057",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        border: 4,
        mount: workContent
    });
});
contact.addEventListener("click", ()=>{
    new WinBox({
        title: "My Work",
        background: "#40c057",
        x: "center",
        y: "center",
        width: "50%",
        height: "50%",
        border: 4,
        mount: contactContent
    });
});

},{"winbox":"glyIP"}],"glyIP":[function(require,module,exports) {
/**
 * WinBox.js v0.2.6 (Bundle)
 * Copyright 2022 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/winbox
 */ (function() {
    "use strict";
    var f, ba = document.createElement("style");
    ba.innerHTML = "@keyframes wb-fade-in{0%{opacity:0}to{opacity:.85}}.winbox{position:fixed;left:0;top:0;background:#0050ff;box-shadow:0 14px 28px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.22);transition:width .3s,height .3s,left .3s,top .3s;transition-timing-function:cubic-bezier(.3,1,.3,1);contain:layout size;text-align:left;touch-action:none}.wb-body,.wb-header{position:absolute;left:0}.wb-header{top:0;width:100%;height:35px;line-height:35px;color:#fff;overflow:hidden;z-index:1}.wb-body{top:35px;right:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;will-change:contents;background:#fff;margin-top:0!important;contain:strict;z-index:0}.wb-control *,.wb-icon{background-repeat:no-repeat}body>.wb-body{position:relative;display:inline-block;visibility:hidden;contain:none}.wb-drag{height:100%;padding-left:10px;cursor:move}.wb-title{font-family:Arial,sans-serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wb-icon{display:none;width:20px;height:100%;margin:-1px 8px 0-3px;float:left;background-size:100%;background-position:center}.wb-e,.wb-w{width:10px;top:0}.wb-n,.wb-s{left:0;height:10px;position:absolute}.wb-n{top:-5px;right:0;cursor:n-resize;z-index:2}.wb-e{position:absolute;right:-5px;bottom:0;cursor:w-resize;z-index:2}.wb-s{bottom:-5px;right:0;cursor:n-resize;z-index:2}.wb-nw,.wb-sw,.wb-w{left:-5px}.wb-w{position:absolute;bottom:0;cursor:w-resize;z-index:2}.wb-ne,.wb-nw,.wb-sw{width:15px;height:15px;z-index:2;position:absolute}.wb-nw{top:-5px;cursor:nw-resize}.wb-ne,.wb-sw{cursor:ne-resize}.wb-ne{top:-5px;right:-5px}.wb-se,.wb-sw{bottom:-5px}.wb-se{position:absolute;right:-5px;width:15px;height:15px;cursor:nw-resize;z-index:2}.wb-control{float:right;height:100%;max-width:100%;text-align:center}.wb-control *{display:inline-block;width:30px;height:100%;max-width:100%;background-position:center;cursor:pointer}.no-close .wb-close,.no-full .wb-full,.no-header .wb-header,.no-max .wb-max,.no-min .wb-min,.no-resize .wb-body~div,.wb-body .wb-hide,.wb-show,.winbox.hide,.winbox.min .wb-body>*,.winbox.min .wb-full,.winbox.min .wb-min,.winbox.modal .wb-full,.winbox.modal .wb-max,.winbox.modal .wb-min{display:none}.winbox.max .wb-drag,.winbox.min .wb-drag{cursor:default}.wb-min{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAyIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNOCAwaDdhMSAxIDAgMCAxIDAgMkgxYTEgMSAwIDAgMSAwLTJoN3oiLz48L3N2Zz4=);background-size:14px auto;background-position:center calc(50% + 6px)}.wb-max{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHZpZXdCb3g9IjAgMCA5NiA5NiI+PHBhdGggZD0iTTIwIDcxLjMxMUMxNS4zNCA2OS42NyAxMiA2NS4yMyAxMiA2MFYyMGMwLTYuNjMgNS4zNy0xMiAxMi0xMmg0MGM1LjIzIDAgOS42NyAzLjM0IDExLjMxMSA4SDI0Yy0yLjIxIDAtNCAxLjc5LTQgNHY1MS4zMTF6Ii8+PHBhdGggZD0iTTkyIDc2VjM2YzAtNi42My01LjM3LTEyLTEyLTEySDQwYy02LjYzIDAtMTIgNS4zNy0xMiAxMnY0MGMwIDYuNjMgNS4zNyAxMiAxMiAxMmg0MGM2LjYzIDAgMTItNS4zNyAxMi0xMnptLTUyIDRjLTIuMjEgMC00LTEuNzktNC00VjM2YzAtMi4yMSAxLjc5LTQgNC00aDQwYzIuMjEgMCA0IDEuNzkgNCA0djQwYzAgMi4yMS0xLjc5IDQtNCA0SDQweiIvPjwvc3ZnPg==);background-size:17px auto}.wb-close{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xIC0xIDE4IDE4Ij48cGF0aCBmaWxsPSIjZmZmIiBkPSJtMS42MTMuMjEuMDk0LjA4M0w4IDYuNTg1IDE0LjI5My4yOTNsLjA5NC0uMDgzYTEgMSAwIDAgMSAxLjQwMyAxLjQwM2wtLjA4My4wOTRMOS40MTUgOGw2LjI5MiA2LjI5M2ExIDEgMCAwIDEtMS4zMiAxLjQ5N2wtLjA5NC0uMDgzTDggOS40MTVsLTYuMjkzIDYuMjkyLS4wOTQuMDgzQTEgMSAwIDAgMSAuMjEgMTQuMzg3bC4wODMtLjA5NEw2LjU4NSA4IC4yOTMgMS43MDdBMSAxIDAgMCAxIDEuNjEzLjIxeiIvPjwvc3ZnPg==);background-size:15px auto;background-position:5px center}.wb-full{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOCAzSDVhMiAyIDAgMCAwLTIgMnYzbTE4IDBWNWEyIDIgMCAwIDAtMi0yaC0zbTAgMThoM2EyIDIgMCAwIDAgMi0ydi0zTTMgMTZ2M2EyIDIgMCAwIDAgMiAyaDMiLz48L3N2Zz4=);background-size:16px auto}.winbox.max .wb-body~div,.winbox.min .wb-body~div,.winbox.modal .wb-body~div,.winbox.modal .wb-drag,body.wb-lock iframe{pointer-events:none}.winbox.max{box-shadow:none}.winbox.max .wb-body{margin:0!important}.winbox iframe{position:absolute;width:100%;height:100%;border:0}body.wb-lock .winbox{will-change:left,top,width,height;transition:none}.winbox.modal:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;background:inherit;border-radius:inherit}.winbox.modal:after{content:'';position:absolute;top:-50vh;left:-50vw;right:-50vw;bottom:-50vh;background:#0d1117;animation:wb-fade-in .2s ease-out forwards;z-index:-1}.no-animation{transition:none}.no-shadow{box-shadow:none}.no-header .wb-body{top:0}.no-move:not(.min) .wb-title{pointer-events:none}.wb-body .wb-show{display:revert}";
    var k = document.getElementsByTagName("head")[0];
    k.firstChild ? k.insertBefore(ba, k.firstChild) : k.appendChild(ba);
    var ca = document.createElement("div");
    ca.innerHTML = "<div class=wb-header><div class=wb-control><span class=wb-min></span><span class=wb-max></span><span class=wb-full></span><span class=wb-close></span></div><div class=wb-drag><div class=wb-icon></div><div class=wb-title></div></div></div><div class=wb-body></div><div class=wb-n></div><div class=wb-s></div><div class=wb-w></div><div class=wb-e></div><div class=wb-nw></div><div class=wb-ne></div><div class=wb-se></div><div class=wb-sw></div>";
    function m(a, b, c, e) {
        a && a.addEventListener(b, c, e || !1);
    }
    function p(a, b, c) {
        var e = window;
        e && e.removeEventListener(a, b, c || !1);
    }
    function r(a) {
        a.stopPropagation();
        a.cancelable && a.preventDefault();
    }
    function w(a, b, c) {
        c = "" + c;
        a["_s_" + b] !== c && (a.style.setProperty(b, c), a["_s_" + b] = c);
    }
    var x = [], y = {
        capture: !0,
        passive: !0
    }, z, da = 0, A = 10, J, K, L, fa, P, Q;
    function V(a, b) {
        if (!(this instanceof V)) return new V(a);
        z || ha();
        var c;
        if (a) {
            if (b) {
                var e = a;
                a = b;
            }
            if ("string" === typeof a) e = a;
            else {
                var d = a.id;
                var g = a.index;
                var l = a.root;
                var F = a.template;
                e = e || a.title;
                var t = a.icon;
                var R = a.mount;
                var h = a.html;
                var B = a.url;
                var n = a.width;
                var q = a.height;
                var C = a.minwidth;
                var D = a.minheight;
                var u = a.maxwidth;
                var v = a.maxheight;
                var E = a.autosize;
                var G = a.min;
                var H = a.max;
                var I = a.hidden;
                var ea = a.modal;
                var Y = a.x || (ea ? "center" : 0);
                var Z = a.y || (ea ? "center" : 0);
                var M = a.top;
                var N = a.left;
                var S = a.bottom;
                var T = a.right;
                var ja = a.background;
                var O = a.border;
                var U = a.header;
                var aa = a["class"];
                var na = a.onclose;
                var oa = a.onfocus;
                var pa = a.onblur;
                var qa = a.onmove;
                var ra = a.onresize;
                var sa = a.onfullscreen;
                var ta = a.onmaximize;
                var ua = a.onminimize;
                var va = a.onrestore;
                var wa = a.onhide;
                var xa = a.onshow;
                var ya = a.onload;
            }
        }
        this.g = (F || ca).cloneNode(!0);
        this.g.id = this.id = d || "winbox-" + ++da;
        this.g.className = "winbox" + (aa ? " " + ("string" === typeof aa ? aa : aa.join(" ")) : "") + (ea ? " modal" : "");
        this.g.winbox = this;
        this.window = this.g;
        this.body = this.g.getElementsByClassName("wb-body")[0];
        this.h = U || 35;
        ja && this.setBackground(ja);
        O ? w(this.body, "margin", O + (isNaN(O) ? "" : "px")) : O = 0;
        U && (b = this.g.getElementsByClassName("wb-header")[0], w(b, "height", U + "px"), w(b, "line-height", U + "px"), w(this.body, "top", U + "px"));
        e && this.setTitle(e);
        t && this.setIcon(t);
        R ? this.mount(R) : h ? this.body.innerHTML = h : B && this.setUrl(B, ya);
        M = M ? W(M, Q) : 0;
        S = S ? W(S, Q) : 0;
        N = N ? W(N, P) : 0;
        T = T ? W(T, P) : 0;
        e = P - N - T;
        t = Q - M - S;
        u = u ? W(u, e) : e;
        v = v ? W(v, t) : t;
        C = C ? W(C, u) : 150;
        D = D ? W(D, v) : this.h;
        E ? ((l || z).appendChild(this.body), n = Math.max(Math.min(this.body.clientWidth + 2 * O + 1, u), C), q = Math.max(Math.min(this.body.clientHeight + this.h + O + 1, v), D), this.g.appendChild(this.body)) : (n = n ? W(n, u) : Math.max(u / 2, C) | 0, q = q ? W(q, v) : Math.max(v / 2, D) | 0);
        Y = Y ? W(Y, e, n) : N;
        Z = Z ? W(Z, t, q) : M;
        this.x = Y;
        this.y = Z;
        this.width = n;
        this.height = q;
        this.o = C;
        this.m = D;
        this.l = u;
        this.j = v;
        this.top = M;
        this.right = T;
        this.bottom = S;
        this.left = N;
        this.index = g;
        this.focused = this.hidden = this.full = this.max = this.min = !1;
        this.onclose = na;
        this.onfocus = oa;
        this.onblur = pa;
        this.onmove = qa;
        this.onresize = ra;
        this.onfullscreen = sa;
        this.onmaximize = ta;
        this.onminimize = ua;
        this.onrestore = va;
        this.onhide = wa;
        this.onshow = xa;
        H ? this.maximize() : G ? this.minimize() : this.resize().move();
        if (I) this.hide();
        else if (this.focus(), g || 0 === g) this.index = g, w(this.g, "z-index", g), g > A && (A = g);
        ia(this);
        (l || z).appendChild(this.g);
        (c = a.oncreate) && c.call(this, a);
    }
    V["new"] = function(a) {
        return new V(a);
    };
    function W(a, b, c) {
        "string" === typeof a && ("center" === a ? a = (b - c) / 2 | 0 : "right" === a || "bottom" === a ? a = b - c : (c = parseFloat(a), a = "%" === ("" + c !== a && a.substring(("" + c).length)) ? b / 100 * c | 0 : c));
        return a;
    }
    function ha() {
        z = document.body;
        z[L = "requestFullscreen"] || z[L = "msRequestFullscreen"] || z[L = "webkitRequestFullscreen"] || z[L = "mozRequestFullscreen"] || (L = "");
        fa = L && L.replace("request", "exit").replace("mozRequest", "mozCancel").replace("Request", "Exit");
        m(window, "resize", function() {
            ka();
            la();
        });
        ka();
    }
    function ia(a) {
        X(a, "drag");
        X(a, "n");
        X(a, "s");
        X(a, "w");
        X(a, "e");
        X(a, "nw");
        X(a, "ne");
        X(a, "se");
        X(a, "sw");
        m(a.g.getElementsByClassName("wb-min")[0], "click", function(b) {
            r(b);
            a.min ? a.focus().restore() : a.blur().minimize();
        });
        m(a.g.getElementsByClassName("wb-max")[0], "click", function() {
            a.max ? a.restore() : a.maximize();
        });
        L ? m(a.g.getElementsByClassName("wb-full")[0], "click", function() {
            a.fullscreen();
        }) : a.addClass("no-full");
        m(a.g.getElementsByClassName("wb-close")[0], "click", function(b) {
            r(b);
            a.close() || (a = null);
        });
        m(a.g, "click", function() {
            a.focus();
        });
    }
    function ma(a) {
        x.splice(x.indexOf(a), 1);
        la();
        a.removeClass("min");
        a.min = !1;
        a.g.title = "";
    }
    function la() {
        for(var a = x.length, b = {}, c = {}, e = 0, d; e < a; e++)d = x[e], d = (d.left || d.right) + ":" + (d.top || d.bottom), c[d] ? c[d]++ : (b[d] = 0, c[d] = 1);
        e = 0;
        for(var g, l; e < a; e++)d = x[e], g = (d.left || d.right) + ":" + (d.top || d.bottom), l = Math.min((P - d.left - d.right) / c[g], 250), d.resize(l + 1 | 0, d.h, !0).move(d.left + b[g] * l | 0, Q - d.bottom - d.h, !0), b[g]++;
    }
    function X(a, b) {
        function c(h) {
            r(h);
            a.focus();
            if ("drag" === b) {
                if (a.min) {
                    a.restore();
                    return;
                }
                var B = Date.now(), n = B - R;
                R = B;
                if (300 > n) {
                    a.max ? a.restore() : a.maximize();
                    return;
                }
            }
            a.max || a.min || (z.classList.add("wb-lock"), (l = h.touches) && (l = l[0]) ? (h = l, m(window, "touchmove", e, y), m(window, "touchend", d, y)) : (m(window, "mousemove", e), m(window, "mouseup", d)), F = h.pageX, t = h.pageY);
        }
        function e(h) {
            r(h);
            l && (h = h.touches[0]);
            var B = h.pageX;
            h = h.pageY;
            var n = B - F, q = h - t, C = a.width, D = a.height, u = a.x, v = a.y, E;
            if ("drag" === b) {
                a.x += n;
                a.y += q;
                var G = E = 1;
            } else {
                if ("e" === b || "se" === b || "ne" === b) {
                    a.width += n;
                    var H = 1;
                } else if ("w" === b || "sw" === b || "nw" === b) a.x += n, a.width -= n, G = H = 1;
                if ("s" === b || "se" === b || "sw" === b) {
                    a.height += q;
                    var I = 1;
                } else if ("n" === b || "ne" === b || "nw" === b) a.y += q, a.height -= q, E = I = 1;
            }
            H && (a.width = Math.max(Math.min(a.width, a.l, P - a.x - a.right), a.o), H = a.width !== C);
            I && (a.height = Math.max(Math.min(a.height, a.j, Q - a.y - a.bottom), a.m), I = a.height !== D);
            (H || I) && a.resize();
            G && (a.x = Math.max(Math.min(a.x, P - a.width - a.right), a.left), G = a.x !== u);
            E && (a.y = Math.max(Math.min(a.y, Q - a.height - a.bottom), a.top), E = a.y !== v);
            (G || E) && a.move();
            if (H || G) F = B;
            if (I || E) t = h;
        }
        function d(h) {
            r(h);
            z.classList.remove("wb-lock");
            l ? (p("touchmove", e, y), p("touchend", d, y)) : (p("mousemove", e), p("mouseup", d));
        }
        var g = a.g.getElementsByClassName("wb-" + b)[0];
        if (g) {
            var l, F, t, R = 0;
            m(g, "mousedown", c);
            m(g, "touchstart", c, y);
        }
    }
    function ka() {
        var a = document.documentElement;
        P = a.clientWidth;
        Q = a.clientHeight;
    }
    f = V.prototype;
    f.mount = function(a) {
        this.unmount();
        a.i || (a.i = a.parentNode);
        this.body.textContent = "";
        this.body.appendChild(a);
        return this;
    };
    f.unmount = function(a) {
        var b = this.body.firstChild;
        if (b) {
            var c = a || b.i;
            c && c.appendChild(b);
            b.i = a;
        }
        return this;
    };
    f.setTitle = function(a) {
        var b = this.g.getElementsByClassName("wb-title")[0];
        a = this.title = a;
        var c = b.firstChild;
        c ? c.nodeValue = a : b.textContent = a;
        return this;
    };
    f.setIcon = function(a) {
        var b = this.g.getElementsByClassName("wb-icon")[0];
        w(b, "background-image", "url(" + a + ")");
        w(b, "display", "inline-block");
        return this;
    };
    f.setBackground = function(a) {
        w(this.g, "background", a);
        return this;
    };
    f.setUrl = function(a, b) {
        var c = this.body.firstChild;
        c && "iframe" === c.tagName.toLowerCase() ? c.src = a : (this.body.innerHTML = '<iframe src="' + a + '"></iframe>', b && (this.body.firstChild.onload = b));
        return this;
    };
    f.focus = function(a) {
        if (!1 === a) return this.blur();
        K !== this && this.g && (K && K.blur(), w(this.g, "z-index", ++A), this.index = A, this.addClass("focus"), K = this, this.focused = !0, this.onfocus && this.onfocus());
        return this;
    };
    f.blur = function(a) {
        if (!1 === a) return this.focus();
        K === this && (this.removeClass("focus"), this.focused = !1, this.onblur && this.onblur(), K = null);
        return this;
    };
    f.hide = function(a) {
        if (!1 === a) return this.show();
        if (!this.hidden) return this.onhide && this.onhide(), this.hidden = !0, this.addClass("hide");
    };
    f.show = function(a) {
        if (!1 === a) return this.hide();
        if (this.hidden) return this.onshow && this.onshow(), this.hidden = !1, this.removeClass("hide");
    };
    f.minimize = function(a) {
        if (!1 === a) return this.restore();
        J && za();
        this.max && (this.removeClass("max"), this.max = !1);
        this.min || (x.push(this), la(), this.g.title = this.title, this.addClass("min"), this.min = !0, this.onminimize && this.onminimize());
        return this;
    };
    f.restore = function() {
        J && za();
        this.min && (ma(this), this.resize().move(), this.onrestore && this.onrestore());
        this.max && (this.max = !1, this.removeClass("max").resize().move(), this.onrestore && this.onrestore());
        return this;
    };
    f.maximize = function(a) {
        if (!1 === a) return this.restore();
        J && za();
        this.min && ma(this);
        this.max || (this.addClass("max").resize(P - this.left - this.right, Q - this.top - this.bottom, !0).move(this.left, this.top, !0), this.max = !0, this.onmaximize && this.onmaximize());
        return this;
    };
    f.fullscreen = function(a) {
        this.min && (ma(this), this.resize().move());
        if (!J || !za()) this.body[L](), J = this, this.full = !0, this.onfullscreen && this.onfullscreen();
        else if (!1 === a) return this.restore();
        return this;
    };
    function za() {
        J.full = !1;
        if (document.fullscreen || document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) return document[fa](), !0;
    }
    f.close = function(a) {
        if (this.onclose && this.onclose(a)) return !0;
        this.min && ma(this);
        this.unmount();
        this.g.remove();
        this.g.textContent = "";
        this.g = this.body = this.g.winbox = null;
        K === this && (K = null);
    };
    f.move = function(a, b, c) {
        a || 0 === a ? c || (this.x = a ? a = W(a, P - this.left - this.right, this.width) : 0, this.y = b ? b = W(b, Q - this.top - this.bottom, this.height) : 0) : (a = this.x, b = this.y);
        w(this.g, "left", a + "px");
        w(this.g, "top", b + "px");
        this.onmove && this.onmove(a, b);
        return this;
    };
    f.resize = function(a, b, c) {
        a || 0 === a ? c || (this.width = a ? a = W(a, this.l) : 0, this.height = b ? b = W(b, this.j) : 0, a = Math.max(a, this.o), b = Math.max(b, this.m)) : (a = this.width, b = this.height);
        w(this.g, "width", a + "px");
        w(this.g, "height", b + "px");
        this.onresize && this.onresize(a, b);
        return this;
    };
    f.addControl = function(a) {
        var b = a["class"], c = a.image, e = a.click;
        a = a.index;
        var d = document.createElement("span"), g = this.g.getElementsByClassName("wb-control")[0], l = this;
        b && (d.className = b);
        c && w(d, "background-image", "url(" + c + ")");
        e && (d.onclick = function(F) {
            e.call(this, F, l);
        });
        g.insertBefore(d, g.childNodes[a || 0]);
        return this;
    };
    f.removeControl = function(a) {
        (a = this.g.getElementsByClassName(a)[0]) && a.remove();
        return this;
    };
    f.addClass = function(a) {
        this.g.classList.add(a);
        return this;
    };
    f.removeClass = function(a) {
        this.g.classList.remove(a);
        return this;
    };
    f.toggleClass = function(a) {
        return this.g.classList.contains(a) ? this.removeClass(a) : this.addClass(a);
    };
    window.WinBox = V;
}).call(this);

},{}]},["2Rsls","4pp4s"], "4pp4s", "parcelRequire1292")

//# sourceMappingURL=index.4de9b498.js.map
