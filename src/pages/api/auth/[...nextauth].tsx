import NextAuth from "next-auth"
import GoolgeFacebookProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoolgeFacebookProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || "" 
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)