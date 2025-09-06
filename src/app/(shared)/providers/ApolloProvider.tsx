"use client";

import { ReactNode, useMemo } from "react";

import { ApolloProvider } from "@apollo/client/react";

import { makeApolloClient } from "@/lib/apollo/client";

export default function AppApolloProvider({
  children,
}: {
  children: ReactNode;
}) {
  const client = useMemo(() => makeApolloClient(), []);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
