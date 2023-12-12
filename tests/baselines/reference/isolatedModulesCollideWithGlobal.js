//// [tests/cases/compiler/isolatedModulesCollideWithGlobal.ts] ////

//// [file1.ts]
declare function getChildWindows(): Window[];
export function updateUrl(newHash: string) {
    if (newHash !== window.location.hash) {
        window.history.replaceState(null, '', newHash);
        for (const window of getChildWindows()) {
            window.history.replaceState(null, '', newHash);
        }
    }
}

{
    const console = 'local';
}
console.log('ok');


//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUrl = void 0;
function updateUrl(newHash) {
    if (newHash !== window.location.hash) {
        window.history.replaceState(null, '', newHash);
        for (var _i = 0, _a = getChildWindows(); _i < _a.length; _i++) {
            var window_1 = _a[_i];
            window_1.history.replaceState(null, '', newHash);
        }
    }
}
exports.updateUrl = updateUrl;
{
    var console_1 = 'local';
}
console.log('ok');
