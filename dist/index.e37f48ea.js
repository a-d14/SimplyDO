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
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _listViewJs = require("./views/ListView.js");
var _listViewJsDefault = parcelHelpers.interopDefault(_listViewJs);
var _sidebarViewJs = require("./views/sidebarView.js");
var _sidebarViewJsDefault = parcelHelpers.interopDefault(_sidebarViewJs);
var _addCategoryViewJs = require("./views/addCategoryView.js");
var _addCategoryViewJsDefault = parcelHelpers.interopDefault(_addCategoryViewJs);
var _addItemViewJs = require("./views/addItemView.js");
var _addItemViewJsDefault = parcelHelpers.interopDefault(_addItemViewJs);
var _helpersJs = require("./helpers.js");
// DISPLAY ITEMS
const controlItemDisplay = function() {
    (0, _listViewJsDefault.default).render(_modelJs.state.items[day].items);
};
/** SITE NAVIGATION **/ // DISPLAY
const controlSidebarDisplay = function() {
    let categories = _modelJs.state["categories"].map((cat)=>{
        return {
            ...cat
        };
    });
    // categories.push({id: -1, name: "inbox"});
    // categories.push({id: -2, name: "today"});
    categories.forEach((cat)=>{
        cat.name = (0, _helpersJs.capitalizeFirstLetter)(cat.name);
        if (cat.parent) {
            const parent = categories.find((c)=>c.id == cat.parent);
            if (parent.children) parent.children.push(cat);
            else parent.children = [
                cat
            ];
        }
    });
    categories = categories.filter((cat)=>!cat.parent || cat.children);
    console.log(categories);
    (0, _sidebarViewJsDefault.default).setSelectedId(-2);
    (0, _sidebarViewJsDefault.default).render(categories);
};
// SWITCH TABS
const switchTab = function(id) {
    (0, _sidebarViewJsDefault.default).setSelectedId(+id);
    (0, _sidebarViewJsDefault.default).render();
};
// ADD A NEW TAB
const addCategoryController = function(event) {
    event.preventDefault();
    console.log("submit");
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    console.log(dataObject);
    const newCategory = {
        name: dataObject["category-name"],
        parent: dataObject["parent-category"] === "default" ? null : dataObject["parent-category"]
    };
    _modelJs.state["categories"].push(newCategory);
    controlSidebarDisplay();
};
/** ADD ITEMS **/ const addItemController = function(dataObject) {
    if (dataObject.itemEntry.trim() === "") return;
    // console.log(dataObject);
    _modelJs.addItem(dataObject);
    controlItemDisplay();
};
// EDIT ITEM
const editItemController = function(id, content = null) {
    _modelJs.toggleEdit(id, content);
    controlItemDisplay();
};
// REMOVE ITEM FROM LIST
const removeItemController = function(id) {
    _modelJs.setItems(_modelJs.state.items[_modelJs.state.selectedDay].items.filter((item)=>item.id != id));
    controlItemDisplay();
};
// ITEM COMPLETED
const completeItemController = function(id) {
    _modelJs.setItemComplete(id);
    controlItemDisplay();
};
function init() {
    // RENDERING ELEMENTS
    controlSidebarDisplay();
    (0, _addCategoryViewJsDefault.default).render(_modelJs.state["categories"].filter((cat)=>!cat.parent));
    (0, _addItemViewJsDefault.default).render();
    // HANDLING DOM EVENTS
    (0, _sidebarViewJsDefault.default).addHandlerCategorySelected(switchTab);
    (0, _addCategoryViewJsDefault.default).addFormSubmitHandler(addCategoryController);
}
init();

},{"./model.js":"Y4A21","./views/ListView.js":"bzxVY","./views/sidebarView.js":"eUObu","./views/addCategoryView.js":"gYdL5","./views/addItemView.js":"eNQZt","./helpers.js":"hGI1E","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    "categories": [
        {
            id: 1,
            name: "personal",
            numberOfItems: 10,
            parent: null
        },
        {
            id: 2,
            name: "work",
            numberOfItems: 3,
            parent: null
        },
        {
            id: 3,
            name: "hobbies",
            numberOfItems: 9,
            parent: null
        },
        {
            id: 4,
            name: "home",
            numberOfItems: 4,
            parent: 1
        },
        {
            id: 5,
            name: "finances",
            numberOfItems: 3,
            parent: 1
        },
        {
            id: 6,
            name: "family",
            numberOfItems: 3,
            parent: 1
        },
        {
            id: 7,
            name: "guitar",
            numberOfItems: 3,
            parent: 3
        },
        {
            id: 8,
            name: "painting",
            numberOfItems: 3,
            parent: 3
        },
        {
            id: 9,
            name: "gaming",
            numberOfItems: 3,
            parent: 3
        }
    ],
    items: [
        {
            id: 1,
            content: "Buy groceries",
            edit: false,
            completed: false,
            date: new Date(),
            category: 4
        },
        {
            id: 2,
            content: "Paint the living room wall",
            edit: false,
            completed: false,
            date: new Date(),
            category: 4
        },
        {
            id: 3,
            content: "Do the laundry",
            edit: false,
            completed: false,
            date: null,
            category: 4
        },
        {
            id: 4,
            content: "Clean the garage",
            edit: false,
            completed: false,
            date: null,
            category: 4
        },
        {
            id: 5,
            content: "File taxes",
            edit: false,
            completed: false,
            date: new Date(),
            category: 5
        },
        {
            id: 6,
            content: "Sell XYZ stock",
            edit: false,
            completed: false,
            date: new Date(),
            category: 5
        },
        {
            id: 7,
            content: "Buy XYZ crypto",
            edit: false,
            completed: false,
            date: null,
            category: 5
        },
        {
            id: 8,
            content: "Dinner with family",
            edit: false,
            completed: false,
            date: new Date(),
            category: 6
        },
        {
            id: 9,
            content: "Build the lego set with the kids",
            edit: false,
            completed: false,
            date: new Date(),
            category: 6
        },
        {
            id: 10,
            content: "Buy the christmas presents",
            edit: false,
            completed: false,
            date: null,
            category: 6
        },
        {
            id: 11,
            content: "Set goals for the quarter with the team",
            edit: false,
            completed: false,
            date: new Date(),
            category: 2
        },
        {
            id: 12,
            content: "Decide on appraisals for the high performers",
            edit: false,
            completed: false,
            date: new Date(),
            category: 2
        },
        {
            id: 13,
            content: "Organize the yearly office getaway",
            edit: false,
            completed: false,
            date: null,
            category: 2
        },
        {
            id: 14,
            content: "Learn the A minor pentatonic scale",
            edit: false,
            completed: false,
            date: new Date(),
            category: 7
        },
        {
            id: 15,
            content: "Learn to read sheet notation",
            edit: false,
            completed: false,
            date: new Date(),
            category: 7
        },
        {
            id: 16,
            content: "Learn to play Smells like Teen Spirit",
            edit: false,
            completed: false,
            date: null,
            category: 7
        },
        {
            id: 17,
            content: "Learn the basics of brush strokes",
            edit: false,
            completed: false,
            date: new Date(),
            category: 8
        },
        {
            id: 18,
            content: "Learn to make urban sketches",
            edit: false,
            completed: false,
            date: new Date(),
            category: 8
        },
        {
            id: 19,
            content: "Finish the bob ross follow along painting",
            edit: false,
            completed: false,
            date: null,
            category: 8
        },
        {
            id: 20,
            content: "Learn the Jiggle Peek",
            edit: false,
            completed: false,
            date: new Date(),
            category: 9
        },
        {
            id: 21,
            content: "Learn how to play Sage",
            edit: false,
            completed: false,
            date: new Date(),
            category: 9
        },
        {
            id: 22,
            content: "Reach Platinum 3",
            edit: false,
            completed: false,
            date: null,
            category: 9
        }
    ]
};
state["categories"].push = function() {
    for (let arg of arguments)arg = {
        ...arg,
        id: state["categories"].length + 1,
        numberOfItems: 0
    };
    return Array.prototype.push.apply(this, arguments);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bzxVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _itemViewJs = require("./ItemView.js");
var _itemViewJsDefault = parcelHelpers.interopDefault(_itemViewJs);
class ListView extends (0, _viewJsDefault.default) {
    _parent = document.querySelector(".list-items");
    constructor(){
        super();
    }
    addHandlerEditAndDeleteItem(handlerEdit, handlerDelete, handlerComplete) {
    // this._parent.addEventListener('click', (e) => {
    //     const targetElement = e.target.closest('.list-item').getElementsByTagName('li')[0];
    //     const targetId = targetElement.dataset.id;
    //     if(e.target.closest('button').className === 'list-item__controls--delete') {
    //         handlerDelete(targetId);
    //     } else if(e.target.closest('button').className === 'list-item__controls--edit' || e.target.closest('button').className === 'list-item__controls--submit') {
    //         const inputElement = targetElement.getElementsByTagName('input')[0];
    //         handlerEdit(+targetId, inputElement ? inputElement.value : null);
    //     } else if(e.target.closest('button').className === 'list-item__controls--complete') {
    //         console.log("complete");
    //         handlerComplete(+targetId);
    //     }
    // });
    }
    _generateMarkup() {
        const markup = this._data.map((item)=>(0, _itemViewJsDefault.default).render(item, false)).join("");
        return markup;
    }
}
exports.default = new ListView();

},{"./View.js":"5cUXS","./ItemView.js":"9PReK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data = this._data, render = true) {
        this._data = data;
        console.log(this._data);
        const markup = this._generateMarkup();
        if (!render) return markup;
        this.clear();
        this._parent.insertAdjacentHTML("afterbegin", markup);
    }
    clear() {
        this._parent.innerHTML = "";
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9PReK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("url:../../assets/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class ItemView extends (0, _viewJsDefault.default) {
    constructor(){
        super();
    }
}
exports.default = new ItemView();

},{"./View.js":"5cUXS","url:../../assets/icons.svg":"knPe0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knPe0":[function(require,module,exports) {
module.exports = require("8fd43c75e9dfae70").getBundleURL("hWUTQ") + "icons.4112406e.svg" + "?" + Date.now();

},{"8fd43c75e9dfae70":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eUObu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class SidebarView extends (0, _viewJsDefault.default) {
    _parent = document.querySelector(".main__navigation__list");
    _selectedId;
    _svgs = {
        inbox: `<svg class="icon icon--small icon--inbox w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5.024 3.783A1 1 0 0 1 6 3h12a1 1 0 0 1 .976.783L20.802 12h-4.244a1.99 1.99 0 0 0-1.824 1.205 2.978 2.978 0 0 1-5.468 0A1.991 1.991 0 0 0 7.442 12H3.198l1.826-8.217ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.43a4.978 4.978 0 0 1-9.14 0H3Z" clip-rule="evenodd"/>
                </svg>`,
        today: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
                </svg>`,
        personal: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--house" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                    </svg>`,
        work: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon--small" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2-9-2-9-2m9-2h.01"/>
                </svg>`,
        hobbies: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--heart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
                    </svg>`,
        none: `<svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--heart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    </svg>`
    };
    _generateMarkup() {
        return `
            <div data-id="-1" class="main__navigation--item ${this._selectedId === -1 ? "selected" : ""}">
                ${this._svgs.inbox}
                Inbox
            </div>
            <div data-id="-2" class="main__navigation--item ${this._selectedId === -2 ? "selected" : ""}">
                ${this._svgs.today}
                Today
            </div>
            ${this._data.map((cat)=>`<div data-id=${cat.id} class="main__navigation--item ${this._selectedId === cat.id ? "selected" : ""}">
                        ${this._svgs[cat.name.toLowerCase()] ?? this._svgs.none}
                        ${cat.name}
                    </div>
                    ${cat.children ? cat.children.map((c)=>`<div data-id=${c.id} class="main__navigation--item main__navigation--sub-item ${this._selectedId === c.id ? "selected" : ""}">
                                ${this._svgs[c.name.toLowerCase()] ?? this._svgs.none}
                            ${c.name}
                            </div>`).join("") : ""}
                    `).join("")}
        `;
    }
    addHandlerCategorySelected(handler) {
        this._parent.addEventListener("click", (e)=>{
            const targetElement = e.target;
            if (targetElement.classList.contains("main__navigation--item")) handler(targetElement.dataset.id);
        });
    }
    setSelectedId(id) {
        this._selectedId = id;
    // console.log(this._selectedId);
    }
}
exports.default = new SidebarView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYdL5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class AddCategoryView extends (0, _viewDefault.default) {
    _parent = document.querySelector(".main__navigation__add-category");
    constructor(){
        super();
        this._parent.addEventListener("click", (e)=>{
            const closeForm = e.target.closest(".main__navigation__add-category__button") || e.target.closest(".main__navigation__add-category--form__button");
            if (closeForm) {
                document.querySelector(".main__navigation__add-category__button").classList.toggle("clicked");
                document.querySelector(".main__navigation__add-category--form").classList.toggle("main__navigation__add-category--form__hidden");
            }
        });
    }
    _generateMarkup(error = null) {
        return `<form class="main__navigation__add-category--form main__navigation__add-category--form__hidden">
                <p><strong>Add Category</strong></p>
                <input name="category-name" class="input input__small main__navigation__add-category--form__input" type="text" placeholder="Enter Name" />
                ${error ? `<small>${error}</small>` : ""}
                <select name="parent-category" class="input__small dropdown">
                    <option value=default selected>Select a Category</option>
                    ${this._data.map((cat)=>`<option value=${cat.id}>${(0, _helpers.capitalizeFirstLetter)(cat.name)}</option>`)}
                </select>
                <button class="main__navigation__add-category--form__button" type="submit">Add</button>
            </form>
            <button type="button" class="main__navigation__add-category__button">
                <svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--small icon--plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>                          
            </button>
            Add Category
    `;
    }
    addFormSubmitHandler(handler) {
        this._parent.addEventListener("submit", (e)=>{
            handler(e);
        });
    }
}
exports.default = new AddCategoryView();

},{"../helpers":"hGI1E","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hGI1E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalizeFirstLetter", ()=>capitalizeFirstLetter);
const capitalizeFirstLetter = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eNQZt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
class AddItemView extends (0, _viewJsDefault.default) {
    _parent = document.querySelector(".main__list--add-item");
    _generateMarkup() {
        return `<input class="main__list--add-item-input input input__large" placeholder="Enter a task here..." name="itemEntry" type="text" id="item-entry" />
            <div class="main__list--add-item__controls">
                <input class="main__list--add-item-button" type="date" />
                <!-- <input class="main__list--add-item-button" type="datetime-local" /> -->
                <input class="main__list--add-item-button" type="time" />
                <button class="main__list--add-item-button">
                    Category
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon--medium" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>  
                </button>
                <button class="main__list--add-item-button">
                    Priority
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon--medium" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>  
                </button>
                <button type="submit" class="main__list--add-item-button main__list--add-item-button-add">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white icon icon--medium icon--plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                    </svg> 
                </button>
        </div>`;
    }
    addHandlerOnSubmit(handler) {
    // this._parent.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     console.log(e.target.firstElementChild);
    //     const formData = new FormData(e.target);
    //     const dataObject = Object.fromEntries(formData.entries());
    //     handler(dataObject);
    //     e.target.firstElementChild.value = "";
    // });
    }
}
exports.default = new AddItemView();

},{"./View.js":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hycaY","aenu9"], "aenu9", "parcelRequire4688")

//# sourceMappingURL=index.e37f48ea.js.map
