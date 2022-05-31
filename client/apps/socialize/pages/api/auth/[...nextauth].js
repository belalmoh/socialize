import NextAuth from "next-auth"

import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"

import { DgraphAdapter } from "@next-auth/dgraph-adapter"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    adapter: DgraphAdapter({
        endpoint: process.env.DGRAPH_GRAPHQL_ENDPOINT,
        authToken: process.env.DGRAPH_GRAPHQL_KEY,

        // // you can omit the following properties if you are running an unsecure schema
        authHeader: process.env.AUTH_HEADER, // default: "Authorization",
        jwtSecret: process.env.SECRET,
    }),
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async session({ session, token, user }) {
            return { session, token, user };
        }
    },
    session: {
        strategy: 'database'
    },
    jwt: {
        secret: process.env.APP_SECRET,
        encode: async ({ secret, token }) => {
            return jwt.sign({ ...token, userId: token.id }, secret, {
                algorithm: "HS256",
                expiresIn: 30 * 24 * 60 * 60 // 30 days
            });
        },
        decode: async ({ secret, token }) => {
            return jwt.verify(token, secret, { algorithms: ["HS256"] });
        }
    }
})