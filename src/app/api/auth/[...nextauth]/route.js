import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          required: true,
          placeholder: "your email",
        },
        password: {
          label: "Password",
          type: "password",
          required: true,
          placeholder: "your email",
        },
        username: {
          label: "User Name",
          type: "text",
          required: true,
          placeholder: "Your name",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        return true;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
