import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({ session, token, user }) {
      // 필요시 세션 정보 수정
      return session;
    }
  },
  pages: {
    signIn: '/auth/signIn'
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
