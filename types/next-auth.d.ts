declare module "next-auth" {
  interface User {
    username: string;
    password: string;
  }
  interface Session {
    user: {
      username: string;
      password: string;
    };
  }
  interface JWT {
    username: string;
    password: string;
  }
}
