import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export const authOptions = {

    secret: process.env.NEXTAUTH_SECRET,

    debug: true,

    providers: [

        GoogleProvider({

            clientId:
                process.env.GOOGLE_CLIENT_ID,

            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: "select_account"
                }
            }

        }),

        CredentialsProvider({

            name: "Credentials",

            credentials: {

                email: {
                    label: "Email",
                    type: "email"
                },

                password: {
                    label: "Password",
                    type: "password"
                }

            },

            async authorize(credentials) {

                await connectDB();

                const user =
                    await User.findOne({
                        email:
                            credentials.email
                    });

                if (!user) {

                    throw new Error(
                        "No user found"
                    );

                }

                const valid =
                    await bcrypt.compare(
                        credentials.password,
                        user.password
                    );

                if (!valid) {

                    throw new Error(
                        "Incorrect password"
                    );

                }

                return {

                    id:
                        user._id.toString(),

                    name:
                        user.name,

                    email:
                        user.email,

                    role:
                        user.role

                };

            }

        })

    ],

    callbacks: {

        async signIn({

            user,
            account

        }) {

            try {

                if (
                    account?.provider === "google"
                ) {

                    await connectDB();

                    const existing =
                        await User.findOne({
                            email:
                                user.email
                        });

                    if (
                        !existing
                    ) {

                        await User.create({

                            name:
                                user.name,

                            email:
                                user.email,

                            image:
                                user.image,

                            provider:
                                "google",

                            role:
                                "customer"

                        });

                    }

                }

                return true;

            }

            catch (error) {

                console.log(error);

                return false;

            }

        },

        async jwt({

            token,
            user

        }) {

            if (user) {

                token.role =
                    user.role;

            }

            if (
                token.email
                &&
                !token.role
            ) {

                await connectDB();

                const dbUser =
                    await User.findOne({
                        email:
                            token.email
                    });

                token.role =
                    dbUser?.role
                    ||
                    "customer";

            }

            return token;

        },

        async session({

            session,
            token

        }) {

            session.user.role =
                token.role;

            return session;

        }

    },

    pages: {

        signIn:
            "/login"

    },

    session: {

        strategy:
            "jwt"

    }

};

const handler =
    NextAuth(authOptions);

export {
    handler as GET,
    handler as POST
};