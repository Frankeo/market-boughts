import { getAuth } from "firebase-admin/auth";
import { a as app } from "./dashboard_50d2d43b.mjs";

const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  const { email, name, password } = await request.json();
  if (email === void 0 || password === void 0 || name === void 0) {
    return new Response("Missing form data", { status: 400 });
  }
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 400 });
  }
  return redirect("/signin");
};

export { POST };
