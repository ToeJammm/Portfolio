import { e as ensure_array_like, d as attr, f as spread_attributes, g as escape_html, h as bind_props, j as slot } from "../../chunks/index.js";
import "clsx";
import { f as fallback } from "../../chunks/utils.js";
function Footer($$payload) {
  $$payload.out += `<footer class="flex flex-col items-center justify-center gap-4 border-t border-solid border-violet-950 bg-black sm:gap-8 sm:py-20"><div class="flex flex-col items-center justify-center gap-4"><p><a href="https://github.com/ToeJammm" target="_blank" rel="noopener noreferrer"><img src="github.png" alt="GitHub" class="inline-block h-20 w-20"></a></p> <p><a href="https://www.linkedin.com/in/jake-marlow-8255a3186/" target="_blank" rel="noopener noreferrer"><img src="linkedin.png" alt="LinkedIn" class="inline-block h-20 w-20"></a></p> <p class="mb-10">jmarlow541@yahoo.com</p></div></footer>`;
}
function Header($$payload, $$props) {
  let y = $$props["y"];
  let tabs = fallback(
    $$props["tabs"],
    () => [
      // { name: 'Projects', link: 'projects' },
      { name: "About Me", link: "about" },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/jake-marlow-8255a3186/"
      },
      {
        name: "GitHub",
        link: "https://github.com/ToeJammm"
      }
    ],
    true
  );
  const each_array = ensure_array_like(tabs);
  const each_array_1 = ensure_array_like(tabs);
  $$payload.out += `<header${attr("class", "sticky top-0 z-[10] flex items-center justify-between border-b border-solid px-6 duration-200 " + (y > 0 ? " border-violet-950 bg-slate-950 py-4" : " border-transparent bg-transparent py-6"))}><h1 class="relative transform cursor-pointer overflow-hidden font-medium duration-200 hover:scale-110 hover:text-violet-400"><a href="/"><span>Home</span></a></h1> <button class="flex items-center justify-center rounded-md p-2 text-white sm:hidden" aria-label="Toggle navigation menu">`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span class="text-2xl">☰</span>`;
  }
  $$payload.out += `<!--]--></button> <div class="hidden items-center gap-4 sm:flex"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tab = each_array[$$index];
    $$payload.out += `<a${spread_attributes({
      href: tab.link,
      class: "flex items-center duration-200 hover:text-violet-400",
      ...tab.name === "About Me" ? {} : { target: "_blank", rel: "noopener noreferrer" }
    })}>`;
    if (tab.name === "GitHub") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img src="github.png" alt="GitHub" class="h-8 w-8">`;
    } else {
      $$payload.out += "<!--[!-->";
      if (tab.name === "LinkedIn") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img src="linkedin.png" alt="LinkedIn" class="h-8 w-8">`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<p>${escape_html(tab.name)}</p>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></a>`;
  }
  $$payload.out += `<!--]--></div> <div${attr("class", `absolute right-0 top-full z-20 flex w-full transform flex-col items-center gap-4 bg-slate-950 p-4 transition-all duration-300 ease-in sm:hidden ${"-translate-y-5 opacity-0"}`)}><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let tab = each_array_1[$$index_1];
    $$payload.out += `<a${spread_attributes({
      href: tab.link,
      class: "flex w-full items-center justify-center duration-200 hover:text-violet-400",
      ...tab.name === "About Me" ? {} : { target: "_blank", rel: "noopener noreferrer" }
    })}>`;
    if (tab.name === "GitHub") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img src="github.png" alt="GitHub" class="h-8 w-8">`;
    } else {
      $$payload.out += "<!--[!-->";
      if (tab.name === "LinkedIn") {
        $$payload.out += "<!--[-->";
        $$payload.out += `<img src="linkedin.png" alt="LinkedIn" class="h-8 w-8">`;
      } else {
        $$payload.out += "<!--[!-->";
        $$payload.out += `<p>${escape_html(tab.name)}</p>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--></a>`;
  }
  $$payload.out += `<!--]--></div></header>`;
  bind_props($$props, { y, tabs });
}
function _layout($$payload, $$props) {
  let y;
  $$payload.out += `<div class="container relative mx-auto flex min-h-screen w-full max-w-[1400px] flex-col text-sm sm:text-base"><div${attr("class", "fixed bottom-0 z-[10] flex w-full p-10 duration-200  pointer-events-none opacity-0")}><button class="ml-auto grid aspect-square cursor-pointer place-items-center rounded-full bg-slate-900 px-3 text-violet-400 hover:bg-slate-800 sm:px-4" aria-label="Scroll to top"><i class="fa-solid fa-arrow-up"></i></button></div> `;
  Header($$payload, { y });
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
