import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { client } from "./sanity/lib/client";
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries";
import { writeClient } from "./sanity/lib/write-client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: { name, image, email },
      account,
      profile,
    }: {
      user: { name: string; image: string; email: string };
      account: any;
      profile: { id: string; login: string; bio: string };
    }) {
      const { id, login, bio } = profile;
      const existingUser = await client.withConfig({useCdn : false}).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
        id,
      });
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name, //for same key and value we can skip the key : value and just do key,
          username: login, 
          email,
          image,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }: { token: any, account: any, profile: any }) {
      if (account && profile) {
        const user = await client.fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
          id: profile?.id,
        });
        token.id = user?._id;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
