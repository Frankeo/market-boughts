import {
  e as createAstro,
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
} from "../astro_af8d3f77.mjs";
import "html-escaper";
import "clsx";

const $$Astro = createAstro();
const $$Register = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Register;
    return renderTemplate`${maybeRenderHead()}<h1>Register</h1> <p>Already have an account? <a href="/signin">Sign in</a></p> <form action="/api/auth/register" method="post"> <label for="name">Name</label> <input type="text" name="name" id="name"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Register</button> </form>`;
  },
  "/Users/f.moreno/Projects/market-boughts/src/pages/register.astro",
  void 0,
);

const $$file =
  "/Users/f.moreno/Projects/market-boughts/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
