import {
  e as createAstro,
  f as createComponent,
  r as renderTemplate,
  g as addAttribute,
  h as renderHead,
} from "../astro_af8d3f77.mjs";
import "html-escaper";
import "clsx";

const $$Astro = createAstro();
const $$Index = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Index;
    return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(
      Astro2.generator,
      "content",
    )}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> </body></html>`;
  },
  "/Users/f.moreno/Projects/market-boughts/src/pages/index.astro",
  void 0,
);

const $$file = "/Users/f.moreno/Projects/market-boughts/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
