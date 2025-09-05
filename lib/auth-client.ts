

import { createAuthClient } from "better-auth/client";
export const authClient = createAuthClient();

 export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
    callbackURL: process.env.DASHBOARD_URL,
  });
};


 export const signInWithGitHub = async () => {
  const data = await authClient.signIn.social({
    provider: "github",
    callbackURL: process.env.DASHBOARD_URL,

  });
};


export const loginWithEmail = async (email: string, password: string) => {
  const data = await authClient.signIn.email({
    email,
    password,
    rememberMe: true,
    callbackURL: process.env.DASHBOARD_URL,

  },{
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
    onError: (error) => {
      if(error.error.status===403){
        alert("please verify your email address")
      }
      console.error("Login failed:", error);
    },
  });
};
export const signUpWithEmail = async(name:string, email:string,password:string) => {
  const data = await authClient.signUp.email({
    name,
    email,
    password,
    callbackURL: process.env.DASHBOARD_URL,
  },{
    onSuccess: (data) => {
      console.log("Signup successful:", data);
    },
    onError: (error) => {
      
      console.error("Signup failed:", error);
    },
  });
};