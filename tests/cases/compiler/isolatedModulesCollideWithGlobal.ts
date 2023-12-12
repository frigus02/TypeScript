// @isolatedModules: true
// @target: es5
// @noLib: true
// @noTypesAndSymbols: true

// @filename: file1.ts
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
