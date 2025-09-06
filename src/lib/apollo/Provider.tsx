"use client";

import { ApolloProvider } from "@apollo/client";
import { makeApolloClient } from "./client";

const client = makeApolloClient();

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
