

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Ch15Oxp4.js","_app/immutable/chunks/disclose-version.4qQWTM9Z.js","_app/immutable/chunks/runtime.CZgCK7JV.js","_app/immutable/chunks/legacy.B9rBSQkr.js"];
export const stylesheets = [];
export const fonts = [];
