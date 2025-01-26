import "clsx";
import { d as attr, g as escape_html, j as slot, h as bind_props, c as pop, p as push, e as ensure_array_like } from "../../chunks/index.js";
function Step($$payload, $$props) {
  push();
  let step = $$props["step"];
  $$payload.out += `<a${attr("href", step.href)} target="_blank" class="group flex cursor-pointer flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 p-4 text-center duration-200 hover:border-violet-400 sm:p-6 md:p-8"><h3 class="mb-5 inline-block w-fit bg-slate-950 px-4 text-xl font-medium sm:text-2xl md:text-3xl">${escape_html(step.name)}</h3> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> <div class="justify-betweeen flex flex-1 items-end gap-4"><div class="relative ml-auto transform cursor-pointer overflow-hidden duration-200 hover:scale-110"><p class="z-4">See More →</p></div></div></a>`;
  bind_props($$props, { step });
  pop();
}
function Main($$payload) {
  let steps = [
    {
      name: "ClassMate Webapp",
      icon: "classMateLogo.png",
      description: "A SERN stack application designed to make choosing college courses easier by allowing students to rate their courses (and not JUST their professors)"
    },
    //send to url
    {
      name: "Simple Shell",
      icon: "",
      description: "A simple shell written in C. Fast, efficient, and user friendly. Capable of all basic commands, piping, and standard input/output operators"
    },
    //take ss of it working and make a page for it
    {
      name: "Neural Network",
      icon: "",
      description: "Simple neural network built from scratch in C++. Accepts CSV files for training and is capable of both data processing, training, and valdidating itself for simple regression problems."
    }
    //take ss of it working and make page for it
  ];
  const each_array = ensure_array_like(steps);
  $$payload.out += `<main class="flex flex-1 flex-col p-4"><section id="introPage" class="grid grid-cols-1 gap-10 py-8 sm:py-14 lg:grid-cols-2"><div class="align-center flex flex-col gap-6 text-center md:gap-8 lg:ml-20 lg:justify-center lg:gap-10 lg:text-center"><h2 class="text-4xl font-semibold sm:text-5xl md:text-6xl">I'm <span class="poppins text-violet-400">Jake</span> Marlow, <br>Software <span class="poppins text-violet-400">Engineer</span></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">strengths</span> include Full Stack Web Development and Machine/Deep
				Learning</p></div> <div class="relative grid place-items-center shadow-2xl"><img${attr("src", "jake4.png")} alt="Jake Marlow" class="z-[2] max-h-[70vh] object-cover"></div></section> <section class="lg:py-15 flex flex-col gap-24 py-5" id="projects"><div class="flex flex-col gap-2 text-center"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="text-3xl font-semibold sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-10"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let step = each_array[$$index];
    Step($$payload, {
      step,
      children: ($$payload2) => {
        $$payload2.out += `<p class="w-auto">${escape_html(step.description)}</p>`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></div></section></main>`;
}
function _page($$payload) {
  Main($$payload);
}
export {
  _page as default
};
