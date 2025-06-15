import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
        console.log("Credentials:", credentials);
        const { email, password } = credentials;
        if (email === "test@test.com" && password === "123456") {
          return { id: 1, name: "Test User", email };
        }
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        // If no error and we have user data, return it
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
    //     return baseUrl
    //   },
    //   async session({ session, token, user }) {
    //     return session
    //   },
    //   async jwt({ token, user, account, profile, isNewUser }) {
    //     return token
    //   }
  },
});

export { handler as GET, handler as POST };
