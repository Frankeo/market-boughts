import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../lib/firebase/server";

interface RegisteredUser {
  name: string;
  email: string;
  password: string;
}

export const POST: APIRoute = async ({ request, redirect }) => {
  const auth = getAuth(app);

  /* Get form data */
  const { email, name, password } = (await request.json()) as RegisteredUser;

  if (email === undefined || password === undefined || name === undefined) {
    return new Response("Missing form data", { status: 400 });
  }

  /* Create user */
  try {
    await auth.createUser({
      email,
      password,
      displayName: name,
    });
  } catch (error: any) {
    return new Response("Something went wrong", { status: 400 });
  }
  return redirect("/signin");
};
