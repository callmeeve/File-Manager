import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/config/db";

export default NextAuth({
  secret: process.env.jWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error("Email not found");
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (isCorrectPassword) {
          // req.session.set('user', { id: user.id });
          // await req.session.save();
          return user;
        } else {
          throw new Error("Incorrect password");
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },

  database: process.env.DATABASE_URL,
});
