export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/particles.json","classMateLogo.png","close.png","exit.png","github.png","jake4.png","linkedin.png","senior_photo.jpeg","shell.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.VH_w2oOA.js","app":"_app/immutable/entry/app.B-qkklc5.js","imports":["_app/immutable/entry/start.VH_w2oOA.js","_app/immutable/chunks/entry.B6xUfoQ3.js","_app/immutable/chunks/runtime.CZgCK7JV.js","_app/immutable/chunks/index-client.B45AoGQF.js","_app/immutable/entry/app.B-qkklc5.js","_app/immutable/chunks/runtime.CZgCK7JV.js","_app/immutable/chunks/render.CrqpDrZq.js","_app/immutable/chunks/disclose-version.4qQWTM9Z.js","_app/immutable/chunks/if.DkI19y2K.js","_app/immutable/chunks/props.BxsZIJYn.js","_app/immutable/chunks/index-client.B45AoGQF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
