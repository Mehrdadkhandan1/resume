import NextAuth from "next-auth";
declare module "next-auth" {
  interface User {
    username: string,
    password: string,
    id: string,
    name: string,
    lastName: string,


  }
  interface Session {
    user: {
      username: string,
      password: string,
      id: string,
      name: string,
      lastName: string,

    };
  }
  interface JWT {
    username: string,
    password: string,
    id: string,
    name: string,
    lastName: string,

  }
}
