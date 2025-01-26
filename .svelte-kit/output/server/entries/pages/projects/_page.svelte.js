import { h as bind_props } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  let params = $$props["params"];
  $$payload.out += `<h1>My Projects</h1> <p>in detail</p>`;
  bind_props($$props, { params });
}
export {
  _page as default
};
