import {
  e as createAstro,
  f as createComponent,
  r as renderTemplate,
  m as maybeRenderHead,
} from "../astro_af8d3f77.mjs";
import "html-escaper";
import "clsx";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const activeApps = getApps();
const serviceAccount = {
  type: "service_account",
  project_id: "market-boughts",
  private_key_id: "6bb2fa29678649c3a9d85e66ed4ec880d23b2763",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDhye1KkNMziNrv\ngaE9+dEM1Oo2g+WoCQ5wDGbl+KASGUOSB21ktKObTemF0lh4M83ZQc+qsrQRtucK\nHBTkIS3dwsU8JQEtB2PIZMh6IOpbWW5RHbiaa80srb4oTAVPetkeqtL7nPiJ/cZ6\nezfBM8ozao5pH7XlCJlpQRneit1aalvTptqJXfhpPTSJpzDtkQpUHNbgnHey0YDQ\nrnOfE4Hz8v9srNGyiy0HtzeNNaKhEJkf9o4mW1HT51DbZ9BWKe+Ry4cgJ0iIRKuq\n13uQRpxU40UFD3+AWUOisTDdfWbckDpjgj2pvdRsS+kOT7tD6lJkhBLAdwseCTJJ\n9/FEmlxFAgMBAAECggEAAqEX1szzRf/be3uDywAhkOfafF0H1m+Yj/HNBvOLZaU5\nVgt+bh7zuBzC/JBzqvQA0H1a3jmA2E32yHWFlsHTfL1xD4oSG+9LQwD4HAKjHVeK\nwyi4nBpnmWltM/SYATzEfNNva90AQJcdxxJalrDe3hS+aMyk5nBgXPXpnQpP7pFr\nOtrCfi98ex7vQAk6uIw0+jiH4Zoe4OC2Om2eulen7QfcsVAE7anuixvXl0oJA5Hp\n7mFt075pJTqOQQ51MaNywRRjj7r6tJBIzSAlapC01dVq1ol/9/AsLZW9RL0A5QHa\nnw91DlDeE+dYjUbRnsROMItaLPSEcc5jFWfNM0NU4QKBgQD5tRVJHlYsjPbFv+mI\nk0+kj9/2Ufa45Wh32b49Gu0ofsOHizqLzURaiNSN44dMdS47pRYwdv2JCh/9TsWm\nilbSdWSe2BtP+PzciJOZp8jYDSaKKIXx+KMjL9XMAci9IkdBth68jyYLwPD7T6bH\nvuD5OObfltQDhQeSetbIRSoUsQKBgQDneoou+8geLRb0aqYzv6PJQAOYADHbF5Gz\nNioi9hJ33VsrOpqAXofihwfGL/vyOsekGqaZj065+1tf+qTf6QQ8hYQLLvyP4voy\n9XHvpXkalntfWzjSF+e7yO0cIVS8u4sfZNm1nwHgOisWPI0IO4sRb4cK6wMAG/97\nF3TRbNa11QKBgQCB3a+oS2K94MImrlyibxqolzr/PDl4h7cBPfk2hl55BRRj1gEo\n3CSEgU0qTf77wKW+12jm47uQHfftIZ6hsqjc47jk87egq/m2KEG7VAuccZptmA2x\nfoI5tpMWeocP9lfg0PrDTh+XVUz/JrmygI84jmNkPWkeO31orQIvPelYwQKBgAy5\n1Oz+VKMsEW4AiwCfUY7X4RqzMAp+gjkbCjf/1UYXulJnF2VlTQ0sJUZFDxHjH2Sr\nPmuE0GwzIHPnYLcapWv6XycKP0Jd1SmGCuyE6WKH0WKNrlMGk2vkgPyh7HmvyddB\nASMWCdFdAU9opsxEEcI0onT8NJ8F6wbGZFq7JBa9AoGBALYLXX2GBE/EvutZ680E\nGWR62++TC5UflbE1GPxuoJIplKDqLZamelC2qSwLBf4W7aLQJVpDBK7AutYAMuA4\nN4gIUIZ6tMcrkGRa8jhYrJjYc2SVdYnWTue9ZsIqBigwkM4rx+abX+/S6fjh3ppm\nC/sr5c6J5/zf12OoBYQ2vSuJ\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-csm52@market-boughts.iam.gserviceaccount.com",
  client_id: "109378063660305714770",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-csm52%40market-boughts.iam.gserviceaccount.com",
};
const app =
  activeApps.length === 0
    ? initializeApp({
        credential: cert(serviceAccount),
      })
    : activeApps[0];

const $$Astro = createAstro();
const $$Dashboard = createComponent(
  async ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
    Astro2.self = $$Dashboard;
    const auth = getAuth(app);
    console.log(Astro2.request.headers.get("cookie"));
    if (!Astro2.cookies.has("__session")) {
      return Astro2.redirect("/signin");
    }
    const sessionCookie = Astro2.cookies.get("__session")?.value;
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    const user = await auth.getUser(decodedCookie.uid);
    if (!user) {
      return Astro2.redirect("/signin");
    }
    return renderTemplate`${maybeRenderHead()}<h1>Welcome ${
      user.displayName
    }</h1> <p>We are happy to see you here</p> <form action="/api/auth/signout"> <button type="submit">Sign out</button> </form>`;
  },
  "/Users/f.moreno/Projects/market-boughts/src/pages/dashboard.astro",
  void 0,
);

const $$file =
  "/Users/f.moreno/Projects/market-boughts/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Dashboard,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: "Module" },
  ),
);

export { app as a, dashboard as d };
