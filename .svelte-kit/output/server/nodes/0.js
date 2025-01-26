import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D_ps6zA4.js","_app/immutable/chunks/disclose-version.4qQWTM9Z.js","_app/immutable/chunks/runtime.CZgCK7JV.js","_app/immutable/chunks/legacy.B9rBSQkr.js","_app/immutable/chunks/render.CrqpDrZq.js","_app/immutable/chunks/attributes.CejyeHAR.js","_app/immutable/chunks/if.DkI19y2K.js","_app/immutable/chunks/props.BxsZIJYn.js"];
export const stylesheets = ["_app/immutable/assets/0.d0gzyizm.css"];
export const fonts = [];
