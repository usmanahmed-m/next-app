"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;

// To access session on client we have to wrap our application with session provider component in root layout
// If we wrap directly with session provider component it will gave error as it internally uses react context to pass session down to component tree and react context is unavailable on server component. and if we make route layout client component with 'use client' directive, we will have another error. To solve this we have to wrap session provider with client side component
