import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
//import { PrismaAdapter } from "@next-auth/Prisma-adapter";
import { PrismaClient } from "@prisma/client";


export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {
                // Retrieve user data to verify with credentials
                const user = { id: "", name: "", password: "nextauth"}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                return null
            }
        })
    ],
};

export default options;