import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
//import { PrismaAdapter } from "@next-auth/Prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                useremail: {
                    label: "Useremail:",
                    type: "text",
                    placeholder: "your-email"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-password"
                }
            },
            async authorize(credentials) {

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.useremail
                    }
                })

                if (credentials?.useremail === user?.email && credentials?.password === user?.password) {
                    return user
                }
                return null
            }
        })
    ],
};

export default options;