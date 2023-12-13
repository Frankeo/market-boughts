import {
  e as createAstro,
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
} from "../astro_af8d3f77.mjs";
import "html-escaper";
import "clsx";
import { a as app } from "./dashboard_50d2d43b.mjs";
import { getAuth } from "firebase-admin/auth";

const $$Astro = createAstro();
const $$Signin = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Signin;
    const auth = getAuth(app);
    if (Astro2.cookies.has("market-boughts")) {
      const sessionCookie = Astro2.cookies.get("market-boughts")?.value;
      const decodedCookie = await auth.verifySessionCookie(sessionCookie);
      if (decodedCookie) {
        return Astro2.redirect("/dashboard");
      }
    }
    return renderTemplate`${maybeRenderHead()}<h1>Sign in</h1> <p>New here? <a href="/register">Create an account</a></p> <form action="/api/auth/signin" method="post"> <label for="email" for="email">Email</label> <input type="email" name="email" id="email"> <label for="password">Password</label> <input type="password" name="password" id="password"> <button type="submit">Login</button> </form> `;
  },
  "/Users/f.moreno/Projects/market-boughts/src/pages/signin.astro",
  void 0,
);

const $$file = "/Users/f.moreno/Projects/market-boughts/src/pages/signin.astro";
const $$url = "/signin";

export { $$Signin as default, $$file as file, $$url as url };
