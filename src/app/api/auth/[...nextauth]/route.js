import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const users = [
  {
    id: 1,
    name: "omi",
    email: "sohrawardy1998@gmail.com",
    password: "ascd",
  },
];

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
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
          placeholder: "your password",
        },
        name: {
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

        // Destructure email and password from credentials
        const { email, password } = credentials;

        const currentUser = users.find((user) => user.email === email);
        if (currentUser && currentUser.password === password) {
          return currentUser;
        }

        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
