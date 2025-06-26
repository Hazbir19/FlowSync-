import { LoginAuth } from "@/app/actions/auth/LoginAuth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { to } from "./../../../../.next/static/chunks/[turbopack]_browser_dev_hmr-client_hmr-client_ts_61dcf9ba._";
export const NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const user = await LoginAuth(credentials);
        // console.log("User:", user);
        // You can return any user object here, it will be saved in the session
        if (user) {
          // If you return null or false then the credentials will be rejected
          // You can also throw an error to display a message in the sign-in form
          return user;
        } else {
          // If you return null or false then the credentials will be rejected
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // You can add custom logic here to check if the user is allowed to sign in
      // For example, you can check if the user is active or has a specific role

      return true;
    },
    //   async redirect({ url, baseUrl }) {
    //     return baseUrl*/
    //   },
    async jwt({ token, user }) {
      // When user logs in, attach role
      if (user) {
        token.id = user?._id;
        token.firstName = user?.firstName;
        token.email = user?.email;
        token.role = user?.role; // 👈 Add this
        token.department = user?.department; // 👈 Add this if you want to include department
      }
      return token;
    },
    async session({ session, token }) {
      // Attach role from token to session
      if (token) {
        session.user.id = token?.id;
        session.user.firstName = token?.firstName;
        session.user.email = token?.email;
        session.user.role = token?.role; // 👈 Add this
        session.user.department = token?.department; // 👈 Add this if you want to include department
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(NextAuthOptions);

export { handler as GET, handler as POST };
